export const week6day4 = {
  number: 25,
  label: "Day 4",
  title: "Week 6, Day 4 — Forms, POST Routes, the CREATE Loop",
  subtitle:
    "Controlled form → fetch with POST → Prisma create → state update on the page. Plus validation on both sides and a success state worth seeing.",
  color: "#7c3aed",
  sections: [
    {
      heading: "Exercise 1 — Build a Form Component",
      description:
        "Built CreateProfileForm — a controlled form on the Settings page for adding Canvas profiles (me + daughter's account).",
      qa: [
        {
          q: "Why I built the form for User/Profile, not Assignment",
          a: `The lab uses recipes or tasks because those are the apps it scaffolds. Canvas Daily already has Assignments seeded in the database (10 of them). Assignments come FROM Canvas — they aren't user-created in my app. So adding a "create new assignment" form would be semantically wrong.

The thing a user DOES create in Canvas Daily is a Canvas profile — a record saying "this account belongs to me, fetch its assignments." Right now I'm the only user but the app is built to track multiple Canvas accounts. My profile (Yavapai College student) plus my daughter's profile (her 8th grade online school) — two profiles, one hub.

So the form lives at /settings and creates a User record. That's the right shape for the data model AND the right shape for the product.

Side benefit: the User table is the model with the unique constraint (email). That means I get to practice the P2002 conflict handling in the POST route — which is more interesting than the "title required" example from the lab.`,
        },
        {
          q: "The controlled inputs — 4 useState calls for 3 form fields plus UX state",
          a: `'use client'

import { useState } from 'react'

export default function CreateProfileForm({ onSuccess, onCancel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  // ...
}

Six useState calls total:
- 3 for the form fields (name, email, role)
- 1 for the error message
- 1 for the success state
- 1 for the loading state

I almost combined them into a single object — useState({ name: '', email: '', ... }) — and decided against. The "update one field at a time" pattern works cleanly with separate useStates, and each field is independent (typing name doesn't affect email). For 3 fields, six separate useStates is clearer than one object plus a spread-update pattern. For 15 fields, I'd reach for useReducer.

The two props at the top — onSuccess and onCancel — are how the form talks back to its parent. The parent decides what "success" and "cancel" mean. The form just calls the callback.`,
        },
        {
          q: "Repurposing the 'role' field as 'School / Label'",
          a: `The schema has role String @default("student"). Originally I designed it for student/instructor differentiation.

For Canvas Daily's actual use case, the more useful field is "which school is this Canvas account for." So I kept the database column name (role) but relabeled the form input:

<label>School / Label</label>
<input
  placeholder="e.g. Yavapai College, 8th Grade Online"
  ...
/>

This is a pragmatic schema reuse. The column type is still String, the default is still "student" (for backwards compat), but the meaning shifted. Costs nothing — I'm still going to need a way to label each Canvas profile so I can render "Yavapai College: 3 assignments due, 8th Grade Online: 2 assignments due" in the digest.

Future cleanup: rename the column to label or schoolName via a Prisma migration. Cheap to do later, no rush.

The lesson here is about flexibility. My Week 4 sketch had role: enum("student"|"instructor"). The schema I shipped had role: String. The looser type let me repurpose the field as the product evolved. If I'd locked it to an enum I'd be doing a real migration right now instead of updating a label.`,
        },
        {
          q: "Form layout — used Tailwind, kept it tight",
          a: `Three fields stacked vertically inside a card. Submit + Cancel buttons in a row at the bottom. Standard form layout.

Notes on the Tailwind choices:
- bg-zinc-50 dark:bg-zinc-900/50 — the form's background sits ONE shade off from the page background. Subtle visual nesting without a heavy border.
- focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 — focus rings on inputs. Keyboard accessibility for free.
- The submit button is dark on light page / light on dark page. Inversion makes it pop.
- Cancel is a secondary button — bordered, transparent background.

required attribute on the name and email inputs lets the browser do basic HTML5 validation (can't submit with empty required fields). It's belt-and-suspenders with my JS validation, but it stops invalid form submissions before they even reach my JS handler. Costs nothing.`,
        },
        {
          q: "First test — submit logs and alerts (sanity check before wiring fetch)",
          a: `Before adding the real fetch in Exercise 2, the handleSubmit was just:

console.log('Form data:', { name, email, role })
alert('Submitted!')

Filled out the form with "Diana / diana@yavapai.edu / Yavapai College". Submitted. Console showed:
Form data: { name: 'Diana', email: 'diana@yavapai.edu', role: 'Yavapai College' }
Alert popped up.

Controlled inputs working. Submit handler running. State captured. Ready to wire to the API.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Build the POST API Route",
      description:
        "Added POST handler to /api/users with validation and proper status codes. Caught Prisma P2002 specifically.",
      qa: [
        {
          q: "Created /api/users/route.js with GET + POST in the same file",
          a: `import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'asc' },
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profiles' }, { status: 500 })
  }
}

export async function POST(request) {
  // ... validation + create ... see next answer
}

Same file, two exports — Next.js routes the request to GET or POST based on the HTTP verb. Same URL (/api/users), different behavior depending on method. This is the REST convention baked into the routing layer.

GET sorted ascending by createdAt (oldest first) — fits the settings UI where the first profile added shows at the top. Most APIs default to DESC, but in this context "your profiles in the order you added them" is the more natural reading order.`,
        },
        {
          q: "POST handler — validation, create, status codes",
          a: `export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    if (!body.email || !body.email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        role: body.role?.trim() || 'student',
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'That email is already registered' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 })
  }
}

Status codes I used:
- 201 Created on success (with the new record in the body)
- 400 Bad Request for invalid input
- 409 Conflict for duplicate email
- 500 Internal Server Error for anything unexpected

201 instead of 200 because this endpoint CREATES something. 200 is "OK, here's what you asked for." 201 is "I made a new thing, here it is." Subtle semantic difference, but HTTP cares — and so do API consumers (curl shows the status, monitoring tools categorize on it).

The body.email.trim().toLowerCase() before insertion is a small but important normalization. "Diana@Yavapai.edu" and "diana@yavapai.edu" should NOT be allowed as two separate profiles. Lowering on insert means the unique constraint actually catches dupes regardless of casing.`,
        },
        {
          q: "The P2002 catch — why it's better than the generic error",
          a: `Prisma's create() throws a PrismaClientKnownRequestError when a database constraint is violated. The error object has a .code field that maps to specific Prisma error codes.

P2002 is "Unique constraint failed." Specifically what happens when I try to insert a User with an email that already exists.

Without the special catch, my generic error handler returns "Failed to create profile" with a 500. That's wrong on two counts:
1. The server didn't fail — the request was bad because the email is taken. That's the CLIENT's fault, not the server's. 4xx is the correct family.
2. "Failed to create profile" tells the user nothing. They don't know what's wrong or how to fix it.

The fixed version returns 409 Conflict with "That email is already registered." Now the user knows EXACTLY what went wrong, and the HTTP semantics are right.

The complete list of Prisma error codes is in their docs. The common ones I'll hit going forward:
- P2002 — unique constraint
- P2003 — foreign key constraint
- P2025 — record not found (for update/delete operations)

Worth memorizing those three. They cover 90% of write-time failures.`,
        },
        {
          q: "Tested the POST from the browser console",
          a: `Opened the running app, hit F12, dropped into the Console tab. Pasted:

fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test Profile',
    email: 'test@example.com',
    role: 'Test School'
  })
}).then(r => r.json()).then(console.log)

Got back:
{ id: 5, name: 'Test Profile', email: 'test@example.com', role: 'Test School', createdAt: '2026-06-03T...' }

Refreshed Prisma Studio. The row was there.

Then ran the same fetch AGAIN with the same email. Got back:
{ error: 'That email is already registered' }

And checked the response status in DevTools Network tab — 409. Exactly right.

Then ran it with empty name:
{ error: 'Name must be at least 2 characters' }

400 status. Also right.

Three tests, three status codes, all behaving as designed. Endpoint is solid.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Wire the Full CREATE Loop",
      description:
        "Connected the form to /api/users. Updated the parent to add the new user to state. Form closes, list updates.",
      qa: [
        {
          q: "Form's handleSubmit — fetch, parse, branch on response.ok",
          a: `async function handleSubmit(e) {
  e.preventDefault()
  setError('')

  if (name.trim().length < 2) {
    setError('Name must be at least 2 characters.')
    return
  }
  if (!email.includes('@')) {
    setError('Enter a valid email address.')
    return
  }

  setLoading(true)

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, role }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Something went wrong.')
      setLoading(false)
      return
    }

    setName('')
    setEmail('')
    setRole('')
    setLoading(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      if (onSuccess) onSuccess(data)
    }, 1500)
  } catch {
    setError('Failed to add profile. Please try again.')
    setLoading(false)
  }
}

Five phases:
1. Pre-flight: clear old errors, run client-side validation, set loading.
2. Send: POST to /api/users with JSON body.
3. Branch: parse response. If !res.ok, show the server's error message and stop. Critically: the server's error message becomes the user-facing message. The server is the source of truth for what went wrong.
4. Success path: clear form fields, stop loading, show success banner.
5. After 1.5s: dismiss banner, call onSuccess(data) — parent updates the list.

The setTimeout(..., 1500) is intentional UX. Without it, the form would close instantly on success and the user would never see "Profile added successfully!" The 1.5 second delay gives them a moment to register the confirmation before the form vanishes.`,
        },
        {
          q: "Why the page is a SERVER component, not the client component the lab teaches",
          a: `Lab pattern (page becomes client):

"use client";
function TasksPage() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch('/api/tasks').then(r => r.json()).then(setTasks)
  }, [])
  // ...
}

My pattern (server outer, client inner):

// app/settings/page.js — SERVER component
import prisma from '@/lib/prisma'
import ProfileManager from './profile-manager'

export default async function SettingsPage() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'asc' } })
  return (
    <div className="...">
      <h1>Settings</h1>
      <ProfileManager initialUsers={users} />
    </div>
  )
}

The page is still a server component. It fetches the initial users list via Prisma directly (no /api/users round-trip). It passes them as a prop to ProfileManager, which is the client component.

Wins from this pattern:
- No loading flash on first render. The page arrives with users already in the HTML.
- Database query runs server-side, not exposed via API for this purpose
- ProfileManager seeds its state from the prop: useState(initialUsers), no useEffect needed
- The API endpoint /api/users still exists for the POST. Just not used for initial load.

This is the same lesson as Day 3 — server outer for static framing, client inner for interactivity. The CREATE flow doesn't require the page itself to be a client component.

The lab's approach works too. It's just less efficient. Worth flagging because the lab's pattern is what most tutorials show, and most tutorials are stuck in pre-server-component thinking.`,
        },
        {
          q: "ProfileManager — the client component that owns the list state and form toggle",
          a: `'use client'

import { useState } from 'react'
import CreateProfileForm from './create-profile-form'

export default function ProfileManager({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers)
  const [showForm, setShowForm] = useState(false)

  function handleNewUser(user) {
    setUsers([...users, user])
    setShowForm(false)
  }

  return (
    <section className="...">
      <div className="flex items-center justify-between mb-4">
        <h2>Canvas Profiles</h2>
        {!showForm && (
          <button onClick={() => setShowForm(true)}>+ Add Profile</button>
        )}
      </div>

      {showForm && (
        <CreateProfileForm
          onSuccess={handleNewUser}
          onCancel={() => setShowForm(false)}
        />
      )}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {user.role && user.role !== 'student' && (
              <span className="badge">{user.role}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

Two pieces of state:
- users — seeded from initialUsers prop, updated when form succeeds.
- showForm — controls form visibility. Toggles via the + Add button.

handleNewUser does two things: spread the new user onto the list, and close the form. Single callback, two side effects. The parent owns both pieces of state so both can update from one event.

The list update is [...users, user] — append at the end, matching the createdAt ASC ordering of the initial fetch. If I'd done [user, ...users] the new user would jump to the top, which contradicts the server-side ordering. Subtle consistency choice that matters for UX continuity.`,
        },
        {
          q: "Why a Cancel button on the form (the lab doesn't mention this)",
          a: `The lab's pattern is "click + Add to show form, click + Add again to hide." That's two clicks of the same button doing opposite things, and the button's label even changes ("Cancel" when expanded).

My pattern is two separate buttons:
- The + Add button at the top, only visible when the form is hidden
- A Cancel button inside the form, only visible when the form is shown

Costs nothing. Reads more clearly. Cancel inside the form is where users will look for it — if I've started typing and want to back out, my eyes are already in the form. Reaching back up to the top button feels like a discoverability problem the way the lab's pattern is set up.

This is a minor UX win, the kind of thing that distinguishes "got the lab working" from "shipped something." Every time I cut a corner because the lab didn't mention it, I'm setting the bar at the lab's level. The point of doing this is to set the bar higher.`,
        },
        {
          q: "Tested the full create loop end-to-end",
          a: `Loaded http://localhost:3000/settings. Page rendered with the existing 4 users (Dr. Amy Chen, Alice, Bob, Diana — from the seed).

Clicked + Add Profile. Form expanded. + Add button vanished from the header.

Typed: name "Test User", email "test@yavapai.edu", role "Yavapai College".

Clicked Add Profile. Button text changed to "Adding..." and was disabled for ~120ms. Then:
- Form fields cleared
- Green banner appeared: "Profile added successfully!"
- 1.5 seconds passed
- Banner disappeared, form closed
- New "Test User" row appeared at the bottom of the list

Refreshed the page. The new user was still there — the data is in Postgres, not just in React state.

Then I tested the failure path. Clicked + Add Profile again. Typed "test@yavapai.edu" (same email as before). Submitted. Got the red error banner: "That email is already registered." Form stayed open with my data still in it.

That's the loop. Form → POST → DB → state update → render. With proper handling on both success and failure paths.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Add Validation",
      description:
        "Validation on both sides — client for UX, server for trust. Server is the gatekeeper.",
      qa: [
        {
          q: "Client-side validation — what runs before the fetch",
          a: `if (name.trim().length < 2) {
  setError('Name must be at least 2 characters.')
  return
}
if (!email.includes('@')) {
  setError('Enter a valid email address.')
  return
}

Two checks. Both run BEFORE setLoading(true), so a failed validation doesn't even put the form into "Adding..." state. Just shows the error, lets the user fix it, and the user can try again.

The .trim() on name catches the "   " case (whitespace-only). Without it, name="   " has length 3, would pass a "length >= 2" check, but submits as empty after server-side trimming. .trim() before length is the correct order.

The email check is intentionally lax — !email.includes('@'). Doesn't validate full RFC 5322 email format (that's a 100-line regex). Doesn't even check for a dot after the @. Just checks for any @ character.

Why so loose? Email validation is famously a rabbit hole. The "right" check is to send a verification email and let the user click the link. Anything stricter than "must have an @" risks rejecting valid edge-case emails. So the client check is "you clearly forgot the @" and the rest is the user's responsibility.`,
        },
        {
          q: "Server-side validation — same checks, plus the unique constraint",
          a: `if (!body.name || body.name.trim().length < 2) {
  return NextResponse.json(
    { error: 'Name must be at least 2 characters' },
    { status: 400 }
  )
}

if (!body.email || !body.email.includes('@')) {
  return NextResponse.json(
    { error: 'A valid email address is required' },
    { status: 400 }
  )
}

The same two checks as the client. Why duplicate them?

Anyone can bypass the client. Open the console, run my fetch() example with arbitrary data, the server is the last line of defense. Without server-side validation, an attacker (or a buggy mobile app, or a stale browser tab) could insert a 1-character name or an empty email into the database. From there it propagates everywhere — the digest renders "" as the user's name, etc.

The defensive instinct: NEVER trust input from the client. The server validates everything. The client validates for UX (instant feedback, no round-trip needed for obvious problems), the server validates for trust (the database is what gets the truth).

The unique constraint on email is a THIRD layer. Even if I had no JavaScript validation and pasted a duplicate email in via the API, Postgres itself refuses the insert. The database is the final layer of truth. Belt, suspenders, AND a backup belt.`,
        },
        {
          q: "Showed the validation errors in the form",
          a: `{error && (
  <p className="mb-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 px-3 py-2 text-sm text-red-600 dark:text-red-400">
    {error}
  </p>
)}

Inline, above the form fields, with subtle red styling. Banner-style, not a popup or modal — doesn't interrupt the user's flow, just shows what's wrong so they can fix it and resubmit.

The error text comes from whatever called setError():
- Client-side validation → my hardcoded strings ("Name must be at least 2 characters.")
- Server response error → data.error from the JSON response ("That email is already registered")

Both end up rendered in the same banner. Consistent UI for any error source. The user doesn't need to know which layer caught it — they just see what's wrong.`,
        },
        {
          q: "Tested the validation surfaces",
          a: `Six tests covering each error path:

1. Empty name → client catches → "Name must be at least 2 characters."
2. Single character name → client catches → same message.
3. Whitespace-only name ("   ") → client catches via .trim() → same message.
4. Empty email → client catches → "Enter a valid email address."
5. Email without @ (e.g. "diana") → client catches → same.
6. Duplicate email → client lets it through (passes both checks), server catches via P2002 → 409 with "That email is already registered."

Each error rendered in the red banner inline above the form. None broke the form's state. The form stayed open with the user's data still in the inputs, so they could fix the issue without retyping.

What I didn't add: a max-length check on name. The schema allows TEXT (unbounded) and I didn't put an upper limit. Probably fine for names — real names rarely exceed 100 chars. But "fine for names" is the wrong frame. The real question is "what's the safe upper bound, and what do I want to happen above it?" 200 chars is the standard cap I'd add — keeps abusive long inputs from clogging the database. Future cleanup.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Add a Success State",
      description:
        "Green banner that appears for 1.5 seconds before the form closes. Confirms the create worked before vanishing.",
      qa: [
        {
          q: "Success state — useState, setTimeout, setSuccess(true) → false dance",
          a: `Added a third UX state alongside loading and error:
const [success, setSuccess] = useState(false)

Set it inside the success branch of handleSubmit:
setSuccess(true)
setTimeout(() => {
  setSuccess(false)
  if (onSuccess) onSuccess(data)
}, 1500)

Two important details about the timing:
- success gets set to TRUE before the timeout starts. The banner appears immediately.
- After 1500ms, the banner is dismissed AND onSuccess is called (which in ProfileManager closes the form).

Could have called onSuccess immediately, but then the form would close before the user could read the banner. The 1.5s window IS the success UX. Without it the banner is invisible.`,
        },
        {
          q: "Showing the success banner in the form",
          a: `{success && (
  <p className="mb-4 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 px-3 py-2 text-sm text-green-600 dark:text-green-400">
    Profile added successfully!
  </p>
)}

Right above the error banner location. Both share the same banner-style design — only the color differs (green for success, red for error). Visual consistency: the user's eyes already know to look at that spot for status messages.

Both banners can't show at the same time because the success branch in handleSubmit runs setError('') at the top and the error branch never sets success. They're mutually exclusive by code path.`,
        },
        {
          q: "Why I didn't implement the redirect-to-detail stretch",
          a: `The lab's Step 3 (stretch) suggests router.push(\`/tasks/\${data.id}\`) after creating — redirect to the new item's detail page.

I deliberately didn't. Two reasons:

First, the settings page doesn't HAVE a detail page for individual users. There's no /users/[id] route. Building one for a single-user app is premature. The list view on /settings is enough — you see all your profiles in one place.

Second, the create-and-stay flow is RIGHT for this product. After adding "8th Grade Online" I want to see it sitting next to "Yavapai College" in the list, not be teleported into a single-user view. Stay-in-place reinforces the mental model: this is a list-of-profiles screen, and I just added to that list.

When I WOULD use router.push: an e-commerce "Submit Order" flow. The user just committed to a transaction — give them the dedicated "Order Confirmed" page. The action was significant enough to warrant a context switch. Adding a Canvas profile isn't that significant.

Picking the right UX is more important than implementing every stretch goal.`,
        },
        {
          q: "Why I didn't implement the description character counter or the confirmation modal",
          a: `Character counter (Level 2 mod): my form has a "School / Label" field with no max length set yet. Adding a character counter requires deciding on a limit first. I could add "{role.length}/100" but I don't have evidence yet that 100 is the right number. Premature.

Confirmation modal (Level 3 mod): the form is two fields and a school label. Submission is reversible (worst case: I delete the profile and re-add). The cost of asking "are you sure?" on every submission is real user friction. Modals are for IRREVERSIBLE or HIGH-STAKES actions — "delete this account permanently," "submit the order for $1,200." Adding a profile is neither.

Skipping these is a deliberate choice, not laziness. Both would be appropriate features in different contexts. They're not appropriate here. Recognizing when NOT to add a feature is a real engineering skill.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo (Demo + Break It)",
      description:
        "Demo the CREATE flow. Partner tries to break it. Surface validation gaps.",
      qa: [
        {
          q: "My 3-minute CREATE flow walkthrough",
          a: `Screen-shared canvas-daily at /settings. Pointed at the existing list of 4 profiles seeded yesterday. Then clicked + Add Profile to expand the form.

Walked through the flow, pointing at the actual code in VS Code as I talked:

"When I click Submit, the form's handleSubmit function runs. First, e.preventDefault() — that stops the browser from trying to do a regular form submission and reloading the page. Then I run client-side validation — check the name is at least 2 chars after trim, check the email contains an @. If either fails, I show an error and return early, no network request.

If validation passes, I setLoading(true) — that disables the button and changes its label to 'Adding...' — and then I fetch POST to /api/users with the form data as JSON.

The fetch hits my POST handler in app/api/users/route.js. The handler parses the body, validates AGAIN — same checks the client did, because clients are untrusted — and if anything's wrong returns a 400 with an error message. If validation passes, it calls prisma.user.create with the cleaned data. Prisma sends the INSERT to Postgres, the row is created with an auto-generated id and createdAt timestamp, and the new row comes back as the result. The handler returns it with a 201 status.

The catch block at the bottom checks for error.code === 'P2002' — that's Prisma's unique constraint code. If the email's already taken, I return 409 with 'That email is already registered.' Any other error becomes a generic 500.

Back in the form, I parse the response. If !res.ok, I show the error and stop. If it's ok, I clear the form fields, show the green success banner, and after 1.5 seconds I call onSuccess(data) which is the callback the parent passed in. The parent — ProfileManager — does setUsers([...users, data]) which adds the new user to its state, and setShowForm(false) which closes the form. React re-renders the list with the new user appearing at the bottom.

End to end: keystrokes → state → fetch → server validation → Prisma INSERT → Postgres → response → state update → re-render. Seven steps, three layers (client, server, database)."`,
        },
        {
          q: "Partner tried to break it — what they tried and what happened",
          a: `Partner ran through about a dozen attempts. Going to list the interesting ones:

1. Empty form, hit Submit → blocked by HTML required attribute before my code runs.
2. Name "D" → blocked by client validation → "Name must be at least 2 characters."
3. Name "   " (3 spaces) → blocked by client .trim() check → same message.
4. Email "diana" → blocked by client → "Enter a valid email address."
5. Duplicate email → server caught via P2002 → 409 banner.
6. Name "Diana", email "@" (just the @ symbol, no rest) → THIS PASSED. Client check is only !email.includes('@'). Server's check is the same. The user got created with email "@". Real gap.
7. Pasted a 5000-character name in → succeeded. No max length validation anywhere. Real gap.
8. Tried to inject SQL ("Robert'; DROP TABLE User;--") → Prisma uses parameterized queries by default, so the dangerous content got safely stored as a literal string. No SQL injection.

Two real gaps surfaced. Worth fixing.`,
        },
        {
          q: "The two gaps and the fix",
          a: `Gap 1: Email validation is too loose. "@" passes my check.

Fix: use a tighter regex or a library. The classic minimum I'd add:
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
if (!emailRegex.test(body.email)) { ... }

That requires: something before the @, the @ itself, something between @ and the dot, the dot, something after. Catches "@" and "diana@" and "@yavapai.edu" — all of which are invalid.

Better long-term: use a validation library like Zod for both client and server validation. One schema, two layers. Worth the dependency once the app has more than three forms.

Gap 2: No max length on name. 5000-character name succeeds.

Fix: add a 200-character cap on name and a 500-character cap on the role/label field.
if (body.name.trim().length > 200) {
  return NextResponse.json({ error: 'Name must be 200 characters or less' }, { status: 400 })
}

Both fixes are 10 minutes of work. Going to add them tonight before tomorrow's lab. This is the value of the "have your partner try to break it" exercise — surfaces validation gaps in 15 minutes that I wouldn't have caught alone.

Adding these to the cli-session-log as a tracked followup. Validation is the kind of thing that gets bolted on later if you don't catch it now.`,
        },
        {
          q: "What this verbal exercise surfaced beyond the bugs",
          a: `Two meta-observations.

First — when I described the flow out loud, I noticed I'd been saying "the server validates, the server is the gatekeeper" for the whole walkthrough. Then partner found "@" passes both layers. Embarrassing because I'd JUST claimed the server was the gatekeeper, and it failed at gatekeeping. The lesson: claiming "the server protects me" without checking the specific rules the server actually enforces is empty. Validation only works at the specificity of the rules I wrote.

Second — the demo + break-it format is dramatically more useful than the previous verbal mini-demos. The lecture format is "explain a concept to a partner." This format is "show your code, then break it." It surfaces concrete bugs instead of abstract gaps. By Week 8 I want every code review to have a "now try to break it" round, even if I'm doing it solo. That mindset catches real bugs.

Going to start running "break it" passes on my own work before pushing.`,
        },
      ],
    },
  ],
};
