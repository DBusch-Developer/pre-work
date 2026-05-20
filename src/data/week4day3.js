export const week4day3 = {
  number: 16,
  label: "Day 3",
  title: "Week 4, Day 3 — Database Schema Design",
  subtitle: "Tables, primary keys, foreign keys. Defend your design out loud.",
  color: "#0ea5e9",
  sections: [
    {
      heading: "Exercise 1 — Read a Database Diagram",
      description:
        "Here's the schema for a simple blog app. Answer the questions below.",
      qa: [
        {
          q: "The schema (reference)",
          a: `USERS                    POSTS                    COMMENTS
-----------              -----------              -----------
id (PK)                  id (PK)                  id (PK)
name                     title                    body
email                    body                     created_at
created_at               published_at             post_id (FK -> posts.id)
                         user_id (FK -> users.id) user_id (FK -> users.id)

PK = Primary Key, FK = Foreign Key`,
        },
        {
          q: "How many tables are in this database?",
          a: "3 tables - users, posts, comments",
        },
        {
          q: "What is the primary key of the posts table?",
          a: "id is the primary key of the posts table",
        },
        {
          q: "How are posts connected to users? Which column creates that connection?",
          a: "Through the user_id column in the posts table, which is a foreign key that references the id column in the users table. This means each post is associated with a specific user who created it.",
        },
        {
          q: "How are comments connected to posts? Which column creates that connection?",
          a: "Through the post_id column in the comments table, which is a foreign key that references the id column in the posts table. This means each comment is associated with a specific post.",
        },
        {
          q: "If user #2 (Student B) writes a new post titled \"My Database Journey\", what data gets stored in the posts table? List each column and its value.",
          a: `id: auto-generated unique identifier (say 1 if its the first post)

title: "My Database Journey"

body: whatever content Student B writes for the post

published_at: current timestamp when the post is published

user_id: 2 (Student B's user id, linking this post to them)`,
        },
        {
          q: "If user #1 (Student A) writes a comment on that post saying \"Great post!\", what data gets stored in the comments table? List each column and its value.",
          a: `id: auto-generated unique identifier for the comment (e.g., 201)

body: "Great post!"

created_at: current timestamp when the comment is created

post_id: 1 (the id of the post being commented on, which is the post created by Student B)

user_id: 1 (Student A's id) `,
        },
        {
          q: "Can a post have multiple comments? How do you know?",
          a: "Yes, a post can have multiple comments. We know this because the comments table has a post_id foreign key that references the posts table. This means that multiple rows in the comments table can have the same post_id value, allowing for multiple comments to be associated with a single post.",
        },
        {
          q: "Can a comment belong to multiple posts? How do you know?",
          a: "No. Each comment can only belong to one post because the comments table has a single post_id foreign key that references the posts table. This means that each row in the comments table can only have one post_id value, so a comment cannot be associated with multiple posts.",
        },
      ],
    },
    {
      heading: "Exercise 2 — Design Your App's Tables",
      description:
        "Time to design the data model for YOUR Phase 2 app.",
      qa: [
        {
          q: "Map user stories to data — what each one implies",
          a: `Look at the user stories you wrote on Day 1. Each user story implies data that needs to be stored.

User story 1: As a returning student parent, I want to set up the digest with my Canvas observer token AND my own Canvas student token so the script knows what to pull for both of us.
Data needed: A place to store multiple Canvas tokens per user, each tagged with a role ('observer' or 'student') and the Canvas URL they belong to. Implies a user account AND a separate table for tokens (since one user has many).

User story 2: As a returning student parent, I want one daily email summarizing what's missing and what's due for both of us so I know my morning triage before I even open my laptop.
Data needed: Assignment records pulled from Canvas (course name, title, due date, status, link), tied back to which integration they came from so the email knows whose section to render them under. Also a record of each sent digest so I have history.

User story 3: As a returning student parent, I want new items since the last digest flagged with a "New" badge so I notice when a teacher just posted something on either side.
Data needed: A first_seen_at timestamp on each assignment, plus a sent_at on each digest. The "new" diff becomes a SQL comparison instead of a JSON state file (which is what canvas_digest.py uses today).`,
        },
        {
          q: "My table designs (at least 2 tables with a relationship between them)",
          a: `Template to follow:

TABLE_NAME
-----------
id (PK)
column_1
column_2
column_3
other_table_id (FK -> other_table.id)
created_at


My tables:

users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at


Relationships:
  users 1-->N integrations  (one Diana, two Canvas tokens — observer + student)
  integrations 1-->N assignments  (each Canvas account contributes its own work)
  users 1-->N digests  (history of every email sent)

Design notes:
  1. The JSON state file (~/.canvas_digest_state.json) goes away. The diff becomes a SQL query against assignments.first_seen_at vs the last digest's sent_at.
  2. canvas_assignment_id is separate from id. id is my auto-increment PK; canvas_assignment_id is what I dedupe on across daily pulls. Unique constraint on (integration_id, canvas_assignment_id) prevents duplicates.
  3. role on integrations is the key dual-role lever. One user, two integrations, different roles. The whole Parent + Student Edition pitch lives in that one column.
  4. My daughter does NOT get a users row. She's a Canvas user, not a user of MY app. Only I log in. Her data flows through integrations.role = 'observer'.`,
        },
        {
          q: "Sanity check — does the schema support every user story?",
          a: `For each user story, ask: "Where would this data live in my schema? Can I store everything I need?"

Story 1 — Set up observer + student tokens:
  Lives in: integrations (one row per token, role column distinguishes observer from student).
  Supported: yes.

Story 2 — Daily email summarizing both sides:
  Lives in: assignments joined through integrations to users. Render path groups by integrations.role.
  Supported: yes.

Story 3 — Separate "Your stuff" / "Kid's stuff" sections:
  Lives in: integrations.role drives the section grouping at render time.
  Supported: yes.

Story 4 — "New" badges since last digest:
  Lives in: assignments.first_seen_at compared against the previous digests.sent_at for this user.
  Supported: yes — and cleaner than the current JSON state file.

Story 5 — "Soon" badges for due-in-24h:
  Lives in: assignments.due_at compared against NOW() + interval '24 hours' at render time.
  Supported: yes.

Story 6 — Subject line summarizing both sides:
  Lives in: counts per integrations.role at digest generation, written to digests.subject.
  Supported: yes.

Story 7 — --dry-run preview:
  Lives in: digests.delivery_status = 'dry_run', skip the SMTP send step.
  Supported: yes.

Every story has a home. Nothing forces me to invent a table I didn't already plan for.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Schema Swap",
      description:
        "Pair up. Swap schemas. Review your partner's design against their user stories.",
      qa: [
        {
          q: "My feedback to my partner (2-3 specific pieces)",
          a: `For each user story, ask:
- "If I wanted to do [this user story], does your schema support that? Where would that data live?"
- "Is there any data that doesn't have a home?"
- "Are there columns that seem redundant or unnecessary?"

Feedback 1: 

Feedback 2: 

Feedback 3 (optional): `,
        },
        {
          q: "Feedback I got back from my partner",
          a: "",
        },
      ],
    },
    {
      heading: "Exercise 3 — AI-Assisted Schema Review",
      description:
        "Use AI to review your work.",
      qa: [
        {
          q: "AI's response — what came back from the prompt",
          a: `Prompt used:

Prompt used:

Here's my database schema for Canvas Daily takes one Canvas observer token (your kid) and one Canvas student token (you) and emails you a single morning digest of what's missing and what's due across both — so you can triage two academic calendars in 30 seconds instead of two logins.

Template to follow:

TABLE_NAME
-----------
id (PK)
column_1
column_2
column_3
other_table_id (FK -> other_table.id)
created_at


My tables:

users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at


My main user stories are:
User story 1: As a returning student parent, I want to set up the digest with my Canvas observer token AND my own Canvas student token so the script knows what to pull for both of us.
Data needed: A place to store multiple Canvas tokens per user, each tagged with a role ('observer' or 'student') and the Canvas URL they belong to. Implies a user account AND a separate table for tokens (since one user has many).

User story 2: As a returning student parent, I want one daily email summarizing what's missing and what's due for both of us so I know my morning triage before I even open my laptop.
Data needed: Assignment records pulled from Canvas (course name, title, due date, status, link), tied back to which integration they came from so the email knows whose section to render them under. Also a record of each sent digest so I have history.

User story 3: As a returning student parent, I want new items since the last digest flagged with a "New" badge so I notice when a teacher just posted something on either side.
Data needed: A first_seen_at timestamp on each assignment, plus a sent_at on each digest. The "new" diff becomes a SQL comparison instead of a JSON state file (which is what canvas_digest.py uses today). 

Questions:
1. What's missing from my schema that I'd need to support these user stories?
2. What would break if this app had 1,000 users?
3. Suggest 2-3 improvements with explanations.
 `,
        },{
          q: "AI's response — gaps it found and scaling issues",
          a: `My schema is a strong MVP start. It already supports the core idea: one user, multiple Canvas integrations, pulled assignment records, and saved digest history. But there are gaps.

1. WHAT'S MISSING FROM THE SCHEMA

A. Stronger dedupe rules.
Right now I dedupe by canvas_assignment_id alone. Should dedupe by more than just assignment ID — add canvas_course_id and enforce:
  UNIQUE(integration_id, canvas_course_id, canvas_assignment_id)
Why: two Canvas accounts, schools, or courses could theoretically have overlapping assignment IDs. The safer identity is the assignment inside a course, inside an integration.

B. Course information as its own table.
Right now course_name lives directly on assignments. Works for MVP, gets messy later. Better:

  courses
  -----------
  id (PK)
  integration_id (FK -> integrations.id)
  canvas_course_id
  name
  term_name
  is_active
  created_at

Then assignments points to the course via course_id (FK -> courses.id). Courses have their own Canvas IDs, names, enrollment state, terms, and active/inactive status. Also makes digest grouping cleaner.

C. Display info for the digest.
Since the digest combines both accounts, the email needs clear labels like "Diana — Yavapai Canvas" and "Daughter — High School Canvas". The label column on integrations helps, but eventually want:
  display_name        — "Diana", "Ava", "My daughter"
  institution_name
The digest needs to render under human-friendly section headers, not "observer" and "student".

D. Assignment status may need more detail.
Right now status is 'missing' or 'upcoming'. Canvas assignments can have more states: submitted, missing, late, excused, graded, upcoming, no_due_date, locked. "Missing" is tricky because it often depends on submission data, not just assignment data.

Long-term, split submission status into its own table:

  assignment_statuses
  -----------
  id (PK)
  assignment_id (FK -> assignments.id)
  status              — missing, upcoming, submitted, late, excused
  submitted_at
  graded_at
  score
  points_possible
  checked_at
  created_at

For MVP, one assignments table is fine.

E. Digest history should store the items included.
The digests table stores counts and the email body, but doesn't store which assignments were in each digest except inside the rendered HTML. Adding:

  digest_items
  -----------
  id (PK)
  digest_id (FK -> digests.id)
  assignment_id (FK -> assignments.id)
  integration_id (FK -> integrations.id)
  section_label
  status_at_send
  is_new
  due_at
  created_at

Gives a real audit trail. I can answer "Was this assignment in yesterday's email?" without parsing old HTML.

F. Sync/error tracking.
last_synced_at exists on integrations, but there's no place for failures. Add:
  sync_status              — active, failed, disabled
  last_sync_error
  last_sync_error_at
  token_last_validated_at

Or a separate sync_runs table:

  sync_runs
  -----------
  id (PK)
  integration_id (FK -> integrations.id)
  started_at
  finished_at
  status              — success, failed, partial
  assignments_found
  error_message
  created_at

If Canvas rejects a token, Canvas is down, or the API changes, I need to know what failed and which user was affected.

2. WHAT WOULD BREAK AT 1,000 USERS

A. The morning send could overload the app. If many users pick 7:00 AM, 1,000 users x 2 integrations each = 2,000 Canvas sync jobs every morning. Rate limits, slow digests, failed emails. Need a job queue, not one big script.

B. Canvas API failures become normal. At small scale, one failed token is annoying. At 1,000 users, expired tokens, wrong URLs, school outages, and rate limits are routine. Without sync_runs or error tracking, I don't know who got a bad digest, who got no digest, or why.

C. Duplicate assignment records could pile up. Without database-level unique constraints, every re-pull risks duplicates. Need UNIQUE(integration_id, canvas_course_id, canvas_assignment_id).

D. Email delivery could fail or get throttled. At 1,000 users, email provider limits, bounces, retries, and unsubscribes become real. delivery_status helps but a real email job system is needed.

E. The "New" badge could become inaccurate. Current logic: first_seen_at > last digest sent_at. But only valid if the last digest actually sent. Should compare against the user's last SUCCESSFUL digest (delivery_status = 'sent'). Otherwise a failed digest causes items to be marked old even though the user never saw them.

3. SUGGESTED IMPROVEMENTS

Improvement 1 — Add courses + stronger assignment identity.
courses table (see section 1B), update assignments to include course_id FK, add UNIQUE(integration_id, canvas_course_id, canvas_assignment_id). Makes syncing safer and prevents duplicate rows.

Improvement 2 — Add sync_runs tracking (see section 1F).
Critical at scale for debugging when Canvas tokens fail, Canvas is down, or a digest looks wrong.

Improvement 3 — Add digest_items (see section 1E).
Real record of what was sent in each digest. Makes the "New" badge trustworthy because I can verify whether an item already appeared in a successful digest.

OVERALL JUDGMENT

The current schema is good for a first MVP. Biggest gaps:
  - courses table
  - digest_items table
  - sync_runs table
  - unique constraints
  - better status/error handling

Would probably work for a small number of users. At 1,000 users the weak points would be Canvas API syncing, email scheduling, duplicate records, failed tokens, and inaccurate digest history.`,
        },
       {
          q: "What I'm keeping, modifying, or rejecting from the AI's response",
          a: `Quick legend: KEEP = solid catch, do it. MODIFY = real point but the fix was over-engineered. REJECT = noise or premature.

1A. UNIQUE constraint on assignments — MODIFY
Real catch. Without it, every re-pull risks duplicates. But the AI's three-column constraint UNIQUE(integration_id, canvas_course_id, canvas_assignment_id) is overkill — Canvas assignment IDs are unique within a Canvas instance, so UNIQUE(integration_id, canvas_assignment_id) is sufficient. Adding course_id to the constraint doesn't buy safety, just complexity.

1B. Add a courses table — MODIFY (defer)
Sound design, premature for MVP. I have ~4 Yavapai courses and maybe 6-8 on my daughter's side. Denormalized course_name on assignments isn't going to hurt at that scale. The day I want per-course features (mute this course, custom labels, term filtering) is the day to add it. Don't add it now to chase normalization purity.

1C. Add display_name + institution_name to integrations — REJECT
I already have label. "My Yavapai account" and "Daughter's school" cover the digest section headers fine. Splitting one column into three is busywork.

1D. Separate assignment_statuses table — REJECT
Heavy. Canvas distinguishes assignment data from submission data, sure — but I only care about "missing or not" right now. The day I want to show grades and submission timestamps is the day to split it. For MVP, my single status column does the job.

1E. Add digest_items table — REJECT (for now)
I already store the full HTML body in digests. If I ever need to ask "was X in yesterday's email," I can grep the HTML. The digest_items table only earns its keep when I want structured queries across history (e.g., "show me assignments that appeared in 3+ digests and are still missing" — which IS a great avoidance-detection feature, but it's a v2 idea).

1F. Sync error tracking — KEEP (minimal version)
This one matters. Right now if cron fails or Canvas rejects my token, I get nothing — no email, no error, no signal. But the full sync_runs table is overkill. Just add two columns to integrations:
  last_sync_status         — 'success' or 'failed'
  last_sync_error          — the error message if failed
That's it. Can revisit a full sync_runs table if/when I go multi-user.

Scaling section (2A-2E) — MOSTLY REJECT, ONE GEM
The whole "what breaks at 1,000 users" framing doesn't apply. I'm building this for myself first. Don't add a job queue, retry logic, bounce handling, or unsubscribe flows for users I don't have.

The one keeper is 2E: the "New" badge should compare against the last SUCCESSFUL digest, not just the last digest. If a send fails, the next morning's email shouldn't suddenly mark everything as "old" because it thinks the user already saw it. Tiny fix, real bug.

NET SCHEMA CHANGES I'M ACTUALLY MAKING:

1. Add UNIQUE(integration_id, canvas_assignment_id) constraint on assignments
2. Add last_sync_status and last_sync_error columns to integrations
3. Adjust the "New" badge logic to compare against the last digest where delivery_status = 'sent'

Three changes, none structural. Everything else the AI suggested is either premature, redundant with what I already have, or scaling theater for a userbase that doesn't exist yet.`,
        },
       {
          q: "Updated schema after stress-testing — what I'm shipping",
          a: `Three changes from the AI critique: dedupe constraint on assignments, sync status tracking on integrations, and a logic fix for the "New" badge. Everything else stays as-is.

users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
last_sync_status      -- NEW: 'success' or 'failed'
last_sync_error       -- NEW: error message from last failed sync
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

  Constraint: UNIQUE(integration_id, canvas_assignment_id)
  -- prevents duplicate rows when the same assignment gets re-pulled on subsequent syncs

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at


Relationships (unchanged):
  users 1-->N integrations  (one Diana, two Canvas tokens — observer + student)
  integrations 1-->N assignments  (each Canvas account contributes its own work)
  users 1-->N digests  (history of every email sent)


Three things that changed from v1:

1. UNIQUE(integration_id, canvas_assignment_id) on assignments.
   Prevents duplicate rows when daily syncs re-encounter the same assignment. Canvas assignment IDs are unique within a Canvas instance, so scoping by integration is enough — no need to drag course_id into the constraint.

2. last_sync_status and last_sync_error on integrations.
   Right now if a Canvas token expires or the API rejects me, I get silence — no email, no error, no signal. These two columns let the next digest tell me "your Yavapai integration failed yesterday, here's why" instead of pretending everything's fine.

3. "New" badge logic now compares against the last SUCCESSFUL digest.
   Pure logic change, no schema impact. Old logic: first_seen_at > previous digests.sent_at. New logic: first_seen_at > (most recent digest WHERE delivery_status = 'sent'). If a send fails, the next morning's email won't incorrectly mark everything as old because it thinks I already saw it.
`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Peer Review Round 2",
      description:
        "Find a DIFFERENT partner than before. Show them your updated schema. Ask tougher questions this time.",
      qa: [
        {
          q: "Tougher questions and my partner's reactions",
          a: `"If I wanted to search for [specific thing], which table and column would I look in?"


"If I wanted to show a list of [specific thing] sorted by date, can my schema do that?"


"If a user does [specific action from user story], what rows get created or changed?"
`,
        },
        {
          q: "What changed in my schema after this round?",
          a: "",
        },
      ],
    },
    {
      heading: "Exercise 5 — Edge Cases",
      description:
        "Now think about what happens when things go wrong.",
      qa: [
        {
          q: "Scenario 1 — A user deletes their account",
          a: `If user #3 gets deleted from the users table, what happens to:
- Their posts?
- Their comments?
- Any other data connected to them?

Design options:
- Cascading delete — delete everything connected to them. Clean but destructive.
- Soft delete — add an is_deleted column, set to true. Data stays, app treats it as gone.
- Orphan the data — delete the user but keep their posts. Set user_id to null or a "Deleted User" placeholder.

My decision: Cascading delete (ON DELETE CASCADE on the FKs).

Walking the chain in MY schema:
  users deleted -> integrations deleted -> assignments deleted
  users deleted -> digests deleted

Why cascade and not soft-delete or orphan:

1. Canvas tokens are stored in integrations.canvas_token. Those are real credentials with the same access as a logged-in observer or student. If a user deletes their account, those tokens MUST go — not be flagged is_deleted, GONE. Soft delete on credential data is a security smell.

2. Everything downstream (assignments, digests) is meaningless without the integration. There's no shared social data to preserve — no posts other people commented on, no community resources someone else might still need. Every row exists in service of one user.

3. Orphaning makes zero sense here. A "Deleted User" placeholder for a Canvas integration is nonsensical — the token belonged to a person, and if they're gone, the integration is gone.

What I'd actually write:
  ON DELETE CASCADE on integrations.user_id -> users.id
  ON DELETE CASCADE on assignments.integration_id -> integrations.id
  ON DELETE CASCADE on digests.user_id -> users.id

Caveat for later: if I ever go multi-user and people share digests or compare progress with peers, this calculus changes. For solo-use MVP, cascade is correct.`,
        },
        {
          q: "Scenario 2 — Duplicate data",
          a: `What if two users sign up with the same email? Should your database allow that? How would you prevent it? (Hint: this is called a "unique constraint.")

My decision: No, two users cannot share an email. Email IS the login identity.

Prevention:
  UNIQUE constraint on users.email at the database level
  Plus app-level normalization (lowercase + trim) before INSERT, so "Diana@gmail.com " and "diana@gmail.com" can't both sneak in as different rows

Why DB-level and not just app-level: app code can have bugs, race conditions during concurrent signups, or get bypassed by a direct SQL script. The DB is the last line of defense. Belt AND suspenders.

While I'm thinking about duplicates — other places in my schema where uniqueness matters:

  assignments — already covered:
    UNIQUE(integration_id, canvas_assignment_id)
    Prevents the same Canvas assignment from being inserted twice on a re-pull.

  integrations — should probably add:
    UNIQUE(user_id, canvas_url, canvas_user_id)
    Prevents the same person from accidentally adding the same Canvas account twice (e.g., pasting the same observer token in twice and ending up with duplicate sections in their digest).

So three unique constraints total across the schema:
  users.email
  assignments(integration_id, canvas_assignment_id)
  integrations(user_id, canvas_url, canvas_user_id)`,
        },
        {
          q: "Scenario 3 — Required vs. optional fields",
          a: `Which columns in your tables MUST have a value? Which ones are OK to leave blank?

Required (NOT NULL):

users:
  id, email, password_hash, created_at
  (timezone, delivery_time, and lookahead_days have defaults — required at the DB level via DEFAULT values, but the user never has to supply them)

integrations:
  id, user_id, role, canvas_url, canvas_token, canvas_user_id, created_at
  (every one of these is needed to actually hit the Canvas API — without canvas_url + canvas_token + canvas_user_id, the integration is useless)

assignments:
  id, integration_id, canvas_assignment_id, title, status, html_url, first_seen_at, last_seen_at, created_at
  (course_name is also required — Canvas assignments always belong to a course)

digests:
  id, user_id, missing_count, upcoming_count, soon_count, subject, html_body, text_body, delivery_status, created_at


Optional (nullable):

integrations:
  label — derivable from canvas_url if not provided (e.g., "yc.instructure.com" -> "Yavapai")
  last_synced_at — null until the first sync completes
  last_sync_status — null until the first sync runs
  last_sync_error — null when the last sync succeeded (which should be most of the time)

assignments:
  due_at — Canvas REALLY DOES return assignments with no due date (ungraded discussion posts, optional readings, "by end of semester" items). This MUST be nullable. Treating it as required would crash my sync on the first weird assignment.

digests:
  sent_at — null when delivery_status = 'dry_run'. The digest was generated and rendered, but never actually sent, so there's no honest "sent_at" value. Forcing a timestamp here would lie about what happened.


Design lesson I'm internalizing:
"Nullable" isn't laziness — it's honest. due_at being null means "Canvas itself doesn't know when this is due." sent_at being null on a dry-run means "this digest exists but was never sent." Forcing NOT NULL on these would force me to make up values, and made-up values are bugs waiting to happen.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "Pair up in breakout rooms. 2 minutes to walk your partner through your schema — specifically pointing to a foreign key.",
      qa: [
        {
          q: "My 2-minute walkthrough — pointing to a specific foreign key",
          a: `Point to a foreign key in your schema. Which column is it?


Which two tables does it connect?


Why is that connection necessary — what user story would break without it?
`,
        },
        {
          q: "Partner's follow-up question and my answer",
          a: `Examples your partner might ask:
- "What if a user gets deleted — what happens to the rows that point to them?"
- "Why isn't this just one big table?"

`,
        },
        {
          q: "Saying it out loud surfaced what? What part of schema design do I still want to nail down?",
          a: "",
        },
      ],
    },
  ],
};
