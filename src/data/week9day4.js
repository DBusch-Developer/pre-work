export const week9day4 = {
  number: 32,
  label: "Day 4",
  title: "Week 9, Day 4 — Contracts, Proposals, and the Document That Gets You Paid",
  subtitle:
    "Wrote a complete proposal for the bakery offering using yesterday's honest pricing. Peer-reviewed, identified 12 red flags in the bad contract, revised based on feedback. Solid first draft, not perfect — Week 10 mock client will surface what's still vague.",
  color: "#1e40af",
  sections: [
    {
      heading: "Exercise 1 — Write Your Proposal",
      description:
        "Wrote the full bakery order management proposal using the template. Hit Level 3 — two pricing tiers (Basic $700, Premium $1,200), Why Me section, every template field filled in. This is the doc I'd send next week to the first bakery prospect.",
      qa: [
        {
          q: "The proposal — front matter and Problem Statement",
          a: `**PROPOSAL: Bakery Order Management — Setup & Handoff**

*Prepared for:* [Bakery Name]
*Prepared by:* Diana Busch
*Date:* [Date of send]

---

**1. Problem Statement**

[Bakery Name] currently handles custom cake orders, catering inquiries, and wholesale requests across three disconnected channels — Instagram DMs, text messages, and gut-feel daily posting. Each order takes 4-5 back-and-forth messages to confirm. Daily specials get posted manually to Instagram every morning. Wholesale standing orders live in text threads.

The cost: roughly 7-13 hours per week of administrative work spread across three places, none of which talk to each other. At an effective hourly value of $30/hour, that's $200-400/week of owner time spent on coordination instead of baking, customer service, or growing the business. Annualized, that's $10,000-$20,000 of recoverable owner time.

The bigger cost is harder to measure: missed custom orders, delayed responses to catering inquiries (which often have tight timelines), inconsistent Instagram presence, and the mental load of being the only "database" for every active order in the bakery.

(For the lab's purposes I'm writing this against a hypothetical bakery client — the lab calls this the "hypothetical with grounded research" path. When I send the real version, the brackets get replaced with the actual bakery name and specific details from my outreach conversation.)`,
        },
        {
          q: "Section 2 — Proposed Solution",
          a: `**2. Proposed Solution**

I will build an integrated order management system that consolidates all three channels into one organized pipeline, using Zapier, Tally, Google Sheets, and Buffer (or Later) for Instagram scheduling. This solution will:

- Provide a single web-based intake form for custom cake, catering, and wholesale order requests
- Automatically classify each order and extract structured details (date, headcount, dietary requirements, contact info) using AI
- Route high-priority orders (catering, urgent custom) directly to the owner via Slack or SMS for immediate attention
- Send automated, branded confirmation emails to customers with order summaries and response timelines
- Log every order to a Google Sheet that becomes the bakery's source of truth — searchable, sortable, exportable
- Publish daily specials to Instagram and update a "today" section on the bakery's website from a single morning update

The bakery will own every component after handoff: the Tally form, the Google Sheet, the Zapier account, all configurations. There is no ongoing dependency on me to operate the system.

Tools used: Zapier (workflow orchestration), Tally (intake form), Google Sheets (database), Buffer or Later (Instagram scheduling), Slack or Twilio (owner notifications). All standard, well-documented tools the bakery can continue using indefinitely.`,
        },
        {
          q: "Section 3 — Deliverables",
          a: `**3. Deliverables**

| # | Deliverable | Description |
|---|---|---|
| 1 | Tally Intake Form | Branded form with conditional fields for custom cake, catering, and wholesale orders. Hosted on Tally's free tier. URL provided for the bakery to link from their site, Instagram bio, etc. |
| 2 | Order Intake Zap | 8-step Zap including AI classification, error-handling Path, AI extraction of category-specific fields, Formatter for phone/date normalization, Sheet append, customer confirmation email, owner notification. Live in the bakery's Zapier account. |
| 3 | Daily Specials Zap | 4-step scheduled Zap that fires at 7am daily, reads from a "Today's Specials" Sheet tab, posts to Instagram via Buffer/Later, and updates the bakery's "today" page via webhook. |
| 4 | Google Sheet Template | Configured Sheet with Orders tab (structured columns for date, customer, item, dietary notes, status), Today's Specials tab (for the daily morning update), and Wholesale Standing Orders tab (Premium tier only). |
| 5 | Customer Confirmation Emails | Branded email templates that fire automatically on form submission. Three variants — one each for custom, catering, wholesale orders. |
| 6 | Owner Notification Configuration | Slack DM or SMS via Twilio (owner picks) firing on every new order, with high-priority flagging on catering and urgent custom orders. |
| 7 | 1-Page Setup Documentation | Written guide explaining how each component works, how to make common changes (email template tweaks, time-of-day adjustments, adding new daily specials), and where to find logs when something goes wrong. |
| 8 | 30-Minute Walkthrough Video | Recorded video session covering the live system, how to use it day-to-day, and answers to questions the bakery owner has during the walkthrough. |

Each deliverable is verifiable: the bakery owner can confirm the Tally form exists by visiting its URL, confirm the Zaps exist by logging into Zapier, confirm the Sheet structure by opening it, etc. There is no "trust me, it works" component.`,
        },
        {
          q: "Section 4 — Timeline",
          a: `**4. Timeline**

| Phase | What Happens | Duration |
|---|---|---|
| Phase 1 | Setup and configuration (Zapier account, Tally form, Google Sheet template, Buffer/Later account if needed) | 2 working days |
| Phase 2 | Core build (both Zaps configured end-to-end, AI prompts tuned, error-handling paths added, customer email templates drafted) | 4 working days |
| Phase 3 | Testing and revisions (run real test inputs, iterate based on edge cases, incorporate up to 2 rounds of feedback from the owner) | 2 working days |
| Phase 4 | Delivery and walkthrough (final system live, 30-min walkthrough video session, 1-page documentation handed over) | 1 working day |
| **Total** | | **~9 working days (about 2 calendar weeks from acceptance)** |

**Client responsibilities during the timeline:**
- Phase 1 start: provide bakery name/branding details, Instagram credentials (or willingness to log in together), website "today" page URL or willingness to add one
- Phase 3 start: provide 3-5 sample order text examples from real DMs so I can validate the AI classification
- Phase 4 start: 30 minutes of availability for the walkthrough video session

If client responsibilities slip, project timeline slips by the same amount. (Defined upfront so neither of us is surprised by it.)`,
        },
        {
          q: "Section 5 — Pricing (two tiers, side-by-side)",
          a: `**5. Pricing**

Two tiers. Both are one-time setup fees. The bakery owns everything after handoff; there is no ongoing fee owed to me unless you opt into maintenance.

| | **Basic** | **Premium** |
|---|---|---|
| Setup fee | **$700** | **$1,200** |
| Order Intake Zap (custom + catering + wholesale) | ✓ | ✓ |
| Daily Specials Zap | ✓ | ✓ |
| Configured Google Sheet | ✓ | ✓ |
| Customer confirmation emails | ✓ | ✓ |
| Owner notifications (Slack or SMS) | ✓ | ✓ |
| 1-page documentation + walkthrough video | ✓ | ✓ |
| Wholesale Recurring Orders Zap (Friday production list email) | — | ✓ |
| Customer rebook prompts (8-week post-delivery emails) | — | ✓ |
| Weekly recap report (Sunday evening summary) | — | ✓ |
| Post-handoff support window | 14 days bug-fix | 30 days minor tweaks |

**Optional monthly maintenance: $100/month**

Includes weekly review of Zap History for errors, up to 2 minor change requests per month (email template tweaks, time-of-day adjustments), and priority response on issues (24-hour SLA). Cancel anytime with 7 days notice. Not required — the bakery can run the system indefinitely without it.

**Payment schedule:**
- 50% (Basic: $350, Premium: $600) due upon acceptance of this proposal
- 50% (Basic: $350, Premium: $600) due upon delivery of all deliverables (Phase 4 completion)

**Recurring costs paid directly by the bakery (not to me):**
- Zapier — free tier may suffice; Starter at ~$20/month if volume requires
- Google Workspace — likely already in place
- Buffer or Later for Instagram — ~$15-25/month, optional
- Tally — free tier handles typical bakery volume
- Twilio (if SMS rather than Slack notifications) — ~$1/month at typical volume

Estimated total recurring cost paid to third parties: $0-$50/month depending on volume and tool choices. None of this goes to me.

**First-customer discount:** $300 off (Basic becomes $400, Premium becomes $900) in exchange for a 30-day video testimonial documenting the system's actual impact. ONE customer at this discount; offer expires when accepted by the first signing client.`,
        },
        {
          q: "Section 6 — Terms and Conditions",
          a: `**6. Terms and Conditions**

**Revisions:** This proposal includes two (2) rounds of revisions after initial delivery. Additional revisions are billed at $75/hour with a 1-hour minimum per request.

**Change orders:** Any work requested outside the scope described above (additional Zaps, integration with new tools, custom website development, etc.) requires a written change order specifying additional timeline and pricing, agreed upon by both parties before any change-order work begins.

**Payment terms:** Payment is due within 14 days of invoice date. Late payments incur a fee of 1.5% per month (or the maximum permitted by Arizona law, whichever is less). Initial 50% must be received before work begins.

**Ownership:** Upon receipt of full payment, all deliverables (configurations, documentation, templates) become the property of [Bakery Name]. Until full payment is received, all work product remains the property of Diana Busch. The bakery retains the right to all operational data flowing through the system (customer orders, contact information, sales data) regardless of payment status — this is the bakery's data and is never mine.

**Cancellation:** Either party may cancel this agreement with 7 days written notice. Client is responsible for payment for all work completed up to the date of cancellation, prorated against the phase percentages above (e.g., Phase 1 complete = 22% of total fee, Phase 2 complete = 67%, etc.).

**Independent contractor:** This engagement is a one-time freelance services agreement. I am an independent contractor, not an employee. I am responsible for my own taxes, equipment, and tools.

**Reuse of patterns:** The general workflow patterns and templates I develop may be reused on similar engagements with other clients. Bakery-specific configurations, content, data, and customizations are exclusively yours.

**What's NOT included:**
- Payment processing or Stripe integration (available as a separate engagement, $300-500)
- Custom website development beyond the simple "today" page hook
- Customer support to the bakery's customers (remains the bakery's responsibility)
- Integration with existing POS systems (Square, Toast, etc.) beyond the configured workflow
- Ongoing customer relationship management or marketing campaigns
- Hosting, domain registration, or third-party tool subscription fees (Zapier, Buffer, etc. — these are paid by the bakery directly to those providers)

---

**Accepted by:**

Client signature: ___________________________   Date: ___________

Provider signature: ___________________________   Date: ___________

(Electronic signatures via DocuSign, HelloSign, or typed name + date in a shared Google Doc are acceptable under Arizona's UETA. For records purposes, accepted proposals are countersigned and stored in PDF form by both parties.)`,
        },
        {
          q: "Level 2 — The 'Why Me' section I added",
          a: `**Why Me**

I'm a full-stack developer based in Prescott who's spent the last six months building exactly the kind of system this proposal describes — Next.js + Postgres + AI integration on the technical side, Zapier + Google Sheets + Tally on the no-code side. My background includes backend work at a live-streaming startup (TypeScript, Redis, Kafka, PostgreSQL) and ongoing CS coursework at Yavapai College.

For this specific engagement, three things make me the right pick:

**I understand the customer base.** I've followed plant-based eating myself for years. I've placed custom orders at small plant-based food businesses. I know what plant-based customers DM about — cross-contact concerns, ingredient questions, last-minute event requests. That insight shapes the form fields, the AI extraction prompts, and the confirmation email templates in ways a generic freelancer would miss.

**I've built and tested this exact system.** I configured and tested a complete version of this offering in March-June 2026 as part of my AI-augmented builder program. The Zaps are not theoretical — they exist, they work, and they have been validated against test inputs.

**My pricing reflects honest math, not vibes.** I worked through the actual cost-floor and value-ceiling calculations for this offering. The price I'm quoting is at the low end of the market rate for similar engagements, calibrated to what the value math supports. I'm not the cheapest available freelancer, and I'm not the most expensive. I'm the one with a documented offering and a clear scope.

**My portfolio:** diana-busch.com — includes prior projects (Canvas Daily, FluxCore, PromptForge, Project Noah) and a written log of weekly progress.

If something I'm offering doesn't fit your situation, I'd rather we figure that out in a 15-minute conversation than after signing. I'm reachable at [phone] and [email].`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Peer Review: 'Would You Sign This?'",
      description:
        "Partner read the full proposal and filled in the checklist. Got honest feedback. Most sections passed; a few real gaps surfaced.",
      qa: [
        {
          q: "Partner's checklist results",
          a: `Partner read the proposal carefully. Here's what came back:

| Section | Clear? | Specific? | Notes |
|---|---|---|---|
| Problem statement | Yes | Yes | "Strong — the $10-20k annual labor cost number lands hard, but the bracketed bakery name is a tell that this is a template. Reads slightly less personal than it should." |
| Proposed solution | Yes | Yes | "Good. The 'bakery owns everything' framing is reassuring." |
| Deliverables | Yes | **Mostly** | "Deliverable #2 says '8-step Zap' but doesn't say WHICH 8 steps. What's the verifiable difference between a 7-step Zap and an 8-step Zap to the client?" |
| Timeline | Yes | Yes | "The client responsibilities section is good. Missing: what happens if Phase 1 finishes early — does Phase 2 start immediately or wait?" |
| Pricing | Yes | Yes | "The table comparison is clear. The first-customer $300 discount is good but buried at the end of the pricing section — consider moving it up." |
| Terms | Yes | Yes | "The 'reuse of patterns' clause is unusual but I like it — clarifies that you're not selling exclusivity for $700." |`,
        },
        {
          q: "Partner's six questions, answered honestly",
          a: `**After reading this, do you know exactly what will be built?**

Mostly yes. The 8-step Zap is the part I'd want more specificity on. The deliverable description says "8 steps" but doesn't enumerate them. If I'm the client and I'm paying $700, I want to see "Trigger: form submission. Step 1: AI classify. Step 2: error-handling Path. Step 3: AI extract..." in the deliverables table itself or in an appendix.

**After reading this, do you know exactly what it will cost and when payment is due?**

Yes. The pricing table + payment schedule + recurring-cost breakdown + "what's not included" list together leave no ambiguity. This section is strong.

**Is there anything missing that could lead to a misunderstanding?**

One thing: what happens if the AI classification quality is poor on the bakery's actual data? I'm promising AI extraction but haven't defined the quality bar. Should add a clause like "AI classification accuracy depends on the quality of the input text; in the case of unusual inputs, the system falls back to a manual-review path (documented in deliverables #2 and #6)."

**Would you sign this if you were the client? Why or why not?**

Yes. The price is reasonable given the scope, the ownership clause is fair, the timeline is realistic. The two things that would make me hesitate are the AI-quality question above and the bracketed [Bakery Name] which suggests this proposal hasn't been personalized to me yet. If the bracketed sections were filled in with my actual business name, I'd sign without further negotiation.

**What's the strongest part of this proposal?**

The "What's NOT included" list. It's specific (payment processing, custom website work, POS integration, customer support) and it sets expectations honestly. Most proposals omit this section. Including it builds trust.

**What's the weakest part?**

The deliverable specifications. They're MORE specific than typical freelance proposals but still not granular enough. The 8-step Zap should have its 8 steps named.`,
        },
        {
          q: "What this peer review surfaced that I would have missed",
          a: `Three things I'm going to fix in the revision pass (Exercise 4):

1. **Enumerate the 8 steps of the Order Intake Zap in deliverable #2.** Specificity is the point of a deliverables section. "8 steps" is vague; "AI classify → Path/Filter guard → Paths router → AI extract → Formatter → Sheet append → customer email → owner notification" is verifiable.

2. **Add an AI quality clause.** The peer reviewer is right — I'm making a promise about AI behavior without defining the failure mode. The error-handling Path I built in Day 3 is exactly the answer here, but it's hidden in deliverable #2's "error-handling Path" mention. Worth surfacing it as a separate clause: "AI classification quality is supported by an error-handling Path that routes unexpected outputs to manual review."

3. **Move the first-customer discount earlier in the pricing section.** Currently it's the LAST item under pricing. As written, the reader sees the $700/$1,200 prices first and might balk before reaching the discount. Moving it to right after the tier table makes the discount visible alongside the price.

The peer reviewer's comments are all surface-level fixes — no structural problems with the proposal. That's actually a good outcome for a first draft. Going to land the revisions in Exercise 4.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Red Flag Identification (Level 3: Find all + Rewrite)",
      description:
        "Found 12 distinct red flags in the bad contract. For each, wrote what the contract should say instead. Hit Level 3.",
      qa: [
        {
          q: "Red flag #1-4 — Scope, timeline, and the existential pricing problems",
          a: `**RED FLAG #1: "build us an automation system"**

What it is: No defined scope. "Automation system" is not a deliverable.

Why it's dangerous: Without a specific scope, the client will keep adding "just one more thing" forever and treat each request as already-included. You'll end up building three apps for the price of one.

What the contract should say instead: "I will build [specific deliverable list — e.g., a Zapier workflow with 6 specific actions, an intake form, a configured Google Sheet]." Each deliverable should be verifiable.

---

**RED FLAG #2: "we want everything automated -- emails, social media, data entry, reporting, the works"**

What it is: Unbounded scope masquerading as a description.

Why it's dangerous: "The works" is the freelancer's nightmare. The client will use that phrase to claim that anything you build is supposed to be there, and anything you HAVEN'T built is also supposed to be there.

What the contract should say instead: "The following automations are included: [enumerated list]. The following are NOT included: [enumerated list]. Work outside this scope requires a change order."

---

**RED FLAG #3: "We'll figure out the exact details as we go"**

What it is: Lock the price first, define the scope later.

Why it's dangerous: This is the most common scope-creep trap. The client locks in a price thinking they're getting "everything they need" and then expands "what they need" indefinitely. You can't push back because the contract says you're figuring it out together.

What the contract should say instead: "Scope is defined in Section 2 of this proposal as accepted. Any changes to scope after acceptance require a written change order with separate timeline and pricing."

---

**RED FLAG #4: "we need it done ASAP"**

What it is: No defined timeline. "ASAP" is the same as "no deadline I'm willing to commit to, but I reserve the right to blame you when it's late."

Why it's dangerous: Without a defined timeline, "late" is whenever the client gets impatient. They'll claim breach of contract over imaginary deadlines.

What the contract should say instead: "Timeline: Phase 1 — [X days]; Phase 2 — [X days]; Total — [X working days from acceptance]. Client responsibilities and dependencies are documented separately; client-side delays extend the timeline correspondingly."`,
        },
        {
          q: "Red flag #5-8 — Payment, revisions, and ownership traps",
          a: `**RED FLAG #5: "we'll pay you when we raise our next round of funding"**

What it is: Contingent payment with no guarantee of when (or if) it ever happens.

Why it's dangerous: You're doing real work in exchange for a maybe. The funding round might never close. Even if it does, "any day now" is what every founder says for 18 months before they shut down.

What the contract should say instead: "Payment schedule: 50% due upon acceptance, 50% due on final delivery. Payment is due within 14 days of invoice. Funding events are not a condition for payment."

---

**RED FLAG #6: "$500 for the whole thing"**

What it is: Underpricing relative to the scope ("everything automated").

Why it's dangerous: Even if you accept, you'll resent the job, deliver minimum quality, and damage your reputation with the very client you hoped would be a portfolio piece.

What the contract should say instead: Price aligned with cost floor + value ceiling math. For "everything automated" the real price is $5,000-15,000+, not $500. The discrepancy itself is a signal that the client doesn't understand what they're asking for.

---

**RED FLAG #7: "If we need changes later, those are included since the $500 covers everything"**

What it is: Unlimited revisions.

Why it's dangerous: Revisions never end. The client treats every "wouldn't it be nice if" as a covered request. You're trapped maintaining their system forever for the original lump sum.

What the contract should say instead: "Two (2) rounds of revisions are included after initial delivery. Additional revisions are billed at $[X]/hour with a 1-hour minimum per request."

---

**RED FLAG #8: "All work you do belongs to us from the moment you start, whether or not we end up paying"**

What it is: Ownership transfer before (and independent of) payment.

Why it's dangerous: You lose all leverage. If they decide not to pay, they still own the work. They can hire someone else to finish it, dispute your invoice, or just ghost you, and you have no recourse to retain the deliverables.

What the contract should say instead: "Upon receipt of FULL payment, all deliverables become the property of the client. Until full payment is received, all work product remains the property of the provider, including any drafts, configurations, and partial work."`,
        },
        {
          q: "Red flag #9-12 — Cancellation, restrictions, and access traps",
          a: `**RED FLAG #9: "either of us wants to cancel, no hard feelings -- but you can't use any of the work for other clients"**

What it is: Restrictive non-reuse clause with no compensation for it.

Why it's dangerous: The work you'd naturally template and reuse on the next client is now locked. You're essentially being paid for ONE engagement but giving up your ability to reuse patterns indefinitely. The economics of freelance development depend on pattern reuse — this clause kills that.

What the contract should say instead: "General workflow patterns and templates developed during this engagement may be reused on similar engagements with other clients. Client-specific configurations, content, and data remain exclusively the client's."

---

**RED FLAG #10: No cancellation compensation**

What it is: "Either of us wants to cancel, no hard feelings" — meaning if they cancel after you've built 80% of the project, you get nothing.

Why it's dangerous: Provides them with a free option to abandon the engagement after extracting most of the value.

What the contract should say instead: "Either party may cancel with 7 days written notice. Client is responsible for payment for all work completed up to the date of cancellation, prorated against the phase percentages defined in the timeline section."

---

**RED FLAG #11: "If you need to buy any software or tools to do this, that's on you"**

What it is: Cost-shifting to the freelancer for tools the client will benefit from indefinitely.

Why it's dangerous: Even small recurring costs add up. A $20/month tool over a year is $240, often eating into a thin margin. More importantly, the client owns the system but you're stuck paying for the infrastructure that runs it.

What the contract should say instead: "Client is responsible for all third-party subscription costs (Zapier, hosting, SaaS tools). Provider configures and integrates these tools using accounts in the client's name. Costs are paid by the client directly to the third-party providers, not through the provider."

---

**RED FLAG #12: "We'll give you access to our systems when we get around to it"**

What it is: Indefinite work-blocking dependency on the client.

Why it's dangerous: Without a defined start condition, the project clock starts when you sign but the work can't start until they grant access. They control the timeline now, and any timeline-related compensation for you is impossible to defend.

What the contract should say instead: "Client provides necessary system access and credentials within [X business days] of acceptance. Project timeline begins on the date all access is granted. Delays in granting access extend the timeline by the same number of business days."`,
        },
        {
          q: "What I'd actually say if someone sent me this email",
          a: `If I got this email from a real prospect, I'd reply with one short paragraph and walk away from the engagement.

The reply:

"Thanks for reaching out. The scope you described — 'everything automated' for $500, paid when funding closes — isn't something I can deliver responsibly. Most full automation systems I'd build land in the $2,000-8,000 range with defined deliverables and 50/50 payment terms. I'd be happy to talk if you want to scope a more specific project against a budget I can deliver on. Otherwise, I think you're better served by a different freelancer or by sharpening the scope before continuing your search."

No anger, no lecture. Just a clear "this isn't workable as described" with a door left open for a real conversation.

Walking away from a bad contract is a skill. It feels uncomfortable because saying no to a paying customer feels like saying no to money. But $500 from this client is going to cost more than $500 of my time, energy, and reputation. The real number is negative.

Going to keep this lab exercise's bad contract on file. Future me, when tempted by a too-good-to-be-true engagement, can re-read it and remember what a bad deal actually looks like.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Revise Your Proposal",
      description:
        "Made three revisions based on peer feedback + Red Flag exercise. Solid but not perfect — Week 10 mock client will surface what's still vague.",
      qa: [
        {
          q: "Revision 1 — Enumerated the 8 steps of the Order Intake Zap",
          a: `In deliverable #2, replaced "8-step Zap including AI classification, error-handling Path..." with the explicit step list:

> **#2 — Order Intake Zap (8 steps)**
>
> 1. Trigger: Tally form submission via Webhooks by Zapier
> 2. AI by Zapier — classify order as custom / catering / wholesale / spam
> 3. Paths router (error-handling) — route unexpected AI outputs to manual review email
> 4. Paths router (category) — branch into Custom / Catering / Wholesale flows
> 5. AI by Zapier — category-specific field extraction (date, headcount, dietary, etc.)
> 6. Formatter by Zapier — normalize phone numbers and parse dates
> 7. Google Sheets — append to Orders tab with structured fields
> 8. Customer confirmation email AND owner notification (Slack or SMS)
>
> Each step is configured, tested, and visible in the bakery's Zapier account after handoff.

The 8 steps are now verifiable. A client reading this knows exactly what they're buying. If I deliver a 6-step Zap and call it "the 8-step Zap," they'll catch it.`,
        },
        {
          q: "Revision 2 — Added the AI quality clause",
          a: `Added a new clause under Section 6 — Terms and Conditions:

> **AI quality boundary:** AI classification and extraction quality depends on the clarity of the input text from customers. The Order Intake Zap includes an error-handling Path (deliverable #2, step 3) that routes unexpected AI outputs to manual review via email rather than letting them flow to the Sheet or customer-facing actions. In practice, AI handles roughly 95% of typical bakery inputs cleanly; the remaining 5% surface to manual review. This is the documented behavior, not a defect. If the bakery's actual input volume shows higher manual-review rates, that triggers a Phase 3 revision (included in the original scope) to tune the AI prompts against real bakery data.

This clause does three things at once: sets the expectation honestly, ties the fallback behavior to a specific deliverable, and defines what "this needs adjustment" looks like (which is included in the original revision count, not a change order).

The peer reviewer's catch was real. Without this clause, "AI extraction" sounds magical. With it, the boundaries are documented and the failure mode is paid for.`,
        },
        {
          q: "Revision 3 — Moved the first-customer discount up",
          a: `In Section 5 — Pricing, moved the first-customer discount paragraph from the BOTTOM of the section to immediately AFTER the tier comparison table, before the payment schedule.

The new ordering:
1. Two-tier pricing table (Basic $700 / Premium $1,200)
2. **First-customer discount of $300** (moved up — Basic becomes $400, Premium becomes $900)
3. Optional monthly maintenance ($100/mo)
4. Payment schedule (50% / 50%)
5. Recurring third-party costs paid by the bakery

The peer reviewer's logic was right: a prospect reading the proposal sees the price first. If it lands as too steep, they might disengage before reaching the discount. Moving the discount up softens the initial sticker reaction and makes the negotiation surface visible immediately.

One subtle thing the move does: it signals that the bakery being approached is a CANDIDATE for the first-customer slot. That's flattering — implicitly says "you're early enough to get the discount" — without me having to claim it explicitly.`,
        },
        {
          q: "What I deliberately did NOT change (and why)",
          a: `Three things the peer reviewer flagged that I'm intentionally leaving:

**1. The bracketed [Bakery Name] placeholders.** These are TEMPLATE artifacts — the proposal isn't sent to anyone yet. When I customize for a real bakery, the brackets get filled in with the actual business name and details from my outreach conversation. Leaving them visible in today's draft is correct; eliminating them prematurely would either bake in a wrong name or hide the customization step from future me.

**2. The Phase 1/Phase 2 transition question** ("does Phase 2 start immediately or wait?"). The peer reviewer asked whether early completion of Phase 1 means Phase 2 starts immediately. My answer is yes — there's no waiting in this engagement. But adding a clause for it would be over-engineering. If a real client asks during the proposal review, I can answer in that conversation. Defaulting to "the proposal doesn't need to anticipate every possible question."

**3. Independent contractor / tax responsibilities clause.** Currently a single sentence in Section 6. Could be expanded to a paragraph covering 1099 reporting, sales tax (Arizona doesn't tax most services but I should know my state), etc. Holding off because (a) the client doesn't care about my tax handling and (b) this proposal is for engagements under $5,000 where the lab template's level of detail is appropriate. For larger engagements I'd consult an accountant before drafting.

The lab framing is right: don't try to make today's proposal perfect. Make it solid. The Week 10 mock client session will surface what's still vague, and I'll iterate before the Phase 3 gate.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "Read deliverables out loud. Partner asked the 'would you sign off and pay' question. Surfaced one real ambiguity.",
      qa: [
        {
          q: "My 2-minute pitch + deliverables read-aloud",
          a: `Screen-shared the proposal with deliverables section visible. Walked through the four pitch beats first, then read deliverables verbatim.

"The scope is a bakery order management system. Two Zaps — one for order intake from a single web form covering custom cakes, catering, and wholesale; one for daily specials posting from a Google Sheet to Instagram and the bakery's website.

The deliverables are eight items in total — a Tally intake form, an 8-step order Zap with named steps, a 4-step scheduled specials Zap, a configured Google Sheet, customer confirmation emails for three order types, owner notifications via Slack or SMS, a 1-page setup doc, and a 30-minute walkthrough video session.

The price is $700 for Basic, $1,200 for Premium. First customer gets $300 off in exchange for a video testimonial after 30 days. 50% on acceptance, 50% on delivery. Optional $100/mo maintenance.

Timeline is about two calendar weeks from signing — nine working days split into four phases: setup, build, testing, delivery.

Now let me read the deliverables exactly as written, and then I want you to tell me if you'd sign off and pay if I delivered exactly that:

1. Tally Intake Form — branded form with conditional fields for custom cake, catering, and wholesale orders. Hosted on Tally's free tier. URL provided for linking from the bakery's site, Instagram bio, etc.
2. Order Intake Zap — 8 named steps: trigger, AI classify, error-handling Path, category Paths, AI extract, Formatter, Sheet append, customer email and owner notification. Live in the bakery's Zapier account.
3. Daily Specials Zap — 4-step scheduled Zap. Fires at 7am daily. Reads from a Today's Specials Sheet tab, posts to Instagram via Buffer or Later, updates the bakery's today page via webhook.
[... continued through all 8 deliverables ...]

Would you sign off and pay if I delivered exactly that?"`,
        },
        {
          q: "Partner's answer and the one ambiguity it surfaced",
          a: `Partner's answer:

"Yes, I'd sign off and pay — with one specific exception. Deliverable #3, the Daily Specials Zap. You said it 'updates the bakery's today page via webhook.' But the bakery's website is whatever the bakery's website is — Squarespace, Wix, custom, Shopify, whatever. The webhook only works if the website CAN receive webhooks. If the bakery's site is a static Wix or Squarespace where I can't add an arbitrary endpoint, then the 'updates the today page' part of deliverable #3 doesn't ship.

Right now the deliverable doesn't specify what happens when the bakery's website can't accept a webhook. Are you not building that piece in that case? Are you doing something different? Are you charging differently? It's ambiguous.

If I were the client and my site couldn't accept webhooks, I'd assume one of two things: (a) you'd find a way to make it work, OR (b) you'd refund me proportionally for the missing piece. Either is fine but you have to pick and document it."

This is a real catch. The proposal assumes the bakery has a website that can accept webhooks. Some bakery websites can; many can't.

My fix going into the revision (carrying forward to Week 10):

> **Deliverable #3 contingency:** Updating the bakery's "today" page via webhook requires that the bakery's existing website can accept an authenticated webhook endpoint. If the bakery's site is a fully managed platform without webhook support (e.g., certain Squarespace/Wix configurations), this part of the deliverable is replaced with: (a) instructions for the owner to manually paste the day's specials into a Squarespace/Wix text block from the same Sheet source, OR (b) discount the engagement by $100. Client picks at Phase 1 review.

Now the deliverable has a documented contingency for the website constraint. The client knows what they're buying in either case.

The partner's question is the kind of edge case the Week 10 mock client is going to surface in volume. This one was free.`,
        },
        {
          q: "What saying the deliverables out loud taught me",
          a: `Two things.

First — reading the deliverables aloud is dramatically different from reading them silently. Saying "Tally intake form with conditional fields" out loud forces me to hear how it lands. The 8-step Zap section was the right length when I wrote it; it felt long when I said it. Considering whether to abbreviate to "8 named steps as documented" in the read-aloud version while keeping the full list in the written proposal. Same proposal, different presentation depending on the medium.

Second — the partner's catch (the webhook contingency) is exactly the kind of thing a real client would catch on their first read. NOT because clients are sophisticated about webhooks — they aren't — but because clients ARE sophisticated about "this assumes something about my situation that you haven't confirmed." Anyone listening to a proposal hears the assumptions. The webhook assumption was invisible to me; it was glaring to the partner.

Going to add a "verify assumptions about the client's environment" checklist to my proposal-writing process. Before sending the next version of this proposal to a real bakery, the questions I should already have answered are: What platform is their website on? Do they have an Instagram Business account or personal? Do they already use a scheduler like Buffer/Later? Do they have a Zapier account? Is their Google Workspace personal or business? Each "I don't know yet" is a contingency clause I need to add or a discovery-call question I need to ask.

The Phase 3 gate verbal will reward this kind of explicit assumption mapping. Building the muscle now.`,
        },
      ],
    },
    {
      heading: "Going Deeper",
      description:
        "Did the delivery email — most practically useful for next week's outreach. Brief notes on the other two.",
      qa: [
        {
          q: "Delivery email — the actual email I'd send with the proposal attached",
          a: `Drafting as a template. The bracketed sections customize per bakery.

---

**Subject:** Proposal: Order Management System for [Bakery Name]

Hi [first name],

Thanks again for the conversation at [coffee shop / over email] last week. Following up with the proposal we discussed.

Attached is the full document — eight deliverables, two pricing tiers, payment schedule, timeline. The short version:

- Custom cake, catering, and wholesale orders flow into one form, one Sheet, one set of notifications
- Daily specials publish to Instagram and your website from one morning update
- $700 Basic or $1,200 Premium, one-time, plus optional $100/mo maintenance
- First-customer discount of $300 if you'd be open to a 30-day video testimonial after launch
- Timeline is about two weeks from when we sign

Take your time with it. If you have questions or want to walk through anything, I'm available for a 30-minute call this week or next — easiest way to grab time is to text me at [phone] or reply to this email with a few options that work.

If everything looks good, the next step is signing the proposal (electronic signature works fine) and processing the 50% deposit. Then I get started.

Looking forward to your thoughts. Whatever direction you go, thanks for taking the time to consider this.

Diana
[phone] · diana-busch.com

---

What I'm doing in this email:
- **Subject line** specific to the recipient (their bakery name) — makes it easy to find later and signals the document is personalized.
- **First paragraph** references the prior conversation. Doesn't restart from cold.
- **Bullet summary** because most people will skim the email first, then open the attachment if interested. The bullets are the elevator pitch of the proposal.
- **Pricing in the bullets** — no surprises when they open the doc.
- **"Take your time"** — explicitly removes urgency, which counterintuitively makes the next step feel less risky.
- **"30-minute call"** as the soft next step. NOT "schedule a discovery call" (sounds like a sales funnel). Just a friendly offer to talk.
- **Specific next-step instructions** at the end. Some readers want to know exactly what happens if they say yes. The "sign + 50% deposit" sentence is the answer.
- **"Whatever direction you go"** is the soft permission to say no. Maintains the relationship even if they pass.
- **No P.S. with fake urgency.** No "this discount expires Friday" pressure tactics. The first-customer discount IS time-limited (offer expires when first signed), but I'm not using it to manufacture pressure.

Total email length: under 200 words. Reads in 60 seconds. Doesn't sound like a sales template.`,
        },
        {
          q: "Three-template comparison — briefly noted",
          a: `Compared today's proposal template against three real templates I found online: Upwork's template recommendation, Bonsai's free contract generator, and an AI-generated template from ChatGPT.

Differences worth noting:

**Upwork's recommended pattern** emphasizes payment milestones tied to Upwork's escrow system. Not useful for direct freelance engagements outside their platform, but the milestone structure (release payment as each phase completes) is a pattern worth borrowing for engagements over $2k.

**Bonsai's template** has more legal-heavy boilerplate (force majeure, indemnification, dispute resolution venue specified). Better for higher-stakes engagements; overkill for $700 one-time. Their dispute resolution clause specifying Arizona courts as the venue is actually a smart copy for me.

**AI-generated (ChatGPT)** template was generic and read like a corporate procurement doc. Lots of "the Party of the First Part shall..." language that doesn't fit a freelance engagement. Cleaned-up version was OK but no better than today's lab template.

Today's lab template is well-calibrated for the engagement size ($700-1,200 small freelance work). Going to keep it as the base. For engagements over $5k I'd start from Bonsai and adjust.`,
        },
        {
          q: "One-page summary version — for cold outreach (not a full proposal)",
          a: `The lab notes this is "different audience, different goal — the summary needs to sell, not protect." Wrote a 1-pager I can attach to cold outreach emails as a low-friction "here's what I do" doc, separate from the full proposal.

---

**Bakery Order Management — How It Works**

*Diana Busch — diana-busch.com*

If your bakery handles custom cake orders, catering inquiries, or wholesale requests through Instagram DMs and text messages, this is for you.

**The problem:** Custom orders take 4-5 back-and-forth messages to confirm. Daily specials get posted manually each morning. Wholesale orders live in text threads. Total cost: 7-13 hours of admin work per week, scattered across three channels that don't talk to each other.

**The solution:** One order form, one Google Sheet as your source of truth, automated customer confirmations, and one-source daily specials posting. The bakery owner updates today's specials in ONE place each morning; the system publishes to Instagram and the website automatically.

**Setup pricing:**
- Basic: $700 one-time
- Premium: $1,200 one-time (adds wholesale automation, customer rebook prompts, weekly recap reports, 30-day support)

**Optional ongoing:** $100/mo maintenance — monitoring, minor changes, priority support. Not required.

**What you keep:** Everything. The form, the Sheet, the Zapier account, the configurations. No ongoing dependency on me.

**What I need from you to scope it:** 15 minutes to walk through your current order flow and confirm the system fits.

Reply to this email or text [phone] to grab a slot.

---

Different doc from the full proposal. The proposal is for a client who's READY to sign. The 1-pager is for a prospect who's curious and wants to know what they'd be saying yes to before scheduling a discovery call. Both have their place.`,
        },
      ],
    },
  ],
};
