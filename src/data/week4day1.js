export const week4day1 = {
  number: 14,
  label: "Day 1",
  title: "Week 4, Day 1 — From Problem to MVP",
  subtitle: "Real pain. Specific users. Three features. Defend it out loud.",
  color: "#14b8a6",
  sections: [
    {
      heading: "Exercise 1 — Problem Brainstorm",
      description:
        "Three problems from real life. Who has them, how often they happen, what people do about them right now.",
      qa: [
        {
          q: "Problem 1",
          a: `Description: Plant-based eaters in small towns waste a meal-out figuring out the restaurant has nothing real for them.

Who: Vegans and strict vegetarians in towns under 30k people.

How often: Every time they eat out — multiple times a week.

Current workaround: Calling restaurants ahead, scrolling Yelp photos of menus, asking the server twice, settling for a side salad and "vegetable plate".`,
        },
        {
          q: "Problem 2",
          a: `Description: Returning students with kids juggle their kid's school schedule and their own assignment deadlines with no single view.

Who: Adult learners with school-age children at home, balancing community college or online programs.

How often: Daily — every morning is a triage of what's due where.

Current workaround: Paper planner, phone calendar, screenshots of Canvas due dates, asking the kid what they have homework on.`,
        },
        {
          q: "Problem 3",
          a: `Description: Exit tickets on AtlasLearn ask us to reflect on content we didn't actually cover, because the curriculum shifted mid-week and nobody updated the form.

Who: Students in the Next Chapter Phase 1 cohort (and every future cohort as the curriculum keeps iterating).

How often: Daily — exit tickets close out every class, and several days a week the prompts are out of sync with what really happened.

Current workaround: Answering about what we actually did and adding a note explaining the mismatch, asking in Slack what people put, writing "we didn't cover this today" in the field, or skipping the ticket entirely.`,
        },
        {
          q: "After sharing with a partner — which one felt like real pain and why?",
          a: `Problem 2 — returning students with kids juggling their own coursework deadlines and their kid's school schedule.

I am the user. I'm at Yavapai in ENG 102, the cybersecurity track, precalculus, and Python — all at once — with a teenager at home who has her own school work. Every morning is a triage of "what's due where for who," and I'm the one who has to hold both sides in my head.

The other two are real but easier to dismiss. Problem 1 has HappyCow already half-solving it. Problem 3 (AtlasLearn exit tickets) is acute but narrow — it only affects students in this specific cohort. Problem 2 is something I'd actually use every single day. I want to be the first customer of this tool more than I want to ship something for someone else, and that's the strongest signal I have.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Stress Test",
      description:
        "Partner pokes holes in my ideas. Real problem or mild inconvenience? Can I build a basic version in a few weeks?",
      qa: [
        {
          q: "Stress test — answering the four critique questions",
          a: `Running this on Problem 2: returning students with kids, juggling their own coursework deadlines and their kid's school schedule.

1. Who would actually use this? Can I name specific people?

Me, first. I'm enrolled at Yavapai in ENG 102, the cybersecurity track, precalculus, and Python — all at once — with a teenager at home. I live this every morning. Past me, I can name peers in the Next Chapter cohort who are parents and other returning students at Yavapai in the same triage loop. Real users, not "everyone."

2. How is this different from something that already exists?

Canvas Parent (Instructure's official mobile app) covers the kid side but is parent-only and mobile-only. Canvas's built-in email notifications fire one message per event with no daily rollup and no "missing" summary — most people turn them off because the volume is unmanageable. Cozi, Google Calendar, MyStudyLife — none of them are Canvas-aware in a way that surfaces both an observer view AND a student view in one place.

The gap I'm targeting: take two Canvas tokens (one observer for my kid, one student for me), pull missing + upcoming work for both, and render a single daily email digest with clear sections for each role.

3. Is this a real problem or a mild inconvenience?

Real. The cost is missed deadlines — my grade drops. Missed permission slips — my kid can't go on the field trip. Missed kid's events — my kid feels unsupported. Stack these up over a semester and the cost compounds into stress, anxiety, and the "am I cut out for this" spiral that already hits returning students hard. It's not "I forgot a meeting." It's "I'm letting two people down at once."

4. Could I build a basic version in a few weeks? If not, how do I scope down?

Yes. Canvas has a documented REST API. The script flow is straightforward — read two tokens from env vars, hit /api/v1/users/self/missing_submissions for me, hit the observer endpoints for my kid, merge the data, render an HTML + plain-text email, send via SMTP, run on cron at 7 AM. The core data fetching is well-trodden territory in Python (requests + standard library).

The harder/uncertain parts are: getting both Canvas tokens authorized correctly, building an email template that renders right across Gmail / Outlook / Apple Mail, and the diff state file for "new since last run" flagging. Two to three weeks of focused work feels right for a working V1, and the scope can shrink further if I drop the diff-tracking nice-to-have for v0.`,
        },
        {
          q: "Strongest problem — the one that survived the most scrutiny",
          a: `Problem 2 — returning student parents who are themselves enrolled at Canvas-using institutions. It survived all four critique questions clean: I'm the user, the gap in existing tools is real and specific, the cost compounds beyond annoyance, and the scope is achievable in weeks using a documented public API.`,
        },
        {
          q: "Final problem statement",
          a: `Returning students with kids who are also enrolled at Canvas-using institutions struggle to keep their own coursework deadlines and their kid's school work in one place, because no existing tool — including Canvas's own apps and notification settings — bundles an observer view and a student view into a single daily digest, and right now they juggle two separate Canvas accounts, two notification streams, and a fistful of screenshots.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — User Stories",
      description:
        "5-7 user stories. Different types of users, different moments, what's most important. Each one maps to a feature.",
      qa: [
        {
          q: "User stories",
          a: `1. As a returning student parent, I want to set up the digest with my Canvas observer token (for my kid) AND my own Canvas student token (Yavapai) so the script knows what to pull for both of us.

2. As a returning student parent, I want one daily email summarizing what's missing and what's due for both of us so I know my morning triage before I even open my laptop.

3. As a returning student parent, I want the email to clearly separate "Your stuff" from "Kid's stuff" so I can read it in three seconds and act.

4. As a returning student parent, I want new items since the last digest flagged with a "New" badge so I notice when a teacher just posted something on either side.

5. As a returning student parent, I want items due in the next 24 hours flagged with a "Soon" badge so the most urgent stuff is obvious without scanning.

6. (optional) As a returning student parent, I want the subject line to summarize both sides ("You: 3 missing | Kid: 2 due in 24h") so I can decide whether to open immediately from the inbox preview.

7. (optional) As a returning student parent, I want a --dry-run mode so I can preview the merged digest before scheduling it on cron.`,
        },
        {
          q: "Feature mapping — each story to the feature it needs",
          a: `User Story                                            | Feature
------------------------------------------------------+----------------------------------------------
Set up observer + student tokens                      | Env vars for both Canvas tokens + setup docs
Daily email of both                                   | Canvas API: observer fetch (kid) + self fetch (parent), scheduled via cron
Separate "Your stuff" / "Kid's stuff" sections        | Email template with two named blocks
"New" badges since last run                           | State diff file tracking IDs across runs
"Soon" badges for due-in-24h                          | Time-until-due check in render
Smart subject line summarizing both sides             | Subject builder that names both roles
--dry-run preview                                     | CLI flag, print HTML + text to stdout instead of sending`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Feature Prioritization",
      description:
        "Every feature into one of three buckets. Must Have caps at 2-3 features. Not 7. Not 10.",
      qa: [
        {
          q: "Three buckets — Must Have, Nice to Have, Later",
          a: `MUST HAVE (MVP) — app is useless without these.
  • Canvas API integration with two tokens (observer for kid, student for parent), pulling missing + upcoming work
  • Merged daily email with clear "Your stuff" and "Kid's stuff" sections
  • Cron-friendly automation so the digest sends every morning without manual intervention

NICE TO HAVE — makes it better, not essential.
  • "New" badges via state-diff tracking so newly-appeared items stand out
  • "Soon" badges for items due in the next 24 hours
  • Subject line summarizing both sides at a glance
  • HTML + plain-text fallback for email client compatibility
  • Dry-run / preview mode for testing changes
  • Color coding by section (teal for me, peach for kid)

LATER — V2 or beyond.
  • Support multiple kids (loop over observees)
  • Support multiple LMSes for households where the kid is on PowerSchool, Schoology, etc.
  • SMS digest as an alternative to email
  • Week-ahead view in addition to daily
  • Multi-user setup so a co-parent can subscribe to the same digest`,
        },
        {
          q: "Final MVP scope",
          a: `My app: Canvas Daily — Parent + Student Edition (working title). A daily email digest that pulls missing and upcoming Canvas work for BOTH my Yavapai coursework AND my daughter's school, merging them into one message I can read in the morning before I open my laptop.

Problem: Returning students with kids who are also Canvas users themselves struggle to triage two academic calendars at once, because Canvas's own apps and notification settings keep parent (observer) and student (self) views separate.

MVP features:
  1. Pull data from Canvas's REST API using two tokens — observer for kid, student for parent — for missing assignments and upcoming work
  2. Render one merged email with clear "Your stuff" and "Kid's stuff" sections
  3. Run on cron so the digest sends every morning automatically`,
        },
      ],
    },
    {
      heading: "Exercise 5 — AI-Assisted Competitive Research",
      description:
        "ChatGPT prompts to map the landscape. Watch for hallucinated tools — search if unsure.",
      qa: [
        {
          q: "Prompt 1 results — existing solutions (top 5)",
          a: `1. Canvas Parent — Instructure's official mobile app for observer accounts. Shows assignments, grades, and schedule for paired students. Free, official, mobile-only.

2. Canvas Student (mobile app) — Instructure's app for the student themselves. Self-view only, no parent integration. Mobile-only.

3. Canvas web email notifications — built-in, configurable per assignment / per course. Famously noisy. One email per event, never a daily digest. No "missing" rollup.

4. Open-source Canvas API scripts on GitHub (canvas-cli, pycanvas, various personal digests) — many exist for one-off use cases. Mostly developer-oriented, no email rendering by default, almost always single-role.

5. Generic family calendars (Cozi, TimeTree, Google Calendar) — handle scheduling but have zero Canvas awareness. You'd be re-entering everything by hand.`,
        },
        {
          q: "Prompt 2 results — common complaints and gaps",
          a: `Canvas Parent: best alternative for the kid side, but mobile-only and doesn't bundle the parent's own coursework. You're switching apps to see your own work.

Canvas Student: solo-user, no parent integration at all. Same context-switch problem in reverse.

Canvas's built-in email notifications: noisy and granular — you get one email per assignment event instead of one summary. No "missing" rollup. Most people turn them off precisely because the volume is unmanageable.

GitHub Canvas scripts: each one solves a sliver — just missing, or just upcoming, or just for one student. None I've found bundle parent + student.

Generic family calendars: zero Canvas awareness. You'd be screenshotting Canvas due dates and re-entering them by hand, which defeats the entire purpose.

The gap across all of them: no tool, official or third-party, takes both a Canvas observer token AND a Canvas student token and produces a unified, diffed, daily digest with both perspectives in one place.`,
        },
        {
          q: "Prompt 3 results — what would make my version different",
          a: `• Bundle parent + student into one daily email — that's the headline. Two roles, one digest, one inbox.

• Built on the open Canvas REST API. Standard tooling — Python + requests + smtplib + cron. Nothing fancy.

• Email-first delivery. Returning student parents already check their inbox first thing in the morning — meet them where they are, not in a new app to download.

• Diff tracking so "New" items across BOTH sides since the last digest get flagged. Nothing else does this for parent + student in one view.

• Subject-line summary covers both roles so the inbox preview tells the truth before opening.

• Future direction: support multi-LMS households (kid on PowerSchool, parent on Canvas) so the digest works even when the two institutions don't share a vendor.`,
        },
        {
          q: "Comparison — top 2 existing solutions and my opportunity",
          a: `Existing solution 1: Canvas Parent (Instructure's official mobile app)
  What it does well: Official integration, free, covers everything observer accounts can see — notifications, grades, schedule, calendar. Best-in-class for the kid side.
  What it's missing: Mobile-only and parent-only. Zero bundling with the parent's own student work. Every check is a context switch into a separate app.

Existing solution 2: Canvas's built-in email notifications
  What it does well: Cover every event type, configurable per course, no extra software to install.
  What it's missing: One email per event, never a daily summary. No "missing" rollup. No diff. No parent + student bundling. Most people turn them off because the volume is unmanageable.

My opportunity: Build a single daily email — one digest, two roles — using the Canvas API. Two tokens, merged rendering, sectioned headers. It covers a workflow no existing tool addresses, and the underlying stack is small enough to be doable in a few weeks.`,
        },
        {
          q: "Any tools the AI named that I had to verify? Hallucinations?",
          a: `Solid ground here — Canvas Parent and Canvas Student are real Instructure apps. The Canvas REST API is real, well-documented, and stable.

Things to verify before pitching:
  • Whether any prominent GitHub Canvas-digest project already includes both parent + student bundled (a quick "canvas digest parent observer student" search would tell me). If one exists, I want to know before I duplicate effort.
  • Whether Canvas's notification settings have a "daily summary" option I overlooked.
  • Whether there's a recent indie iOS/Android app I've missed that does this exact dual-role bundling.
  • Whether my Yavapai Canvas instance actually allows student API tokens — most do, but worth confirming before committing to the architecture.

ChatGPT will sometimes hallucinate a polished "Canvas Family Hub" app or similar — those are usually invented. Always click through to verify before citing in a pitch.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes to explain the problem out loud. Partner asks one follow-up.",
      qa: [
        {
          q: "My 2-minute pitch — who, what, why, current workaround",
          a: `Who has the problem (specific — can I name real people?):
Me. I'm at Yavapai in four classes at once — ENG 102, cybersecurity, precalc, Python — with a teenage daughter at home doing online school on Canvas. I can name peers in the Next Chapter cohort who are parents, and other returning students at Yavapai juggling the same thing. This is a real, named group — not "adult learners" in the abstract.

What's the problem? What does the pain look like day-to-day?:
Every morning is triage across two Canvas accounts. Mine as a student at Yavapai, hers as a parent through an observer account. Canvas keeps those views completely separate — different apps, different notification streams. To know what's due across both sides I have to log into two accounts, click through every course, and stitch it together in my head. By the time I've done that I've burned the first hour of my day.

Why does it matter? What does it cost in time, money, or opportunity?:
Missed deadlines on my side drop my grade. Missed permission slips on her side mean she can't go on the field trip. Missed work on her side compounds into a failing semester I don't find out about until progress reports. Stack those across 16 weeks and the cost isn't just academic — it's the stress, the anxiety, the "am I cut out for this" spiral that already hits returning students harder than anyone admits. It's not "I forgot a meeting." It's "I'm letting two people down at once."

Current workaround:
Two logins, two notification streams, screenshots of due dates, and asking my kid what's due (with the obvious accuracy problems). I've already built half of the fix — a Python script that pulls her side through the Canvas observer API and emails me a daily digest with missing work, what's due this week, "New" badges since the last run, and "Soon" badges for items due in 24 hours. The gap is that it only covers her. Yavapai also uses Canvas. Adding my own student token and merging the two into one email is the MVP.`,
        },
        {
          q: "Partner's follow-up question and my answer",
          a: `Parnter's question: What would be the MVP version of this? If I had to build something in the next few weeks, what would I focus on?

My answer: The core value prop is the merged parent + student view in one daily email. If I had to strip it down to an MVP, I'd focus on just that: two Canvas tokens (observer + student), a script that pulls missing + upcoming work for both, and a merged email template with "Your stuff" and "Kid's stuff" sections. I'd run it manually at first to prove the concept before automating with cron or adding diff tracking.`,
        },
        {
          q: "Saying it out loud surfaced what? What would I refine before the next pitch?",
          a: `Saying it out loud surfaced the importance of the "daily email" delivery mechanism — that's a key part of the value prop that I hadn't fully articulated in my head. It also made me realize that the MVP can be really focused on just the merged view, without the diff tracking or smart subject line, which are nice-to-haves but not essential for proving the concept. Before the next pitch, I'd refine my problem statement to emphasize the pain of juggling two separate Canvas accounts and notification streams, and I'd be more explicit about the "daily email digest" as the core solution I'm proposing.`,
        },
      ],
    },
  ],
};
