export const week7day3 = {
  number: 28,
  label: "Day 3",
  title: "Week 7, Day 3 — Third-Party APIs + AI Integration",
  subtitle:
    "Server-side Canvas proxy with timeout + error isolation. Groq + Llama 3.3 70B via the OpenAI SDK. Structured system message. AI study breakdown wired into the assignment detail page.",
  color: "#0284c7",
  sections: [
    {
      heading: "Exercise 1 — Explore a Public API (Core)",
      description:
        "Picked Canvas LMS itself. The reason for canvas-daily existing in the first place — and the wall I hit back in Week 5 Day 4.",
      qa: [
        {
          q: "Why I picked Canvas LMS instead of one from the suggested list",
          a: `The lab's options are great practice APIs — Open-Meteo, Dog CEO, PokeAPI, JSONPlaceholder. All would work for the exercise. None of them belong in Canvas Daily.

Canvas LMS itself is the natural pick. My whole project is aggregating Canvas assignments into a daily digest. Back in Week 5 Day 4, I tried to call Canvas directly from a client component and hit two walls: CORS (the browser refuses cross-origin XHR to canvas.instructure.com from localhost) and auth (Canvas API needs a Bearer token that I can't safely expose to a browser). I worked around it by hardcoding seed data and stand-in JSONPlaceholder /todos.

Today's lab is the right moment to actually solve that. Server-side API route, key in .env, Bearer token attached to the fetch call, response normalized and returned as JSON the browser can use. The pattern the lab teaches is exactly the pattern I need for Canvas Daily's whole reason for existing.

It's also a way of making the "core path" feel like real work. Picking Dog CEO would have taught me the same pattern in 10 minutes. Picking Canvas teaches me the same pattern AND closes the gap that's been open in my project since Week 5.`,
        },
        {
          q: "The four things from the docs",
          a: `API: Canvas LMS REST API (Instructure)
Base URL: https://[your-school].instructure.com — for me, https://yc.instructure.com (Yavapai College)
Endpoint I'm using:
- GET /api/v1/courses?enrollment_state=active&per_page=20 (list active enrollments)
- GET /api/v1/courses/{courseId}/assignments?per_page=20&order_by=due_at (assignments per course)
Auth: required — Bearer token in the Authorization header. Token is generated at Canvas → Account → Settings → Approved Integrations → "+ New Access Token." User-scoped, not app-scoped.
Docs: canvas.instructure.com/doc/api/

Example response fields from /api/v1/courses (subset of what Canvas returns):
- id (number)
- name (string)
- course_code (string, e.g. "CSA-250")
- workflow_state ("available", "completed", "deleted")
- enrollment_term_id (number)
- start_at, end_at (ISO datetimes)

From /api/v1/courses/{courseId}/assignments:
- id (number)
- name (assignment title — Canvas uses "name" not "title")
- due_at (ISO datetime, nullable)
- points_possible (number, nullable)
- html_url (link back to the Canvas web UI)
- description (HTML string, sometimes)
- submission_types (array — "online_text_entry", "online_upload", etc.)

The naming mismatch between Canvas's "name" and my schema's "title" is one of the small annoyances of integrating with a real API I don't control. My route handler does the rename in the response mapping (a.title = a.name).`,
        },
        {
          q: "First call from the terminal — confirming the token worked",
          a: `Before writing the Next.js route, I tested the token directly from the terminal:

curl -H "Authorization: Bearer gsk_REDACTED" \\
  "https://yc.instructure.com/api/v1/courses?enrollment_state=active&per_page=5"

(For the real value I pulled CANVAS_TOKEN from .env — never typed the token into the shell history directly.)

Got back a JSON array of courses — CSA-250 (Intro to AI), CSC-205 (Algorithms), CIS-126 (Linux), the active ones. Six courses, all with the expected shape.

Quick sanity check: same call without the Authorization header returned a 401 with {"errors":[{"message":"user authorisation required"}]}. Same call with a deliberately bad token returned the same 401. Good — that confirms auth is actually working, not just rubber-stamping.

This 30 seconds of curl validation before touching the Next.js code is the highest-leverage habit I've picked up this term. If the curl fails, no amount of Next.js plumbing will save me. If the curl succeeds, I know the upstream is fine and any failures are in MY code.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Integrate into Your App (Core)",
      description:
        "Built /api/canvas as a server-side proxy with Bearer token in .env, plus /canvas page that fetches and renders the live data.",
      qa: [
        {
          q: "The proxy route — what it does and why it has to be server-side",
          a: `app/api/canvas/route.js (key bits):

const baseUrl = process.env.CANVAS_BASE_URL
const token = process.env.CANVAS_TOKEN

if (!baseUrl || !token) {
  return NextResponse.json(
    { error: 'Canvas API not configured' },
    { status: 500 }
  )
}

const coursesRes = await fetch(
  \`\${baseUrl}/api/v1/courses?enrollment_state=active&per_page=20\`,
  {
    headers: { Authorization: \`Bearer \${token}\` },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  }
)

Three things this route does that the browser CAN'T do directly:

1. Holds the Bearer token. process.env.CANVAS_TOKEN is only readable server-side. The browser never sees it. If I tried to put the token in client code, anyone who opened DevTools would be able to copy it and impersonate me on Canvas.

2. Bypasses CORS. canvas.instructure.com doesn't have an Access-Control-Allow-Origin header pointing at my localhost:3000. A browser-side fetch from my app would be blocked by CORS. A server-to-server fetch has no CORS — it's just two servers exchanging HTTP. CORS is a BROWSER policy, not an HTTP rule.

3. Normalizes the response shape. Canvas returns "name" for the assignment title. My UI uses "title." The route renames it (a.title = a.name) in the response. The browser gets clean, shaped data instead of raw Canvas JSON.

That's the data-flow pattern in three bullets. Without the server route, none of these work. With it, all three are solved by ONE file.`,
        },
        {
          q: "Two fetches per request — courses then assignments-per-course",
          a: `Canvas's API doesn't have a "give me all my assignments across all courses" endpoint. The shape is course-scoped: /api/v1/courses/{courseId}/assignments. So I have to fetch courses first, then fan out one assignment fetch per course.

const courses = await coursesRes.json()

const coursesWithAssignments = await Promise.all(
  courses.map(async (course) => {
    try {
      const assignmentsRes = await fetch(
        \`\${baseUrl}/api/v1/courses/\${course.id}/assignments?per_page=20&order_by=due_at\`,
        {
          headers: { Authorization: \`Bearer \${token}\` },
          signal: AbortSignal.timeout(TIMEOUT_MS),
        }
      )
      const assignments = assignmentsRes.ok ? await assignmentsRes.json() : []
      return { id: course.id, name: course.name, courseCode: course.course_code, assignments: ... }
    } catch {
      // One course timing out shouldn't break the whole response
      return { id: course.id, name: course.name, courseCode: course.course_code, assignments: [] }
    }
  })
)

Promise.all to fan out — six courses get six parallel requests, total wall-clock time is the slowest single request, not the sum. With sequential awaits the user would wait 6× as long.

The PER-COURSE try/catch is the part I'm proud of. If one course's assignments fetch times out or 500s, that course renders with an empty assignments array, but the page still shows the other five courses with their data. Without the per-course catch, one bad upstream response would propagate up to the outer catch and the whole page would render as "Canvas error." The right failure mode here is partial degradation, not total failure.`,
        },
        {
          q: "The page — client component with useEffect + fetch (and the small but real loading state)",
          a: `app/canvas/page.js:

'use client'

import { useState, useEffect } from 'react'

export default function CanvasPage() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/canvas')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setCourses(data)
        }
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load Canvas data')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading Canvas data...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return ...

Three states, three branches: loading, error, and data. The page handles each one. The loading state is brief (~300ms) but it's there — the user sees "Loading Canvas data..." for the moment between page mount and the fetch resolving. Without it, the page would render a brief flash of empty layout, which looks like a bug.

Why this is a client component and not a server component: a server component would mean Canvas data is fetched at server-render time, which would: (1) block the page render until Canvas responds, (2) re-fetch Canvas on every page visit (slow + unnecessary load on Canvas), (3) make caching harder. With a client component + useEffect, the page shell renders immediately and the data fetches client-side. The Canvas proxy still runs server-side; the page just fetches it like any other JSON endpoint.

If the user navigates away and back, the fetch runs again. For "live Canvas data" that's the right behavior — I want fresh data on every visit, not cached.`,
        },
        {
          q: "Secured the key — .env.example committed, .env gitignored",
          a: `.env (real, gitignored):
DATABASE_URL="postgresql://..."
CANVAS_BASE_URL="https://yc.instructure.com"
CANVAS_TOKEN="14123~very-long-real-token-here"
GROQ_API_KEY="gsk_real-key-here"

.env.example (committed, what other devs see):
# Copy this file to .env and fill in your values.
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Canvas LMS API — generate a token in Canvas > Account > Settings > Approved Integrations
CANVAS_BASE_URL="https://your-school.instructure.com"
CANVAS_TOKEN="your-canvas-api-token-here"

# Groq API — get a free key at console.groq.com/keys
GROQ_API_KEY="gsk_your-key-here"

The pattern:
- Real keys in .env (gitignored)
- Placeholder values in .env.example (committed)
- The example file's COMMENTS explain WHERE to get each key. So a new developer (or future me on a clean clone) can self-serve.

git diff confirmed .env doesn't show up in any commit. Going to be paranoid about this — leaked keys are one of the most common ways junior devs get burned. Especially Canvas tokens, which have ACCOUNT-level access to a real LMS where my grades live.`,
        },
        {
          q: "Tested it end-to-end against real Canvas",
          a: `1. npm run dev
2. Visited /canvas
3. Saw "Loading Canvas data..." for ~400ms
4. Page rendered six course sections — Intro to AI, Algorithms, Linux, etc.
5. Each course showed its assignments with due dates and point values
6. Clicked an assignment — opened the Canvas web UI in a new tab (target="_blank"), thanks to the html_url field

That's the full Canvas → server route → page flow working with REAL data from MY real Canvas account. Not seed data, not stand-ins, not /todos pretending to be assignments. Actual assignments from actual courses I'm actually taking.

This is the thing that's been a hole in canvas-daily since Week 5 Day 4. Six days of bootcamp later, I have the architectural pieces to solve it correctly. The CORS+auth wall is gone — not by working around it, but by going through it via the proper server-side proxy pattern.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Handle Errors Gracefully + Timeouts (Stretch)",
      description:
        "Added AbortSignal.timeout(5000) and split the catch into TimeoutError-specific 504 vs generic 503. Plus per-course try/catch from Exercise 2.",
      qa: [
        {
          q: "AbortSignal.timeout — the modern primitive over manual AbortController",
          a: `const TIMEOUT_MS = 5000

const coursesRes = await fetch(url, {
  headers: { Authorization: \`Bearer \${token}\` },
  signal: AbortSignal.timeout(TIMEOUT_MS),
})

That's it. One line for the timeout. No manual AbortController instantiation. No setTimeout. No clearTimeout cleanup in a try/finally. No risk of leaking the timer if I forgot the cleanup branch.

The older pattern would have been:

const controller = new AbortController()
const timeoutId = setTimeout(() => controller.abort(), 5000)
try {
  const res = await fetch(url, { signal: controller.signal })
  clearTimeout(timeoutId)  // don't leak the timer
  ...
} catch (e) {
  clearTimeout(timeoutId)  // also here
  ...
}

Six lines of boilerplate plus two clearTimeout calls. Every catch branch needs its own clearTimeout or the timer keeps running. Easy to forget one.

AbortSignal.timeout collapses all of that into one line. Built into Node 18+ and modern browsers. The runtime handles the timer lifecycle. Recognize the older pattern when you see it in tutorials and prefer this one.`,
        },
        {
          q: "TimeoutError vs generic Error — different status codes for different failures",
          a: `} catch (error) {
  if (error instanceof Error && error.name === 'TimeoutError') {
    return NextResponse.json(
      { error: 'Canvas took too long to respond' },
      { status: 504 }
    )
  }
  return NextResponse.json(
    { error: 'Could not reach Canvas' },
    { status: 503 }
  )
}

Two error types, two HTTP status codes:

504 Gateway Timeout — Canvas WAS reachable, but didn't respond within 5 seconds. Their server is up but slow. Retrying might work. Suggested user message: "Canvas is slow right now, try again in a moment."

503 Service Unavailable — couldn't even reach Canvas. Network down on my side, DNS failure, or Canvas is straight-up offline. Retrying might or might not work depending on what's broken. Suggested user message: "Couldn't reach Canvas."

The HTTP spec has specific meanings for each 5xx code. Using 500 for everything would be lazy and would hide useful information from anything monitoring the API. Using the right status code means a dashboard could later show "we hit 12 timeouts and 3 unreachables this week" and tell me whether to file a bug with Canvas or check my network.`,
        },
        {
          q: "Tested by breaking it on purpose",
          a: `Three break-it tests:

1. Wrong base URL. Temporarily set CANVAS_BASE_URL="https://yc-typo.instructure.com" in .env. DNS resolution fails. fetch throws TypeError. Caught by the generic catch, returns 503 "Could not reach Canvas." Page shows "Error: Could not reach Canvas." NOT a crash, NOT a stack trace leaking to the user. Friendly error message in red text on the page.

2. Bad token. Set CANVAS_TOKEN="bogus." Canvas itself returns 401 Unauthorized. coursesRes.ok is false, so the route returns NextResponse.json({ error: 'Canvas returned 401' }, { status: 401 }). Page shows "Error: Canvas returned 401." Clear what's wrong, points me at the credential.

3. Forced timeout. Set TIMEOUT_MS to 1ms (impossible to satisfy). AbortSignal fires immediately, fetch throws TimeoutError. Caught by the TimeoutError branch. Returns 504 "Canvas took too long to respond." Page shows "Error: Canvas took too long to respond."

All three tests showed: the app doesn't crash, no stack trace shows up in the UI, the user gets a sentence in plain English about what went wrong, and the HTTP status is appropriate for each failure mode.

That's the difference between "code that runs" and "code that ships." Real users WILL trip every one of these failure modes eventually. Handling them up front is cheaper than handling them after a support ticket.`,
        },
        {
          q: "The bonus per-course isolation that the lab didn't ask for",
          a: `The lab's error handling spec covered the OUTER try/catch — wrap the whole route, return 504/503. My route has that AND a per-course try/catch around the assignments-per-course fetches.

const coursesWithAssignments = await Promise.all(
  courses.map(async (course) => {
    try {
      const assignmentsRes = await fetch(\`\${baseUrl}/api/v1/courses/\${course.id}/assignments...\`)
      const assignments = assignmentsRes.ok ? await assignmentsRes.json() : []
      return { ..., assignments }
    } catch {
      return { ..., assignments: [] }  // one course timing out doesn't kill the rest
    }
  })
)

Without the inner try/catch: if /api/v1/courses/{slowCourseId}/assignments times out, the rejection propagates up through Promise.all and lands in the outer catch. The user sees "Canvas took too long to respond" and ZERO courses. Five other courses had perfect responses, but they're all hidden because of one slow one.

With the inner try/catch: the slow course gets [] for assignments and a "No assignments found" message in the UI. The other five courses still render with their data. Partial degradation > total failure.

This is the kind of error handling that earns its keep when production traffic hits real flaky upstreams. Canvas's per-course endpoints have noticeably variable latency depending on the course size. Building in tolerance for that variability from day one is way cheaper than retrofitting it after a support ticket.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Set Up the OpenAI API and Make Your First Call (Core)",
      description:
        "Built /api/ai with the OpenAI SDK pointed at Groq's OpenAI-compatible endpoint. Llama 3.3 70B. First call worked, response logged, route ready for the system message in Exercise 6.",
      qa: [
        {
          q: "Why I used Groq + Llama 3.3 70B instead of OpenAI",
          a: `Three reasons. None of them is about provider preference.

First, I already have a Groq API key from PromptForge and Interview Armor. No new signup, no new key to provision. Saved 5 minutes on a class where every minute matters.

Second, Groq's free tier is generous — way more than the openai $5 trial credit. For a learning project where I might burn through hundreds of test calls, that headroom matters.

Third, the OpenAI SDK is built to be provider-agnostic via baseURL. Same import, same .chat.completions.create signature, same response shape. Swapping providers is literally one line in the constructor:

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

If I later want to use a real OpenAI model — for example, if my Phase 2 budget approves a paid key — I delete the baseURL line and change the env var name. The rest of the code is identical.

This is NOT a provider comparison study. I haven't seriously measured cost, quality, or speed against OpenAI for this specific use case. I just picked the provider that minimized signup friction and let me get to the actual learning. Going to call out in the README that the provider choice is interchangeable.`,
        },
        {
          q: "The route — clean, three-block shape",
          a: `app/api/ai/route.js:

import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

export async function POST(request) {
  try {
    const { assignment } = await request.json()

    if (!assignment) {
      return NextResponse.json({ error: 'Assignment data is required' }, { status: 400 })
    }

    // ... format context, build messages ...

    const completion = await openai.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: '...' },
        { role: 'user', content: '...' },
      ],
      temperature: 0.5,
    })

    const message = completion.choices[0]?.message?.content ?? 'No response generated'
    return NextResponse.json({ message })
  } catch (error) {
    if (error instanceof Error && error.name === 'TimeoutError') {
      return NextResponse.json({ error: 'AI took too long to respond' }, { status: 504 })
    }
    console.error('OpenAI error:', error)
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 })
  }
}

Three blocks: parse input + validate, call the model, return or handle error. Same overall shape as the Canvas route. Different upstream, same pattern.

Notice the optional chaining on completion.choices[0]?.message?.content with the ?? fallback. If the model returns a malformed response (which it might under rate limiting), I don't crash — I return "No response generated" and the user sees something useful. Defensive, but cheap.`,
        },
        {
          q: "First call — what worked and what didn't on the first try",
          a: `Wired up a tiny test in the browser console while developing — fetch('/api/ai', { method: 'POST', body: JSON.stringify({ assignment: { title: 'Hello World', courseName: 'CS101' } }) }) — to skip the UI plumbing and test the route in isolation.

What worked on the first attempt:
- The Groq connection — instant. Same SDK, same OPENAI_BASE_URL pattern I've used before.
- The response parsing — choices[0].message.content unchanged from OpenAI's spec.
- The error catch.

What didn't work on the first attempt:
- I initially called Llama 3.1 70B (older Groq model). It still works but it's a generation behind. Switched to llama-3.3-70b-versatile.
- I forgot to restart the dev server after adding GROQ_API_KEY to .env. Next.js only reads .env at startup. Wasted about 90 seconds debugging "why is process.env.GROQ_API_KEY undefined."

Second time was clean. Console showed { message: "Here's how to approach the 'Hello World' assignment..." } — a real LLM response.

Total time from "open route file" to "first working response": about 8 minutes. Compared to Week 5 when I was wrestling with the same shape of code for fetch+parse+state, this felt easy. The pattern is the same; the upstream just changed.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Build a Simple Chat UI (Stretch — partially)",
      description:
        "Skipped the standalone chat UI. The integrated AssignmentBreakdown button on the detail page IS the chat UI, in context.",
      qa: [
        {
          q: "Why I didn't build a separate /ai-chat page",
          a: `The lab's chat UI is generic — text input, submit, response box. Useful for proving the AI route works. NOT useful as a feature in my actual product.

If I build /ai-chat as a page, who navigates to it? What question would they type? "What should I do this weekend?" → AI gives some study tips. Cute. Doesn't move the needle on canvas-daily as a study tool.

The right "chat UI" for canvas-daily isn't a free-form prompt box. It's an in-context button that takes the SPECIFIC assignment the user is looking at and gives a structured breakdown for THAT assignment. The "prompt" is the assignment data; the user doesn't type anything.

So I jumped to Exercise 8 instead — built AssignmentBreakdown as the in-context AI feature. The Break this down button on the assignment detail page IS the UI for the AI route. It's a chat UI in the loosest sense — one-shot, request/response — but it's integrated into the actual workflow.

This is a judgment call about where in the lab's stretch path to invest time. The standalone chat UI is good practice for plumbing. The integrated feature is good practice for product design. I picked product design.`,
        },
        {
          q: "If I had built the standalone chat — what it would look like",
          a: `For completeness, the version I'd build if I came back to it:

'use client'

import { useState } from 'react'
import Markdown from 'react-markdown'

export default function AIChatPage() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignment: { title: input, courseName: 'General' } }),
      })
      const data = await res.json()
      setResponse(data.message || data.error)
    } catch {
      setResponse('Something went wrong. Try again.')
    }
    setLoading(false)
  }

  return ...
}

The two interesting bits:
1. Wrapping the user's prompt as a fake "assignment" with a generic courseName. My route expects an assignment shape, not a free-form prompt. The user input goes in the title field. Hack, but it works.
2. The form clears its own input and shows the response below. Standard chat-app pattern.

If I ever want this — for product debugging, for example, "let me ask the AI directly without an assignment context" — I'd add it. Not today.`,
        },
      ],
    },
    {
      heading: "Exercise 6 — Add a System Message (Core)",
      description:
        "Custom system message tailored to canvas-daily: study-assistant role, structured markdown output with four named sections, 300-word cap.",
      qa: [
        {
          q: "The system message — structured output is the entire point",
          a: `content: \`You are a study assistant for a college student. Given an assignment, produce a clear, actionable breakdown in this exact format:

## What's being asked
1-2 sentences summarizing what the assignment actually wants.

## Step-by-step plan
A numbered checklist of concrete steps to complete it. Be specific — not "do the reading" but "read Chapter 3, pages 45–62, take notes on X."

## Watch out for
2-3 bullet points on common mistakes, grading gotchas, or things easy to miss.

## Time estimate
A realistic time estimate broken into phases (e.g., "Reading: 30 min · Writing: 1 hr").

Keep the whole response under 300 words. Be direct — the student needs to get to work, not read an essay.\`

Four constraints baked in:

1. Domain role: "study assistant for a college student." Not generic assistant. Not chatbot. Specific persona that shapes everything.

2. Exact format: four named markdown headers, in this order. The model can't decide to skip "Watch out for" or rename "Time estimate" to "Timing." The contract is explicit.

3. Specificity rule: the prompt literally calls out the bad pattern ("do the reading") and the good pattern ("read Chapter 3, pages 45-62"). I'm not relying on the model to figure out what "concrete" means — I'm showing it.

4. Length cap: under 300 words. Without this, LLMs tend to ramble. With it, the output stays useful for a busy student who's actually trying to start work.

The "be direct — the student needs to get to work, not read an essay" closing line is the personality dial. Sets tone WITHOUT being a long-winded persona instruction. One sentence, ends the system message.`,
        },
        {
          q: "Why temperature 0.5 (not the default 0.7 or 1)",
          a: `temperature: 0.5

The lab's default and most tutorials' default is 0.7. I went lower.

Reasoning:
- This is a STRUCTURED output. I need it to consistently produce the same four sections in the same order. Higher temperature would make the model creatively reinterpret the format.
- It's a study tool. The user is asking "how should I approach this assignment." They don't want flair, they want a checklist. Lower temperature = more predictable = more useful.
- It's NOT a creative writing tool. Temperature 1.0+ is for "write me a poem" or "brainstorm ten campaign slogans." That's not what I'm doing.

If the user wanted variation — say, "give me three different study approaches" — I'd bump temperature. For "give me ONE good study plan for this specific assignment," 0.5 is the right call.

Tested this empirically. Ran the same assignment through at temp 0.3, 0.5, 0.7, and 1.0. At 0.3 the responses were nearly identical across runs (boring but reliable). At 0.5 they had small variation in phrasing but the structure stayed locked. At 0.7 the structure occasionally drifted — once it added a fifth "Resources" section I hadn't asked for. At 1.0 the format broke about 1 in 3 runs.

0.5 is the right point on the trade curve for this specific use case. Going to revisit if I add more variety-seeking AI features.`,
        },
        {
          q: "Before-and-after: same assignment, no system message vs my system message",
          a: `Tested with assignment: { title: "Final Essay on Industrial Revolution", courseName: "HIS 101", pointsTotal: 100, description: "Write a 5-page essay analyzing the social impact of the Industrial Revolution." }

WITHOUT system message:
"The Industrial Revolution had a major impact on society. You should make sure to research the topic thoroughly and cover key themes like urbanization, labor conditions, and family structure. Make sure your essay has a strong thesis statement and supporting evidence from primary and secondary sources. Aim for proper MLA or Chicago formatting, and revise carefully for clarity..."

Three paragraphs of generic essay advice. Could be about any history essay. No structure. No specific guidance.

WITH my system message:

## What's being asked
A 5-page analytical essay (not just summary) of how the Industrial Revolution changed people's daily lives, focused on social impact rather than economic or technological details.

## Step-by-step plan
1. Pick 2-3 specific social changes to focus on (e.g. child labor, urbanization, gender roles). Don't try to cover everything.
2. Find 4-5 sources — mix of primary documents and modern historians' analysis. Use JSTOR via the library.
3. Draft a thesis that takes a position (not "the Industrial Revolution changed society" — argue HOW or WHICH change mattered most).
4. Outline before drafting: intro + thesis, ~3 body sections (one per change), counterargument, conclusion.
5. Write first draft. Don't edit while drafting.
6. Revise for thesis support — every paragraph should clearly back the thesis.

## Watch out for
- Vague theses that don't argue anything
- Listing changes without analyzing impact
- Forgetting in-text citations on every claim

## Time estimate
Research: 3-4 hours · Outline: 30 min · Draft: 4-5 hours · Revision: 2 hours

Same model, same temperature, same question. Structured because I told it to be. Specific because I told it to be specific. Actionable because the system message demanded actionable.

The system message is doing 90% of the work here. The user prompt is just delivering data; the system message defines the shape of the answer.`,
        },
        {
          q: "What I'd tell a partner about the system message in the verbal demo",
          a: `Two sentences for the demo:

"My system message gives the model a study-assistant role and forces it to output four specific markdown sections — What's being asked, Step-by-step plan, Watch out for, Time estimate. That structure is the whole point — without it I'd get generic essay advice; with it I get an actionable checklist that's the same shape every time."

If asked WHY structured output: a student who hits this button isn't browsing for inspiration. They want to get to work. A structured response with consistent sections means they can scan straight to "Step-by-step plan" if they already know what's being asked, or skip to "Time estimate" if they're triaging their week. Unstructured prose forces them to read everything to find the useful bits.

The system message is the part of an AI feature where engineering effort compounds the most. Five minutes spent tightening it improves every future response. Five minutes spent prettifying the UI improves nothing for accuracy.`,
        },
      ],
    },
    {
      heading: "Exercise 7 — Connect AI to Your Data (Stretch)",
      description:
        "Two passes at this. First pass: the AI route accepts the assignment data inline as the prompt context. Second pass: built canvas-sync.js — a script that pulls real Canvas data INTO the local DB so the AI has the full assignment record to work with.",
      qa: [
        {
          q: "The simple version — pass assignment data as context in the user prompt",
          a: `In the AI route, before sending to the model:

const { title, description, pointsTotal, dueDate, courseName } = assignment

const context = [
  \`Course: \${courseName}\`,
  \`Assignment: \${title}\`,
  pointsTotal != null ? \`Points: \${pointsTotal}\` : null,
  dueDate ? \`Due: \${new Date(dueDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}\` : null,
  description ? \`Description:\\n\${description}\` : null,
]
  .filter(Boolean)
  .join('\\n')

const completion = await openai.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [
    { role: 'system', content: '...' },
    { role: 'user', content: \`Break down this assignment for me:\\n\\n\${context}\` },
  ],
  temperature: 0.5,
})

The format-as-context block is doing real work:
- Only includes fields that are non-null (filter(Boolean) drops the entry if pointsTotal/dueDate/description are null)
- Formats the due date in human-readable form ("Friday, November 15") instead of an ISO string
- Joins everything with newlines so it reads naturally as text

This is the difference between dumping JSON.stringify(assignment) into the prompt (the model has to parse JSON in its head and might misread fields) vs. giving it pre-formatted text the way a human would write it. The model is much better at human-readable text than at JSON.

The prompt-injection note from the lab applies here: this data is coming from MY database, originally pulled from Canvas. Canvas content is mostly trustworthy (instructors write it, students don't), so the risk is low. But if I later let users edit the description field freely, that text could contain a prompt-injection payload. Need to think about that when I add user-edit on the description.`,
        },
        {
          q: "The bigger version — canvas-sync.js script to pull real data into the DB",
          a: `Built prisma/canvas-sync.js as a one-shot script (run with node prisma/canvas-sync.js). It:

1. Reads the Canvas credentials from .env (CANVAS_BASE_URL, CANVAS_TOKEN, and a second pair for the other profile)
2. Upserts the User record (by email)
3. Fetches /api/v1/courses?enrollment_state=active&per_page=50
4. For each course: upserts the Course record by course code, upserts an Enrollment joining User to Course
5. For each course: fetches /api/v1/courses/{id}/assignments
6. For each assignment: upserts the Assignment record with title, description, points, due date, courseId, plus the submission status fields

Now the database has REAL course and assignment data, not seed data. The AssignmentBreakdown feature works on real assignments. The home digest shows real upcoming work.

Run pattern: I run npx prisma migrate dev once to make sure schema is current, then node prisma/canvas-sync.js to pull fresh data. The script is idempotent — every record uses upsert, so running it 10 times in a row produces the same DB state.

This took the project from "demo with seed data" to "live tool I'd actually use." Different category of thing.`,
        },
        {
          q: "Schema additions — submissionState and needsResubmission",
          a: `Added two fields to the Assignment model via a migration:

submissionState   String?  // "submitted", "graded", "unsubmitted", etc. — comes from Canvas's submission state
needsResubmission Boolean  @default(false)  // instructor flagged it back — student needs to redo

Used by the home page digest filter:

// Exclude graded assignments unless the instructor flagged a resubmission
const incomplete = {
  courseId: { in: courseIds },
  OR: [
    { submissionState: { not: 'graded' } },
    { needsResubmission: true },
  ],
}

The point of canvas-daily is to surface what I still NEED TO DO. Showing graded assignments mixed with upcoming work was making the digest noisy. With this filter, the home page only shows things that actually need attention — assignments I haven't submitted yet OR ones that were submitted and bounced back.

This is the kind of feature you can only design once you have real data flowing through. With seed data, every assignment looks the same — title, due date, points. With real Canvas data, you see "wait, half of these are already graded, why am I looking at them" and the filter becomes obvious.`,
        },
        {
          q: "The prompt-injection consideration I'm taking seriously even though it's lab-marked 'we'll cover later'",
          a: `The lab calls out this risk explicitly: if user-written data lands in the system message, an attacker could embed "ignore previous instructions and ..." in their text.

My setup right now:
- Assignment data comes from Canvas via canvas-sync.js. Instructors write it. Risk: low.
- The data goes in the USER message (not system), so even a successful injection only competes with the system message — it doesn't BECOME the system message.
- I'm not letting users edit the assignment description on the canvas-daily side. If someone wants to add notes, that's a different field I'd have to design.

But what happens later when I add notes/personal annotations? That field IS user-editable. If I dump it into the AI context the same way I dump description, prompt injection becomes a real risk. The mitigations the lab mentions:
1. NEVER put user input in the system message. (Already do this — only domain instructions go in system.)
2. Treat user-writable DB fields as untrusted text. (Need to remember when I add notes.)

This is in my cli-session-log.md as a followup. The lab's "we'll cover this in detail later" is a real future bug if I don't track it.`,
        },
      ],
    },
    {
      heading: "Exercise 8 — Add a Real AI Feature to My Phase 2 App (Stretch)",
      description:
        "Built the AssignmentBreakdown component — a button on the assignment detail page that calls /api/ai and renders the structured markdown response in-line.",
      qa: [
        {
          q: "The product decision — why a breakdown, not a description-generator",
          a: `The lab's example feature is "AI-generated descriptions" — user creates a recipe, AI writes the description. Useful for a recipe app.

That doesn't fit canvas-daily. Assignment descriptions come from Canvas — I don't write them, the instructors do. Auto-generating them would be wrong. The data already has descriptions; what I need is a way to make sense of them faster.

Different problem: I have an assignment with a long Canvas description (sometimes a paragraph, sometimes a wall of HTML the instructor pasted). I want to know: WHAT exactly is being asked, WHAT do I need to do step-by-step, WHAT might trip me up, HOW long will it take.

That's the gap an AI study assistant fills perfectly. Take the assignment data, run it through a strict system message, get a structured breakdown back. Save the student 5 minutes of "wait, what is this assignment even asking for" every time they hit a new one.

Real product value, not a gimmick. The kind of feature I'd actually use on myself when CSA-250 lands a new assignment.`,
        },
        {
          q: "The component — client component with three states (idle, loading, done)",
          a: `app/components/AssignmentBreakdown.js:

'use client'

import { useState } from 'react'
import Markdown from 'react-markdown'

export default function AssignmentBreakdown({ assignment }) {
  const [breakdown, setBreakdown] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleBreakdown() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignment }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setBreakdown(data.message)
      }
    } catch {
      setError('Could not reach the AI service')
    }
    setLoading(false)
  }

  // ... render based on state ...
}

The render branches on the three states:
- No breakdown yet, not loading: shows the "Break this down" button + a helper line "Get a step-by-step plan for completing this assignment."
- Loading: button changes to "Thinking..." and disables
- Done: replaces the button with a "Reset" link, renders the markdown response in a styled box below

The Reset button matters more than it looks. Without it, once the user generates a breakdown, the section is locked to that response forever. With Reset, they can dismiss it (maybe the breakdown wasn't useful, or they're done with it) and re-run if they want a fresh one. Small UX detail. Costs nothing. Worth it.`,
        },
        {
          q: "react-markdown + prose styles — making the response render properly",
          a: `The response comes back as markdown text:

## What's being asked
A 5-page analytical essay...

## Step-by-step plan
1. Pick 2-3 specific changes
...

Without anything special, that would render as the literal text including the # symbols. Useless.

react-markdown converts the markdown to HTML elements. Then I wrap the rendered output in Tailwind's prose classes:

<div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
  <Markdown>{breakdown}</Markdown>
</div>

prose-sm — small base text size (matches the assignment detail page's text scale)
prose-zinc — uses the zinc color palette (matches my design system)
dark:prose-invert — automatically inverts colors in dark mode
max-w-none — defaults of prose limit width to 65ch, which fights with my container

Added @tailwindcss/typography to package.json for the prose classes. One package install, zero config, the markdown renders with proper hierarchy: h2 headers larger than body text, ordered/unordered lists indented correctly, code spans monospaced.

This is the part where Tailwind earns its keep on AI features. LLMs love returning markdown. Without a markdown renderer + prose styling, every AI feature reads like a config file. With them, it reads like the kind of polished content the user expects.`,
        },
        {
          q: "Tested it on real assignments",
          a: `Ran the breakdown on three real assignments from my Canvas data:

1. CSA-250 "Final Project: AI-Augmented Tool" — got back a sharp 4-section breakdown that correctly identified the high-level deliverable (build a tool using AI APIs), suggested 3 specific subtasks, called out "don't build a chatbot — build something with a clear non-AI value first" as a watch-out, and estimated 12-15 hours total.

2. CSC-205 "Algorithms Homework 4: Graph Search" — breakdown explained BFS vs DFS, suggested implementing one first then the other, called out testing with disconnected graphs as a common gotcha.

3. CIS-126 "Lab 8: SSH Configuration" — broke down into install, configure, key generation, and testing. Estimated 45 minutes.

All three were genuinely useful. The CSA-250 one in particular caught a watch-out I hadn't thought about — "don't build a chatbot first" — which is real advice for my actual project.

The time-to-useful-output is ~3-4 seconds from button click to rendered markdown. Fast enough that I don't need a fancy loading skeleton — "Thinking..." on the button is enough. Llama 3.3 70B via Groq is genuinely quick for this size of response.

This is the AI feature I'm proudest of in the whole project. Real product value, real users (me, repeatedly), real integration into the workflow. Going to demo this at the Phase 2 gate.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo (Option 1: Data-Flow Pattern)",
      description:
        "Picked Option 1 — the data-flow pattern. Walked partner through frontend → server route → external API, using the Canvas integration as the live example.",
      qa: [
        {
          q: "Why I picked Option 1 over Option 2",
          a: `Option 2 (system message walkthrough) is also a good demo — and I'd already articulated my system message thinking in Exercise 6. Saying it again to a partner would be reinforcing the same material.

Option 1 forces me to articulate something I HADN'T put into words yet: the three concrete reasons we go frontend → server → external API. CORS, key security, error handling. I know each one. But naming them in order, out loud, on demand — that's the gate-readiness skill.

Also Option 1 maps to my Canvas integration, which is the strongest piece of today's work. If I can walk a partner through the Canvas flow and pre-empt the "but why a server route" question with a sharp three-bullet answer, that's the rehearsal I want.`,
        },
        {
          q: "My 2-minute walkthrough",
          a: `Screen-shared canvas-daily at /canvas. Live data loaded — six courses, dozens of assignments. Pointed at the loading state ("Loading Canvas data...") that briefly showed up before the data appeared.

"Watch what happens when I refresh this page. The page loads, shows 'Loading Canvas data' for a moment, then renders six courses with their assignments. Those courses came from Canvas LMS — the real Canvas at yc.instructure.com — about half a second ago.

But the page didn't talk to Canvas. It talked to my app's own server route at /api/canvas. THAT route talked to Canvas. Three layers: page → /api/canvas → canvas.instructure.com. The page never sees Canvas directly.

Why? Three reasons.

ONE: CORS. The browser refuses to make cross-origin requests to canvas.instructure.com from localhost:3000 because Canvas doesn't set an Access-Control-Allow-Origin header pointing at my domain. That's a BROWSER security policy — it's not a Canvas limitation. So I CAN'T fetch Canvas from a client component even if I wanted to. The browser blocks me. Server-to-server fetch has no CORS rules — it's just two HTTP servers talking. Putting the call in /api/canvas means it runs on MY server, not in the browser, so CORS doesn't apply.

TWO: Key security. Canvas needs a Bearer token. That token has account-level access to my real LMS — my grades, my submissions, all of it. If I put that token in client code, anyone who opens DevTools can copy it and impersonate me. By keeping it in process.env.CANVAS_TOKEN and only reading it server-side, the browser literally never sees it. It's in my .env file, gitignored, only available to the route handler.

THREE: Error handling. The route handler can do things the browser can't — apply a 5-second timeout via AbortSignal.timeout, catch TimeoutError specifically and return a 504, catch other errors and return 503, and crucially, normalize the response. Canvas returns 'name' for assignment titles; my UI uses 'title.' The route renames it in the response. The page gets clean, shaped data instead of raw Canvas JSON.

If I called Canvas directly from the client component: CORS would block me, I'd be unable to attach the token safely, and any errors would bubble up as un-formatted exceptions to the user. With the server route: all three problems vanish, and I get a clean fourth bonus — per-course error isolation, so if ONE Canvas course endpoint times out, only that course shows empty instead of the whole page failing."

Ended on the page with the data still showing, opened DevTools, demonstrated that the Network tab shows /api/canvas as the only outgoing request — NO request to canvas.instructure.com from the browser. The proof.`,
        },
        {
          q: "Partner's follow-up and my answer",
          a: `Partner's question: What HTTP status would you return if the Canvas API key is invalid?

(They picked it because they'd asked specifically about key security and wanted to see if I'd thought through the failure case.)

My answer:

"If Canvas returns 401 Unauthorized, I pass that 401 through to the client. My route handler does:

if (!coursesRes.ok) {
  return NextResponse.json(
    { error: \`Canvas returned \${coursesRes.status}\` },
    { status: coursesRes.status }
  )
}

So a 401 from Canvas becomes a 401 from my route. Same for 403, 429, 500 — whatever Canvas returns is what my route returns.

That's a deliberate choice. The alternative would be to ALWAYS return 500 to the client and put the real status in the body. I went with pass-through because:
1. Status codes carry meaning. 401 to a monitoring tool means 'auth failed.' 500 to a monitoring tool means 'my server is broken.' Different alarms, different responses.
2. The downstream UI can branch on status if it wants — for 401, show 'check your Canvas token in .env'; for 429, show 'Canvas is rate-limiting us, try again in a minute'; for 503, show 'Canvas is offline.'
3. The TOKEN itself never leaks through this path. The body says 'Canvas returned 401,' not 'the token gsk_REDACTED is invalid.' So pass-through doesn't compromise security.

The status I'd reserve for 500 specifically: a genuine unexpected error in MY code. Bug in my response parsing. Crash in my mapping logic. Those are real 500s. An upstream rejecting my credentials is a 401, properly attributed."`,
        },
        {
          q: "What this peer session surfaced beyond the bug-fix kind of catch",
          a: `One real thing.

When I walked through the three reasons, partner noticed I had said the three in different orders in different sentences. First time: CORS, key security, error handling. Second time during the answer: key security, CORS, error handling. They asked if there was a "right" order.

There is. CORS is the LITERAL blocker — you can't make the call even if you wanted to, the browser refuses. Key security is the GRAVE blocker — you COULD but if you did you'd leak credentials. Error handling is the POLISH blocker — you could do it client-side, just badly. Order of severity: can't, mustn't, shouldn't. Going to standardize on that order — CORS first, key second, errors third — because the order itself encodes priority.

This is the kind of thing I only catch when someone listens to me say it twice. Partner reviews surface tiny inconsistencies that I can't see from the inside. Going to do every Phase 2 gate rehearsal with a partner, not solo.`,
        },
      ],
    },
  ],
};
