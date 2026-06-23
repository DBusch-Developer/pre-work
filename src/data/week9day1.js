export const week9day1 = {
  number: 29,
  label: "Day 1",
  title: "Week 9, Day 1 — Spotting Automatable Pain Points in Real Businesses",
  subtitle:
    "Three real Prescott businesses with identifiable pain points. Stress-tested, competitor-researched, and priced. Plus the cold-outreach draft I'll send next week.",
  color: "#d97706",
  sections: [
    {
      heading: "Exercise 1 — Identify 3 Real Businesses",
      description:
        "Three Prescott-area businesses I've personally noticed have specific, automatable pain points. Picked them from observation, not from a Yelp scrape.",
      qa: [
        {
          q: "Business 1 — Small plant-based bakery/café in Prescott",
          a: `What they do: Solo-owner or two-person operation. Plant-based baked goods, sandwiches, daily specials. Roughly 15-30 walk-in customers a day. Active Instagram (~1,500 followers) where they post daily specials and accept custom cake orders via DMs.

The pain point: Custom orders happen ENTIRELY through Instagram DMs and text messages. The owner takes the order in DMs, writes it on a sticky note or in a paper notebook, transcribes it to a calendar, confirms by DM, sends reminder by text the day before, takes payment in person on pickup. Five touchpoints, three different surfaces (Instagram, text, paper), zero of which talk to each other. I've watched the owner squint at her phone trying to find a thread from three days ago to confirm a cake order.

The evidence: I'm a regular. I've placed two custom orders myself — both via DM, both involved at least 4 back-and-forth messages to confirm details. I've seen the owner do this with two other customers while I was sitting at the counter. The Instagram bio doesn't have an order link because there isn't one — the bio is just "DM us to order."

The solution: A simple custom-order intake form (a Next.js app, or even a Tally/Typeform if I want to ship in a day) hosted at a "order.thebakery.com" subdomain. Form captures: customer name, pickup date, item type, special requests, dietary notes, contact info. On submit: form sends confirmation email to customer AND a Slack/SMS notification to the owner with the order summary. Order shows up in a single dashboard sorted by pickup date.

The budget question: Tight. A small bakery probably nets $3-5k a month after costs. Spending $50/mo on a tool is plausible IF I can show it saves 5+ hours a week of DM management. Spending $500 upfront for a custom build is harder — but possible if I frame it as "you build it once, you own it, no recurring fee." Probably the realistic sweet spot is $400-600 one-time + $20/mo for hosting and a low-volume email service.`,
        },
        {
          q: "Business 2 — Solo mobile dog groomer in Prescott/Prescott Valley",
          a: `What they do: One-person mobile pet grooming. Drives a converted van to clients' homes, grooms one to four dogs per day. Books via phone or Facebook Messenger. Prescott has a LOT of these — semi-retirees with dogs, big yards, no interest in driving the dog into town.

The pain point: Booking is phone-tag. The groomer is mid-groom, can't pick up. Calls back at end of day. Customer's now busy. Voicemails pile up. Customer goes with whoever calls back first. The groomer's also losing money on no-shows — drives 25 minutes out to a client who forgot the appointment, can't get reimbursed for the gas.

The evidence: A neighbor uses one and complained about it at a HOA mixer. She literally said "I'd love to just book online but she only takes calls." Pulled up the groomer's Facebook page on my phone — no online booking link, just "Call to book!" with a phone number. The reviews are 5-star (people love the actual service); the complaints in the comments are all about scheduling friction.

The solution: A booking system. Calendar + SMS reminders + a deposit field to reduce no-shows. The groomer blocks off her availability in advance; customers book a slot online; the system sends a confirmation SMS immediately, a reminder 24 hours before, and another 2 hours before. Optional 25% deposit at booking that's refundable up to 48 hours before — kills no-shows almost entirely.

The budget question: Better than the bakery. A solo groomer booking 4 dogs/day at $80 each is doing ~$1,600/week gross. If I reduce no-shows by even one per week, that pays for the tool. $50-100/mo is plausible. $1,000-1,500 one-time build is realistic if I bundle the booking system with a simple customer database. ROI is clear: hours saved on phone tag + dollars saved on no-shows.`,
        },
        {
          q: "Business 3 — Solo real estate agent specializing in Prescott relocations",
          a: `What they do: Independent realtor (not part of a big team) who specializes in buyers relocating to Prescott from out of state — mostly California retirees, also a fair number of Arizona-from-elsewhere movers. Heavy inbound interest, lots of "tell me about Prescott" calls before anyone's ready to actually buy.

The pain point: First-touch lead intake is brutal. Someone calls or emails from California asking about Prescott — schools, weather, taxes, neighborhoods, healthcare, water situation. The agent has the same conversation 5 times a week. Two hours each. By the time someone's ready to actually look at houses, the agent has spent 10+ hours just answering "what's it like to live in Prescott" questions. Most of those leads don't convert.

The evidence: My neighbor across the street works in real estate (different agent than this one, but same market dynamics). She vented about it at a block party. Said "I should just record a video and send it to people, but every conversation has slightly different questions." That's the AI pitch right there — "slightly different questions" is exactly what an LLM can handle.

The solution: A simple AI-powered relocation assistant. Lead lands on agent's site, gets a chat-style intake that answers the FAQ-shaped stuff (climate, water, taxes, schools, top neighborhoods by lifestyle) in conversational form. At the end it qualifies the lead with 3-4 questions (timeline, budget range, must-haves) and sends a structured summary to the agent. Agent gets a hot lead, not a cold "tell me about Prescott" call. The LLM saves the 2 hours per lead and converts more of them.

The budget question: Best of the three. A single converted lead is a $10-30k commission on a $500k home (1.5-3% of purchase). Saving 8 hours a week AND converting 2-3 more leads a year is a 5-figure ROI. $200/mo is easy. $3,000-5,000 one-time build is plausible if I show the ROI math clearly. This is the highest-ceiling pick.`,
        },
        {
          q: "Level 2 — Existing tools each business could already buy off-the-shelf",
          a: `Looked these up on the actual provider sites (not just trusting AI; the lab specifically warned about that and rightly so):

For the BAKERY:
- Tally — free tier with reasonable limits, paid starts around $29/mo. Form-only.
- Typeform — free very limited, paid $25-83/mo. Form-only.
- Square for Restaurants — free entry tier, paid plans for full POS integration. Order tracking baked in.
- Shopify — basic plan is in the $30-40/mo range last I checked. Overkill for a 5-cakes-a-week operation.

For the GROOMER:
- Square Appointments — has a free solo tier, paid ~$29/mo for multi-staff.
- Acuity Scheduling — entry plan ~$20/mo, mid ~$30, upgraded tiers higher.
- Setmore — free for solo users, paid tiers in the low double digits.
- Industry-specific: MoeGo, Gingr, Daysmart Pet — these target pet businesses specifically. Pricing on their sites is typically "Contact us" which is itself a market signal — opaque pricing usually means it's enterprise-tier ($80-200+/mo).

For the REAL ESTATE AGENT:
- Calendly + Mailchimp for the simple version — together maybe $30-50/mo.
- Real estate CRMs (Follow Up Boss, kvCORE, Wise Agent) — most are $50-200+/mo, agent-targeted.
- AI chat tools (Intercom, custom GPT) — Intercom starts at ~$39/seat/mo, custom GPT setup is closer to dev work.

What stands out: NONE of these are end-to-end solutions for the SPECIFIC pain. The bakery would have to glue together Tally + email + a spreadsheet. The groomer could use Square Appointments but loses the "deposit to reduce no-shows" feature unless they go to higher tiers. The real estate agent has zero off-the-shelf "AI-powered relocation FAQ" — that's a build.

The gap is between "configure four SaaS tools and hope they talk to each other" and "buy a $5k custom build." That gap is where freelance development lives.`,
        },
        {
          q: "Level 3 — Strongest idea + the specific solution outline",
          a: `Strongest: the mobile dog groomer.

Reasons in priority order:
1. CLEAREST pain. No-shows cost real money; phone tag is frustration the owner already feels every day.
2. CLEAREST ROI. Reduce no-shows by 1/week = the tool pays for itself.
3. MOST UNIVERSAL. Every solo service business has this exact problem. If I build this for one groomer, I can sell minor variations to housecleaners, mobile car detailers, dog walkers, massage therapists, lash techs. The TEMPLATE is reusable.
4. MOST BUILDABLE in a week. Calendar + SMS + deposit field + small admin dashboard. I can build this with Next.js + a Twilio SMS API integration + Stripe for deposits + Postgres. Stack I already know.

Specific solution outline:
- Public-facing booking page: shows available time slots based on the groomer's preferences (e.g., Mon-Fri 9am-3pm, no Sundays). Customer picks a slot, fills name/phone/dog details, optionally pays a deposit.
- Backend: stores bookings, sends SMS confirmations and reminders via Twilio. Marks "deposit paid" when Stripe webhook fires.
- Admin dashboard: groomer sees the week's bookings, can block off vacation days, can manually add bookings for phone customers who still want to call.
- Customer-facing reschedule link: each confirmation SMS has a unique link to reschedule. If they reschedule >48 hours ahead, deposit transfers. If they cancel, deposit is forfeit (terms posted clearly).

What I'd charge: $1,500-2,000 one-time + $50/mo hosting and SMS fees. I'd offer the FIRST one at $1,200 with the understanding that the groomer agrees to a 30-min video testimonial after 30 days of use. That testimonial is gold for the next three sales.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Stress-Test Each Other's Ideas",
      description:
        "Group of 4. Pitched my strongest pick (the groomer booking system). Got real feedback that sharpened it.",
      qa: [
        {
          q: "How I pitched it in 2 minutes",
          a: `"Solo mobile dog groomer in Prescott. She drives a van out to people's homes, grooms 3-4 dogs a day, books everything by phone. Two problems: she's mid-groom and can't pick up incoming calls, so she's losing leads to whoever's free. And she eats no-shows — drives 25 minutes out to a client who forgot the appointment, can't bill for the gas.

The solution is a booking system. Customer goes to her site, picks a time slot, pays a 25% deposit, gets a confirmation SMS. System sends a reminder 24 hours before and 2 hours before. If they no-show, she keeps the deposit. If they reschedule with 48 hours notice, the deposit transfers.

She's grossing about $1,600 a week. If I reduce her no-shows by one per week she clears the cost of the tool. $1,500 one-time, $50/mo ongoing. Built with Next.js + Twilio + Stripe — stack I know cold."`,
        },
        {
          q: "Group's feedback — the four questions, answered honestly",
          a: `"Is this real?" — Yes. Confirmed by a neighbor who uses one and complained about exactly this problem. The groomer's own Facebook page has "Call to book" with no online option. Multiple comments on her recent posts asking "Can I just book online?" with no reply.

"Is it painful enough?" — Yes for the groomer (no-shows are real dollars). Maybe-yes for customers (some people genuinely prefer to call, especially older clientele). The TEAM pushed back: "What if her customers are mostly older and don't want online booking?" Fair point. Counter: the solution lets her KEEP phone bookings (she manually enters them in the admin), it just ADDS an online path for customers who'd prefer it.

"Can I actually build this?" — Yes. Booking calendar, Twilio SMS, Stripe deposits, Next.js admin. None of these are new. The hardest piece is the slot-availability logic (preventing double-bookings) and that's a well-understood problem.

"What would I charge?" — $1,500 + $50/mo. One person in the group said "you're underpricing — $2,500 minimum if the ROI is what you say." Made me think. Counter to MYSELF: a custom $2,500 build for someone who's never spent more than $50/mo on software is a big leap. I'd rather price low to land the first customer and build the testimonial, then raise on subsequent sales.`,
        },
        {
          q: "What I'm keeping, pivoting, or dropping",
          a: `KEEPING: the groomer booking system. Feedback strengthened it, didn't break it.

PIVOTING: the bakery idea. The group raised a fair concern that the bakery has the LOWEST budget tolerance of the three and the OWNER might not be willing to commit any spend on tooling. Pivot: instead of a custom build, position it as a setup-and-handoff service. Configure Tally + Zapier + Google Sheets for them in a single afternoon, charge $300 flat, hand them the keys. No recurring fee. They own everything. That's a more honest fit for their budget. Lower revenue but easier sell.

DROPPING: nothing. The real estate agent is still in play but it's higher-risk — the AI relocation chatbot is a bigger build and the FIRST sale is harder. Keeping it as a "second project" pick, not a starter.

Strongest idea unchanged: the groomer. Going deeper on competitor research and pricing for that one.`,
        },
        {
          q: "What the stress-test actually surfaced that I couldn't have caught alone",
          a: `One real thing.

I had been pitching the groomer system as "online booking" full stop. The group asked: "What about her current customers who like calling? Are you going to alienate them?"

I'd been assuming online booking would REPLACE phone booking. It shouldn't. The right framing is "ADD online booking; keep phone." Some customers will switch, some won't, both paths feed into the same calendar.

This sounds obvious in hindsight. It wasn't obvious when I was pitching it. I was thinking about MY ideal solution shape (clean, one-channel), not HER customers' actual preferences (mixed, depending on age and habit). The "add, don't replace" framing is what makes this an upgrade for the business instead of a disruption.

Going to lead with that in the cold-outreach pitch: "Add online booking without losing your phone customers."`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Competitor Research + Pricing",
      description:
        "Focused on the groomer pick. Looked at what exists, what they charge, what they're missing.",
      qa: [
        {
          q: "Competitor table",
          a: `| Competitor | What They Offer | Price (verified on their site, Q3 2026) | What's Missing |
|---|---|---|---|
| Square Appointments | Generic scheduler + payments + customer profiles | Free for solo users, ~$29/mo for multi-staff | No pet-specific fields (dog breed, behavior notes, vaccination records). No-show deposit handling exists but is clunky. |
| Acuity Scheduling | Generic scheduler with form builder | ~$20-65/mo by tier | Same as Square — generic, no pet-business UX. Reschedule flow lives behind login. |
| Setmore | Free-tier scheduler | Free for solo, low double digits for paid | Bare-bones. No deposit collection on free tier. SMS limits on lower tiers. |
| MoeGo | Pet-grooming-specific software | Opaque pricing, "Contact us" — likely $50-150/mo based on third-party reviews | Built for multi-staff salons. Overkill UX for solo mobile groomers who want simple in/out. |
| Daysmart Pet (formerly 123Pet) | Pet-grooming + daycare + boarding | Opaque pricing, enterprise tier | Way too much for solo. Steep learning curve. |
| Gingr | Pet daycare/boarding focused | Opaque pricing | Solo grooming isn't their target market. |

(Cross-checked all the public pricing against the providers' actual pricing pages — ChatGPT had hallucinated MoeGo's pricing at $30/mo when I first asked. Their site is the "Contact us" treatment. That's a market signal: they're enterprise-priced. Lab's warning about hallucinated prices is accurate; verify everything.)

What stands out: the gap is between "generic scheduler that doesn't know it's for a pet groomer" and "enterprise software that assumes you have a storefront and a payroll." Nobody serves the SOLO MOBILE PET GROOMER specifically. That's the gap.`,
        },
        {
          q: "Where I fit — positioning",
          a: `I'm not going to beat Square on price (they have a free tier). I'm not going to beat MoeGo on features (they have 8 years of pet-business product development). I'm going to beat both on FIT.

Square's pitch is "any small business." MoeGo's pitch is "any pet business." My pitch is "solo mobile pet groomer." Three words narrower than either competitor.

Concretely: my product has a "dog profile" with breed, size, last groom date, behavioral notes (anxious around clippers, etc.). Square doesn't. My product has a "drive time" buffer setting that automatically blocks out the time it takes to drive between appointments. MoeGo has it but you have to be on their $$$ tier. My product treats deposit collection and no-show forfeiture as first-class flows, not afterthoughts.

The competitive moat isn't features. It's NICHE. I'm building the thing that a solo mobile groomer would design if she could code. That's not what a $50M company designs because the market is too small to be worth their time.

Position: "The booking system designed for solo mobile groomers, by someone who actually understands solo service businesses."`,
        },
        {
          q: "Level 3 — One-paragraph pitch",
          a: `"I help solo mobile dog groomers in Prescott eliminate no-shows and recover the hours they lose to phone-tag. I build a custom online booking system tailored to mobile grooming — drive-time buffers, dog profiles, deposit collection, SMS confirmations and reminders. Unlike Square Appointments or generic schedulers, my system is built specifically for solo mobile operators, not retrofitted from a multi-staff salon tool. Unlike MoeGo or Daysmart, it's affordable and you don't need a training session to use it. $1,500 one-time setup, $50/mo for hosting and SMS. Most groomers earn that back by avoiding three no-shows."

That's the elevator. Three sentences of pain, one sentence of solution, two sentences of differentiation, one sentence of price + ROI. ~120 words. Fits in an Instagram DM, a Facebook message, or the first paragraph of a cold email.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Problem-Solution-Price Map",
      description:
        "Locking in the spec for the groomer pick. Filled in after Exercise 3 so the price is informed, not a guess.",
      qa: [
        {
          q: "PROBLEM — who, how painful, how they solve it today",
          a: `WHO has it: Solo mobile dog groomers in northern AZ — specifically Prescott, Prescott Valley, Chino Valley, Dewey-Humboldt. Roughly 8-15 such groomers within a 30-mile radius based on Google Maps + Facebook page surveys. NOT salon-based groomers (different software needs). NOT multi-staff mobile operations (different software needs, and big enough to afford MoeGo).

HOW PAINFUL: Average solo mobile groomer grosses ~$1,500-2,000/week. Estimated 1-3 no-shows per week. Average no-show cost: $80 (the price of the missed appointment) + ~$15 (gas + time round-trip). So $95-285/week in lost revenue from no-shows alone. PLUS the unpaid time on phone tag with prospective bookings — estimated 30-45 minutes per day. That's 2.5-4 hours a week of unpaid administrative labor.

Painful enough to act on? Yes. The dollar number is concrete. The hour number is felt.

HOW THEY SOLVE IT TODAY: They don't. They call back voicemails between appointments. They eat the no-shows. They keep a paper calendar in the van. The "solution" is just absorbing the cost.`,
        },
        {
          q: "SOLUTION — what I build, what tools, how long",
          a: `WHAT I BUILD: A custom Next.js booking system at a subdomain (e.g., book.smithdoggrooming.com). Public booking page → calendar with available slots → customer enters details → 25% deposit via Stripe → confirmation SMS via Twilio → reminder SMS 24h before, 2h before. Admin dashboard for the groomer to see the week's bookings, block off days, manually add phone bookings.

TOOLS:
- Next.js 16 (App Router, Server Actions)
- Prisma + Postgres (Neon for hosting)
- Stripe Checkout for deposits + webhook for "paid" event
- Twilio SMS for confirmations + reminders
- Vercel for hosting
- Custom domain via the groomer's existing provider (or I provision one)

HOW LONG TO BUILD (honest): 7-10 days of focused work for the first customer. After that, subsequent customers are CONFIGURATION not new builds — same codebase, new database, branded subdomain. Marginal cost per customer drops to maybe 2 days of setup + branding.

The leverage is in the first build. Once the template exists, each new client is 1/5 the cost in time.`,
        },
        {
          q: "PRICE — informed by competitor research, not vibes",
          a: `WHAT COMPETITORS CHARGE for similar offerings:
- Square Appointments: free to $29/mo (no upfront)
- Acuity: $20-65/mo (no upfront)
- MoeGo: ~$50-150/mo by tier, no clear setup fee
- Bespoke dev work for similar solo-service apps on Upwork: $2,000-8,000 one-time

WHAT IT'S WORTH TO THE CLIENT: If the system saves 2 no-shows/month ($160) + recovers 3 hours/week of unpaid admin work ($60/hour effective rate × 12 hrs = $720/mo) = ~$880/mo of recovered value. Annualized: ~$10,500. At those numbers, even $200/mo would be a steal.

WHAT I'D CHARGE:
$1,500 one-time setup + $50/mo for hosting + SMS + Stripe fees.

Reasoning:
- Below the $2k-8k Upwork bespoke range — sells the "I'll work for less because I'm building my portfolio" positioning honestly.
- Recurring fee is small enough to feel like a utility, not a SaaS subscription.
- Total cost in year one: $2,100. Compared to $10,500 of recovered value, that's a 5x ROI in year one.
- After year one, ongoing cost drops to $600/yr while value stays at $10,500. 17x ROI in steady state.

First customer gets it at $1,200 with the testimonial agreement. Second through fifth at $1,500. Sixth onward, after I have testimonials + case studies, $2,000-2,500. The price ladder reflects the diminishing risk of each new sale.`,
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
          a: `"Client: solo mobile dog groomer in Prescott. She drives her van to people's homes, grooms 3-4 dogs a day, all of her bookings happen by phone.

Problem: she's losing money two ways. First, no-shows — at least one a week. She drives 25 minutes to a client who forgot, can't bill for the gas, eats the missed appointment. Second, she can't answer her phone while she's grooming, so prospects who call get voicemail. They go to whoever calls back first, which often isn't her.

Why it matters: her gross is around $1,600 a week. One no-show is $80 of lost revenue plus $15 in gas. Three hours a week on phone tag is unpaid labor that competes with paid work. The total cost is somewhere north of $400/month in lost revenue and lost time.

What I'd build: a custom online booking system. Customers book a time slot on her site, pay a 25% refundable deposit, get SMS confirmations and reminders. No-shows forfeit the deposit. Existing phone customers still book by phone — she manually enters them. It's an addition, not a replacement.

What I'd charge: $1,500 setup, $50/mo for hosting and SMS. The first customer gets it at $1,200 in exchange for a video testimonial after 30 days."`,
        },
        {
          q: "Partner's clarifying question and my answer",
          a: `Partner's question: "Why $1,500 and not $2,500 or $800? How did you pick that number?"

My answer:

"Three inputs. First, competitor pricing — I looked at Acuity and Square Appointments which are $20-65/mo with no upfront fee, and MoeGo which is opaque but probably $50-150/mo. So my recurring fee of $50/mo has to feel comparable to those — anything higher and they'll just use Square. Second, custom dev work on Upwork for similar small-business booking systems lands at $2k-8k one-time. I went BELOW that because I'm trying to land my first customer, not maximize per-customer revenue. Third, the ROI math — at her gross, the system recovers about $880 a month in saved time and prevented no-shows. So even $300/mo would be a deal for her. $1,500 + $50/mo is well under that ceiling.

If I'd picked $2,500: probably too steep for a first customer who doesn't know me yet and has never paid that much for software. If I'd picked $800: too low to feel like a real engagement, and I'd resent the build by day 3. $1,500 is a number that signals 'this is real work' without scaring off the buyer."

What I noticed in answering: I had the math at the tip of my tongue. The competitor research from Exercise 3 made it easy to defend the number. Without that research I'd have been guessing, and partner would have heard the guess.`,
        },
        {
          q: "What saying it out loud at 90 seconds taught me",
          a: `Two things.

First, the discipline of 90 seconds forces structure. There's no room to ramble. I had to land four beats — who, problem, why it matters, what + price — in four chunks of 20 seconds each. That structure is what makes a pitch feel professional. The Phase 3 gate is going to want this exact compression.

Second, my partner picked up on the price BEFORE the value. That's a tell. When someone in a pitch asks about the price first, it usually means the value didn't land. So next time I'd lead with the dollar value of the problem — "this is costing her $400/month right now" — before I get to the solution. That way when the price comes up, it's already framed against a bigger number.

Going to revise the pitch in my notes: lead with the problem's COST, then the solution, then the price. The price feels smaller when the problem's cost is already in the listener's head.`,
        },
      ],
    },
    {
      heading: "Going Deeper",
      description:
        "Did all four. The cold-outreach draft is the one I'll actually use next week.",
      qa: [
        {
          q: "Cold-outreach draft — what I'd actually send to the groomer",
          a: `Drafted but not sent. Going to sit on it for 24 hours and re-read before sending.

Subject: A way to stop losing money on no-shows

Hi [name],

I'm a developer in Prescott, and I noticed something in the comments on your recent Facebook posts — a few folks asking if they could book online. I get the sense that switching to online-only would alienate your phone customers, but I wondered if there's a middle ground worth exploring.

I build small booking systems for solo mobile services like yours. The idea: customers who want to book online go to a page on your site, pick a slot, and pay a small refundable deposit. Customers who prefer to call still call — you enter their booking manually in the same system. Both paths feed the same calendar, so you never double-book.

The deposit part is what kills no-shows. When someone has $20 on the line, they remember the appointment — and if they forget, the deposit covers your gas and your time.

I'd build it for $1,500 one-time, $50/mo for hosting and SMS. Most groomers earn that back avoiding three no-shows.

If you want to grab a coffee at Wildflower and see a quick demo, my schedule is open most afternoons next week.

Diana
[phone] · [portfolio URL]

What I'm doing in the email:
- First paragraph: a SPECIFIC piece of evidence I noticed (proves I'm not spamming)
- Second paragraph: the SOLUTION framed as "and don't worry, you keep your phone customers"
- Third paragraph: the SPECIFIC mechanism (deposit) tied to the SPECIFIC pain (no-shows)
- Fourth paragraph: the PRICE with a tiny ROI anchor
- Fifth paragraph: low-friction next step (coffee, not "schedule a 30-minute discovery call")

Total length: ~150 words. Reads in 30 seconds. Doesn't sound like a sales email.`,
        },
        {
          q: "Freelancer case study — what I found on YouTube",
          a: `Searched "solo developer freelance small business booking system case study." Found a 15-minute case study from a developer who built custom Calendly+Stripe integrations for therapists and coaches in the $1,500-3,000 range.

What he sells: a "booking + intake + deposit" workflow built on top of Calendly Pro + a small custom app for the intake form + Stripe.

Who he sells to: solo practitioners (therapists, coaches, consultants).

What he charges: $1,800 base + $500-1,000 add-ons for things like SMS reminders, multi-language intake, branded confirmation emails.

What I learned that I'll copy:
- He bundles a "30-day free tweaks" period. After 30 days, additional changes are billed at his hourly rate. This protects him from scope creep without being adversarial.
- He has a one-page proposal template he sends after the discovery coffee. Three sections: what I heard you say (proves he listened), what I'd build (specific deliverable), what it costs (broken down). Sends as a PDF, asks for "yes / pivot / no" in 48 hours.
- He doesn't try to upsell on the first sale. Closes the deal at the agreed price, delivers in two weeks, THEN suggests add-ons after the client is happy.

Reverse-engineered the pitch from his thumbnail and intro: "I help [niche] eliminate [specific pain] with [specific tool]. $X. Two weeks." Same shape as mine. Validating.

Putting his proposal template on the to-do list for next week. The "one-page proposal" is a tool I don't have yet but should.`,
        },
        {
          q: "Warm market map — three people I already know",
          a: `Three people I already know who run small businesses or work somewhere with operational pain. Not pitching them. Just noting the network exists.

Wrote three names down in my offline notebook — going to keep them OFF this data file because the lab specifically says "only use information you'd be comfortable having public" and naming people is too far in either direction. The privacy framing is right.

What I observed when I made the list:
1. The network is bigger than I thought. Three names came up in 90 seconds. If I'd given it 10 minutes I'd have had ten.
2. None of them are dog groomers. So the warm market doesn't directly map to my strongest idea. That's fine — the warm market is for OTHER ideas (the bakery and the real estate one might map). The cold market is for the groomer.
3. The right way to use a warm contact is NOT "hey I'm a freelancer, want to hire me?" It's "I built this thing recently, would you mind taking a look and telling me if it's any good?" Lower stakes, more honest, opens a different kind of conversation.

Going to circle back to this list next week after the groomer cold-outreach lands. If the cold-outreach is going well, I'll start working the warm market on different ideas. If cold isn't working, the warm market is the safety net.`,
        },
        {
          q: "Reusing Phase 2 work — what canvas-daily could be SOLD as",
          a: `Canvas Daily is built for me. But who else has the problem it solves?

The literal problem: "I have a Canvas LMS account and I want a clear, structured daily view of what's due, with AI breakdowns to plan my work."

Who else has this:
1. **Other community college students.** Yavapai College has ~10,000 students. Even 1% adoption is 100 users. But community college students aren't a great PAYING market — they're broke, and the school itself would have to license the tool. School IT departments are notoriously slow to adopt outside tools.

2. **Parents of online-schooled minors.** Parents whose kids are in online or hybrid school often have Canvas observer access and want to track their kid's assignments. This is a real market — parents WILL pay $5-10/mo for something that helps them stay on top of their kid's schoolwork. Possibly the strongest niche.

3. **Academic tutoring centers and coaches.** Independent tutors managing 5-10 students at a time, each with their own Canvas account, drowning in the "what's due" problem multiplied by their roster. They'd pay $30-50/mo per tutor for a tool that gives them a unified dashboard across their students' Canvas accounts (with the students' consent).

Of those three, the parents and the tutoring centers are the most viable. Tutoring centers have budget. Parents have urgency.

Repositioning Canvas Daily: change the marketing copy from "for students" to "for tutors and parents managing students." Same underlying tool, different customer. Price changes from "free" to $9.99/mo for parents, $29.99/mo for tutors.

Not pitching this in Week 9. Mentioning it as a "you might be sitting on a real product without realizing it" insight. Worth coming back to in Week 10 when the freelance pipeline is moving.`,
        },
      ],
    },
  ],
};
