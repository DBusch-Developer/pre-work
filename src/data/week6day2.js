export const week6day2 = {
  number: 23,
  label: "Day 2",
  title: "Week 6, Day 2 — Prisma + Neon Postgres: Schema, Migrations, Seed",
  subtitle:
    "Connect to a cloud Postgres, define models for the full Canvas Daily schema, migrate, and seed real data.",
  color: "#0d9488",
  sections: [
    {
      heading: "Exercise 1 — Install Prisma and Connect to Neon",
      description:
        "Sign up for Neon, install Prisma, point .env at the connection string, verify the round trip.",
      qa: [
        {
          q: "Setting up the Neon project",
          a: `Signed up at neon.tech with GitHub. Created a project called nextchapter-week6, region us-west-2 (closest to Prescott), default Postgres version (17.x). Neon dropped me on a dashboard with the connection string visible — pooled, with sslmode=require already in the URL. Copied it.

What I noticed: Neon's "branch" concept is interesting. The project comes with a "main" branch by default, but you can branch the database the same way you branch git. For dev/staging/prod separation later this is going to be cleaner than spinning up multiple Postgres instances.`,
        },
        {
          q: "Installing Prisma and running prisma init",
          a: `In canvas-daily/ from yesterday:

npm install prisma --save-dev
npm install @prisma/client
npm install @prisma/adapter-pg pg
npm install --save-dev dotenv
npx prisma init

The lab calls for prisma and @prisma/client only. I added @prisma/adapter-pg + pg because Prisma 7 uses driver adapters as the default pattern — the old way of letting Prisma manage its own connection is deprecated. Adapters give you a real Node Postgres driver (pg) underneath, which plays much nicer with Neon's pooler and with Next.js serverless.

Also added dotenv because Prisma 7's new prisma.config.ts doesn't auto-load .env the way the old env() in schema.prisma did. You import "dotenv/config" at the top of the config file. Slight friction, very explicit.

prisma init created:
- prisma/schema.prisma (the initial empty schema)
- prisma.config.ts (Prisma 7 config — NEW, didn't exist in v5/6)
- .env updated with a DATABASE_URL placeholder`,
        },
        {
          q: "What I noticed about Prisma 7 vs the lab walkthrough (which assumes 5/6)",
          a: `The lab is written for an older Prisma where everything is configured in schema.prisma via env("DATABASE_URL"). Prisma 7 moved that into prisma.config.ts.

My schema.prisma is shorter than the lab's example:
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

No url = env("DATABASE_URL") line. The URL comes from prisma.config.ts now:

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node prisma/seed.js",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});

Same outcome (Prisma reads DATABASE_URL from .env), different mechanism. Worth flagging because if you copy the lab's schema verbatim with the url= line, Prisma 7 will warn that it's duplicating what the config already provides.

Also: in Prisma 7 the seed config moves into prisma.config.ts (the migrations.seed line above) instead of into package.json. The lab tells you to add a "prisma" block to package.json — that still works for backwards compat, but the config.ts version is canonical.`,
        },
        {
          q: "Setting up .env and confirming gitignore",
          a: `Opened .env, replaced the placeholder with the Neon connection string. Format:

DATABASE_URL="postgresql://[user]:[pass]@ep-xxx-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require"

Notes:
- Used the POOLED connection string from Neon (the URL with -pooler in the host). For serverless Next.js, the pooler is mandatory — direct connections will exhaust the connection limit fast.
- sslmode=require was already in the Neon-provided string. Don't remove it.

.gitignore check: opened it, .env* was already in there from create-next-app. Belt-and-suspenders, ran git check-ignore .env which printed ".env" — confirmed git is explicitly ignoring it.`,
        },
        {
          q: "Why I used prisma migrate dev instead of prisma db push",
          a: `The lab says npx prisma db push. I used npx prisma migrate dev --name init instead.

Difference:
- db push: takes the current schema and shoves the changes into the database. No history, no rollback. Fine for prototyping, terrible for production. Every schema change overwrites the last.
- migrate dev: generates a timestamped SQL migration file in prisma/migrations/, applies it to the database, AND records that it was applied. Now I have a history. I can ship that history to teammates or production. Other machines can run prisma migrate deploy to get to the same database state.

For Phase 2 I want migration history from day one. There's never a good time to retrofit version control onto something that's been hot-mutated for weeks. So Canvas Daily uses migrate dev from the start.

Result: prisma/migrations/20260602162023_init/migration.sql is the SQL that built the database. 56 lines of CREATE TABLE / CREATE INDEX / ALTER TABLE statements. Committed to git.`,
        },
        {
          q: "Checkpoint — connection verified",
          a: `npx prisma migrate dev --name init ran clean. Terminal output:
- Applied migration 20260602162023_init
- Generated Prisma Client (308 kB) to ./node_modules/@prisma/client in 187ms
- Running seed command... (well, seed wasn't ready yet — Ex 4 below)

Opened Neon's web console, clicked the SQL Editor, ran SELECT * FROM "User"; — got the empty table back. Connection is real.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Define Your First Model",
      description:
        "Add the User model. Push to the database. View it in Prisma Studio.",
      qa: [
        {
          q: "The User model I defined",
          a: `model User {
  id          Int          @id @default(autoincrement())
  name        String
  email       String       @unique
  role        String       @default("student")
  enrollments Enrollment[]
  createdAt   DateTime     @default(now())
}

Diverged from the lab example by adding role with a default of "student". Canvas Daily has two user types — students and instructors — so role is in the schema from day one. Set the default to "student" because that's the vast majority of users. Instructors get explicitly created with role: "instructor".

The enrollments Enrollment[] line is forward-looking — I defined it now because I knew the join table was coming in Ex 3. Prisma doesn't complain about referencing a model that doesn't exist yet AS LONG AS you add the model before running migrate. If I had run migrate at this point with only User defined, the enrollments line would have errored.`,
        },
        {
          q: "Why @unique on email and the default value design choice",
          a: `@unique on email enforces it at the database level (creates a UNIQUE index). Two reasons:
1. Login — when auth lands, the user is identified by email. Two users with the same email is incoherent.
2. Seed safety — Ex 4's seed uses upsert with where: { email } as the lookup key. That only works if email is unique.

@default("student") on role solves a real-world problem: 95% of users are students. If role wasn't defaulted, every user creation would have to specify it explicitly, and someone would inevitably forget and create a user with role: null, which would then have to be handled everywhere downstream. Defaulting at the schema level means the database guarantees role is always populated.

This is the kind of design choice that's free now and expensive later if you skip it.`,
        },
        {
          q: "Ran the migration",
          a: `Couldn't quite "just add the model and push" because the enrollments Enrollment[] line referenced a model that didn't exist yet. I added User AND a stub Enrollment in the same pass before running migrate. (More on Enrollment in Ex 3.)

Once both were in place:
npx prisma migrate dev --name add_user

Generated a new migration file. Applied. Prisma Client regenerated. Total time: about 2 seconds.

Then opened Prisma Studio:
npx prisma studio

Browser opened at localhost:5555. User table listed in the sidebar with the columns I defined (id, name, email, role, createdAt). Empty. As expected — seed comes in Ex 4.`,
        },
        {
          q: "Schema → table mapping (what each line actually creates in Postgres)",
          a: `Looking at the generated migration SQL confirms the mapping:

Prisma:                              Postgres:
model User { ... }                  → CREATE TABLE "User" ( ... )
id Int @id @default(autoincrement()) → "id" SERIAL NOT NULL, PRIMARY KEY ("id")
name String                          → "name" TEXT NOT NULL
email String @unique                 → "email" TEXT NOT NULL + CREATE UNIQUE INDEX "User_email_key" ON "User"("email")
role String @default("student")      → "role" TEXT NOT NULL DEFAULT 'student'
createdAt DateTime @default(now())   → "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP

What surprised me: Prisma puts table names in double quotes ("User") and uses CamelCase as-is. Postgres is case-folding-sensitive — if you write SELECT * FROM User without quotes you'll get "relation 'user' does not exist" because Postgres downcased it. Always quote when querying Prisma-generated tables by hand. The Prisma Client handles this for you when you use prisma.user.findMany().

The Int @id @default(autoincrement()) becomes SERIAL — Postgres's built-in auto-incrementing integer. Behind the scenes that's a sequence that increments on every insert.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Add a Second Model with a Relation",
      description:
        "Add Course and the Enrollment join table. Many-to-many via explicit join, not implicit. Migrate.",
      qa: [
        {
          q: "Course and Enrollment — the relation choice I made",
          a: `model Course {
  id          Int          @id @default(autoincrement())
  name        String
  code        String       @unique
  term        String?
  assignments Assignment[]
  enrollments Enrollment[]
  createdAt   DateTime     @default(now())
}

model Enrollment {
  id       Int    @id @default(autoincrement())
  user     User   @relation(fields: [userId], references: [id])
  userId   Int
  course   Course @relation(fields: [courseId], references: [id])
  courseId Int

  @@unique([userId, courseId])
}

The lab's pattern for two-model relations was one-to-many (User has many Recipes). My Canvas Daily relationship is many-to-many — a User has many Courses, a Course has many Users. Prisma has two ways to do that:

1. IMPLICIT: User { courses Course[] } + Course { users User[] }. Prisma silently creates a hidden join table. Quick but inflexible.
2. EXPLICIT: a real Enrollment model that joins User and Course. Slightly more code, much more flexible.

I went explicit. Reasons:
- An enrollment is a real thing. It has its own lifecycle (created when student registers, deleted when they drop). Eventually it'll have its own fields — enrollment date, current grade, status (active / withdrawn). I can't add fields to an implicit join table.
- The @@unique([userId, courseId]) constraint enforces that the same student can't enroll in the same course twice. With implicit many-to-many Prisma would handle this automatically — but only because the join table is hidden. With explicit, I make the constraint visible.

Course has a @unique on code (CS101, MATH201, etc.) — same reasoning as User.email, the course code is a natural unique identifier and the seed uses it as the upsert key.

term is optional (String?) because a course might not have a term in some edge cases (continuing-ed courses, self-paced). Defaulting to "current term" felt brittle.`,
        },
        {
          q: "The @relation fields/references syntax — what's actually happening",
          a: `Look at: user User @relation(fields: [userId], references: [id])

Breaking it down:
- user is the Prisma-side field name (the "relation field"). When I write prisma.enrollment.findMany({ include: { user: true } }), this is what I'm including.
- User is the type — points to the User model.
- fields: [userId] — the actual column in THIS table (Enrollment) that holds the foreign key.
- references: [id] — the column in the OTHER table (User) that this FK points at.

The userId Int line below it is the actual database column. Two lines, two different concepts:
- user (no Int, no @relation directive on its own) is the relation field, used in Prisma Client queries
- userId is the foreign key column, what actually lives in Postgres

The generated SQL:
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ON DELETE RESTRICT means: if I try to delete a User who has enrollments, Postgres refuses. Forces me to clean up enrollments first. Good default — prevents orphaned rows.`,
        },
        {
          q: "Verified in Prisma Studio",
          a: `Three tables now visible in Studio: User, Course, Enrollment (Assignment came in Ex 5).

Clicked into Enrollment — the column headers showed userId and courseId. Clicking the column header dropdown showed "Open related record" — Studio understands the relationship and lets you click through to the User or Course on the other side.

The @@unique([userId, courseId]) showed up as a real Postgres unique index in the migration SQL:
CREATE UNIQUE INDEX "Enrollment_userId_courseId_key" ON "Enrollment"("userId", "courseId");

If I tried to insert two rows with the same (userId, courseId) pair, Postgres would reject the second one. Database-enforced, not just code-enforced. Belt and suspenders.`,
        },
        {
          q: "Why explicit join table over implicit — the design tradeoff",
          a: `Implicit many-to-many is the right call when:
- The relationship has no metadata of its own ("this user follows this user")
- You'll never need to query the relationship itself, only the endpoints
- The join is purely a connection, not an entity

Explicit join table is the right call when:
- The relationship IS an entity ("an enrollment exists in time, has a state, can be modified")
- You'll add fields later (enrolledAt, grade, status, gradeOverride)
- You need to query enrollments directly ("how many students enrolled in CS101 this term")

Canvas Daily clearly fits the second pattern. An enrollment is its own thing. The cost of explicit (one extra model, slightly more verbose queries) is paid back the first time I need to track WHEN a student enrolled or WHAT grade they got.

This is the same lesson as my Hype Live work — model the domain, not the technical convenience. The schema should look like the business does.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Seed Your Database",
      description:
        "Write a seed script that fills the database with realistic data. Verify in Prisma Studio.",
      qa: [
        {
          q: "Why I used upsert instead of deleteMany + create",
          a: `The lab's pattern is deleteMany() then create(). That works but it's destructive — every seed run nukes everything and rebuilds. Fine for prototype, painful when you've manually added test data in Studio that you want to keep.

I used upsert instead:
const alice = await prisma.user.upsert({
  where: { email: 'alice@university.edu' },
  update: {},
  create: { name: 'Alice Monroe', email: 'alice@university.edu', role: 'student' },
})

upsert is "find this row by the unique key; if it exists do update (in my case, nothing — update: {}); if it doesn't, run create." Result: seeding is idempotent. Run it twice, you get the same database. No duplicates, no destruction.

The where requires a unique field — that's why I made email @unique on User and code @unique on Course. The seed's upsert calls use those as lookup keys.

For Assignment and Enrollment I used a slightly different pattern — createMany with skipDuplicates: true:
await prisma.assignment.createMany({
  skipDuplicates: true,
  data: [ ...10 assignments... ],
})

createMany doesn't have an upsert mode, but skipDuplicates: true gives me roughly the same idempotency — re-running won't fail or create dupes. The check is on whatever unique constraints the table has. For Enrollment that's the @@unique([userId, courseId]) — perfect.`,
        },
        {
          q: "The seed data I put in",
          a: `Four users:
- Dr. Amy Chen (instructor, prof.chen@university.edu)
- Alice Monroe (student, alice@university.edu)
- Bob Kim (student, bob@university.edu)
- Diana Reyes (student, diana@university.edu)

Three courses, all Fall 2026 term:
- CS101 — Intro to Computer Science
- MATH201 — Calculus II
- ENG110 — Academic Writing

Ten assignments distributed across the three courses:
- CS101 (4): Hello World Program, Variables & Data Types Quiz, Loops & Conditionals Lab, Midterm Project
- MATH201 (3): Integration Techniques Homework, Series Convergence Problem Set, Midterm Exam
- ENG110 (3): Diagnostic Essay, Annotated Bibliography, Research Paper Draft

Each assignment got a realistic title, description, points total, and a Fall-semester-shaped due date (between 2026-09-05 and 2026-10-22).

Seven enrollments showing the many-to-many in action:
- Alice → CS101, MATH201
- Bob → CS101, ENG110
- Diana → CS101, MATH201, ENG110 (taking all three)

The variety here was deliberate. Each student is enrolled in a different overlap of courses so when I'm testing queries tomorrow I can verify the filter logic actually filters. If everyone was enrolled in everything, "courses I'm taking" wouldn't be a useful test.`,
        },
        {
          q: "Why I used CommonJS in seed.js instead of ESM",
          a: `Project is ESM ("type": "module" in package.json). But seed.js uses require() — CommonJS:

require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')

Reason: Prisma 7 + driver adapters + ESM had import resolution issues when the seed script ran via npx prisma migrate dev. The error was about top-level await not being supported in the seed runner's loader context. CommonJS sidesteps it entirely — require() doesn't care about ESM/CJS interop.

This is the kind of thing you don't see in tutorials because tutorials don't hit it. The fix took me about 15 minutes of poking at error messages, then I gave up trying to be pure ESM in the seed and went pragmatic. Seed.js is the only file in the project that uses require — every other file is ESM.

Worth noting for anyone else running into this: Prisma's docs are catching up to v7 + adapters. Some patterns the docs still show won't work cleanly. Read the error message, don't fight the runtime.`,
        },
        {
          q: "Running the seed and verifying",
          a: `npx prisma db seed

Output:
Running seed command 'node prisma/seed.js' ...
Seeded: 4 users, 3 courses, 10 assignments, 7 enrollments

🌱  The seed command has been executed.

Opened Prisma Studio:
- User table: 4 rows
- Course table: 3 rows
- Assignment table: 10 rows
- Enrollment table: 7 rows

Clicked into Assignment, found "Loops & Conditionals Lab", noticed the courseId was 1. Clicked into Course id=1, confirmed it was CS101. The foreign key resolves visually.

Clicked into Enrollment, looked at the row with userId=4, courseId=3. That's Diana → ENG110. Click through to User → "Diana Reyes". Click through to Course → "Academic Writing, ENG110". Relationships work both directions in Studio.

Re-ran the seed to verify idempotency. Same output. Same row counts. No duplicates. Good.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Translate Your Full Week 4 Data Model",
      description:
        "Take the whole Week 4 data model and turn it into a working Prisma schema with all tables, relationships, and seed.",
      qa: [
        {
          q: "Looking back — what the final schema covers",
          a: `Four models in total: User, Course, Assignment, Enrollment.

The lab Ex 2 and Ex 3 walk you through doing this two models at a time. By the time I got to Ex 5 the schema was already most of the way there from Ex 2-3 work. So Ex 5 was mostly about: did I MISS anything from the Week 4 plan?

Comparison to my Week 4 sketch:
- Week 4 User → built (with role added)
- Week 4 Course → built (with @unique code added)
- Week 4 Assignment → built (with pointsTotal as the points field, dueDate optional)
- Week 4 Enrollment → built (as an explicit join table, was implicit in my Week 4 sketch)
- Week 4 DigestRun (one digest per user per day) → NOT built yet. Decided to defer this until I'm actually generating digests. Premature to model the digest history before I have a digest.

So I'm at 4/5 of the Week 4 plan, with the missing piece deliberately deferred. That's honest scope management.`,
        },
        {
          q: "Assignment model — the design choices",
          a: `model Assignment {
  id          Int       @id @default(autoincrement())
  title       String
  description String?
  pointsTotal Int?
  dueDate     DateTime?
  course      Course    @relation(fields: [courseId], references: [id])
  courseId    Int
  createdAt   DateTime  @default(now())
}

Choices:
- description, pointsTotal, dueDate all OPTIONAL. Real Canvas data has assignments with missing pieces — ungraded diagnostic essays have pointsTotal: 0 or null, some announcements masquerade as assignments with no due date. Optional fields handle this without forcing fake defaults.
- pointsTotal as Int, not Float. Canvas points are practically always whole numbers in the courses I've taken. If I'm wrong, this is a future migration — change Int to Float, update the existing rows. Reversible.
- Assignment belongs to ONE Course (single FK). A course has MANY assignments. Standard one-to-many.
- NO direct link to User. Assignments belong to Courses, not Users. Whether a User can SEE an Assignment depends on whether they're Enrolled in the Course. That's the indirection — User → Enrollment → Course → Assignment.

The Canvas Daily query for "what assignments does Diana have due this week" follows that chain:
1. Find Enrollments where userId = Diana
2. Get the courseIds
3. Find Assignments where courseId IN (those courseIds) AND dueDate <= next week

Tomorrow's API work will codify this query.`,
        },
        {
          q: "Field types — choosing Int vs String vs DateTime",
          a: `Walked through each field:

- id → Int @id @default(autoincrement()). Standard. Could have used String @id @default(cuid()) for non-sequential IDs (useful when exposing IDs in URLs), but stuck with sequential for simplicity. Canvas Daily IDs aren't user-facing identifiers.

- name, title → String. Required. No length constraints (Postgres TEXT is unbounded). If I wanted to enforce e.g. 200 char max, I'd add @db.VarChar(200) — but TEXT is fine for this app.

- email, code → String @unique. The @unique creates a Postgres UNIQUE INDEX which both enforces and speeds up lookups. Two-for-one.

- role → String @default("student"). Could have been an enum. Decided against — Prisma enums require a schema migration to add new values, which is heavier than I want for "instructor vs student vs maybe TA later." String + validation at the API layer is more flexible.

- pointsTotal → Int?. Optional integer. Could be 0 (diagnostic) or null (announcement-style).

- term → String?. Optional. Format is free-form like "Fall 2026" for now. Could become a related Term model if I need to query "all courses in Fall 2026" frequently, but for current scope this is fine.

- dueDate, createdAt → DateTime. Postgres TIMESTAMP(3) — millisecond precision. createdAt defaults to now(), dueDate is set explicitly per assignment.`,
        },
        {
          q: "lib/prisma.js — the singleton pattern for Next.js",
          a: `Created lib/prisma.js to export a single PrismaClient instance:

import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  return new PrismaClient({ adapter })
}

const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

Why this exists: Next.js dev mode hot-reloads modules. If I created a new PrismaClient on every import in every page, every save would spawn a new client, each holding a connection pool. Within minutes the dev server would exhaust the database's connection limit.

The globalForPrisma.prisma ?? createPrismaClient() trick caches the client on globalThis in dev. Hot reload? Same client. New page render? Same client. Production builds don't have this problem (no HMR), so the cache only attaches outside production.

This is THE pattern for Prisma + Next.js. Not in today's lab, but documented in the Prisma + Next.js guide. Set it up now and the rest of the app just does import prisma from '@/lib/prisma' and it works.`,
        },
        {
          q: "Got ahead — the digest page already queries Prisma",
          a: `Couldn't help myself. After getting the schema and seed working, I wired the first real query into app/page.js (the Today digest):

import prisma from '@/lib/prisma'

export default async function DigestPage() {
  const now = new Date()
  const in7Days = new Date(now)
  in7Days.setDate(in7Days.getDate() + 7)

  const [overdue, upcoming, courses] = await Promise.all([
    prisma.assignment.findMany({
      where: { dueDate: { lt: now } },
      include: { course: true },
      orderBy: { dueDate: 'asc' },
    }),
    prisma.assignment.findMany({
      where: { dueDate: { gte: now, lte: in7Days } },
      include: { course: true },
      orderBy: { dueDate: 'asc' },
    }),
    prisma.course.findMany({ orderBy: { name: 'asc' } }),
  ])

  // ... render the three sections
}

This is technically Day 3 territory (reading data from pages). But the schema was so fresh in my head that running the first real findMany felt like the right closing move. Three parallel queries via Promise.all:
1. Overdue assignments (dueDate < now)
2. Upcoming assignments (now <= dueDate <= 7 days from now)
3. All courses (for the course chip row)

include: { course: true } joins the course info onto each assignment in one query — same JOIN you'd write by hand in SQL, but Prisma generates it.

This is a server component (no "use client"), so the Prisma query runs ON THE SERVER. The browser gets pre-rendered HTML with the data already baked in. No loading state, no fetch, no useEffect.

The page renders today's date, an "Overdue" section if anything's overdue, a "Due this week" section, and a chip row of all courses. Tomorrow's Day 3 work is just polish on this foundation.`,
        },
        {
          q: "What I'd do differently next round",
          a: `Three things on the followup list:

1. Build the DigestRun model. Deferred today as premature. But once I'm generating real digests (Week 7+), I'll need a record of "what did the digest show on 2026-09-15" both for debugging ("why didn't user X get assignment Y in their digest?") and for analytics. Modeling that NOW would be slightly easier than retrofitting later.

2. Add a CanvasConnection model. Right now User has no path back to Canvas — no token, no canvas_user_id, no API base URL. When real Canvas integration lands, every User needs a 1:1 CanvasConnection holding the OAuth token. Forgetting this was a Week 4 oversight that didn't bite today but will bite Day 4.

3. Soft deletes via deletedAt: DateTime?. Right now if a course gets deleted, all its assignments break (ON DELETE RESTRICT will refuse). The real production answer is soft deletes — mark as deleted, filter out in queries, keep the row for historical digest queries. Going to add this when I have time, probably alongside the DigestRun work.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "Walk partner through the schema. 2 minutes. Partner asks one question.",
      qa: [
        {
          q: "Screen-shared the schema and walked through each model",
          a: `Opened prisma/schema.prisma in VS Code, made the font huge, walked through it model by model.

Order I went in: User first (the entity everything depends on), then Course (the second top-level entity), then Enrollment (the bridge between them), then Assignment (the leaf, belongs to Course).

For each one I named the fields, called out the types, and pointed at any decorator (@id, @unique, @default, @relation, @@unique) and explained what it does.

Spent extra time on Enrollment because that's where the interesting design choice is. Pointed at @@unique([userId, courseId]) and explained the "no double-enrollment" rule comes from the database, not from app code.`,
        },
        {
          q: "Partner's follow-up question and my answer",
          a: `Partner's question: Why did you make Enrollment an explicit model instead of just doing User { courses Course[] } and Course { users User[] } with Prisma's implicit many-to-many?

My answer: Two reasons.

First — flexibility. An enrollment is a real thing that exists in time and has its own state. Today it's just (userId, courseId). Tomorrow it'll have enrolledAt: DateTime. Next week it might have status: String (active / withdrawn / completed). Eventually it might have currentGrade: Float. The minute I want any of those fields, implicit many-to-many can't help me — the join table is hidden. Explicit means I can grow the model without restructuring.

Second — query ergonomics. Implicit many-to-many is great when you only care about the endpoints: "who's in this course," "what courses does this user have." But Canvas Daily will eventually need to query enrollments DIRECTLY — "show me all enrollments created in the last 30 days," "count active enrollments per course," "find dropped enrollments for re-engagement emails." With an explicit Enrollment model those queries are just prisma.enrollment.findMany(...). With implicit, they're awkward.

The cost of explicit is one extra line in every join query — instead of user.courses you write user.enrollments.map(e => e.course). For a 30-second-longer query syntax I get a model that grows with the product.

Same instinct as picking a real foreign key column over a denormalized JSONB blob. Schema design pays compound interest.`,
        },
        {
          q: "What I'd refine after hearing myself explain it",
          a: `Two refinements.

First — I led with "Enrollment is a real thing that exists in time." That phrase landed. I want to use it again. It captures the deeper principle: when a relationship has a temporal lifecycle, it deserves to be its own entity.

Second — I glossed over @@unique([userId, courseId]) in the original walkthrough and only mentioned it when the partner asked about enrollment dedup. Should have included it in the initial pass because it's a key invariant — "the same student can't enroll in the same course twice" is enforced at the database level, not at the app level. That's the kind of design choice that earns trust in the schema. Next time I'd point at it during the Enrollment walk-through.`,
        },
      ],
    },
  ],
};
