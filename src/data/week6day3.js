export const week6day3 = {
  number: 24,
  label: "Day 3",
  title: "Week 6, Day 3 — API Routes, Reading Data, List + Detail Pages",
  subtitle:
    "Closing the full-stack loop. Build /api/* endpoints, render Prisma data on pages, add search and filtering, ship list + detail.",
  color: "#ea580c",
  sections: [
    {
      heading: "Exercise 1 — Build Your First API Route",
      description:
        "Create GET endpoints that read from Prisma and return JSON. Test in the browser.",
      qa: [
        {
          q: "Updated lib/prisma.js to export both named and default",
          a: `Yesterday's lib/prisma.js used a default export. Pages were importing it as import prisma from '@/lib/prisma'.

Today's lab uses a NAMED export pattern — and even explicitly says "Use the named import everywhere — never default import." If I'd left the file as default-only, every API route would silently get undefined for prisma.

The fix is one line:
const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
export default prisma

Both exports point at the same singleton. Old default imports still work, new named imports work, and adopting the lab's convention going forward doesn't break Day 2's pages. Took 5 seconds. Spent more time deciding it was right than typing it.

Could have rewritten every Day 2 page to use named imports instead — but that's churn for no benefit. The point of having both exports is the lib file doesn't care how callers want to import it. Most JS libraries do exactly this.`,
        },
        {
          q: "Built /api/courses/route.js",
          a: `app/api/courses/route.js:

import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        _count: { select: { assignments: true, enrollments: true } },
      },
      orderBy: { name: 'asc' },
    })
    return NextResponse.json(courses)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}

Went past the lab by adding _count in the include. Prisma's _count is a special directive — instead of fetching the full assignments array (3-4 rows per course) just to count them, _count generates a SQL COUNT(*) for each relation. The response shape has course._count.assignments as an integer.

Why this matters: the courses list page wants to show "4 assignments" next to each course. Without _count I'd have to either include the full assignments array (heavy) or do N+1 queries (worse). _count gives me the count in the same query, no row materialization. One trip to the database.

Tested in the browser at http://localhost:3000/api/courses. Got JSON back:
[
  {"id":3,"name":"Academic Writing","code":"ENG110","term":"Fall 2026",...,"_count":{"assignments":3,"enrollments":2}},
  {"id":2,"name":"Calculus II","code":"MATH201",...,"_count":{"assignments":3,"enrollments":2}},
  {"id":1,"name":"Intro to Computer Science","code":"CS101",...,"_count":{"assignments":4,"enrollments":3}}
]

Ordered by name alphabetically. Counts match what's in Prisma Studio. Round trip works.`,
        },
        {
          q: "Built /api/assignments/route.js with query parameter support",
          a: `Did the basic endpoint AND the bonus server-side filter in the same pass since the lab walks you through both.

app/api/assignments/route.js:

import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get('courseId')

  try {
    const assignments = await prisma.assignment.findMany({
      where: courseId ? { courseId: parseInt(courseId, 10) } : {},
      include: { course: true },
      orderBy: { dueDate: 'asc' },
    })
    return NextResponse.json(assignments)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch assignments' }, { status: 500 })
  }
}

The request parameter is the standard Web Request. URL parsing pulls out searchParams. The where clause is a ternary — if courseId was provided, filter by it (with parseInt because URL params are strings); otherwise pass empty {} which means "all."

Tested both:
- /api/assignments → all 10 assignments, sorted by dueDate ASC. Earliest is "Diagnostic Essay" (2026-09-05), latest is "Midterm Project" (2026-10-22).
- /api/assignments?courseId=1 → 4 assignments, all from CS101.
- /api/assignments?courseId=999 → empty array, no error. Prisma's findMany returns [] for no matches, not null. Correct behavior.

include: { course: true } joins the course onto each assignment so the frontend can show "Hello World Program (CS101)" without a second query.`,
        },
        {
          q: "Why the try/catch matters even though Prisma usually doesn't throw",
          a: `Prisma DOES throw on certain failures — connection drops, malformed queries, constraint violations on writes. Bare Prisma calls without a try/catch would propagate the exception up to Next.js, which would return a generic 500 with the full stack trace exposed to the client.

The try/catch lets me:
1. Return a clean JSON error shape ({ error: '...' }) instead of an HTML error page
2. Set the status code explicitly (500)
3. Hide internal details from clients — production users see "Failed to fetch courses" not "PrismaClientKnownRequestError: P2010 ..."
4. Log the actual error server-side later if I want (currently swallowed — could improve)

In Hype Live every API endpoint had middleware doing this same shape. Each handler stayed focused on the happy path, the middleware caught everything. NestJS gives you that for free. In Next.js route handlers there's no equivalent middleware (yet) so I do it per-route.

Future refactor: extract a withErrorHandling wrapper that takes a handler and adds the try/catch. Three lines saved per route. Not worth doing until I have 5+ routes — premature abstraction otherwise.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Display Data on a Page",
      description:
        "Render Prisma data on a page. Went with Option A (server component) for the courses list — no useEffect, no loading state, just data.",
      qa: [
        {
          q: "The CoursesPage — pure server component",
          a: `app/courses/page.js:

import prisma from '@/lib/prisma'
import CourseCard from './course-card'

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    include: {
      _count: { select: { assignments: true, enrollments: true } },
    },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Courses</h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{courses.length} courses this term</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

Things that didn't have to exist because this is a server component:
- No useState for the courses array
- No useEffect to fetch
- No loading state — there's no in-between moment, the page IS the data
- No fetch() call — Prisma is called directly in the component body
- No "/api/courses" round-trip — server queries the database, renders HTML, sends to browser

Same Prisma query as my /api/courses route (with the _count include). The difference: the API route is called by other clients (browser fetches, future mobile app, whatever). The page is rendered HTML. Same query, two consumers.

This is the lab's "Option A" pattern. For READ-only list pages it's strictly better than client-fetching — fewer network round trips, no loading flash, no JS shipped for the rendering layer.`,
        },
        {
          q: "Why I chose server component over client for the courses list",
          a: `Three reasons.

First — the courses list has no interactivity. Nothing on the page changes after first render. No search, no filter, no toggle. It's a read-and-display screen. Client component for this would be pure overhead — ship the React code to the browser, hydrate, do an extra HTTP fetch to /api/courses, render, all to display the same data the server could have rendered directly.

Second — fewer states to manage. With a server component I don't even have a "loading" concept. The user clicks the link, Next.js fetches the data on the server, returns the rendered HTML. By the time the page paints, the data is there. With a client component I have to write the loading branch, the error branch, the empty branch — three states, each of which needs design and testing.

Third — security. The Prisma query runs on the server. If I add auth later (user-scoped queries), the auth check ALSO happens on the server, in the same render. There's no API endpoint exposed publicly that needs separate auth logic. Defense by architecture.

When I'd switch to client: the moment I add search, filter, or any other state-driven interaction. That's the next exercise — assignment list IS a client component for exactly that reason.`,
        },
        {
          q: "Stretch — used both server and client patterns in the same project",
          a: `The lab presents Option A and Option B as alternatives. I used both:
- /courses (list) → server component, direct Prisma query
- /assignments (list) → client component, fetches from /api/assignments

Both patterns are useful, just for different jobs. Picking which one to use IS the architectural skill the lab is teaching.

The instinct: start every page as a server component. If you find yourself needing interactivity (search, filter, optimistic updates, modals), extract the interactive piece into a client subtree. Don't make the WHOLE page client when only one widget needs to be.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Add Filtering",
      description:
        "Built AssignmentList — client component with search input AND a status filter (all / upcoming / past).",
      qa: [
        {
          q: "AssignmentsPage as a thin server wrapper around the client list",
          a: `app/assignments/page.js (server):

import AssignmentList from './assignment-list'

export default function AssignmentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Assignments</h1>
      <p className="mt-1 mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        Search and filter all your assignments
      </p>
      <AssignmentList />
    </div>
  )
}

Page is a server component (no "use client"). It just sets up the header and container, then renders the AssignmentList client component below.

Why this split: the header text never changes — it can be server-rendered. The list needs interactivity — it must be client. Putting both in a single client component would force the static header into the client bundle for no reason. This split is the cheapest version of the lesson — server outer, client inner.`,
        },
        {
          q: "AssignmentList — the client component with search and filter",
          a: `app/assignments/assignment-list.js — has "use client" at the top because it uses useState + useEffect:

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/assignments')
      const data = await res.json()
      setAssignments(data)
      setLoading(false)
    }
    load()
  }, [])

  const now = new Date()

  const filtered = assignments.filter((a) => {
    const dueDate = a.dueDate ? new Date(a.dueDate) : null
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.course.name.toLowerCase().includes(search.toLowerCase())
    const matchesFilter =
      filter === 'all' ||
      (filter === 'upcoming' && (!dueDate || dueDate >= now)) ||
      (filter === 'past' && dueDate && dueDate < now)
    return matchesSearch && matchesFilter
  })

  // ... rest renders the search input, filter dropdown, and the filtered list

Four pieces of state:
- assignments — the full list from the API
- search — the search string
- filter — "all" | "upcoming" | "past"
- loading — only true during the initial fetch

The filter pattern is the Week 5 Day 3 pattern applied to a real dataset. AND-combined predicates — an assignment must match both the search AND the status filter. The matchesSearch checks both title and course name, so typing "math" matches any assignment in MATH201, not just ones with "math" in the title.

The dueDate handling deserves a note: the API returns dueDate as an ISO string (JSON doesn't have a Date type). Comparing strings to a Date object would silently misbehave. So I new Date(a.dueDate) once per row, then do real Date comparisons. The cost is per-render parsing — for 10 assignments it's nothing.`,
        },
        {
          q: "Why client-side filtering instead of round-tripping every keystroke",
          a: `Two reasons.

First — latency. With 10 assignments in the database, filtering in JS is sub-millisecond. Fetching from /api/assignments?search=...&filter=... on every keystroke would be 50-200ms each, multiplied by every character typed. Even if the network is fast, the UX is laggy.

Second — the dataset is small and bounded. 10 assignments now, maybe 50 across a few semesters of real Canvas data. That fits comfortably in browser memory. Client-side filter is the right call.

When I'd flip this: if the dataset gets into the thousands, OR if I want to filter by something the database can do better than JS (full-text search, fuzzy match). Then server-side filtering via query params (the bonus pattern from Ex 1) earns its keep. The API route ALREADY supports ?courseId= so when I add that filter in the UI later, it's just a matter of building the URL.

For now: fetch once on mount, filter in memory. Standard pattern, scales until it doesn't.`,
        },
        {
          q: "Loading state — why I kept it",
          a: `Server components don't need loading states because the data is there when the page renders. Client components DO need them because there's a real moment between mount and first data arrival.

In dev on a local Postgres, that moment is maybe 20ms — basically invisible. In production from a real network it could be 300-500ms. Better to render "Loading..." for those 500ms than to render an empty list that suddenly populates and reflows the page.

if (loading) return <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading...</p>

Could have done <Skeleton /> placeholders for fancier UX. Skipped it. The text is honest and unambiguous. Polish comes later when the rest of the app is real.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Style the Data Display",
      description:
        "Built CourseCard as a reusable component. Used Tailwind 4 throughout the project instead of the lab's inline styles.",
      qa: [
        {
          q: "CourseCard — reusable, links to detail",
          a: `app/courses/course-card.js:

import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <Link
      href={\`/courses/\${course.id}\`}
      className="block rounded-xl border border-zinc-200 dark:border-zinc-800 px-5 py-5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50 truncate">{course.name}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            {course.code}{course.term ? \` · \${course.term}\` : ''}
          </p>
        </div>
        <div className="text-right text-sm shrink-0">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">{course._count?.assignments ?? 0}</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">assignments</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
        {course._count?.enrollments ?? 0} students enrolled
      </p>
    </Link>
  )
}

Notes:
- The whole card is a <Link>. Clicking anywhere on the card navigates to /courses/[id]. No "View course" button needed.
- block on the Link is what makes the whole anchor area clickable — by default <a> is inline.
- _count?.assignments ?? 0 — defensive. If somehow the API didn't include _count, this falls back to 0 instead of rendering "undefined".
- hover:bg-zinc-50 + transition-colors gives a subtle hover effect. Tailwind handles the pseudo-selector that inline styles can't.
- dark: variants throughout because the app supports both light and dark themes. Got this for free by sticking to zinc shades from day one.`,
        },
        {
          q: "Why Tailwind instead of the lab's inline styles",
          a: `The lab uses inline styles for everything. They work, but they're rough for any project larger than a tutorial:
- No hover/focus pseudo-selectors (style={{ ":hover": ... }} doesn't work — that's not real CSS)
- No media queries
- No dark mode support
- Repeating the same style object across components instead of class names
- No design tokens — every color and spacing is hardcoded inline

Tailwind 4 was already installed in canvas-daily from the Day 1 scaffold (next.js's create-next-app added it as one of the prompts). So I've been Tailwind-first since Day 1.

The CourseCard above has hover state, dark mode, responsive layout (via the parent grid), and consistent spacing — all in classNames. Translating it to inline styles would either lose features or require state management for hover.

This is the same instinct as picking explicit join tables over implicit ones yesterday: tutorials show the minimal version, real code makes the slightly-bigger version that survives the second week. Now's the time to set the pattern.`,
        },
        {
          q: "The responsive grid layout",
          a: `In CoursesPage:
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

grid-cols-1 = one column on small screens.
sm:grid-cols-2 = two columns once the viewport is ≥640px.
gap-4 = 16px gap between cards.

Three courses on a phone stack vertically. On a tablet or laptop they show two-per-row. No CSS, no media queries hand-written — Tailwind's responsive prefixes do it.

The lab's example uses grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) which is more sophisticated (auto-flows as many columns as fit). For 3 courses my simpler version is fine. For 50 courses I'd switch to auto-fill. Pick the responsive strategy that matches the data volume.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Build a Detail Page",
      description:
        "Course detail with assignments AND enrolled students; assignment detail with course link AND related assignments. Went past Level 2 and Level 3 mods.",
      qa: [
        {
          q: "Course detail — includes assignments AND enrollments",
          a: `app/courses/[id]/page.js (key parts):

import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function CourseDetailPage({ params }) {
  const { id } = await params

  const course = await prisma.course.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      assignments: { orderBy: { dueDate: 'asc' } },
      enrollments: { include: { user: true } },
    },
  })

  if (!course) notFound()

  // ... render assignments + enrolled students sections
}

Two patterns past the lab here.

First — notFound() from next/navigation. The lab returns a manual "Recipe Not Found" JSX block. Better is calling notFound() which kicks Next.js into its not-found handling — proper 404 status code, can be customized with a not-found.js file at the route level. The user gets a real "page not found" experience, search engines get the right signal, and the code stays clean.

Second — nested include. The single Prisma query fetches the course, its assignments (with ordering), AND its enrollments (with the user record for each). One database round-trip, three related shapes returned. SQL underneath this is a course query plus two joins/subqueries — Prisma optimizes the actual queries it sends.

The course detail page now shows:
- Course name, code, term (header)
- "Assignments (4)" — clickable list, each links to /assignments/[id]
- "Enrolled Students (3)" — chip row with each user's name and role
- Overdue assignments get a red dot/text

That's the Level 2 mod from the lab (show related data) baked in.`,
        },
        {
          q: "Assignment detail — with related assignments from the same course",
          a: `app/assignments/[id]/page.js (key parts):

const assignment = await prisma.assignment.findUnique({
  where: { id: parseInt(id, 10) },
  include: { course: true },
})

if (!assignment) notFound()

const related = await prisma.assignment.findMany({
  where: {
    courseId: assignment.courseId,
    id: { not: assignment.id },
  },
  orderBy: { dueDate: 'asc' },
  take: 5,
})

Two queries on this page:
1. findUnique for the assignment itself (with its course included)
2. findMany for the related — same courseId, exclude the current one, top 5 by due date

The id: { not: assignment.id } is Prisma's NOT operator — translates to SQL's <> or NOT IN. Without it I'd have the current assignment showing up in its own "related" list. Awkward.

take: 5 caps the related list. CS101 has 4 assignments, MATH201 has 3, ENG110 has 3. The cap won't trigger now, but if a real Canvas course has 30 assignments I don't want the entire list dumping into the "related" section. 5 is enough to be useful, small enough to not overwhelm.

This is the Level 3 modification — "show related items, e.g., other recipes in the same category." Built in.`,
        },
        {
          q: "Smart due-date rendering on the digest",
          a: `Updated app/page.js (the Today digest) to use friendlier date strings. Instead of "Due Sep 10" for everything, I compute days-until-due and use natural phrases:

const daysUntil = a.dueDate
  ? Math.ceil((a.dueDate - now) / (1000 * 60 * 60 * 24))
  : null

// then in JSX:
{overdueBadge
  ? \`\${Math.abs(daysUntil)}d overdue\`
  : daysUntil === 0
  ? 'Due today'
  : daysUntil === 1
  ? 'Due tomorrow'
  : \`Due \${a.dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}\`}

Four cases:
- Overdue → "3d overdue" (in red)
- Due today (0 days away) → "Due today"
- Due tomorrow (1 day away) → "Due tomorrow"
- Otherwise → "Due Sep 24" (the formatted date)

The (a.dueDate - now) / (1000 * 60 * 60 * 24) is the standard "milliseconds to days" conversion. Math.ceil rounds up so an assignment due at 11:59pm today still says "Due today" not "Due tomorrow."

Small detail, but this is the kind of thing that makes the digest feel like a product rather than a database viewer. A real student doesn't think "due 2026-09-10" — they think "due tomorrow." Match the mental model.`,
        },
        {
          q: "The list ↔ detail navigation flow",
          a: `Tested the full cycle:
1. http://localhost:3000/courses → list of 3 course cards
2. Click CS101 card → /courses/1 → CS101 detail with 4 assignments + 3 enrolled students
3. Click "Loops & Conditionals Lab" → /assignments/3 → assignment detail with course link + 3 related assignments
4. Click "← Assignments" → /assignments → full list with search
5. Type "midterm" → filters to 2 results (CS101 Midterm Project, MATH201 Midterm Exam)
6. Click MATH201 Midterm Exam → /assignments/8 → that detail page
7. Click "Calculus II · MATH201" link → /courses/2 → MATH201 detail
8. Click "← Courses" → /courses

Every link does what it should. No broken edges. The graph closes — anywhere you are in the app you can get back to a list, and from any list you can drill into any item.

This is the list-and-detail pattern the lab promises is "one of the most common patterns in web apps." It IS. The same shape powers Instagram (feed → post), Amazon (search → product), every job board, every CRM. Once you can build this cleanly, you've built the skeleton of most CRUD apps.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes explaining one of three things to a partner. Picked the full-stack loop.",
      qa: [
        {
          q: "Which concept I picked — API route, full-stack loop, or server vs client for READ",
          a: `The full-stack loop. It's the headline of the day — by the end of today, data goes from Postgres all the way to a rendered React component on the user's screen, and I can point at every step. If I can describe that flow cleanly out loud, I know the day's lessons landed. The other two options are smaller pieces of the same story.`,
        },
        {
          q: "My 2-minute walkthrough",
          a: `Let me trace what happens when a user opens http://localhost:3000/courses in their browser.

Step 1: The browser sends a GET request for /courses to my Next.js server. No JavaScript involved yet — this is just an HTTP request the browser makes when you hit Enter on the address bar.

Step 2: Next.js's router sees the URL and looks for app/courses/page.js. Finds it. The exported function is an async server component. Next.js invokes it.

Step 3: Inside the function, the first line is await prisma.course.findMany({ include: { _count: { ... } } }). That's the Prisma client opening a Postgres connection (via the singleton in lib/prisma.js), sending a SQL query — actually two queries because of the _count aggregation — to the Neon-hosted database. Neon executes them, returns rows. Prisma deserializes the rows into JavaScript objects with the right shape. The await resolves.

Step 4: Now I have the courses array in memory on the server. The function returns JSX — a <div> with a grid containing one <CourseCard> per course. React on the server renders that JSX to HTML. Inline-server-side. No browser involved yet.

Step 5: Next.js sends that HTML back to the browser as the response to the original GET. The browser parses it, applies the CSS (Tailwind classes), paints to the screen.

Step 6: At this point the user sees the courses. The page is interactive enough — every CourseCard is wrapped in a Next.js <Link>. Hovering activates the Tailwind hover class. Clicking starts the cycle over again for the detail page.

The data started in Postgres rows. It traveled across the network to my Node.js server as deserialized objects. The server rendered them to HTML in the same process. The HTML traveled across the network to the browser. The browser turned the HTML into pixels. End to end, that's the loop.

What's different from a Vite + plain React app: in that world, the database query has to happen via an API endpoint, the client fetches it, useState holds it, useEffect triggers it, loading state shows in between. Five steps where my version has one. The reason: Next.js lets the server do the work directly. The result is the same on screen, but the path to get there is half the length.`,
        },
        {
          q: "Partner's follow-up and my answer",
          a: `Partner's question: What if the API URL was wrong — say I had a typo in the fetch URL on the client component. Where would the error appear?

My answer: Depends which page. For the courses list, there IS no fetch URL on the client. The page is a server component, the Prisma call happens server-side, and the rendered HTML is what's sent. A typo in a fetch URL would just... not exist. There's nothing to typo.

For the assignments list, which IS a client component fetching /api/assignments — yes, a typo would surface in the browser. The fetch would either return 404 (if the path doesn't exist) or fail in some other way. Either way the response is some non-OK status, and my code path is:

const res = await fetch('/api/assignments')
const data = await res.json()
setAssignments(data)

I don't check res.ok. So if the API returned 404 with an HTML error page, the .json() would throw a "Unexpected token < in JSON" error because Next.js's 404 response is HTML, not JSON. That throw would propagate up to React, which would show an error overlay in dev — basically a red screen with the stack trace.

Honestly that's not great error handling on my part. The right version is:

const res = await fetch('/api/assignments')
if (!res.ok) {
  setError(\`Failed to load: \${res.status}\`)
  return
}
const data = await res.json()

Same pattern as the API route's try/catch — but on the client side. I should add this when I do the polish pass.

This is the answer in two parts: the error appears in different places depending on whether the component is server or client, AND I have a real bug in my client component because I'm not checking res.ok. Catching that during the walkthrough is the value of the verbal demo.`,
        },
        {
          q: "What saying it out loud surfaced",
          a: `Two things.

First — the partner's question about the missing res.ok check was a real catch. I described the happy path confidently, and then they asked a "what if it fails" question and I found a bug. The verbal demo IS a code review at a distance. Every time I do one I find at least one thing I'd change.

Second — the framing "five steps in Vite, one step in Next.js" landed cleanly as a contrast. I almost forgot to mention it. The point of the day's lab isn't just "you can call Prisma in a page" — it's that Next.js collapses the client-server round-trip when you don't need it. That's the architectural win. Going to lead with that next time instead of building up to it.`,
        },
      ],
    },
  ],
};
