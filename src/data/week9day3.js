export const week9day3 = {
  number: 31,
  label: "Day 3",
  title: "Week 9, Day 3 — Production-Ready Workflows, RAG, and Honest Pricing",
  subtitle:
    "Extended the bakery Zap with error guarding + Paths + multi-step value-add. Ran a worked RAG pipeline over my own service docs. Confronted the pricing math honestly — $300 is portfolio-bait, not value-based.",
  color: "#b91c1c",
  sections: [
    {
      heading: "Exercise 1 — Extend Your Workflow (Production-Ready Edition)",
      description:
        "Took yesterday's bakery order intake Zap from 'works in a demo' to 'works when I'm not watching.' Hit Level 3 — all three parts done, 8 steps total now.",
      qa: [
        {
          q: "Part A — Added error guarding after the AI step",
          a: `The AI step in yesterday's Zap was the obvious place for unexpected output. The prompt asks the model to classify an order as one of {custom, catering, wholesale, spam} and return JSON. Most of the time it does that. Sometimes — maybe 1 in 30 calls based on my tests — it returns something off-format. Without guarding, that off-format output flows straight to the Sheet step and ends up as a garbage row.

Added a Filter step right after the AI step:
- Continue only if {{ai_step.category}} is one of: custom, catering, wholesale, spam

Then a SECOND Filter (sequential) so I can fall through to a fallback path:
- Path: if the first Filter blocks, route to an "AI output review" branch

Did this via a Paths step actually, not stacked Filters — Paths gives a cleaner "if good, do A; if bad, do B" shape. Configured:
- Path A: category IS in the expected enum → continue to the rest of the Zap
- Path B: category IS NOT in the expected enum → Email by Zapier sends ME the raw form payload + the AI's actual output for manual review, then ends

Tested both directions:
1. Real form submission: "Hi can I order a vegan chocolate cake for my mom's birthday on June 15?" → AI returned {"category":"custom"} → Path A fired → normal flow.
2. Forced-error test: I temporarily tweaked the prompt to ask for a JSON wrapped in markdown fences (\`\`\`json ... \`\`\`). AI returned the fenced version. Path A failed the enum check, Path B fired, I got an email with the raw input + AI output. Caught it within 30 seconds.

Reverted the prompt tweak. The defensive structure stays.

The mental model: I'm not asking the AI to never fail. I'm asking the Zap to NOTICE when it does and ROUTE to a human-in-the-loop branch instead of corrupting downstream state. Same shape as input validation on a real API.`,
        },
        {
          q: "Part B — Added Paths for real conditional routing",
          a: `After the error-guarding Path resolves successfully, the next step is a Paths step that branches on the order category. Three real paths plus a default:

**Path A: Custom cake** (single-customer, normal urgency)
- Append to "Orders" Sheet with status="pending review"
- Email customer with confirmation + "We'll get back to you within 24 hours with pricing"
- Slack message to owner: standard "new custom order" template

**Path B: Catering** (higher value, urgent)
- Append to "Orders" Sheet with status="HIGH PRIORITY"
- Email customer with confirmation + "We'll respond within 4 hours during business hours"
- Slack DM to owner (not just channel) with "CATERING INQUIRY — respond fast" prefix
- Also append to a separate "Catering Pipeline" Sheet tab for tracking conversion

**Path C: Wholesale** (recurring relationship)
- Append to "Orders" Sheet with status="wholesale"
- Email customer with confirmation + "We'll set up a call to discuss pricing and recurring schedule"
- Slack message to owner with a "review for recurring schedule" tag

**Path D: Spam** (the AI flagged it)
- End the Zap silently. No email, no Sheet row. The category=spam decision IS the action.

Tested with four POSTs, one per category, by varying the message text:
- Custom: "Hi I'd love a birthday cake for my daughter next Saturday" → Path A
- Catering: "We're hosting a corporate lunch for 50 people on June 20, need plant-based options" → Path B
- Wholesale: "Hi, I run a yoga studio and we'd like a weekly standing order for our front desk" → Path C
- Spam: "CLICK HERE for amazing crypto opportunity" → Path D (silently ended)

All four routed correctly. The differentiated handling per category is what makes this feel like a REAL system instead of a single-bucket order log. The catering DM specifically is the kind of difference that earns the price — a wedding cake or corporate catering inquiry is high-stakes and the owner CANNOT miss it.`,
        },
        {
          q: "Part C — Multi-step value-add: second AI step + Formatter",
          a: `Added two value-add steps inside each successful path:

**Step 1 (inside Path A/B/C): A second AI extraction call.**

The first AI step classifies the category. The second AI step is more specialized — given the category, extract category-specific structured fields. Different paths get different prompts:

For Path A (custom cakes), extract: requested_date, occasion, dietary_restrictions, size_indicator (small/medium/large from context).

For Path B (catering), extract: event_date, expected_headcount, dietary_breakdown (vegan/GF/etc), venue_or_pickup.

For Path C (wholesale), extract: business_name, requested_frequency (weekly/biweekly/monthly), product_interest.

Each path's specialized prompt gets specialized fields. The Sheet append step uses those fields as columns. Now instead of one "raw message" column, I have FIVE structured columns per category, which lets the owner sort and filter her orders by date, occasion, headcount, etc.

**Step 2 (in every path): Formatter for phone number normalization + date parsing.**

The Tally form lets customers type phone numbers however they want — (555) 123-4567, 555.123.4567, 5551234567, +1 555 123 4567. The Formatter step normalizes everything to E.164 format (+15551234567) before the Sheet append. Now phone numbers are clickable and SMS-compatible no matter what the customer typed.

Same Formatter step also parses the requested_date from natural language ("next Saturday", "June 15", "the 20th") into ISO format using Zapier's Format Date helper. Imperfect for ambiguous inputs but better than raw text. If parsing fails, the Sheet shows the original string in a "raw_date" column for the owner to interpret manually.

**Final Zap step count:** 8 steps after the trigger (AI classify, Paths/Filter guard, Paths router, then inside each path: AI extract + Formatter + Sheet + Email + Slack). The Zap is now visibly more complex than yesterday's version — and noticeably more useful.`,
        },
        {
          q: "Testing the full extended Zap end-to-end",
          a: `Ran six test submissions through the full Zap, tracking each one through Zap History:

1. Valid custom cake order → AI classified "custom" → Path A → second AI extracted occasion="birthday" and date="next Saturday" → Formatter normalized phone → Sheet appended → customer email sent → owner Slack ping. PASS.

2. Valid catering inquiry → AI classified "catering" → Path B → high-priority DM to owner + extra Sheet append to Catering Pipeline tab. PASS.

3. Valid wholesale inquiry → AI classified "wholesale" → Path C → recurring-schedule call setup email. PASS.

4. Spam submission ("CLICK HERE crypto") → AI classified "spam" → Path D → Zap ended silently. PASS.

5. Forced bad AI output (testing the guard) → first Filter blocked → fallback path emailed me with raw input. PASS.

6. Edge case: customer message contained an emoji-only line "🎂🎂🎂" → AI classified "custom" but the second AI step couldn't extract anything useful (occasion="unclear", date="unclear"). Sheet appended with the unclear fields, owner Slack ping fired with a "review needed" tag automatically (added a small Formatter rule: if any extracted field equals "unclear", flag the Slack message with [REVIEW NEEDED]). PASS.

Six tests, six expected behaviors. The Zap is genuinely production-ready now — not "demo-ready," but ready to handle real inputs without losing data or firing actions on garbage.

Total task count per run: 6-8 tasks (depending on path). At 80-100 form submissions/month, that's 600-800 tasks/month. Comfortably within Zapier Starter's 750 tasks/month limit at $19.99/mo. The owner would pay Zapier directly for that — not me.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — RAG Worked Example (Over My Own Service Docs)",
      description:
        "Built the RAG pipeline from the lab spec. Used my OWN bakery order management offering as the product. Three .md files, paragraph chunking, OpenAI embeddings, top-2 retrieval, GPT-5-mini answers.",
      qa: [
        {
          q: "Why I used my own service docs instead of a made-up product",
          a: `The lab's suggestion is "make up a hypothetical product" — coffee subscription for small offices, etc. I went with my OWN service docs (the bakery order management offering) instead.

Reasons:
1. It's a real document set I might actually want to RAG over later — e.g., if I build an FAQ chatbot for my freelance landing page, the same source files become the corpus.
2. The retrieval pattern matters more when I CARE about the answers. With a fabricated product, I'd lazily eyeball whether the retrieval was good. With my own pricing tiers, I'd notice immediately if the retrieval pulled the wrong chunk.
3. The lab's worked example questions ("What's the cheapest tier?", "Does it handle large offices?", "What's the refund policy?") map cleanly onto a service offering with tiers, capabilities, and policies. Adapting them was natural.

Three .md files in rag-demo/:
- **notes-product.md** — what the offering is, what it includes, what stack it uses
- **notes-pricing.md** — Basic ($300) vs Premium ($500) tiers, what's in each, first-customer discount
- **notes-faq.md** — common questions: "will this replace phone bookings", "what if AI miscategorizes", "what if we outgrow Zapier free tier"`,
        },
        {
          q: "The script — exactly the lab's pattern, no shortcuts",
          a: `Followed the lab spec almost exactly. Ran npm init -y, installed openai (npm install openai), put OPENAI_API_KEY in .env, used dotenv to load it.

The four steps:

**1. CHUNK** — readdirSync to find all .md files, readFileSync each, split on /\\n\\n+/ to paragraph-level chunks, filter chunks under 50 chars (usually trailing whitespace or one-line headers). For my three files, this produced 11 chunks total. Manageable for an in-memory demo.

**2. EMBED** — single openai.embeddings.create call with input: chunks.map(c => c.text) so all chunks get embedded in ONE API call instead of N calls. Used text-embedding-3-small per the lab (~$0.00002 per chunk). Total cost for all 11 chunks: roughly $0.00022. Negligible.

**3. RETRIEVE** — embed the user's question with the same model, compute cosine similarity between the question vector and every chunk vector, sort by score descending, take top 2.

**4. INJECT** — top 2 chunks become the context in the system message. GPT-5-mini gets a clear "answer using ONLY the provided context; if not in context, say I don't have that information" system prompt.

The whole script is under 60 lines. The pattern is genuinely simple once you've seen it. The hard parts of real production RAG (chunking strategy, vector DB choice, retrieval quality evaluation, prompt engineering) are all hidden by this in-memory toy version.`,
        },
        {
          q: "Ran the three example questions — what came back",
          a: `**Question 1: "What's the cheapest pricing tier?"**

Top chunks retrieved:
- [notes-pricing.md] (score: 0.731) — the Basic tier paragraph
- [notes-pricing.md] (score: 0.643) — the Premium tier paragraph

Answer: "The cheapest pricing tier is the Basic tier at $300 flat one-time. It includes two Zaps (order intake with AI classification and daily specials posting), a Tally intake form, a configured Google Sheet, customer confirmation email automation, and Slack/SMS owner notification."

Clean. Pulled directly from the Basic tier paragraph. The Premium tier chunk also came back but was correctly de-prioritized in the answer.

**Question 2: "Does the product handle wholesale orders?"**

Top chunks retrieved:
- [notes-pricing.md] (score: 0.688) — Premium tier paragraph mentioning wholesale Zap
- [notes-product.md] (score: 0.512) — product description paragraph

Answer: "Yes, the product handles wholesale orders. The Premium tier ($500 flat one-time) includes a third Zap specifically for wholesale recurring orders, on top of the Basic tier's order intake and daily specials posting capabilities."

Spot on. Retrieved the most relevant chunk (Premium tier explicitly mentions wholesale) AND the product overview.

**Question 3: "What's the refund policy?"**

Top chunks retrieved:
- [notes-pricing.md] (score: 0.398) — first-customer discount paragraph
- [notes-faq.md] (score: 0.391) — Q about Zapier free tier outgrowth

Answer: "I don't have that information."

EXACTLY what should happen. The retrieved chunks were tangentially related (refunds and discounts share some semantic space) but didn't contain refund-policy text. The system prompt forced the model to acknowledge that. If I HADN'T set the "say I don't have that information" rule, the model might have hallucinated a refund policy. The grounding rule is what makes this trustworthy.

This is the moment RAG clicked for me. The retrieval narrows what the model sees. The system prompt forces honesty about what's not in context. Together they make the model trustworthy about a specific corpus in a way generic ChatGPT can't be.`,
        },
        {
          q: "Level 2 — added a fourth file, confirmed retrieval found it",
          a: `Added notes-handoff.md describing the handoff process — the 1-page setup doc, 30-min walkthrough video, what the owner needs to do to take over the system.

Tested with "How does the project handoff work?" — retrieved the new file's chunk as the top result (score 0.812). Answer correctly described the 1-page doc + walkthrough video.

Re-ran "What's the refund policy?" — still returned "I don't have that information." Adding a new file didn't pollute the unrelated query. Good.

Confirmed the pipeline scales as I add docs. The cost grows linearly (more chunks = more embeddings) but the retrieval logic doesn't change. For my use case (under 50 chunks), this stays an in-memory toy. For a real client with 500+ chunks, I'd swap the in-memory similarity search for pgvector or Pinecone — same pattern, durable storage.`,
        },
        {
          q: "Level 3 — chunking strategy comparison",
          a: `Re-ran the same three questions with three chunking strategies:

**A) Paragraph chunking (the original, split on blank lines)** — 11 chunks, paragraph-level coherence. Each chunk is a complete thought.

**B) Sentence chunking (split on . instead of \\n\\n)** — 37 chunks, sentence-level granularity. Each chunk is one sentence.

**C) Fixed-token chunking (~100-token windows, regardless of natural breaks)** — 14 chunks, arbitrary boundaries.

Results on "What's the cheapest pricing tier?":
- Paragraph chunking → correctly identified the Basic tier paragraph as top chunk. Answer was complete and accurate.
- Sentence chunking → top chunks were sentences like "Basic tier — $300 flat one-time" AND "Includes two Zaps..." but split across chunks. The model still answered correctly because both retrieved sentences were relevant, but the context was fragmented.
- Fixed-token chunking → top chunk straddled the end of the Basic paragraph and the start of the Premium paragraph. Answer was partially correct but mentioned Premium pricing unnecessarily.

Results on "Does the product handle wholesale orders?":
- Paragraph: clean, correct.
- Sentence: retrieved only ONE sentence ("Includes everything in Basic, plus a third Zap for wholesale recurring orders") which was correct but lacked the price context.
- Fixed-token: retrieved a chunk that included half of pricing and half of product description, which led to a slightly muddled answer.

**Conclusion:** For my corpus shape (short service docs with natural paragraph structure), PARAGRAPH chunking wins. Sentence chunking is too granular — it loses the connections between related sentences. Fixed-token chunking ignores natural boundaries and produces fragmented context.

When sentence chunking might win: long-form articles where each sentence is independently meaningful and you want fine-grained retrieval. When fixed-token chunking might win: very long uniform documents (legal contracts, code) where there are no natural paragraph breaks.

Chunking strategy is the part of RAG that the toy demo hides. In real production, this is where evaluation matters — actually measuring retrieval quality across query types before committing to a strategy.`,
        },
        {
          q: "MCP — the awareness pass",
          a: `Read Anthropic's MCP docs (mentioned in the lab as exposure-only territory). The pitch:

MCP is the protocol that lets AI assistants connect to tools, data sources, and services through a CONSISTENT interface. Before MCP, every AI tool integration was bespoke — custom code for Slack, different custom code for Notion, different custom code for Google Drive. With MCP, all of them follow the same protocol.

An MCP server exposes three things:
- **Tools** — functions the AI can call (e.g., "search_slack_messages", "create_calendar_event")
- **Resources** — data the AI can read (e.g., "list_recent_files", "fetch_document")
- **Prompts** — templated workflows the AI can invoke

Any MCP-aware AI client (Claude Desktop, Cursor, any modern AI assistant) can talk to any MCP server. That's the standardization win.

When I'd care: in client work, when a client says "I want my AI assistant to read from our Notion AND our Slack AND our Linear." Before MCP, that's three bespoke integrations. With MCP, it's three pre-existing or quickly-built MCP servers that all speak the same protocol.

Not building one today. The lab is right — this is exposure level, deeper in Phase 4 capstone. For now I know the term, I know the shape, and I know to ask follow-up questions when a client mentions MCP.

If I do build one eventually: the natural fit for my freelance work would be exposing the bakery's order management as an MCP server, so customers could ask their own AI assistants "order me a cake from [bakery] for next Saturday" and the agent calls my MCP tool. That's a higher-effort pitch but a credible Phase 4 direction.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Pricing Exercise (Scope + Estimate + Price)",
      description:
        "Filled in the pricing worksheet honestly. Surfaced a real tension — $300 is BELOW my own cost floor for the first customer. Acknowledging the math instead of pretending it works.",
      qa: [
        {
          q: "Scope — what the bakery automation does and doesn't do",
          a: `**What it DOES:**
- Receives custom cake, catering, and wholesale order requests via a single intake form
- AI-classifies each order by type and extracts structured fields (date, headcount, dietary requirements, etc.)
- Routes high-priority orders (catering, urgent custom) to the owner via Slack DM with a flagged tag
- Sends automated customer confirmation emails with order details and timeline
- Logs every order to a single Google Sheet that becomes the bakery's source of truth
- Posts daily specials to Instagram and updates a "today" page on the website from a single morning update

**What it DOES NOT do:**
- Process payments (Stripe integration is a separate engagement, $200-400 additional)
- Provide a customer-facing portal to view order history or status (would require a custom Next.js build at $1,500+)
- Handle delivery scheduling or logistics
- Integrate with existing POS systems (Square, Toast, etc.) — bakery would continue using their POS for in-person sales
- Replace the bakery's existing Instagram account or website — augments them, doesn't replace
- Provide ongoing customer support to the bakery's customers (that's still the owner's job)

**What the client needs to provide:**
- Access to (or willingness to set up) a Zapier account, a Google account, a Tally account, and either Buffer or Later
- Their existing website's "today" page endpoint URL OR willingness to add one (a small static HTML update via Squarespace, Wix, or whatever they use)
- Sample order text or DMs so I can validate the AI classification against real inputs
- 30 minutes for the handoff walkthrough video session

Defining the OUTS protects me from scope creep — "but I thought payment processing was included" conversations happen if you don't write down what's NOT in the offering.`,
        },
        {
          q: "Time estimate — honest hours, first-customer cost",
          a: `Filling in the worksheet for the FIRST customer (no template exists yet):

| Task | Estimated Hours |
|---|---|
| Initial setup (accounts, credentials, access) | 2 |
| Build core workflow (2 Zaps, 8 steps total) | 6 |
| Add error handling and testing (today's Exercise 1) | 2 |
| Documentation and client walkthrough | 2 |
| Buffer (20% for unexpected issues) | 2.4 |
| **Total** | **14.4 hours** |

For CUSTOMERS 2+ where the template exists:

| Task | Estimated Hours |
|---|---|
| Initial setup | 1 |
| Configuration (not building — copying the template + branding) | 2 |
| Customization for this bakery's specific needs | 1 |
| Testing | 0.5 |
| Walkthrough | 1 |
| Buffer (20%) | 1.1 |
| **Total** | **6.6 hours** |

Big difference. The first customer is 14.4 hours of build work. Every subsequent customer is 6.6 hours of configuration work — less than half the time. This matters for the pricing math below.`,
        },
        {
          q: "Market research — what competitors charge for similar engagements",
          a: `Asked ChatGPT: "What do freelancers typically charge to build a small business order intake + automation workflow using Zapier?" Got a range. Cross-checked against Upwork's "Zapier automation expert" rate ranges by browsing actual freelancer profiles (verified, not just AI-quoted).

What I found:
- Upwork "Zapier automation expert" hourly rates: $35-150/hr, with a fat middle around $60-90/hr
- Fixed-price Zapier projects of similar complexity (4-8 step Zaps with AI): typically $500-2,000 one-time
- Bespoke order-management dev work (custom Next.js etc): $2,000-8,000 one-time, sometimes higher
- Subscription-style "automation as a service" offerings: $500-1,500/mo, mostly aimed at mid-market not small business

What my $300 looks like in that landscape: 
- BELOW the typical fixed-price Zapier range ($500-2,000)
- WAY below the bespoke dev range
- The "automation as a service" subscription model is a totally different offering (ongoing relationship, not handoff)

My position relative to market: I'm pricing below the market floor. That's intentional for the FIRST customer (case-study investment) but not sustainable as a pricing strategy. The market clearly supports $500-1,000 for this kind of work; charging $300 indefinitely would be leaving money on the table AND signaling that my work is amateur-tier.`,
        },
        {
          q: "Value calculation — what this is actually worth to the client",
          a: `Honest math:

- Hours saved per week: 5-10 hours of admin labor (custom order DM management + daily IG posting + wholesale text follow-up)
- Conservative midpoint: 7 hrs/week
- Owner's effective rate (what their time is worth on revenue-generating work, NOT what they'd pay an employee): $30/hr
- Weekly savings: 7 × $30 = $210/week
- Annual savings: $210 × 52 = $10,920/year

Plus harder-to-quantify benefits:
- Reduced missed orders (each missed custom order is $40-100 of lost revenue) — call it $1,500/year recovered
- Brand consistency on IG (daily posts vs sporadic) might drive 5-10% follower engagement bump — hard to dollarize but real
- Owner sanity (impossible to dollarize)

Conservative annual value: $10,920 - $12,000.

Rule-of-thumb pricing (10-30% of annual value): $1,092 - $3,600.

My $300 is FAR below even the 10% floor. That's the honest read.`,
        },
        {
          q: "The honest cost-floor / value-ceiling tension",
          a: `Stacking the three numbers I just calculated:

| Number | Value |
|---|---|
| My cost floor (14.4 hrs × $60/hr) | **$864** |
| 10% of annual value | **$1,092** |
| 30% of annual value | **$3,600** |
| Market rate for similar Zapier work | **$500-2,000** |
| My current price | **$300** |

Four reference numbers, my price is below all four. That's the honest read.

I've been saying $300 since Day 1 of Week 9. Today's exercise is the moment I have to confront whether $300 is actually defensible.

The defenses I've been using:
1. "Bakery owners can't afford more." → False. Owners losing $10k/year of value can afford $1,000+ to recover most of it. The objection is psychological (sticker shock from a stranger), not financial.
2. "First customer is portfolio bait, deliberately underpriced." → True for ONE customer. Not a pricing strategy for customers 2-10.
3. "$300 makes the first sale easier." → True, but doesn't justify the SUSTAINED price.

The honest reframe:
- **First customer (testimonial bait): $300.** Documented as "deliberate below-cost-floor pricing in exchange for video testimonial."
- **Customers 2-3 (early case study): $500-700.** Above cost floor for customer 2+ ($6.6 hrs × $60 = $396). At the low end of market rate.
- **Customers 4+ (with case study in hand): $750-1,200.** Hits the 10% of value floor. Aligned with market.
- **Premium tier customers (Exercise 4 below): $1,000-1,800.** The wholesale + recap + 30-day support add-ons justify the higher tier.

This is the real pricing model. The $300 number was psychologically comfortable but mathematically wrong as a sustained strategy. Lab forced the confrontation.

What I'm taking forward: every NEW offering I scope gets the same worksheet. Cost floor, value ceiling, market rate, my price. If my price is below all three reference numbers, I need a documented reason (testimonial bait, learning project, gift to friend) or I need to raise the price. Vibes-pricing is over.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Build Your Pricing Model",
      description:
        "One-page pricing summary for the bakery offering. Reflects today's honest pricing realization — not the $300 number from earlier in the week.",
      qa: [
        {
          q: "The one-page pricing summary (revised)",
          a: `**Bakery Order Management — Setup & Handoff**

*What it does:* Consolidates custom cake orders, catering inquiries, wholesale requests, and daily specials posting into one organized system. Customer orders come through a single form, get AI-classified and structured, and land in your Google Sheet as the single source of truth. Daily specials publish to Instagram and your website from one morning update.

**What's included (both tiers):**
- Two Zaps configured end-to-end (order intake + daily specials posting)
- Tally intake form with conditional fields for custom/catering/wholesale
- Google Sheet template with structured columns
- AI-driven order classification and field extraction
- Error handling and fallback paths for unexpected inputs
- Customer confirmation email automation
- Owner Slack or SMS notification
- 1-page setup documentation
- 30-minute walkthrough video session
- 14-day post-handoff bug-fix window (catch anything that doesn't work as documented)

---

**Basic — $700 setup fee, one-time**
- Everything above
- Single bakery, single Instagram account
- Three order categories (custom / catering / wholesale)

**Premium — $1,200 setup fee, one-time**
- Everything in Basic
- Wholesale recurring orders Zap (third Zap with weekly production list generation)
- Customer rebook prompts (automated email 8 weeks post-delivery)
- Weekly Sunday-evening recap email
- 30 days of post-launch support for minor tweaks (vs Basic's 14-day bug-fix window)

---

**First-customer pricing:** $300 flat (Basic tier) in exchange for a video testimonial after 30 days of use. ONE customer at this price. After that, regular pricing applies.

**Monthly maintenance (optional):** $100/month
- Monitoring of Zap runs (weekly review of Zap History for errors)
- Up to 2 minor changes per month (email template tweaks, time-of-day adjustments)
- Priority response on issues (24-hour SLA)

**Recurring costs paid directly by the bakery (not to me):**
- Zapier — free tier might be enough; Starter at ~$20/month if volume requires
- Google Workspace — likely already in place
- Buffer or Later for IG — ~$15-25/month, optional

**Not included:**
- Payment processing / Stripe integration (separate, $300-500)
- Custom website development beyond the "today" page hook
- Customer support for the bakery's customers (still the owner's job)
- Major redesigns or pivots after the 14-day or 30-day support window`,
        },
        {
          q: "Why I added a $100/month maintenance tier when I previously said 'no recurring fee'",
          a: `In Day 1 and Day 2 I framed this as "$300 flat, no recurring fee to me, owner owns everything." Today's pricing exercise forced me to reconsider that.

The honest read: a "no recurring fee" model is good for the FIRST customer (low friction, easy yes) but limits the income ceiling. If I land 10 customers in a year at $700 each = $7,000 gross. Real money but not life-changing.

If 3 of those 10 opt into the $100/mo maintenance, that's $300/mo × 12 months = $3,600/year recurring. Compounds across the customer base. Worth the friction of mentioning it.

Why $100/mo specifically:
- Below the $200/mo threshold where bakeries start to flinch
- High enough to cover my time (weekly Zap-History review + 2 changes/mo = roughly 1 hour, so $100 is $100/hr effective rate — slightly above my floor)
- Anchors the perceived value of the setup engagement — "this is real, you might want ongoing support"

Making the maintenance tier OPTIONAL is the key framing. The pitch stays "you own everything, no recurring fee required. If you want ongoing support, here's a tier." Owner gets to choose. No high-pressure sale.

The Day 1/Day 2 file got the maintenance question wrong — I framed "no recurring fee" as a feature when it's actually a self-limiting business model. Updating the mental model. The data file from today reflects the better thinking.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo (Explain RAG)",
      description:
        "2 minutes explaining RAG in plain English using my own service-doc corpus as the running case.",
      qa: [
        {
          q: "My 2-minute RAG walkthrough",
          a: `Screen-shared the rag-demo/ folder with the three .md files visible, then opened the terminal to run a live query.

"RAG is Retrieval-Augmented Generation. The problem it solves is that out-of-the-box, an LLM only knows what it was trained on. ChatGPT doesn't know my pricing tiers. My bakery client's chatbot doesn't know their menu. You COULD paste everything into the prompt every time, but you'd run out of context window fast and the answer gets diluted.

RAG's answer is: don't paste everything. Just paste the relevant chunks. Use vector search to find which chunks are relevant.

The pattern is four steps. Chunk, embed, retrieve, inject.

CHUNK: I have three markdown files describing my own bakery automation offering. Product overview, pricing tiers, FAQ. The script splits each file into paragraph-sized chunks. I ended up with 11 chunks total.

EMBED: Each chunk gets turned into a vector — a list of about 1,500 numbers. Two chunks with similar MEANING produce similar vectors, even if they don't share any exact words. That's the magic of embeddings. The script makes one API call to OpenAI's embedding endpoint and gets all 11 vectors back.

Now I have my searchable index in memory. For real production you'd store these in a vector database — Pinecone, Chroma, pgvector — but for a demo this lives in a JavaScript array.

RETRIEVE: When someone asks a question — let's say 'what's the cheapest pricing tier?' — the question itself gets embedded into a vector using the SAME model. Then the script computes cosine similarity between the question vector and every chunk vector. Sort by similarity, take the top 2.

Watch this. [Ran node rag.mjs 'what's the cheapest pricing tier?'] The terminal shows the top two chunks both came from notes-pricing.md. One scored 0.731 — that's the Basic tier paragraph. The other scored 0.643 — that's the Premium tier paragraph. The retrieval correctly understood that 'cheapest tier' is a pricing question.

INJECT: Those top 2 chunks become the CONTEXT in the system prompt to GPT-5-mini. The model is told: 'Answer using ONLY this context. If the answer is not in the context, say I don't have that information.' That second instruction is the grounding rule — it's what prevents hallucination.

[Showed the answer:] 'The cheapest pricing tier is the Basic tier at $300 flat one-time. It includes two Zaps...' Grounded directly in the retrieved chunk.

If I ask something NOT in my docs — like 'what's the refund policy?' — the retrieval still picks the closest chunks, but they don't actually contain refund info. The grounding rule kicks in: 'I don't have that information.' That's RAG behaving correctly.

The whole script is 60 lines. The pattern is genuinely simple. The HARD parts of production RAG — chunking strategy, retrieval evaluation, picking the right vector DB — those are real engineering work. But the pattern itself is just four steps."

Ended on the terminal showing the third query result ("I don't have that information") to demonstrate the grounding rule working.`,
        },
        {
          q: "Partner's clarifying question and my answer",
          a: `Partner's question: "How would you know if your retrieval is actually GOOD? Like, what if it's returning the right chunks for easy questions but the wrong chunks for hard ones, and you'd never notice?"

My answer:

"That's the question that separates toy RAG from production RAG. In the demo, I'm eyeballing it — I look at the top chunks and decide 'yeah, that looks right.' Eyeballing 11 chunks works. Eyeballing 11,000 chunks does not.

In production, you build an evaluation set. Pick 50-100 representative questions someone might ask about your corpus. For each question, manually identify which chunks SHOULD be retrieved (the gold-standard answer). Then run your retrieval pipeline and measure: did the top-K results include the gold-standard chunks? That's recall. Of the top-K results, what fraction were actually relevant? That's precision.

If recall is low — you're missing chunks that contain the answer — that's a CHUNKING or EMBEDDING problem. Maybe your paragraphs are too big, or you're using a weak embedding model.

If precision is low — you're getting irrelevant chunks in the top results — that's usually a chunk-size or filtering problem. Maybe you need a re-ranker step (a second model that re-scores the top 20 chunks).

The thing nobody tells you when they're hyping RAG: this evaluation work is the actual job. The four-step pattern is easy. Building an evaluation set and tuning until quality is good is the work that justifies a production engagement.

For my freelance work, I'd never quote a price on a RAG project without first asking 'do we have an evaluation set, and if not, who's building one?' That answer drives the price more than any infrastructure choice."

What this answer demonstrated: I understand RAG isn't a magic spell. The patterns are simple; the evaluation is the real work. That framing is what makes someone hireable for RAG work as opposed to just a tutorial-completer.`,
        },
        {
          q: "What saying the RAG walkthrough out loud taught me",
          a: `Two things.

First — explaining "embedding" without using the word "embedding" is HARD. I tried in the demo to land at "a list of about 1,500 numbers that represents meaning, where similar meaning produces similar numbers." That's the most plain-English version I've found. But it's not satisfying — most people hearing it for the first time don't actually have a mental model for "similar lists of numbers." The honest answer is that embeddings are a real thing you eventually develop intuition for by running the demo a few times. The "click" doesn't come from the metaphor; it comes from watching the retrieval pick the right chunks for different questions.

Second — the four-step pattern (chunk-embed-retrieve-inject) is a great teaching scaffold. When I started running the script, I had a vague sense of "RAG = LLM + vector search." After running 30+ queries against my own corpus and watching the chunks come back, I understand the pattern in a way I couldn't have just from reading. Building it is what made it stick.

The lab framed today as "awareness, not deployment." That's right. I'm not ready to ship production RAG. But I can hold a conversation with a client about whether RAG is the right pattern for their problem, and that's the value the rest of the term builds on. Phase 4 capstone is where this would go deeper if I take it on.`,
        },
      ],
    },
    {
      heading: "Going Deeper",
      description:
        "Already did Level 3 of Exercise 2 (chunking comparison). Picked one more — explored an MCP server. Noted the others.",
      qa: [
        {
          q: "Explored an MCP server — Filesystem MCP",
          a: `Browsed Anthropic's MCP server registry. Picked the Filesystem MCP server because it's one of the official examples and the documentation is solid.

What it does: Exposes a local filesystem (or a subset of it) to an AI assistant as a set of tools. Once connected, the assistant can call:
- list_files(path) — list contents of a directory
- read_file(path) — read the contents of a file
- write_file(path, content) — create or overwrite a file
- search_files(pattern) — find files matching a pattern

The AI doesn't get FREE access to my whole filesystem — the server is configured with allowed paths. So I can expose /Users/diana/notes-for-claude as readable but NOT /Users/diana/Documents/personal-stuff.

What this lets an AI assistant do: read and modify files in a project folder. Practically, this is how AI coding assistants (Cursor, Claude Desktop with code workspace) can navigate a real project — they're using a Filesystem MCP server (or something protocol-compatible) under the hood.

Why this matters for my freelance work: a client who says "I want my AI assistant to help me write blog posts based on my saved drafts" is asking for a Filesystem MCP server pointed at their drafts folder. I could build (or configure an existing) MCP server for them, connect it to their Claude Desktop, and they'd get exactly that capability — no custom plugin development needed.

The "before MCP, this was bespoke; after MCP, it's a one-config-file job" framing is real. The Filesystem server alone is a small example of why the standard matters.

One-paragraph summary I'd give a client: "A Filesystem MCP server lets your AI assistant safely read and write files in a folder you specify. You'd point it at, say, your 'project drafts' directory; the assistant could then read your drafts when you ask for feedback or write new files when you ask it to draft something. The folder access is locked down — only what you allow, nothing else. It's the cleanest way to give an AI assistant 'workspace' access without exposing your entire computer."`,
        },
        {
          q: "Self-hosted vs Zapier — already explored on Day 2, expanding briefly",
          a: `Day 2's Going Deeper covered the Node.js + node-cron version of the daily specials posting Zap, deployed on Replit's free tier. Notes from that day still apply.

Adding one thought today, after running the pricing exercise: a self-hosted Node script costs me ZERO recurring (vs the bakery's $20/mo Zapier Starter), but I have to TRADE that off against the handoff problem. If I host the automation MYSELF as part of the offering, the bakery owner is permanently dependent on me. If she ever wants to stop working with me, she loses the automation.

That dependency is a hidden cost the Day 2 analysis didn't surface. Charging $700 for a Zapier setup where she OWNS everything is fundamentally different from charging $300 for a custom-hosted Node script where she's tied to me. The first is a product. The second is a leash.

The right pricing model:
- Zapier setup (owner owns): $700 one-time
- Optional $100/mo maintenance (handoff version)
- Self-hosted Node script (Diana hosts): $300 setup + $50/mo hosting + maintenance, ONLY for clients who explicitly prefer this trade

Two different products with two different pricing structures. Both can exist. The Zapier version is the default offering; the self-hosted version is for technically-sophisticated clients who want the cheaper recurring cost.`,
        },
        {
          q: "Brief notes on the other Going Deeper items",
          a: `**RAG over my own meeting notes** — could be useful. I have my cli-session-log.md and weekly notes from the Next Chapter cohort. Dropping those into a folder and RAG-querying them could surface patterns I'd miss in linear reading. Putting on the post-Phase-3 list. Not today.

**Different chunking strategy** — already did this in Level 3 of Exercise 2. Paragraph chunking won for my corpus shape; sentence chunking fragmented context; fixed-token ignored natural boundaries. Documented in the answer above.`,
        },
      ],
    },
  ],
};
