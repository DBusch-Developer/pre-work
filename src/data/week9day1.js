export const week9day1 = {
  number: 29,
  label: "Day 1",
  title: "Week 9, Day 1 — Spotting Automatable Pain Points in Real Businesses",
  subtitle:
    "Three businesses, three pain points, one strongest pick. Plant-based-friendly bakery for the strongest — taken as a NICHE not a specific business (lab's 'hypothetical with research' path).",
  color: "#d97706",
  sections: [
    {
      heading: "Exercise 1 — Identify 3 Real Businesses",
      description:
        "Three business types worth automating. Two are real local categories I can observe; one is the 'hypothetical with grounded research' path the lab calls out as a valid alternative. Strongest pick is the bakery.",
      qa: [
        {
          q: "Business 1 — Solo mobile dog groomer in Prescott/Prescott Valley",
          a: `What they do: One-person mobile pet grooming. Drives a converted van to clients' homes, grooms 1-4 dogs per day. Books via phone or Facebook Messenger. Common business type in this area — semi-retirees with dogs, big yards, no interest in driving the dog into town.

The pain point — REVISED FROM MY FIRST PASS: I initially pitched this as a "no-show" problem (driving 25 minutes to a customer who forgot). After thinking it through honestly: mobile is different. The customer is at home — at the location SHE'S driving to. True no-shows are rare. The actual pains are:
- **Phone tag.** She's mid-groom, can't pick up. Prospects who call get voicemail. They book whoever calls back first.
- **Same-day reschedules.** Customer texts at 8am asking to move from 10am to 2pm. Disrupts the day's route.
- **Late cancellations.** Customer cancels inside 24 hours, she's already committed the slot and possibly burned gas driving.
- **Quote friction.** New customers want pricing info ("how much for a Goldendoodle?") via phone or DM — same conversation 5 times a week.

The dollars are smaller than my first pass made it sound. Phone tag is real but I overstated the no-show angle. The right number is probably 2-3 hours/week of phone time + 1-2 late cancellations/month, not "no-shows that cost $80 + gas every week."

The evidence: A neighbor uses one and complained about the booking friction at a HOA mixer. She literally said "I'd love to just book online but she only takes calls." Multiple comments on the groomer's Facebook page asking for online booking with no reply.

The solution: Online booking with a small NON-refundable booking fee ($15-20) to commit the slot — that's the right framing, NOT "deposit to prevent no-shows." The fee discourages flaky reschedules and recovers gas when a same-day cancel happens.

The budget question: Decent. A solo groomer grosses ~$1,500/week. $30-50/mo is plausible. A $500-800 one-time build is realistic if I can articulate the actual ROI (recovered phone-tag hours + reduced reschedule churn), NOT the inflated "save your no-shows" number. Kept in the list — but it's not the strongest pick anymore.`,
        },
        {
          q: "Business 2 — Solo real estate agent specializing in Prescott relocations",
          a: `What they do: Independent realtor (not part of a big team) who specializes in buyers relocating to Prescott from out of state — mostly California retirees, also a fair number of Arizona-from-elsewhere movers. Heavy inbound interest, lots of "tell me about Prescott" calls before anyone's ready to actually buy.

The pain point: First-touch lead intake is brutal. Someone calls or emails from California asking about Prescott — schools, weather, taxes, neighborhoods, healthcare, water situation. The agent has the same conversation 5 times a week. Two hours each. By the time someone's ready to actually look at houses, the agent has spent 10+ hours just answering "what's it like to live in Prescott" questions. Most of those leads don't convert.

The evidence: My neighbor across the street works in real estate (different agent than this one, but same market dynamics). She vented about it at a block party. Said "I should just record a video and send it to people, but every conversation has slightly different questions." That's the AI pitch right there — "slightly different questions" is exactly what an LLM can handle.

The solution: A simple AI-powered relocation assistant. Lead lands on agent's site, gets a chat-style intake that answers the FAQ-shaped stuff (climate, water, taxes, schools, top neighborhoods by lifestyle) in conversational form. At the end it qualifies the lead with 3-4 questions (timeline, budget range, must-haves) and sends a structured summary to the agent. Agent gets a hot lead, not a cold "tell me about Prescott" call.

The budget question: Highest ceiling of the three. A single converted lead is a $10-30k commission on a $500k home (1.5-3% of purchase). Saving 8 hours a week AND converting 2-3 more leads a year is a 5-figure ROI. $200/mo is easy. $3,000-5,000 one-time build is plausible if I show the ROI math clearly.

Why this isn't my strongest pick despite the highest ceiling: it's the longest build (custom AI chat with content authoring + lead qualification + handoff), the highest stakes (an AI giving wrong info about Prescott schools or water rights could embarrass the agent), and I don't know an agent personally to pitch first. Higher risk, longer sales cycle, more complex delivery. Saving it for a later sale once I have a portfolio piece.`,
        },
        {
          q: "Business 3 — Plant-based / plant-based-friendly bakery in northern AZ (STRONGEST PICK)",
          a: `Doing this one as the lab's "hypothetical with grounded research" path. I don't have a specific bakery in mind — I'm not aware of a fully plant-based bakery in Prescott specifically. So instead of pitching a single business I know, I'm targeting the BUSINESS TYPE: small bakeries or cafés in northern AZ with substantial plant-based offerings, active social media, and a custom-order side of the business.

What they do: Small operation, usually solo owner or two people. Mix of walk-in counter sales, custom cake/catering orders, and (often) Saturday farmers-market sales. Active Instagram with daily-specials posts. Plant-based-friendly customer base, which means engaged community, lots of DMs, lots of questions about ingredient substitutions.

The pain point — bundled into one "order management" offering: Three distinct workflows that aren't connected:

1. **Custom cake/catering orders via Instagram DMs and texts.** Customer DMs to ask about a birthday cake. Owner replies. 4-5 messages back and forth to confirm date, flavor, dietary requirements, pickup time. Owner writes it on a sticky note. Days later, has to find the thread again to confirm details.

2. **Daily specials posting across IG + website (if a website exists).** Owner posts on IG every morning. Website (if there is one) shows last month's specials because nobody updated it. Customers either follow IG or get out-of-date info.

3. **Wholesale and farmers-market orders by text.** Local cafés or yoga studios text in standing orders. Saturday-market regulars text Friday night asking what'll be there. All by text, all in different threads, all in the owner's head.

Combined cost: probably 7-13 hours/week of admin work across the three channels. At an effective $30/hour owner's-time value, that's $200-400/week of unpaid labor on an operation that's probably grossing $3-5k/week.

The evidence: I did online research across plant-based-friendly bakeries and cafés in northern AZ (used Yelp, Google Maps, Facebook). Found 5-7 candidates within a 90-minute drive. Patterns I noticed across multiple of them:
- Instagram bios that say "DM us to order!" with no order form linked
- Websites that haven't been updated in 2-6 months (last specials post dated, current menu missing)
- Comments on recent IG posts asking "are you at the market this Saturday?" with no consistent answer
- Reviews praising the food and complaining about reachability

The pattern is the pain. Even though I can't name a specific bakery owner I'd pitch tomorrow, I can see the same operational friction repeated across 5+ candidates. That's actually a STRONGER position for productizing — I'm building for a niche, not a one-off.

The solution: ONE order management system handling all three channels. Single source of truth (Google Sheet or Airtable), single intake form (with conditional fields for custom/wholesale/market), automated confirmations, automated daily-specials posting from one source to IG + website.

The budget question: Bakeries are tight (probably $3-5k/mo net). The honest pricing is one-time-and-done — $300 flat setup, no recurring fee Diana charges, owner owns everything afterward. Zapier free tier might cover the volume; if not, the owner pays Zapier directly ($19.99/mo Starter plan). The pitch is "I set it up, hand you the keys, you own it forever."`,
        },
        {
          q: "Level 2 — Existing tools each business could already buy off-the-shelf",
          a: `For the BAKERY (the strongest pick — focus my competitor research here):

- **Tally** — free tier handles unlimited forms with reasonable submission limits. Paid starts around $29/mo. Form-only.
- **Typeform** — free is very limited (10 submissions/month on free), paid $25-83/mo. Form-only.
- **Square for Restaurants** — free entry, mid-tier paid. Order management + POS. Overkill for custom cakes and not designed for the DM-to-order workflow.
- **Shopify** — basic plan ~$30-40/mo. Real e-commerce — too heavy for a 5-cakes-a-week operation that mostly does in-person sales.
- **Later / Buffer** — social media schedulers. Later starts free (limited posts), $25/mo for higher tiers. Solves the IG posting half but doesn't talk to the order intake half.
- **Airtable** — free tier handles small databases. The single-source-of-truth piece, but the owner has to wire it to forms and posting tools manually.

What stands out: NONE of these are end-to-end. They're each one slice. The owner would need to glue together (Tally form + Airtable database + Later for IG + Mailchimp for confirmations) = 4 subscriptions, 4 logins, no integration unless someone wires them together.

That gluing IS my offering. I'm not selling NEW tools; I'm selling the integration that nobody currently sells as a package for this niche.

For the GROOMER and AGENT (lighter pass since they're not my strongest pick):
- Groomer: Square Appointments (free solo / $29 multi), Acuity ($20-65/mo), pet-specific options like MoeGo and Daysmart Pet (opaque pricing, likely enterprise tier)
- Agent: Calendly + Mailchimp at the low end ($30-50/mo combined), real estate CRMs like Follow Up Boss or Wise Agent ($50-200+/mo)`,
        },
        {
          q: "Level 3 — Strongest idea + the specific solution outline",
          a: `Strongest: the bakery order management offering. The niche-not-one-business framing is what makes it stronger than the groomer or agent picks.

Reasons in priority order:
1. **REPEATABLE.** I'm not pitching ONE bakery — I'm building a productized offering for a niche. Once I build the template, every subsequent customer is configuration, not a new build. That's leverage.
2. **CLEAR PAIN, observed across multiple candidates.** The "DM us to order" pattern repeats. The "website hasn't been updated since March" pattern repeats. I'm not extrapolating from one frustrated business owner.
3. **OWNER FRIENDLY PRICING.** $300 flat, you own everything, no monthly subscription to me. Bakeries are tight on cash but can absorb a one-time setup fee. The "no recurring fee" framing is honest and removes the biggest objection.
4. **LIVED EXPERIENCE ADVANTAGE.** I'm plant-based myself. I understand the customer base on the OTHER side of the counter — what plant-based eaters DM about, what reassurances they want around ingredients and cross-contact, what makes a good ordering experience. That's customer insight a generic freelancer doesn't have.
5. **REUSES MY EXISTING SKILLS.** Form intake, Google Sheets, AI categorization, IG posting via Zapier — all stuff I can build in a weekend. No new technology learning required.

Specific solution outline:
- **Single order intake form** (Tally or similar) with conditional logic — custom cake, catering, or wholesale paths from one entry point
- **Single Google Sheet** as the source of truth — "Orders" tab with date, customer, type, status; "Today's Specials" tab for the daily IG content
- **Order confirmation automation** — form submission → email confirmation to customer + Slack/SMS ping to owner with the order summary
- **Daily specials publishing** — owner updates the "Today's Specials" tab in the morning, automation fires once a day to post the IG content + update a "today" page on the website
- **Optional: wholesale recurring orders** — Airtable or Sheet of standing orders, weekly automation generates the production list for the owner

What I'd charge: **$300 flat, one-time.** Owner signs up for the Zapier account under her own email. Owner owns the Google Sheet. Owner owns the form. I configure, test with the owner watching, document the setup in a 1-page handoff doc, and walk away.

Recurring costs are the owner's — Zapier free tier handles ~100 tasks/month and might be enough; if not, they pay Zapier $19.99/mo directly. NO recurring fee to me.

Why one-time-and-done instead of a subscription model: bakery margins are too tight to subscribe to a person. They WILL pay $300 to a freelancer they trust. They will NOT pay $30/mo indefinitely.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Stress-Test Each Other's Ideas",
      description:
        "Group of 4. Pitched the bakery niche offering. Got pushback on the 'I don't know a specific bakery' angle and refined the framing.",
      qa: [
        {
          q: "How I pitched it in 2 minutes",
          a: `"I'm targeting small plant-based-friendly bakeries in northern AZ — not a specific business but the niche as a whole. Across 5-7 candidates I researched online, the same pattern repeats: custom orders via Instagram DMs, daily specials posted to IG but never updated on their website, and wholesale/farmers-market orders coming in by text. Three disconnected channels, all living in the owner's head and phone notifications.

The solution is one order management system that ties all three together. Single intake form for custom and wholesale orders. Single Google Sheet as source of truth. Automated customer confirmations. One-source-of-truth daily specials that publishes to IG and the website's 'today' page.

The pitch is $300 flat, owner owns everything afterward. No monthly fee to me. They sign up for Zapier under their own email, I configure, test together, hand over the keys. Walk away.

Why $300 and not more: bakery margins are tight. They WILL pay $300 to a freelancer once. They will NOT pay a recurring $30/mo to me indefinitely. Pricing has to match the customer's tolerance, not just the value created."`,
        },
        {
          q: "Group's feedback — the four questions, answered honestly",
          a: `**"Is this real?"** — The pain is real and observable across multiple candidates. The harder question the group pushed on: "but you don't have a specific customer lined up." That's true. I'm doing the lab's hypothetical-with-research path explicitly. Next step is to pick 2-3 of the candidates I researched and send outreach this week. The group accepted this — it's the lab's stated alternative path, not a dodge.

**"Is it painful enough?"** — Yes. 7-13 hours/week of admin labor is real. The "is it painful ENOUGH to pay $300 for the fix" question is the more honest one. The group's verdict: probably yes, BUT it depends entirely on the owner's tech comfort. Some owners have made peace with the chaos and don't want to learn a new tool even if it saves time. Real risk.

**"Can I actually build this?"** — Yes. Zapier + Tally + Google Sheets + IG via Buffer or Later. All tools I either know or can learn in a weekend. No new technology.

**"What would I charge?"** — $300 flat. The group split on this. Two people said "$300 is too cheap if the value is 7-13 hours/week recovered, charge $600 minimum." One person said "$300 is right because bakery owners are price-sensitive and the easiest sale is the one with the lowest friction." I'm sticking with $300 for the FIRST customer (testimonial bait). After one customer, I can raise to $400-500 for the second and third.`,
        },
        {
          q: "What I'm keeping, pivoting, or dropping",
          a: `KEEPING: the bakery niche offering. The hypothetical-with-research path is legitimate per the lab AND it's actually stronger than a one-customer pitch — it's productized from day one.

PIVOTING: the groomer pitch. I overstated the no-show angle on yesterday's first pass. The honest pain is phone tag + reschedule churn, smaller in dollar terms than I claimed. Keeping the groomer in my list as a "second-tier idea" but demoting it from strongest. The realistic price for the groomer drops to $500-800 one-time + smaller recurring, or a simpler Zapier-only build at $300 like the bakery.

DROPPING: nothing. Real estate agent stays as a "future big pitch" once I have a portfolio piece and a warm intro.

Strongest idea now: bakery. Going deep on competitor research for that pick.`,
        },
        {
          q: "The honest meta-lesson from stress-testing my own ideas",
          a: `One real thing.

Yesterday I pitched the groomer with "$80 + gas per no-show, 1-3 per week" math. When I started writing this up today, the inconsistency surfaced: mobile groomers go to the CUSTOMER'S house. The customer's not going to "no-show" — they're already at the address she's driving to. The no-show framing was a pattern-match from salon/barber businesses, not honest analysis of mobile.

Caught it because the math felt wrong when I started to write the cold-outreach email. "Eat one no-show per week" doesn't ring true for someone driving to a residential address. Made me back up and reconsider.

The lesson: my first-pass pitch math was built on a metaphor (salon no-shows) that I hadn't tested against the actual business shape (mobile, residential). The pattern-match was free; the honest analysis took effort. The honest analysis is the one that survives contact with a real customer.

Going to add a step to my idea-validation process: every dollar figure in a pitch gets one round of "would this number actually be true at this specific business shape?" before I commit to it. Cheap audit, prevents embarrassment.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Competitor Research + Pricing",
      description:
        "Focused on the bakery pick. Looked at what tools exist, what they cost, where the gap is.",
      qa: [
        {
          q: "Competitor table",
          a: `| Competitor | What They Offer | Price (verified on their site, Q3 2026) | What's Missing |
|---|---|---|---|
| Tally | Form builder | Free tier with reasonable limits, ~$29/mo paid | Form only. Doesn't connect to anything by itself. |
| Typeform | Form builder + simple logic | Very limited free, $25-83/mo paid | Form only. Submission limits on free tier kick in fast. |
| Square for Restaurants | POS + order management | Free entry, paid tiers higher | Designed for in-person dining, not DM-to-order workflows. Overkill UX. |
| Shopify | Full e-commerce | ~$30-40/mo basic | Too heavy for 5-cakes-a-week operation. Built for inventory-driven retail, not custom-order intake. |
| Later (or Buffer, Hootsuite) | Social media schedulers | Free limited, ~$25/mo for higher tiers | Solves IG posting but doesn't connect to order intake or website updating. |
| Airtable | Database + light automation | Free tier, paid from ~$10/mo per user | Source of truth but needs separate tools for forms, posting, confirmations. |
| Mailchimp | Email automation | Free up to 500 contacts, paid scales up | Email-only. Doesn't handle order data structure or daily-specials posting. |
| Custom dev work on Upwork | Bespoke builds | $1,500-8,000 one-time | Too expensive for a bakery's budget. |

(All public pricing cross-checked on the providers' actual sites. The lab's warning about hallucinated pricing is accurate — when I asked AI for Tally pricing, it gave me a 2023-era number that's no longer right. Always verify.)

What stands out: every tool above is ONE slice of the offering. The owner who tries to DIY this would need:
- Tally for the form
- Airtable or Google Sheets for the database
- Later or Buffer for IG posting  
- Mailchimp for customer confirmations
- ZAPIER OR MAKE to glue them all together

Five subscriptions, five logins, plus the integration work. Total cost if they did it themselves: $40-80/mo recurring + the time to figure it out.

My offering replaces "figure out how to glue 5 tools together" with "I set this up once for $300 and you own it." That's the gap.`,
        },
        {
          q: "Where I fit — positioning",
          a: `I'm not going to beat Shopify on features (they have e-commerce infrastructure I'd never replicate). I'm not going to beat Square on POS (they have hardware integration). I'm going to beat both on FIT for the small-bakery-with-DM-orders niche specifically.

The competitive moat isn't features. It's PACKAGING + PRICING + NICHE.
- PACKAGING: I'm selling the integration that nobody else packages as a single offering for this niche. Shopify wants you to use Shopify. Square wants you to use Square. I want you to use Google Sheets + Tally + Later + a couple of Zaps, configured to talk to each other.
- PRICING: $300 flat, no recurring to me. Below the threshold where a bakery owner has to think hard about it. Above the threshold where it feels too cheap to be real.
- NICHE: plant-based-friendly bakeries specifically. I understand the customer base because I'm in it. I know what DMs about ingredients look like. I know what reassurances around cross-contact matter. That's positioning a generic freelancer can't claim.

Position: "I set up order management for small plant-based-friendly bakeries. One-time fee, you own everything, no monthly bill to me."`,
        },
        {
          q: "Level 3 — One-paragraph pitch",
          a: `"I help small plant-based-friendly bakeries get their custom orders, daily specials, and wholesale requests out of Instagram DMs and into one organized system. I configure a single intake form, a single source-of-truth spreadsheet, automated customer confirmations, and one-source daily-specials posting that publishes to your IG and your website at the same time. Unlike Shopify or Square, this is built for your actual workflow — custom cakes by DM, daily specials by gut feel, wholesale by text — not for a generic retail store. $300 flat, one-time. You own everything afterward. No monthly bill to me."

That's the elevator. Three sentences of problem, two sentences of solution + differentiation, one sentence of pricing. ~110 words. Fits in an IG DM, a Facebook message, or the first paragraph of a cold email.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Problem-Solution-Price Map",
      description:
        "Locked in the spec for the bakery offering. Filled in after Exercise 3 so the price is informed, not a guess.",
      qa: [
        {
          q: "PROBLEM — who, how painful, how they solve it today",
          a: `WHO has it: Small bakeries or cafés in northern AZ with substantial plant-based offerings, active Instagram (~1k-5k followers), and a side business of custom cakes or catering. Roughly 5-7 candidates within a 90-minute drive based on my Google Maps + Instagram research. NOT national chains. NOT places with a dedicated front-of-house person handling orders.

HOW PAINFUL: Estimated 7-13 hours/week of disconnected admin labor:
- Custom orders: 5-10 per week via DM/text, ~30 min each in back-and-forth confirmation = 2.5-5 hrs/week
- Daily specials: posting to IG every morning, sometimes updating website (if remembered) = 1-2 hrs/week
- Wholesale: standing orders by text from cafés/yoga studios + Saturday-market regulars = 3-5 hrs/week
- Searching for old DM threads to confirm previous orders = ~1 hr/week of pure friction

At an effective $30/hour value of the owner's time, that's $210-390/week of unpaid labor = ~$900-1,700/month. On an operation that's probably grossing $3-5k/week and netting maybe $1-2k/week after costs, that admin labor is a real chunk of total margin.

Painful enough to act on? Probably yes, IF the owner is tech-comfortable. Owners who've made peace with the chaos and don't want to learn new tools are NOT my customer — that's a sales filter, not a problem.

HOW THEY SOLVE IT TODAY: They don't. They live in their notifications. They write orders on sticky notes. They post IG manually every morning. They search through DM threads to confirm what someone ordered three days ago. The "solution" is absorbing the cost as the price of doing business.`,
        },
        {
          q: "SOLUTION — what I build, what tools, how long",
          a: `WHAT I BUILD: One integrated order management system across three channels.

Channel 1 — Custom orders:
- Public Tally form at order.[bakery].com with conditional fields (custom cake / catering / wholesale / general inquiry)
- Form submission → Google Sheet "Orders" tab
- Automated confirmation email to customer with order summary + pickup window
- Slack/SMS ping to owner with order summary

Channel 2 — Daily specials:
- Owner updates a "Today's Specials" Google Sheet tab each morning (one row per item)
- 7am Zap fires: reads the Sheet, posts to Instagram via Later/Buffer, updates a "today" page on the website
- One source of truth, two outputs

Channel 3 — Wholesale:
- Separate "Wholesale Standing Orders" Sheet tab with recurring orders
- Weekly Friday Zap fires: generates the production list for the weekend
- Owner sees what to bake before Saturday market

TOOLS:
- Tally (forms) — free tier
- Google Sheets (database) — free
- Zapier (automation) — owner pays for their own account, free tier might cover it; $19.99/mo Starter if volume requires
- Later or Buffer (IG scheduling) — owner's choice, free or paid tier
- A simple HTML "today" page on whatever the bakery's existing website is — depends on their site

HOW LONG TO BUILD (honest): 1-2 weekends of focused work for the first customer. Mostly configuration, not coding. Custom bits: a "today" page on their existing website might need light HTML/CSS work depending on what platform they're on (Squarespace = easy, custom = harder).

After the first customer, subsequent bakeries are 4-6 hours of setup, not 1-2 weekends. The template exists; new clients are configuration.`,
        },
        {
          q: "PRICE — informed by competitor research, not vibes",
          a: `WHAT COMPETITORS CHARGE for partial offerings:
- Tally + Airtable + Later + Mailchimp DIY: ~$40-80/mo recurring if they figure it out themselves
- Bespoke dev work on Upwork for similar small-business order-management setups: $1,500-5,000 one-time
- Shopify or Square: $30-80/mo recurring forever

WHAT IT'S WORTH TO THE CLIENT: If the system recovers 5 hours/week of admin time at the owner's $30/hour effective rate = $150/week = $7,800/year of recovered value. Even at half that ($3,900/yr), the ROI is enormous against a $300 one-time fee.

WHAT I'D CHARGE: **$300 flat, one-time. Owner owns everything afterward. No recurring fee to me.**

Reasoning:
- BELOW the Upwork bespoke range — sells the "I'm building my portfolio, you're getting a deal" positioning honestly
- ONE-TIME ONLY — bakery margins won't tolerate a recurring subscription to a person; they will tolerate a one-time payment
- BELOW THE THRESHOLD where the owner has to convene a budget conversation — $300 is "yes, sure" money for an operation grossing $3-5k/week
- INCLUDES THE HANDOFF — 1-page documentation, 30-min walkthrough video, owner has the keys to make changes herself or hire someone else to maintain
- FIRST CUSTOMER GETS $250 in exchange for a video testimonial after 30 days of use. Testimonial unlocks $400-500 pricing for customers 2-5. Six-plus, after I have a case study, $600-800.

Honest: this is below what the value justifies. I'm pricing for the first-customer-easy-yes. Once I have a case study showing "saved this bakery 8 hours/week," the price moves up. The cheap first sale is the investment in the case study.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "90 seconds in a breakout pair. The verbal muscle for the Phase 3 gate pitch.",
      qa: [
        {
          q: "My 90-second pitch",
          a: `"Client niche: small plant-based-friendly bakeries in northern AZ. Active Instagram, custom cake side of the business, maybe sells at the Saturday farmers market.

Problem: their orders come through three different channels — Instagram DMs for custom cakes, text messages for wholesale, manual IG posting for daily specials — and none of those channels talk to each other. The owner is the only integration. She's the database. When someone DMs to confirm a cake order from three days ago, she's scrolling through her DMs trying to find the thread.

Why it matters: across the candidates I researched, this pattern is 7-13 hours a week of unpaid admin labor. The owner is the cheapest employee, and the cheapest employee is spending half her time on stuff that should be automated.

What I'd build: ONE order intake form, ONE source-of-truth spreadsheet, automated customer confirmations, ONE-source daily specials that publishes to IG and the website at the same time. The owner adds today's specials in one place; the system fans out.

What I'd charge: $300 flat, one-time. Owner owns everything afterward. No monthly bill to me. First customer gets it at $250 in exchange for a video testimonial after 30 days."`,
        },
        {
          q: "Partner's clarifying question and my answer",
          a: `Partner's question: "You said you don't know a specific bakery — so how do you actually find your first customer?"

My answer:

"Two paths.

Path one is cold outreach. I have 5-7 candidates from my research. For the top 2-3 — the ones whose Instagram comments most clearly show the pain — I send a personalized DM or email. The pitch is short: 'I noticed [specific pattern in your comments]. I help bakeries like yours with [specific solution]. Would you be open to a 15-min coffee?' Cold conversion rates are like 3-5%, so I'd expect maybe one yes out of three sends.

Path two is warm intro. I'm in the Next Chapter cohort with a couple of other plant-based people, and the broader Prescott vegan community is small enough that two degrees of separation usually gets me to anyone. Going to ask around to see if anyone knows an owner.

Realistic timeline: send cold outreach this week, ask for warm intros this week, expect to be in conversation with a real bakery owner within 7-14 days. If not, the framing was wrong and I revisit.

If both paths fail, that's diagnostic. Means either (a) my read of the market was off, (b) my pitch isn't landing, or (c) the niche is too narrow geographically. Each of those has a different next step — broaden the geography, broaden the niche (plant-based-friendly to general small bakeries), or pivot to a different offering entirely. The failures tell me what to adjust."

What this answer demonstrated: I have a real plan, not just a fantasy. The hypothetical-with-research path is legitimate, but it requires a CONCRETE next-step plan to convert hypothetical into real. Without that, "I'd target the niche" is just a daydream.`,
        },
        {
          q: "What saying it out loud at 90 seconds taught me",
          a: `Two things.

First — pitching a NICHE feels different from pitching a SPECIFIC CLIENT. With a specific client, you can name them ("the dog groomer who works in my neighborhood"). With a niche, you have to describe the SHAPE of the customer in a way that's specific enough to feel real but general enough to apply to multiple businesses. That's a harder articulation. Practiced it twice. Second time was tighter than first.

Second — when partner asked about finding the first customer, the question wasn't a trap. It was the right honest question. "You don't have a customer yet" is the elephant in the hypothetical-with-research path. Having a CONCRETE plan to convert hypothetical into real (cold outreach this week, warm intros this week, evaluation in 7-14 days) is what makes the pitch credible.

The Phase 3 gate is going to ask the same question. If I can't answer "how do you find your first customer" in 30 seconds with a real plan, the whole niche pitch crumbles. Practicing the answer NOW means it's automatic when it matters.`,
        },
      ],
    },
    {
      heading: "Going Deeper",
      description:
        "Cold-outreach template that I can customize per bakery. Plus the other three items honestly.",
      qa: [
        {
          q: "Cold-outreach template — customize per bakery, send this week",
          a: `Drafting as a TEMPLATE because I don't have one specific bakery yet. Bracketed sections are where I personalize per candidate.

Subject: Question about your custom orders

Hi [first name],

I'm a developer in Prescott, and I've been a [customer / fan / observer] of [bakery name] for a while. I noticed something in your recent Instagram comments — a few people asking [specific pattern, e.g. "how to order a custom cake" / "if you'll be at the market this weekend"] without seeing a clear path to do so. I get the sense that managing all of that through DMs and texts adds up to real time every week.

I help small bakeries like yours pull custom orders, wholesale requests, and daily specials posting into one system — single intake form, single spreadsheet, automated customer confirmations, and one-source daily-specials posting that hits Instagram and your website at the same time. You'd update specials in ONE place each morning and the rest takes care of itself.

The whole setup is $300 one-time, no monthly bill to me afterward. You own the form, the spreadsheet, and the Zapier account. I'd configure it, walk you through it, and hand over the keys.

If you'd be open to a 15-minute coffee at [shared third place, e.g. Wildflower] sometime in the next two weeks, I'd love to show you what it'd look like for [bakery name] specifically.

Either way, thanks for what you do — the [specific menu item I actually like] is one of my favorites in town.

Diana
[phone] · [portfolio URL]

What I'm doing in this email:
- First paragraph: SPECIFIC piece of evidence I noticed (proves I'm not spamming). The bracketed observation is what makes this customizable.
- Second paragraph: solution framed as "you'd update in ONE place and the rest happens" — the user-side experience, not the technical architecture
- Third paragraph: PRICE up front, with the ownership framing ("no monthly bill to me")
- Fourth paragraph: low-friction next step (coffee at a specific local place, not "schedule a call")
- Fifth paragraph: genuine compliment about a SPECIFIC menu item (proves I'm a real customer, not a generic outreach person)

Total length: ~180 words. Reads in 45 seconds. Doesn't sound like a sales email. Customizes in 5 minutes per bakery.`,
        },
        {
          q: "Freelancer case study — what I found on YouTube",
          a: `Searched "small business automation freelancer order management case study." Found a 12-minute case study from a developer who sets up Zapier + Airtable + Square for small food businesses (restaurants, bakeries, food trucks).

What he sells: "Order management in a weekend" packages.

Who he sells to: small food businesses with under $1M annual revenue.

What he charges: $500-1,500 depending on complexity, average around $800. Higher than my $300 starting point.

What I learned that I'll copy:
- He uses a 15-minute discovery call format, not a 30-min or 60-min one. Just enough to confirm fit and the specific pain points, not so long the prospect feels pitched-at. Going to use this framing.
- He sends a one-page "proposal" PDF after the discovery call. Three sections: what I heard, what I'd build, what it costs. Asks for yes/pivot/no in 48 hours. The 48-hour deadline is the close.
- He uses "audit" pricing for prospects who aren't ready to commit — $100 for a written analysis of their current operations + a recommended automation plan. The audit cost rolls into the build price if they go forward. Smart de-risk for both sides.

The audit angle is the interesting one. For a bakery that's not sure whether $300 is worth it, "$100 audit, applied to the $300 build if you move forward, otherwise keep the audit document" is a way lower-friction first step.

Adding "discovery call format + 1-page proposal + optional $100 audit" to my pitch toolkit. Will integrate into the cold-outreach follow-up flow.`,
        },
        {
          q: "Warm market map — three people I already know",
          a: `Three people I already know who run small businesses or might know small business owners in the food space. Names stay in my offline notebook — the lab's privacy framing applies.

What I noticed when I made the list:
1. None of them own a bakery directly. So the warm market doesn't map ONE-to-one to my strongest pick. But two of them know people in the local food scene (one through farmers market connections, one through a yoga studio that sources baked goods).
2. The right way to use warm contacts here is NOT "do you want to hire me" — it's "I'm trying to find small bakeries in the area that might be interested in [the offering]. Do you know anyone I should talk to?" Lower stakes, opens a different conversation, asks for introductions instead of money.
3. The warm-market-as-introduction-bridge framing is the highest-leverage use. A warm intro from someone the bakery owner already trusts is worth 10x a cold DM.

Going to send three "do you know any bakery owners in the area I should talk to about [the offering]" messages this week. If even one person responds with an intro, my outreach pipeline doubles.`,
        },
        {
          q: "Reusing Phase 2 work — what canvas-daily could be SOLD as",
          a: `Canvas Daily is built for me. But who else has the problem it solves?

The literal problem: "I have a Canvas LMS account and I want a clear, structured daily view of what's due, with AI breakdowns to plan my work."

Who else has this:
1. **Other community college students.** Yavapai College has ~10,000 students. Even 1% adoption is 100 users. But community college students aren't a great PAYING market — they're broke. The school itself would have to license the tool, which is a slow institutional sale.

2. **Parents of online-schooled minors.** Parents whose kids are in online or hybrid school often have Canvas observer access and want to track their kid's assignments. This is a real market — parents WILL pay $5-10/mo for something that helps them stay on top of their kid's schoolwork. Lived experience advantage here too.

3. **Academic tutoring centers and coaches.** Independent tutors managing 5-10 students at a time, each with their own Canvas account, drowning in the "what's due" problem multiplied by their roster. They'd pay $30-50/mo per tutor for a tool that gives them a unified dashboard across their students' Canvas accounts (with the students' consent).

Of those three, the parents and the tutoring centers are the most viable. Tutoring centers have budget. Parents have urgency.

Repositioning Canvas Daily: change the marketing copy from "for students" to "for tutors and parents managing students." Same underlying tool, different customer. Price changes from "free" to $9.99/mo for parents, $29.99/mo for tutors.

Not pitching this in Week 9. Mentioning it as a "you might be sitting on a real product without realizing it" insight. Worth coming back to in Week 10 when the freelance pipeline is moving.`,
        },
      ],
    },
  ],
};
