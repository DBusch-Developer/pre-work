export const week9day2 = {
  number: 30,
  label: "Day 2",
  title: "Week 9, Day 2 — Zapier, Webhooks, and No-Code Automation",
  subtitle:
    "First Zaps end-to-end. AI-driven branching. Webhook triggers. Built the bakery order management workflow as my sellable artifact — $300 flat, owner owns everything.",
  color: "#c026d3",
  sections: [
    {
      heading: "Exercise 1 — Sign Up + First Zap",
      description:
        "Goal was speed-to-working-Zap. Picked Gmail trigger + Slack action because I have both. Hit Level 3 with a Filter and a Google Sheet append.",
      qa: [
        {
          q: "Picked Gmail → Slack and got the first Zap firing in 12 minutes",
          a: `Sign-up was painless. Free tier, no credit card. Got into the dashboard in under a minute.

Setup:
- Trigger: Gmail → New Email Matching Search. Search query: subject:test-zap-001 from:me
- Action: Slack → Send Channel Message in #zap-test (a channel I made for this)

Mapped the email subject and snippet into the Slack message body:

New email from {{trigger.from}}:
*{{trigger.subject}}*
{{trigger.snippet}}

Tested by sending myself an email with subject "test-zap-001 — does this fire?" Slack notification arrived ~30 seconds later. Subject in the bold text, snippet underneath, sender pre-filled. Clean.

Published the Zap. Sent a second test email to confirm it fires on the LIVE Zap, not just in test mode. It did. 

Total time to first working Zap: about 12 minutes from sign-up. Faster than provisioning a new Next.js project, faster than writing a Twilio webhook handler myself. The trade-off is obvious — I'm renting infrastructure I'd otherwise build, and it ONLY does what Zapier supports.`,
        },
        {
          q: "Level 2 — Added Google Sheet append as a second action",
          a: `Two actions after the trigger now. Same trigger fires both.

Action 2: Google Sheets → Create Spreadsheet Row in a "Zap Inbox" sheet I made.

Columns I mapped:
- Timestamp (Zapier's built-in {{zap_meta__human_now}})
- From: {{trigger.from}}
- Subject: {{trigger.subject}}
- Snippet: {{trigger.snippet}}

Tested with another email. Got both the Slack notification AND a new row in the sheet. The whole thing took less than 5 minutes to wire up.

Reflection: in Next.js I'd have to write a Gmail webhook handler (or pull via the Gmail API on a cron), parse the message, format the Slack payload, hit the Slack API, format the Google Sheets row, hit the Sheets API. Each one is 30+ lines minimum, plus auth setup for three services. Zapier collapses all of that into 4 dropdown selections.

That's the trade I'm starting to feel. Zapier wins on SPEED. Code wins on FLEXIBILITY and COST AT SCALE. For a client who needs this exact integration AT VOLUME, Zapier's per-task fees start to bite. For a client who needs it RIGHT NOW with a small budget, Zapier is the right call.`,
        },
        {
          q: "Level 3 — Added a Filter step before the action",
          a: `The lab suggests a Filter "only continue when subject contains a specific keyword." Did that and went a half-step further.

Filter step (after trigger, before any action):
- "Continue only if": Subject text → (Text) Contains → "urgent"

Tested two ways:
1. Email with subject "test-zap-001 urgent maintenance window" → Zap fires through. Slack notification + Sheet row both appear.
2. Email with subject "test-zap-001 weekly newsletter" → Zap stops at the Filter. No Slack ping, no Sheet append. Zapier's Task History shows "Filter did not pass" for the run.

This is the basic building block for everything that comes next. Filter = if-statement in a Zap. The AI-driven version in Exercise 2 is the same shape but with the condition computed by an LLM instead of a string match.

One thing I noticed: the Filter step does NOT count as a "task" against my free-tier quota. Only steps that produce an output count. That's a nice escape hatch — I can chain a bunch of cheap Filter steps without burning task credits.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Add AI to Your Zap",
      description:
        "Picked Pattern B (form → AI classify → conditional response) because it shows the AI-as-decision-maker shape that matters for real business automation.",
      qa: [
        {
          q: "Why Pattern B over Pattern A",
          a: `Pattern A (sheet row → AI summary → email) is fine but it's just "use AI to write text." Pattern B (form → AI classify → branch on result) shows the AI making a DECISION that drives the rest of the workflow. That's the higher-value pattern.

Concretely: Pattern A could be replaced by a templating function. Pattern B couldn't — categorizing arbitrary text into {urgent, normal, spam} is exactly what LLMs are good at and string-matching is bad at.

Also Pattern B maps to a real future use case for my freelance pipeline. Cold-outreach replies are going to come back in three flavors: someone interested, someone politely declining, and spam/scam. Routing them differently means I respond fast to interest, archive the polite no's, and never see the spam. That's an actual workflow I'd build for myself.`,
        },
        {
          q: "The build — Webhook → AI classify → Paths",
          a: `Trigger: Webhooks by Zapier → Catch Hook. Got a unique webhook URL like https://hooks.zapier.com/hooks/catch/12345678/abc/

Sent test data via curl to fire the trigger:

curl -X POST -H "Content-Type: application/json" \\
  -d '{"name":"Sandra","email":"sandra@example.com","message":"Hi — I run a small bakery, can you help me organize my custom order intake?"}' \\
  https://hooks.zapier.com/hooks/catch/...

Step 1: AI by Zapier → "Prompt" action.

Prompt:
Classify this customer inquiry as exactly one of: urgent, normal, spam.
Return only the single lowercase word, no punctuation, no explanation.

Inquiry: {{trigger.message}}

Step 2: Paths by Zapier. Three branches:
- Path A: continues if AI output equals "urgent" → Slack DM to me + Sheet row with "URGENT" flag
- Path B: continues if AI output equals "normal" → Sheet row only
- Path C: continues if AI output equals "spam" → end (do nothing)

Tested with three POST payloads:
1. "URGENT — my catering order is for tomorrow and I haven't heard back" → AI returned "urgent" → Slack DM fired
2. "Hi, can I book a custom cake for next month sometime?" → AI returned "normal" → Sheet row appended, no DM
3. "Click here to win $1000 free gift card" → AI returned "spam" → Zap ended silently

All three behaved correctly. The AI made the call, the Paths step branched on it, the right side effect happened.`,
        },
        {
          q: "Level 3 — Refined the prompt with a one-shot example, compared output",
          a: `Initial prompt (zero-shot):
Classify this customer inquiry as exactly one of: urgent, normal, spam.
Return only the single lowercase word.
Inquiry: {{trigger.message}}

Refined prompt (one-shot, with example):
Classify this customer inquiry as exactly one of: urgent, normal, spam.
Return only the single lowercase word, no punctuation, no explanation.

Example:
Inquiry: "Hi I need to reschedule my appointment tomorrow"
Classification: normal

Inquiry: {{trigger.message}}

Before/after comparison on the same five test inputs:

| Input | Zero-shot | One-shot |
|---|---|---|
| "URGENT catering order for tomorrow" | "urgent" | "urgent" |
| "Can I book a cake for next month?" | "normal" | "normal" |
| "Click here to win $1000" | "spam" | "spam" |
| "Hi can you confirm Saturday?" | "Normal." (capitalized + period) | "normal" |
| "this cake birthday party Saturday help fast" | "urgent" (?) | "normal" |

Two real differences:
1. The capitalization/punctuation drift on test #4. Zero-shot gave "Normal." with a period; the Paths step uses exact-equals matching, so "Normal." failed all three paths and the Zap silently did nothing. ONE-SHOT fixed that — every output was the exact lowercase word.
2. The borderline case on test #5 (badly-written but probably real customer) — zero-shot called it urgent; one-shot called it normal. That's debatable either way, but consistency mattered more than the exact call here.

Cost of the one-shot: 50 extra tokens per call. Negligible. Benefit: 100% format compliance, more predictable output. Going to use one-shot by default for any classification prompt that feeds into a branching step. Cheap insurance.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Webhook Trigger + Multi-Step Zap",
      description:
        "Lead-intake pipeline for my own freelance work. Webhook catches a form-shaped POST, AI extracts structured fields, Filter blocks spam, Sheets logs the lead, Slack notifies.",
      qa: [
        {
          q: "Why I built this for my OWN freelance lead pipeline",
          a: `The lab's example payload — "Marcus needs help automating his invoicing" — is exactly the kind of inbound lead I'm about to start fielding once the bakery outreach goes out. The Zap I build today IS my own intake system. Real test, real future use.

Set up a form on my portfolio site (a simple Tally form I dropped behind a /freelance route) with three fields: name, email, project description. Form submissions hit a Zapier webhook. The webhook fires the Zap.

Now ANY inbound lead — from the form, from a Calendly intake, from a manual curl during testing — flows through the same pipeline. Single source of truth for "people who want to talk to me about work."`,
        },
        {
          q: "The 4-step Zap, end-to-end",
          a: `Trigger: Webhooks by Zapier → Catch Hook. URL pasted into the Tally form's webhook setting.

Step 1: AI by Zapier → "Prompt" action.

Prompt:
Extract structured information from this freelance inquiry.
Return JSON with exactly these keys: name, email, project_type, budget_signal, is_real_lead.

- project_type: one of "automation", "web_app", "ai_feature", "other"
- budget_signal: one of "stated", "implied_high", "implied_low", "missing"
- is_real_lead: boolean — true if this is a genuine inquiry, false if spam, link-shorteners, or unrelated text

Example:
Input: "Hi, I run a small bakery and I'd love help automating my custom order intake. Budget around $300."
Output: {"name":"","email":"","project_type":"automation","budget_signal":"stated","is_real_lead":true}

Input: {{trigger.message}}

Output gets parsed as JSON in the next step. Zapier handles the parsing automatically when I reference {{ai_step.project_type}} downstream.

Step 2: Filter by Zapier. Continue only if {{ai_step.is_real_lead}} equals "true". (Note: Zapier returns LLM booleans as strings, so I'm matching the string "true" not the boolean — caught this on the first test run where the Filter rejected everything because I was matching against the JS true.)

Step 3: Google Sheets → Create Spreadsheet Row in my "Freelance Pipeline" sheet. Columns: timestamp, name, email, project_type, budget_signal, raw_message, source.

Step 4: Slack → Send Direct Message to myself with a one-line summary:

🎯 New lead: {{trigger.name}} ({{ai_step.project_type}}, budget {{ai_step.budget_signal}})

End to end on a real test POST: ~6 seconds from webhook fire to Slack ding. Fast enough that I'd notice in real time.`,
        },
        {
          q: "Level 2 — sent a spam-shaped POST, watched the Filter stop it",
          a: `Two tests, side by side.

Test A (real lead):
curl -X POST -H "Content-Type: application/json" -d '{
  "name":"Marcus",
  "email":"marcus@example.com",
  "message":"I run a small bakery in Flagstaff and need help organizing custom cake orders. Right now I do everything in Instagram DMs and it is chaos. Budget around $300-500."
}' YOUR_WEBHOOK_URL

AI output:
{"name":"Marcus","email":"marcus@example.com","project_type":"automation","budget_signal":"stated","is_real_lead":true}

Filter passed → Sheet row added → Slack DM fired.

Test B (spam):
curl -X POST -H "Content-Type: application/json" -d '{
  "name":"Get rich",
  "email":"deals@spamsite.example",
  "message":"CLICK HERE for amazing crypto opportunity! 1000x returns!"
}' YOUR_WEBHOOK_URL

AI output:
{"name":"","email":"deals@spamsite.example","project_type":"other","budget_signal":"missing","is_real_lead":false}

Filter step rejected it ("is_real_lead" was the string "false"). Zap ended at the Filter. NO Sheet row, NO Slack ping. Just a "Filter did not pass" entry in Task History.

Two minutes of testing surfaced one bug — the boolean-as-string thing — that I might have shipped without catching. Worth doing the negative test EVERY time, not just the positive one.`,
        },
        {
          q: "Level 3 — what 'junk' looks like and how I guarded against it",
          a: `The AI doesn't always return clean JSON. Caught three categories of junk in testing:

1. Valid JSON wrapped in markdown code fences. Output starts with \`\`\`json and ends with \`\`\`. Zapier's parser then fails on the fence characters. Guard: refined the prompt to add "Return JSON only — no markdown formatting, no code fences, no explanation." Cut the rate of this junk from ~1 in 5 calls to 0 in 30.

2. Extra fields the prompt didn't ask for. Sometimes the AI adds "confidence": 0.8 or "reasoning": "..." even though I never asked. Doesn't break anything — Zapier just ignores fields I'm not referencing — but it bloats token usage. Guard: tightened the prompt: "Return ONLY these keys: name, email, project_type, budget_signal, is_real_lead. Do not add other keys."

3. Hallucinated field values. Once it returned "project_type":"automotive" (close to "automation" but wrong). Once it returned "budget_signal":"medium" (not one of my four enum options). Guard: added a downstream Formatter step that maps unknown values to safe defaults. project_type → "other" if not in my enum. budget_signal → "missing" if not in my enum. is_real_lead → false (the safe default) if not the string "true".

The Formatter step is the part I'm proud of. It's the equivalent of input validation in a real API — never trust the model's output to be in the shape I asked for. Even with a well-tuned prompt and one-shot example, LLMs drift. Belt-and-suspenders defensive coding.

Going to write this up as a Zapier pattern doc in my notes — "AI output validation" — for future reference. Probably going to need it again on every AI-driven Zap I build.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Build Your Sellable Workflow (the Bakery Order Management)",
      description:
        "Two Zaps that together solve the three-channel chaos from yesterday's pitch. $300 flat, owner owns everything. This is the artifact I'll demo at coffee with the first bakery prospect.",
      qa: [
        {
          q: "Mapping yesterday's pitch to Zapier — two Zaps, three channels",
          a: `Yesterday I scoped this offering as "one order management system across three channels — custom orders, daily specials, wholesale." Today I built it.

The architecture is TWO Zaps, not one big one. Reason: the triggers are different shapes. Order intake fires on form submissions (irregular, customer-initiated). Daily specials posting fires on a schedule (regular, time-of-day-initiated). Trying to cram both into one Zap is a tortured design. Two clean Zaps are easier to maintain and easier to explain to a non-technical owner.

Zap 1 — Order Intake (custom + wholesale):
- One Tally form with conditional fields (custom cake / catering / wholesale)
- Submission triggers the Zap
- AI categorizes + extracts structured fields
- Filter blocks spam
- Sheet append + customer email confirmation + owner Slack/SMS

Zap 2 — Daily Specials Posting (scheduled):
- Schedule trigger (7am daily)
- Reads "Today's Specials" Google Sheet tab
- Formats the row into IG-ready text
- Posts to Instagram via Later or Buffer (depending on what owner uses)
- Updates a "today" page on the bakery's website via webhook

Two Zaps, three channels handled. Owner has ONE place to update specials each morning. ONE Sheet that's the source of truth for orders. Customer experience is unified even though the backend is two flows.`,
        },
        {
          q: "Workflow documentation (Phase 3 portfolio artifact)",
          a: `**Workflow Name:** Bakery Order Management (Three-Channel)

**For:** Small bakeries or cafés with substantial plant-based offerings, active Instagram (~1k-5k followers), and a custom-order side of the business. Currently fielding orders via Instagram DMs, texts, and gut-feel daily posting.

**Trigger 1 (Order Intake):** Tally form submission via Webhooks by Zapier → Catch Hook. Form has conditional fields for custom cake, catering, or wholesale.

**Trigger 2 (Daily Specials):** Schedule by Zapier → Every Day at 7am.

**Actions for Order Intake (in order):**
1. **AI by Zapier (Prompt)** → classify the order (custom-individual, catering, wholesale) and extract structured fields (date, item, dietary notes, customer contact)
2. **Formatter by Zapier** → normalize the phone number to E.164, format the date as ISO
3. **Filter by Zapier** → continue only if AI didn't flag as spam or incomplete
4. **Google Sheets → Create Row** in the "Orders" tab: timestamp, customer name, contact, order type, item, date needed, dietary notes, status=pending
5. **Email by Zapier → Send Outbound Email** to the customer with the order summary, expected confirmation timeline, and a "we'll reach out within 24 hours" note
6. **Slack (or SMS via Twilio) → Send Message** to the owner with the one-line summary

**Actions for Daily Specials (in order):**
1. **Google Sheets → Get Row** from the "Today's Specials" tab (owner updates this each morning before the Zap fires)
2. **Formatter by Zapier** → format the row contents into IG-ready text (emoji prefixes, line breaks between items, "available today only" tag)
3. **Buffer or Later → Schedule Post** to the bakery's Instagram (immediate or queued, depending on owner preference)
4. **Webhook → POST** to a small endpoint on the bakery's website that updates the "today" page (or, if no website, skip this step)

**What it does:** Turns "custom orders in DMs + daily specials posted manually + wholesale orders by text" into one form, one spreadsheet, one daily post pipeline. Owner updates specials in ONE place; the rest fans out automatically.

**Time saved per week (estimate):** 5-10 hours of admin labor across the three channels. At a $30/hour effective rate, that's $150-300/week of recovered owner time.

**What I'd charge:** **$300 flat, one-time. Owner signs up for Zapier under her own email, owns the Google Sheet, owns the Tally form. I configure, test together, hand over a 1-page setup doc + 30-min walkthrough video. No recurring fee to me.**

**Recurring cost to the owner (not me):** Zapier free tier handles ~100 tasks/month and might cover them. If volume requires, Starter plan is ~$19.99/mo. Tally and Google Sheets are free. Later/Buffer is free for low post volume or ~$25/mo for higher tiers. Owner's total recurring is somewhere between $0 and $50/mo — depending on their volume.`,
        },
        {
          q: "Level 3 — Basic tier vs Premium tier",
          a: `Two tiers, same baseline:

BASIC ($300 flat) — the two Zaps above. Order intake + daily specials posting. Owner owns everything, no recurring fee to me.

PREMIUM ($500 flat) — adds:
- **Wholesale recurring orders.** A third Zap that fires every Friday at 6pm, reads the "Wholesale Standing Orders" Sheet tab, generates the weekend production list, emails it to the owner. Eliminates the "wait, what do I owe Yoga Studio X this Saturday?" thought.
- **Customer rebook prompts for custom orders.** 8 weeks after a custom cake delivery, an automated email goes to the customer: "Hi [name] — your last cake was [item] for [event]. Anything coming up we could help with?" Soft re-engagement.
- **Weekly recap email.** Every Sunday at 8pm, a Google Sheets-driven email summarizes the week's orders, total revenue from the form-driven channel, and any flagged "needs review" items. Helps owner see the volume and ROI without opening the Sheet.
- **One round of 30-day post-launch tweaks included.** First month after handoff, I'm on call for one round of "actually can we change the email template?" or "the form field names should be different" requests. Reasonable scope, not unlimited.

Pricing logic: Premium adds one more Zap + the customer rebook automation + the recap report + 30-day support. The $200 price gap reflects roughly 4-6 hours of additional configuration work + the support window.

Both tiers stay one-time-only. No recurring fee to me at either tier. That's the consistent pitch.`,
        },
        {
          q: "What the Zapier build taught me about my own pricing",
          a: `Three things.

First, the bakery's actual usage probably fits in Zapier's free tier. Let me do the math:
- Custom orders: ~10/week × 4-step Zap = 40 tasks
- Wholesale orders: ~5/week × 4-step Zap = 20 tasks  
- Daily specials posting: 7 days × 3 tasks per fire = 21 tasks
- Total: ~80-100 tasks/month

Zapier's free tier is 100 tasks/month, with the limit lifting on the Starter plan at $19.99/mo. So most bakeries can run this on free tier indefinitely. The "$0 to $50/mo recurring" range I quoted is honest — for most bakeries it'll be $0.

Second, the email/SMS confirmation step is the cost-watching point. Email via Zapier is free (built-in). SMS via Twilio is ~$0.008 each. For 15 orders/week × 4 weeks = 60 SMS/month = ~$0.50/month. Not enough to matter. Email is the right primary channel anyway because cake customers expect a confirmation that includes order details, not a one-line SMS.

Third, my $300 price might actually be too cheap. The build is 1-2 weekends for the first customer, 4-6 hours for subsequent customers. If I price the FIRST one at $250 (with testimonial agreement) and subsequent ones at $400-500 after I have a case study, the per-hour rate climbs respectably. The cheap first sale is the investment in the case study.

What I'd NOT change: the no-recurring-fee model. Bakery margins are too tight for a recurring subscription to me. They'll happily pay $300-500 once. They won't pay $30/mo indefinitely. Pricing has to match the customer's tolerance, not just what I could charge in theory.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Compare Lab: Same Workflow in Make.com",
      description:
        "Rebuilt a 3-step slice of the bakery order intake in Make.com. Took 30 minutes flat.",
      qa: [
        {
          q: "What I built in Make.com",
          a: `Picked Make.com over Pipedream because the visual canvas is a genuinely different mental model from Zapier's linear flow. Pipedream would have just felt like "Zapier but I write JS in the steps" — interesting, but the comparison is less informative.

Built 3 steps (compressed version of the order intake Zap):
1. Webhooks → Custom webhook (same trigger pattern)
2. OpenAI → Create a chat completion (same classification + extraction call)
3. Google Sheets → Add a row

In Make.com, the steps appear as circular "modules" on a canvas, connected by visible arrows. You can branch by adding a Router module, which creates multiple downstream paths. The Filter equivalent is a "Filter" condition attached to a connection between modules.

Tested with the same curl POST I used for Zapier. Worked end-to-end on the second try (the first try, I forgot to map the JSON body fields and Make couldn't find them in the AI step's input).`,
        },
        {
          q: "The 3 sentences (for the verbal demo)",
          a: `**Which felt easier? Why?**
Zapier felt easier for the first 5 minutes — the linear step-by-step wizard tells you exactly what to do next, no decisions about layout. Make.com felt MORE POWERFUL after the first 15 minutes — the canvas view shows the whole workflow at once, and complex branching is visually clearer than Zapier's nested Paths. Trade-off: Zapier optimizes for "first Zap fast"; Make optimizes for "complex Zap legible."

**Which had better integrations for the specific case?**
Zapier had a direct Buffer integration; Make.com required me to use the generic HTTP module to call Buffer's REST API directly. For a developer that's fine — it's literally a POST request — but for a non-technical bakery owner who might one day want to peek at her own automation, Zapier's pre-built modules win. Both had identical OpenAI integrations.

**Which would I pick for this client, and why?**
For the bakery, Zapier. The owner is not a developer; she'll never touch the workflow herself, but if she ever wants a simple change (different email template, change the time of day the specials post fires), I want her to be able to ask another freelancer or her tech-savvy cousin to handle it. Zapier's UI is dramatically more approachable for that handoff. Make.com would be the right call for a workflow I knew I'd be maintaining myself in perpetuity, or one where the visual canvas would help explain a complex flow to a stakeholder.`,
        },
        {
          q: "What surprised me about the comparison",
          a: `Two things.

First — Make.com is meaningfully cheaper at scale. Their free tier is 1,000 operations/month vs Zapier's 100 tasks/month. Paid tiers are similarly priced but Make's "operations" are counted differently (a Router with 3 paths is 3 ops, but Zapier counts each step in the path). For the bakery's projected 80-100 tasks/month, both tools' free tiers would work. For a scaled version of the offering serving 10 bakeries from one account, Make would win on cost.

Second — the visual canvas changed how I designed the workflow. In Zapier, I built the Zap in a strict linear sequence because that's what the UI nudges you toward. In Make, I started thinking in branches earlier because the canvas made branching FEEL natural. The tool shapes the design.

Honest conclusion: I'd probably charge the same $300 flat regardless of which tool I used. But for THIS client, in THIS situation, Zapier is the right choice because of the handoff problem. The day I have a client who's technical enough to want to peek at the workflow themselves, I'd reach for Make.

The lab's framing is correct — nobody pays me to be a "Zapier expert." They pay me to pick the right tool. Knowing the landscape is what makes this a defensible price.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes walking partner through the bakery order intake Zap. Partner asked a real follow-up.",
      qa: [
        {
          q: "My 2-minute walkthrough",
          a: `Screen-shared Zapier with the Exercise 4 order intake Zap open in edit view. Pointed at each step in sequence.

"This is an order intake workflow for small bakeries. The trigger is a webhook — a customer fills out an order form on the bakery's site, the form fires a POST to Zapier, the Zap takes over from there.

Step one is the AI step. It classifies the order — custom cake, catering, or wholesale — and extracts structured fields from the free-text description. It also flags incomplete orders or obvious spam. The AI is doing what a human order-taker would do but in 2 seconds instead of 2 minutes.

Step two is a Formatter — normalizes the phone number to a standard format, parses the date string into a real datetime. Boring but necessary; downstream steps assume clean data.

Step three is a Filter — only continue if the AI didn't flag the order as spam or incomplete. If something's wrong, the Zap ends silently and the owner sees a 'needs review' flag in her dashboard.

Step four is a Sheets append — the order lands in her 'Orders' tab. That tab is the source of truth for everything — the customer's contact info, what they want, when they need it, status.

Step five is an email to the customer confirming receipt of the order, with the timeline for when she'll get back to them. Sets expectations cleanly.

Step six is a Slack ping (or SMS via Twilio depending on owner preference) to the bakery owner with a one-line summary of the new order.

End to end: customer submits the form, 6 seconds later they have a confirmation email, the owner has the order on her phone with the customer's info already structured. No more DM thread archaeology.

Who pays $300 for this: a small plant-based-friendly bakery that's currently fielding 10+ custom orders a week through Instagram DMs and texts. The pain is the unstructured, scattered communication. The fix is one form, one Sheet, one email confirmation. Recovers 5-10 hours of admin labor per week. Pays for itself in the first week."

Ended on the Zap's Task History view showing five successful test runs.`,
        },
        {
          q: "Partner's clarifying question and my answer",
          a: `Partner's question: "What if the AI extracts the wrong fields — gets the date wrong or misses an allergy note? You're going to bake the wrong thing."

My answer: "Real risk. Three layers of mitigation. First, the email confirmation that goes to the customer in step five SHOWS the extracted fields back to them. 'We got your order: chocolate cake, gluten-free, for Saturday May 30 at 2pm. Please reply if anything looks wrong.' If the AI misread the date or missed the gluten-free note, the customer catches it and replies. That's a human-in-the-loop without forcing the owner to be the human.

Second, the owner sees the full structured order in her Sheet AND the original raw message text. So when she reviews the order before baking, she's looking at both the AI's interpretation and the source. If she sees a mismatch, she fixes the Sheet and contacts the customer.

Third, the AI prompt is tuned to be CONSERVATIVE on extraction. If the customer wrote 'I think Saturday' or 'maybe May 30,' the AI flags the date as 'uncertain' rather than committing to one. The Filter step routes uncertain orders to a 'needs review' path where the owner gets a Slack ping instead of an auto-confirmation.

This is exactly the kind of constraint that justifies the $300 price for the Zapier version. At low volume (the bakery's reality), AI + human review catches 95%+ of issues. At 10x volume, that 5% becomes painful and the bakery would need a custom build with structured form fields (radio buttons for date, checkboxes for allergens) instead of free-text. Same upgrade-when-the-volume-justifies-it logic that the groomer pitch had."

What this answer demonstrated: I'm not selling AI as magic. I'm selling AI plus human-in-the-loop as the appropriate tool at the appropriate scale, with a clear honest path to upgrade if scale changes. That framing is more credible than overselling, and it sets up future sales.`,
        },
        {
          q: "What saying it out loud taught me",
          a: `Two things, both useful for the Phase 3 gate prep.

First, I had to make a SPECIFIC argument for why Zapier was the right choice for THIS client. The lab's framing is right — "Zapier expert" isn't a credential. "Picked the right tool for the right client" is. Saying it out loud forced me to articulate the trade in plain English, not just feel it in my head.

Second, when partner asked the wrong-extraction question, I had three layers of answer ready — mitigation, recovery, upgrade path. That layered structure is what makes a question feel HANDLED instead of dodged. The Phase 3 gate is going to ask harder questions than this. Getting comfortable with "yes that's a real risk, here's the mitigation, here's the recovery, here's when it stops being acceptable" is the skill.

Recording this format in my notes: when challenged on a system's limits, answer in three layers — what prevents it normally, what catches it when prevention fails, what changes the architecture when failure becomes too frequent. That's the engineering shape of a credible answer.`,
        },
      ],
    },
    {
      heading: "Going Deeper",
      description:
        "Picked the self-host one because the recurring-fee escape hatch matters for personal projects. Noted the other three for later.",
      qa: [
        {
          q: "Self-hosted automation — rebuilt the daily specials posting as a Node.js cron job",
          a: `Wrote a Node.js script that does exactly what the "daily specials posting" Zap from Exercise 4 does — reads from a Google Sheet at 7am, posts the daily specials to Instagram, updates the website's "today" page. Deployed it on Replit's free tier.

// index.mjs
import cron from 'node-cron'
import { google } from 'googleapis'
import fetch from 'node-fetch'

// every day at 7am
cron.schedule('0 7 * * *', async () => {
  const specials = await fetchTodaysSpecials() // Google Sheets API
  
  const igText = formatForInstagram(specials)
  await postToInstagram(igText) // via Buffer/Later API or direct IG Graph API
  
  await fetch(\`https://\${process.env.BAKERY_DOMAIN}/api/today\`, {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${process.env.WEBSITE_TOKEN}\` },
    body: JSON.stringify({ specials }),
  })
  
  console.log(\`Posted \${specials.length} specials at \${new Date().toISOString()}\`)
})

What's good about this vs Zapier:
- ZERO recurring fees beyond the Instagram scheduler (if used). Replit's free tier hosts the cron forever.
- Full code control — I can change the IG template, add personalization, handle special cases (Mondays only post savory items, weekends post sweets), all in JS.
- Version control — git, branches, rollback. Zapier has none of that.
- Logs in Replit's console. Better debugging than Zapier's task history.

What's bad about it:
- Replit's "always-on" requires a paid tier ($7/mo for Hacker plan). Free tier shuts down on inactivity, which would mean missed cron triggers. Workaround: external uptime ping every 5 minutes to keep it alive. Janky.
- Instagram Graph API setup (Facebook Business account, app review, access tokens) is a setup tax that Zapier's Buffer integration hides.
- Non-technical bakery owner can't change anything herself.

When I'd use this over Zapier: my OWN automations, where I want zero recurring fees and full control. For client work like the bakery pitch, Zapier wins on handoff and maintenance.

Putting this in my freelance pricing logic: when a bakery asks "can you make it even cheaper than $300," the honest answer is "yes — I can write the same thing as code and host it on Replit for free, but if it breaks YOU can't fix it. The $300 is partly insurance and partly the documentation handoff." Some clients pick the cheaper option knowing the trade. Most happily pay for the structure.`,
        },
        {
          q: "Pipedream's code-first approach — noted, not built",
          a: `Spent 10 minutes reading Pipedream's docs and the quickstart. The pitch is "Zapier shape, but every step is JavaScript by default." You CAN use their pre-built integrations as no-code drag-and-drop, but the killer feature is writing arbitrary JS in any step.

What it'd be good for: workflows I'd build for myself, where I want the no-code triggers (webhooks, schedules, integrations) without giving up the ability to write actual logic. Better than self-hosting Node because Pipedream handles the cron and the hosting.

What it'd be bad for: client work. The "your client's automation is JavaScript files" pitch is a non-starter for a bakery owner.

Not building it today — the Make.com comparison from Exercise 5 already covered the "compare Zapier to another tool" muscle. Pipedream would mostly re-prove the same lesson. Saved as a "next time I need a personal automation" tool.`,
        },
        {
          q: "MCP server exposure — Phase 4 capstone preview territory",
          a: `Read the lab's note. The pitch: take a Zap-shaped workflow and expose it as a tool that an AI agent (like Claude or ChatGPT with tools enabled) can call directly via the Model Context Protocol.

That's a whole different level of system. Instead of a human filling out a form and a Zap firing, the human ASKS THEIR AI "can you order a custom cake from [bakery] for next Saturday" and the AI calls my MCP server, which calls the same order intake logic.

Not touching this today. It's listed as "Phase 4 capstone preview territory" — meaning it's a topic that comes back. Noting it for Phase 4. The skills I'd need: expose an HTTP endpoint that speaks MCP's JSON-RPC dialect, register the endpoint with a server, handle the tool-call semantics. Real but big.

What I want to remember about it for now: the no-code automation I built today (Zapier) and the code-based automation (Node.js cron) and the MCP-exposed automation are three points on the same axis. Each one trades off control vs ease-of-handoff differently. MCP gives the agent itself the ability to invoke the workflow, which is the highest-control + lowest-ease case so far.

Going to come back to this in Phase 4. Today's job is to get the no-code muscle reps in.`,
        },
        {
          q: "Steal a community Zap — found a clever Path pattern",
          a: `Browsed Zapier's templates section, looking for ones with non-obvious Path or Filter logic.

Found one for ROUTING SUPPORT TICKETS by priority + topic combination. The clever pattern: instead of a single Paths step with 6 branches (urgent-billing, urgent-technical, urgent-general, normal-billing, etc.), the author used TWO sequential Paths steps:
- First Paths: branch on priority (urgent / normal)
- Second Paths (inside each priority branch): branch on topic (billing / technical / general)

Why this is better than a flat 6-branch Paths:
- Easier to read in the Zap editor — the flow reads top-to-bottom as "first decide priority, then decide topic"
- Each branch is responsible for ONE decision, which is easier to debug
- Adding a new topic only requires changing the second-level Paths, not adding a 7th flat branch

Going to use this pattern in the bakery order intake Zap when I add tiered handling (custom cake → individual review vs catering → bulk pricing path vs wholesale → recurring-order add-on). Two stacked Paths steps will be clearer than one fat Paths with all the combinations.

This is the kind of pattern I wouldn't have invented on my own. The community templates are a free education in how no-code experts think about flow design. Bookmarking three more to study this week.`,
        },
      ],
    },
  ],
};
