export const week7day2 = {
  number: 27,
  label: "Day 2",
  title: "Week 7, Day 2 — UPDATE & DELETE: Closing the CRUD Loop with Server Actions",
  subtitle:
    "TDD a Server Action before building it. Wire UPDATE into the UI. Add DELETE with confirmation. Two API-route paths converted to Server Actions side-by-side. Plus README and WHY comments.",
  color: "#9333ea",
  sections: [
    {
      heading: "Exercise 1 — Tests First: Spec Out UPDATE Before You Build It",
      description:
        "Pattern 2 applied to a real mutation. Four failing Vitest tests for updateAssignment, all RED. Then the implementation that makes them green.",
      qa: [
        {
          q: "Setup — mocking both Prisma and next/cache",
          a: `app/assignments/actions.test.js opening lines:

import { test, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/prisma', () => ({
  prisma: {
    assignment: {
      findMany: vi.fn(),
      update: vi.fn(),
    },
  },
}));

vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }));

import { updateAssignment } from '@/app/assignments/actions';
import { prisma } from '@/lib/prisma';

beforeEach(() => {
  vi.clearAllMocks();
});

Two mocks because the Server Action calls TWO things: Prisma to do the update, and revalidatePath from next/cache to invalidate the list. Without the next/cache mock, the test would try to reach into the real Next.js cache machinery and crash.

The vi.mock('next/cache', () => ({ revalidatePath: vi.fn() })) is the kind of "what's the minimum I need to stub so the production code can run in a test" decision that gets easier with reps. I don't ASSERT on revalidatePath — I just need it to not throw when the action calls it. That's a stub, not a spy.

The Prisma mock extends yesterday's findMany-only version to include update. Same shape as Day 1, just one more method.`,
        },
        {
          q: "Four tests, all RED before any implementation",
          a: `test('updates an assignment title when given a valid id and new title', async () => {
  prisma.assignment.update.mockResolvedValue({
    id: 1,
    title: 'Final Essay (revised)',
    courseId: 1,
  });

  const formData = new FormData();
  formData.set('id', '1');
  formData.set('title', 'Final Essay (revised)');

  await updateAssignment(formData);

  expect(prisma.assignment.update).toHaveBeenCalledWith(
    expect.objectContaining({
      where: { id: 1 },
      data: expect.objectContaining({ title: 'Final Essay (revised)' }),
    })
  );
});

test('returns the updated assignment', async () => {
  const updated = { id: 1, title: 'Midterm', courseId: 2 };
  prisma.assignment.update.mockResolvedValue(updated);

  const formData = new FormData();
  formData.set('id', '1');
  formData.set('title', 'Midterm');

  const result = await updateAssignment(formData);

  expect(result).toEqual(updated);
});

test('throws when assignment id does not exist', async () => {
  prisma.assignment.update.mockRejectedValue(
    Object.assign(new Error('Record not found'), { code: 'P2025' })
  );

  const formData = new FormData();
  formData.set('id', '9999');
  formData.set('title', 'whatever');

  await expect(updateAssignment(formData)).rejects.toThrow();
});

test('only the targeted assignment is updated', async () => {
  prisma.assignment.update.mockResolvedValue({
    id: 2,
    title: 'Lab Report',
    courseId: 1,
  });

  const formData = new FormData();
  formData.set('id', '2');
  formData.set('title', 'Lab Report');

  await updateAssignment(formData);

  expect(prisma.assignment.update).toHaveBeenCalledTimes(1);
  expect(prisma.assignment.update).toHaveBeenCalledWith(
    expect.objectContaining({ where: { id: 2 } })
  );
});

Each test sets its own mockResolvedValue or mockRejectedValue because clearAllMocks wipes setup between tests — the Day 1 gotcha. The third test uses Prisma's real P2025 error code so I'm exercising the actual error shape my catch branch will see in production, not a generic Error.

All four RED on save: the import of updateAssignment resolves to undefined, every call throws. That's the spec, locked in before I'd written a line of the function.`,
        },
        {
          q: "The implementation — what the failing tests forced me to decide",
          a: `// Server Actions are used here instead of API routes: no fetch, no JSON serialization,
// and revalidatePath handles cache invalidation in one place.
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateAssignment(formData) {
  const id = parseInt(formData.get('id'), 10);
  const title = formData.get('title');

  if (isNaN(id)) {
    throw new Error('Invalid assignment id');
  }

  const updated = await prisma.assignment.update({
    where: { id },
    data: { title },
  });

  revalidatePath('/assignments');
  return updated;
}

Things the failing tests forced me to decide BEFORE writing any code:
1. The function takes a FormData, not a plain object. (Test set 'id' and 'title' as form fields.)
2. id is parsed as an integer with radix 10. (Test passed '1' as a string, asserted update was called with id: 1.)
3. The function returns the updated record. (Second test asserts on the return value.)
4. The function throws on P2025 (not swallows). (Third test asserts the promise rejects.)
5. parseInt failures need handling (because formData.get can return null) → isNaN check.

Five decisions made up front. If I'd written the code first, I would have improvised most of these and possibly gotten them wrong. The tests are the spec — and they make the spec executable.

Saved. All four green. Total time RED-to-GREEN: about three minutes.`,
        },
        {
          q: "Reflection — what the tests forced me to decide that I would have skipped",
          a: `Two things I would have skipped.

First, the FormData input shape. If I'd written the action first, I might have started with updateAssignment({ id, title }) — a plain object. That works for Server Actions called from JS, but FAILS for Server Actions called via <form action={updateAssignment}> because the browser's native form submission sends FormData. The test asserted FormData from the start, so my implementation had to accept FormData. Got the contract right on the first try.

Second, the explicit isNaN guard. The third test (record-not-found) used a real 9999 id, so I parsed it cleanly. But the empty-form case (formData.get('id') returns null, parseInt('null', 10) is NaN) would have passed straight through to Prisma without the isNaN check. The TEST didn't explicitly cover null id, but writing the tests made me think about the shape of FormData inputs, which surfaced the null case as a real risk. Added the guard preemptively.

Third meta-observation: writing tests first kept me honest about what "throws" means in JS. The test uses await expect(updateAssignment(formData)).rejects.toThrow() — that's how Vitest asserts on async rejection. Without that test, I might have wrapped the Prisma call in a try/catch and returned an error object instead of letting it propagate. The test pinned down the API: this function THROWS, the caller catches. Cleaner contract than "returns success or error shape."`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Add UPDATE: Wire It into the UI",
      description:
        "Built the Edit page that uses the updateAssignment Server Action. Server-component-on-server-rendered-form pattern.",
      qa: [
        {
          q: "Why I went Path A (Server Action) and not Path B (parallel PUT API route)",
          a: `Two reasons.

First, I already had the Server Action from Exercise 1 — wiring it into the UI is the natural next step. Adding a parallel PUT API route would be busywork: a second implementation that does the same DB write through a different mechanism. The lab presents both paths to teach the contrast, but for my actual project the duplication wouldn't earn its keep.

Second, Server Actions are STRICTLY less plumbing for form mutations. No fetch call. No JSON serialization. No router.refresh(). The list refresh is automatic via revalidatePath inside the action. Three pieces collapse into one: the action IS the API IS the cache invalidation.

I kept the API-route version of GET (single assignment) at app/api/assignments/[id]/route.js — that's useful for future client-side fetch paths. But for the WRITE path, Server Action is the cleaner answer.`,
        },
        {
          q: "Edit page — server component, pre-fills via direct Prisma call",
          a: `app/assignments/[id]/edit/page.js (key bits):

import { notFound, redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { updateAssignment } from '@/app/assignments/actions'

export default async function EditAssignmentPage({ params }) {
  const { id } = await params

  const assignment = await prisma.assignment.findUnique({
    where: { id: parseInt(id, 10) },
    include: { course: true },
  })

  if (!assignment) notFound()

  async function save(formData) {
    'use server'
    await updateAssignment(formData)
    redirect(\`/assignments/\${id}\`)
  }

  return (
    <form action={save}>
      <input type="hidden" name="id" value={assignment.id} />
      <input id="title" name="title" defaultValue={assignment.title} required />
      <button type="submit">Save</button>
      <Link href={\`/assignments/\${id}\`}>Cancel</Link>
    </form>
  )
}

Three things working together here:

1. Server component fetches the assignment via Prisma DIRECTLY. No /api round-trip to pre-fill. The HTML arrives with defaultValue={assignment.title} baked in.

2. The save function is an inline Server Action ('use server' inside the parent function). It wraps updateAssignment and adds a redirect after. The redirect is what takes the user back to the detail page on success — updateAssignment alone doesn't know where to send them.

3. defaultValue (not value) on the input means it's NOT a controlled input. The browser owns the typed state. When the form submits, the form's FormData is built from the actual input values at submit time. No useState, no client component, no JS shipped for the typing experience.

This is the "server outer, server outer, server outer" pattern — there's no client component anywhere in this page. The page renders on the server, the form posts to a Server Action on the server, the redirect happens on the server. ZERO JS shipped for the edit flow.`,
        },
        {
          q: "The inline 'use server' inside the page component — why?",
          a: `Could have called updateAssignment directly from the form's action attribute:

<form action={updateAssignment}>

That works. updateAssignment is already a Server Action. But it doesn't redirect — it just returns the updated record. After submit, the user would stay on the edit page looking at the same form.

The inline save wrapper is what adds the redirect:

async function save(formData) {
  'use server'
  await updateAssignment(formData)
  redirect(\`/assignments/\${id}\`)
}

<form action={save}>

Two pieces:
- updateAssignment stays generic (reusable, returns the record)
- save is the page-specific wrapper that adds "and then go HERE"

The 'use server' directive inside the function (not at the top of the file) marks just THIS function as a Server Action. It's a closure over id from the parent function's params. Tidy pattern: page-specific behavior stays in the page, reusable logic stays in actions.js.

Could have hardcoded the redirect inside updateAssignment, but then the action couldn't be reused for places that don't want to redirect (like the inline delete on the list page).`,
        },
        {
          q: "Cancel button — the gotcha I almost hit",
          a: `Initially I had <button type="button">Cancel</button> with an onClick handler... which doesn't work on a server component. You can't put onClick on a server component (no event handlers).

The fix was a <Link href={\`/assignments/\${id}\`}>Cancel</Link> styled to look like a button. Cancel becomes a navigation, not a state action. Browser handles it natively. No JS needed.

This is a subtle but important consequence of the "no client component" choice: anything that LOOKS like a button might actually be a link in disguise. Server-side everything means all interaction is form submission or navigation. Cancel is navigation. Save is form submission. No buttons-with-onClick because there's no client to attach a handler to.

Going to keep this pattern in mind. "Is this button doing an action or is it doing a navigation?" If it's navigation, use Link. Most "buttons" in CRUD apps are actually navigation.`,
        },
        {
          q: "Tested the UPDATE flow end-to-end",
          a: `1. Loaded /assignments/3 (Hello World Program from CS101)
2. Clicked Edit button in the detail page header
3. URL changed to /assignments/3/edit
4. Form pre-filled with "Hello World Program" in the title input
5. Edited to "Hello World Program (revised)"
6. Clicked Save
7. Browser made a POST to the page URL (Server Action form submission protocol)
8. Server invoked save(formData) → updateAssignment(formData) → prisma.assignment.update → revalidatePath('/assignments') → redirect('/assignments/3')
9. URL changed to /assignments/3
10. Detail page rendered with the new title

Zero client-side JS executed in steps 7-9. The whole flow is server-rendered HTML and form posts. View source on the network tab shows ONE request: the form POST, response is a redirect, then the detail page.

This is what people mean when they say Next.js Server Actions "feel like Rails." The whole thing is request-response. No client state to manage, no race conditions, no loading states to wire up.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Add DELETE (Confirmation Dialog Required)",
      description:
        "Added DELETE handler to /api/assignments/[id]/route.js. Two-state confirm + actual delete + list refresh.",
      qa: [
        {
          q: "DELETE handler with P2025 catch",
          a: `app/api/assignments/[id]/route.js (the DELETE export):

export async function DELETE(request, { params }) {
  const { id } = await params

  try {
    await prisma.assignment.delete({
      where: { id: parseInt(id, 10) },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to delete assignment' }, { status: 500 })
  }
}

Same pattern as Day 1's POST: try the operation, branch on the error code. P2025 is Prisma's "record not found for update/delete" — the analog of P2002 (unique constraint) but for missing rows. Two specific Prisma error codes worth memorizing because they cover most write-time failures.

Returns 404 specifically for "the record doesn't exist" so the client can distinguish "you tried to delete something that's already gone" from "the server is broken." Both could be ignored by the UI (the user wanted it gone either way), but knowing the difference matters for debugging.

The await params is the Next.js 15+ pattern — params is a Promise that must be awaited before destructuring. Same as the GET in this same file.`,
        },
        {
          q: "Why I scoped the Codex CLI session and what I asked for",
          a: `Prompt I used:

"I need to add a DELETE handler to app/api/assignments/[id]/route.js in my Next.js project. The route file already exports GET (returns a single assignment with course included) and follows the await params pattern for Next.js 15+. The DELETE handler should: (1) parse id from params, (2) call prisma.assignment.delete, (3) return JSON success on 200, (4) catch P2025 and return 404, (5) catch other errors and return 500 with a generic message. Don't modify the existing GET handler. Match the import style and try/catch shape of the existing route handlers in this project."

What made this a tight session:
- Specified the exact file. No ambiguity about WHERE the change goes.
- Pointed at existing patterns ("match the import style", "follows the await params pattern"). AI doesn't have to guess.
- Listed the 5 behaviors I want, each enumerated.
- Said what NOT to do ("don't modify the existing GET handler"). Prevents drift.

AI returned a clean diff. Three new lines for the export, the try/catch shape matching my existing files. Applied as-is.

The bad version of this prompt would have been "add a DELETE route." That would have gotten me a full file rewrite with imports I didn't ask for, validation I don't need, and inconsistent style with the existing code. Specificity in, specificity out.`,
        },
        {
          q: "Wired the DELETE through Codex CLI for the UI then refactored to a Server Action (Exercise 3b)",
          a: `Initial implementation: button on each list row that called fetch(\`/api/assignments/\${id}\`, { method: 'DELETE' }) inside an onClick handler with a window.confirm guard.

That worked. But it was a lot of plumbing:
- onClick handler with confirm
- fetch call
- response check
- manual setAssignments state update to remove the row
- error handling if the fetch failed

Converted to a Server Action variant (Exercise 3b path) and the code halved. See next answer for the contrast.`,
        },
        {
          q: "Testing the DELETE flow including the Cancel path",
          a: `Cycled through all four scenarios:

1. Click Delete → confirm dialog appears → click Cancel
   - Item stays. State unchanged. No network request fires. (preventDefault stops the form submission.)

2. Click Delete → confirm dialog appears → click OK
   - Item disappears from the list (optimistic update). Server Action fires. revalidatePath('/assignments') invalidates the cached list. On next render the item is gone for real.

3. Click Delete twice rapidly on the same item
   - First confirm prompts and resolves. Second confirm prompts again. If both confirmed, first delete succeeds, second hits the P2025 catch (already deleted) and returns 404. Optimistic state would have already removed the item so the UI doesn't show the error. Not perfect but not broken.

4. What if the API call fails (network drop)?
   - Currently: nothing. The optimistic update already removed the item from local state. If the actual delete failed, the next revalidatePath would bring it back — but only if the user navigates away and back. There's a real "ghost deletion" bug here for the brief window before refetch. Going to add a try/catch + state revert for that case as a followup.

Real catch from the testing pass. Going in the cli-session-log.md as a known issue.`,
        },
      ],
    },
    {
      heading: "Exercise 3b — Convert DELETE to a Server Action",
      description:
        "Did the optional conversion. Built deleteAssignment as a Server Action with form-based confirm. Compared shape side-by-side with the API-route version.",
      qa: [
        {
          q: "The Server Action — three lines after the action signature",
          a: `In app/assignments/actions.js:

export async function deleteAssignment(formData) {
  const id = parseInt(formData.get('id'), 10);

  if (isNaN(id)) {
    throw new Error('Invalid assignment id');
  }

  await prisma.assignment.delete({ where: { id } });

  revalidatePath('/assignments');
}

That's the whole thing. No return value because the caller doesn't need one — the row's gone, what would I return? No try/catch because if Prisma throws (P2025 on missing row), I want the error to propagate up to Next.js's error boundary. The form's onSubmit handles the user-facing "are you sure" question; the action just does the work.

The isNaN guard is the same shape as updateAssignment. Both actions parse an id from FormData. Both need to handle the null case. Same five lines in both functions — could be a shared helper, but premature for two callers.`,
        },
        {
          q: "Wiring it into the list — inline form, no fetch, no useState for removal",
          a: `In app/assignments/assignment-list.js, inside the map over filtered assignments:

<form
  action={deleteAssignment}
  onSubmit={(e) => {
    if (!confirm('Are you sure you want to delete this assignment? This cannot be undone.')) {
      e.preventDefault()
      return
    }
    setAssignments((prev) => prev.filter((x) => x.id !== a.id))
  }}
>
  <input type="hidden" name="id" value={a.id} />
  <button type="submit" aria-label={\`Delete \${a.title}\`}>
    Delete
  </button>
</form>

Two onSubmit branches:
- Confirm returned false (Cancel) → preventDefault, return. No submission, no state change.
- Confirm returned true (OK) → optimistic state update (remove the item from local state). Form submission proceeds, Server Action fires, server deletes the row, revalidatePath invalidates the cache, on next render the cached list also reflects the deletion.

The optimistic state update IS what makes the UX feel instant. Without it, the user clicks OK and the row stays visible for ~200ms while the Server Action round-trips. With it, the row vanishes immediately.

Why this is a client component: confirm() is a browser API, setAssignments is React state. Both require 'use client'. Couldn't move this to pure server-side without losing the confirm dialog and the instant feedback.`,
        },
        {
          q: "Side-by-side comparison — API route vs Server Action",
          a: `API-route version (the original):

// app/api/assignments/[id]/route.js
export async function DELETE(request, { params }) {
  const { id } = await params
  try { await prisma.assignment.delete({ where: { id: parseInt(id, 10) } })
    return NextResponse.json({ success: true })
  } catch (error) { /* P2025/500 branches */ }
}

// in assignment-list.js
async function handleDelete(id) {
  if (!confirm('Are you sure?')) return
  setAssignments(prev => prev.filter(x => x.id !== id))
  const res = await fetch(\`/api/assignments/\${id}\`, { method: 'DELETE' })
  if (!res.ok) {
    // revert state
    loadAssignments()
  }
}

Server Action version:

// app/assignments/actions.js
export async function deleteAssignment(formData) {
  const id = parseInt(formData.get('id'), 10)
  if (isNaN(id)) throw new Error('Invalid assignment id')
  await prisma.assignment.delete({ where: { id } })
  revalidatePath('/assignments')
}

// in assignment-list.js
<form action={deleteAssignment} onSubmit={...confirm + optimistic state}>
  <input type="hidden" name="id" value={a.id} />
  <button type="submit">Delete</button>
</form>

What collapsed in the Server Action version:
- No fetch URL string (or its typos)
- No JSON serialization on either side
- No response status check or error parsing
- No NextResponse wrapping
- No router.refresh() — revalidatePath does it server-side
- One file changed instead of two

What stayed the same:
- The confirm prompt
- The optimistic state update for instant feedback
- The Prisma operation itself

The Server Action is materially less code. Three lines in actions.js, a <form> in the list. The API route had to spell out the protocol; the Server Action lets the framework spell it out.

I kept the API route version in the codebase for now. Reasoning: programmatic deletion (a future "bulk cleanup" feature, or a CLI script) might prefer the API. The cost of keeping both is one extra file. Not worth the cleanup work yet.`,
        },
        {
          q: "Why I chose Server Actions — the one-sentence comment on actions.js",
          a: `Top of app/assignments/actions.js:

// Server Actions are used here instead of API routes: no fetch, no JSON serialization,
// and revalidatePath handles cache invalidation in one place.
'use server';

The comment is the lab's deliverable. It's also actually useful — six months from now when I'm wondering why this file exists alongside app/api/assignments/[id]/route.js, the first line of actions.js tells me.

The choice in plain English: for any mutation that's triggered by a user form on a page in my app, Server Actions are simpler. For any mutation that needs to be callable from outside the app (programmatic clients, mobile apps, public API), API routes are the right tool. Canvas Daily is a personal app with no external clients today, so most mutations want Server Actions.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — CRUD Checkpoint",
      description:
        "End-to-end verification: create, read, update, delete. Full cycle.",
      qa: [
        {
          q: "CREATE — went past the lab and built /assignments/new",
          a: `The lab assumes CREATE was wired in Week 6. Canvas Daily's CREATE flow on Day 4 of Week 6 was for User profiles (the Settings page), not Assignments. So I needed to build the Assignment CREATE flow today.

Built app/assignments/new/page.js — full form with five fields:
- Title (required)
- Course (required, populated from a course dropdown via prisma.course.findMany)
- Due Date (optional, type="datetime-local")
- Points (optional, type="number")
- Description (optional, textarea)

The page uses <form action={createAssignment}> — the createAssignment Server Action in actions.js handles parseInt, optional field coalescing, and the redirect to /assignments after success.

Added a "+ New Assignment" button to the assignments list page header that links to /assignments/new. The CREATE flow is now: list page → click + New → fill form → submit → server creates row → redirects to list → new row appears.

This was extra work beyond the lab but it filled a real gap. Canvas Daily had no UI for creating assignments before today. Now it does.`,
        },
        {
          q: "Read — already in place from Week 6 Day 3",
          a: `Nothing new on the READ side. The list page, the detail page, and the related-assignments section all came from Day 3. The /api/assignments and /api/assignments/[id] routes also already existed.

What I added today on the read side: an Edit button on the assignment detail page (links to /assignments/[id]/edit) and a Delete button on each list row. Those are technically navigation/action UI additions, not new READ functionality, but they make the existing READ pages capable of branching into UPDATE and DELETE.`,
        },
        {
          q: "UPDATE — full cycle verified",
          a: `1. /assignments → list of 10 assignments
2. Click into "Hello World Program" → /assignments/3 detail page
3. Click Edit (top right) → /assignments/3/edit
4. Form pre-fills with "Hello World Program"
5. Edit to "Hello World Program (revised)"
6. Click Save
7. Server Action fires: prisma.assignment.update → revalidatePath → redirect
8. Lands on /assignments/3 with the new title
9. Navigate back to /assignments — list shows "Hello World Program (revised)"
10. Refresh — still revised. (DB is the source of truth, not just React state.)

All works. Single round-trip. No loading spinner because the Server Action redirect happens server-side.`,
        },
        {
          q: "DELETE — full cycle verified",
          a: `1. /assignments → list of 10 assignments
2. Click Delete on "Hello World Program (revised)"
3. confirm() dialog: "Are you sure you want to delete this assignment? This cannot be undone."
4. Click OK
5. Item disappears from the list immediately (optimistic state update)
6. Server Action fires in the background
7. prisma.assignment.delete completes
8. revalidatePath('/assignments') invalidates the cache
9. Navigate to /assignments/3 (the deleted one) → notFound() → 404 page
10. Refresh /assignments — list still shows 9 assignments (not 10)

Then tested the Cancel path:
1. Click Delete on another item
2. confirm() dialog
3. Click Cancel
4. Nothing happens. Item stays. No network request. State unchanged.

Both paths working. The optimistic update + revalidatePath combo gives instant UX without losing source-of-truth correctness.`,
        },
        {
          q: "Full checklist — all four operations pass",
          a: `CREATE: ✓ Click + New, fill form, submit, redirect to list, new item visible
READ:   ✓ List page shows all items, detail page shows full info + related
UPDATE: ✓ Click Edit, form pre-fills, save, redirect, change persists
DELETE: ✓ Click Delete, confirm, item removed from list and DB

All four CRUD operations work end-to-end against real Postgres via Prisma, all four use Server Actions for writes (except DELETE which has both Server Action and API route paths), and all four pages are server components except the assignment list (which is client for search/filter/optimistic delete).

Canvas Daily is now a working CRUD app on Assignments. Just over two weeks since I started Week 6 with an empty Next.js scaffold.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Write Your README",
      description:
        "Wrote a README.md that's useful for humans and for future AI sessions. Includes the data model for the Phase 2 gate verbal rehearsal.",
      qa: [
        {
          q: "The README sections I included",
          a: `Sections:
1. Title + one-sentence pitch
2. Features (5 bullets)
3. Tech Stack (Next.js 16, Prisma + adapter-pg, JavaScript, Tailwind, Vitest + Playwright)
4. Data Model (all 4 entities with their fields and relations)
5. Getting Started (clone, install, .env, migrate, seed, run)
6. Project Structure (tree of the app directory)
7. Status — "Working" and "Not yet" sections

The "Not yet" section is the honest one. Auth isn't built. Editing beyond title isn't wired up. Submission tracking doesn't exist. Notifications aren't there. Writing those down in the README is uncomfortable because they're missing features in plain sight — and that's exactly why they belong in the README. The next dev (including future me) needs to know what's NOT done.`,
        },
        {
          q: "Why a Data Model section matters more than the rest",
          a: `Two reasons.

First — the Phase 2 gate (end of Week 8) has a verbal component where I walk through my database schema out loud. Writing it in the README is the script for that walkthrough. Each entity, each field, each relation — already in prose. By the time I'm in front of an evaluator, I've reread this section a dozen times.

Second — when I ask AI for help on this codebase in the future, the README data model gives the AI immediate grounding. "User has many enrollments, Enrollment joins User and Course, Course has many Assignments, Assignment belongs to one Course." That's the relationship graph in plain English. Prisma's schema.prisma file says the same thing in Prisma DSL — but English is friendlier for prompting.

The data model I wrote out today is identical to what's in schema.prisma — same fields, same relations, same uniques. If they ever drift, the README is wrong by definition (the schema is the source of truth). Going to add a "regenerate this section after schema changes" reminder somewhere. Or eventually script it.`,
        },
        {
          q: "Used Codex CLI but kept it in my voice",
          a: `Prompt I used:

"Help me write a README for my Next.js app called canvas-daily. It's a personal Canvas LMS assignment tracker for students. Features so far: full CRUD on assignments (server-side rendered list, detail, edit, create pages; Server Actions for writes; confirmation dialog on delete). Tech: Next.js 16 App Router, Prisma 7 + @prisma/adapter-pg on Postgres, Tailwind 4, Vitest + Playwright. Don't make it sound generic — write it like I would. Keep it practical and honest about what works and what doesn't yet. Include the data model with all field types from my schema.prisma."

Pasted schema.prisma below the prompt.

AI returned a draft. Edited it heavily. Changes I made:
- Cut the "Getting Started" preamble that sounded like NPM boilerplate
- Replaced "A modern, responsive web application" (template-speak) with the actual one-line pitch
- Rewrote the Status section in my own words — "Working" and "Not yet"
- Added the brief note about why pointsTotal is optional (Canvas doesn't always publish points)
- Cut a "Contributing" section that was nonsense for a personal project

Final README is ~70% AI structure, ~30% my prose, but every sentence reads like something I'd say. That's the right ratio for this kind of doc — AI handles the boilerplate, I add the judgment.`,
        },
      ],
    },
    {
      heading: "Exercise 6 — Code Comments That Explain WHY",
      description:
        "Added comments across the key files. Schema, actions, list component, route handler. Each comment justifies a CHOICE, not the syntax.",
      qa: [
        {
          q: "Prisma schema — three model-level WHY comments",
          a: `In prisma/schema.prisma, added one block comment above each model:

// User exists to model the student role but has no auth attached yet.
// The role field defaults to "student" — "instructor" is a future use case
// once we add auth and want to scope what each role can see/edit.
model User { ... }

// code is unique because it's the natural identifier for a course (e.g. CS101).
// term is optional so courses can exist without a specific semester attached.
model Course { ... }

// The core entity. Most fields are optional because Canvas doesn't always
// publish due dates or point values — forcing them would break imports later.
// No updatedAt: we only edit titles for now; add it when more fields become editable.
model Assignment { ... }

// Join table only — no extra payload fields because enrollment itself
// carries no state yet (grades, completion status, etc. come later).
// The composite unique prevents double-enrollment at the DB level, not just app level.
model Enrollment { ... }

Each comment answers WHY this design choice, not WHAT the model is. The model name and the fields already say what. The comments say why the optional fields are optional, why there's no updatedAt, why Enrollment is an explicit join table.

Future me (or future contributor) reading the schema knows the REASONING. If they see "this model needs updatedAt!" they'll find the comment that says "we only edit titles for now" and either change the comment (if they're adding more editable fields) or back off. The comment captures the moment-in-time judgment.`,
        },
        {
          q: "actions.js — one comment that justifies the whole file",
          a: `Top of app/assignments/actions.js:

// Server Actions are used here instead of API routes: no fetch, no JSON serialization,
// and revalidatePath handles cache invalidation in one place.
'use server';

One comment. Justifies the existence of the entire file. Anyone reading actions.js for the first time gets the architectural decision in two sentences before they even see the imports.

This is the comment I'm proudest of. It's small but it punches above its weight. Without it, a future reader sees a file full of mutations and wonders why they aren't API routes. With it, they immediately understand the trade and can decide whether to follow the pattern or push back.`,
        },
        {
          q: "assignment-list.js — explains the client/server tradeoff",
          a: `Top of app/assignments/assignment-list.js:

// Client component because search and filter are instant/local — no reason
// to round-trip the server on every keystroke. The trade-off is that
// revalidatePath alone won't refresh this list after a Server Action mutation;
// we handle that with optimistic state updates on delete and redirect on create.
'use client'

Three things explained in three sentences:
1. Why this is a client component (interactivity in the UI, search/filter on every keystroke)
2. The trade-off being made (revalidatePath can't reach client-side state)
3. How that trade-off is mitigated (optimistic update on delete, redirect on create)

A comment like this prevents the dumbest possible future change: someone seeing 'use client' at the top, thinking "shouldn't this be a server component?", and switching it without understanding the keystroke cost. The comment is a tiny piece of defensive engineering.`,
        },
        {
          q: "[id]/route.js — explains why this file still exists alongside actions.js",
          a: `In app/api/assignments/[id]/route.js:

// GET is here so the edit page can pre-fill from a fresh server fetch if needed.
// In practice the edit page currently reads directly via Prisma (server component),
// but keeping GET on this route means it's available for client-side use later.

// DELETE remains an API route (not a Server Action) so it can be called
// from the list component which is client-side and manages its own state.
// The Server Action version (deleteAssignment in actions.js) also exists —
// both do the same DB operation; the API route is kept for the fetch path.

The DELETE comment is a little misleading — the list component actually uses the Server Action version now, not the API route. Going to update it to say "kept for future programmatic clients" since that's the real reason it stays. Small honesty fix.

This is the value of writing WHY comments: they age and they reveal staleness. The comment was true when I wrote it. It became less true when I refactored the list to use the Server Action. The comment is now a tripwire — when I notice it's drifted from reality, I update either the code or the comment. Either way the divergence gets caught.`,
        },
        {
          q: "Favorite comment + the test it has to pass",
          a: `My favorite is the Assignment model comment:

// The core entity. Most fields are optional because Canvas doesn't always
// publish due dates or point values — forcing them would break imports later.

It hits the test the lab proposed: "could someone read this comment and understand WHY?" Yes. They can understand why three fields are optional without me being there to explain.

It's also the comment that does the most explanatory work per word. Six lines of schema get justified by two lines of prose. The dueDate? being optional is a CHOICE made in anticipation of real Canvas imports where some assignments lack due dates. Without the comment, that question would come up every time someone reads the schema. With the comment, the answer is already there.

Total comment count across the project: 11 WHY-comments in 4 files. Past the lab's "at least 5" deliverable, all earning their keep.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes walking partner through the UPDATE flow. Then partner tries to break DELETE.",
      qa: [
        {
          q: "My 2-minute UPDATE walkthrough",
          a: `Screen-shared canvas-daily at /assignments. Pointed at the assignment list, hovered the row for "Hello World Program" — pointed out the Delete button on the right side, then clicked the row itself to navigate to the detail page.

"This is the assignment detail page. The Edit button is in the top right — it's a Next.js Link, not a button with an onClick. Clicking it navigates me to /assignments/3/edit. Watch the URL change.

This edit page is a server component — no 'use client' at the top. It does a prisma.assignment.findUnique to fetch the assignment by id, then renders an HTML form pre-filled with the title via defaultValue. No useState. No useEffect. The form action points at a Server Action called save, which is defined inline inside the page component with its own 'use server' directive.

When I change the title and click Save, here's what happens — the browser submits the form to the page's URL via POST. Next.js routes the POST to the save Server Action. save calls updateAssignment, which is a Server Action in actions.js. updateAssignment parses the FormData, calls prisma.assignment.update with the new title, calls revalidatePath('/assignments') to invalidate the list cache, and returns the updated record. Then save calls redirect('/assignments/3'), which sends a redirect response to the browser.

The browser follows the redirect, lands on /assignments/3, which re-renders as a server component, hits Prisma for the current assignment data — and now shows the new title.

Zero client-side JavaScript ran during the form submit. Zero. The whole flow is server-rendered HTML and form posts. View source on the network tab — one POST request, one redirect, one GET request. No fetch, no JSON, no React state, no loading state. This is what people mean when they say Server Actions feel like Rails.

The tests I wrote yesterday — the four for updateAssignment — protect this whole flow. If I break the action's contract, the tests go red before the UI breaks."

Ended at the detail page with the new title visible. ~2 minutes.`,
        },
        {
          q: "Partner tried to break DELETE — what they did and what happened",
          a: `Five attempts. Two found real issues.

1. Click Delete → Cancel
   - Item stays. confirm() returned false, preventDefault stopped the form. Clean.

2. Click Delete → OK
   - Item vanishes immediately (optimistic update). Server Action fires. Row gone from DB. revalidatePath invalidates cache. Refresh shows item still gone. Clean.

3. Double-click Delete on the same row
   - First confirm prompts. Cancel it. Second confirm prompts. Cancel that too. Item stays. No issue.
   - Re-attempt with rapid Click-OK-Click-OK: first confirm OK → optimistic removal + Server Action fires. Second confirm — interesting, the form is GONE from the DOM because we optimistically removed the parent <li>. So the second click can't happen. The optimistic update accidentally prevents the double-fire bug. Lucky.

4. Click Delete on multiple different rows before any complete
   - Each fires its own confirm + Server Action independently. All three rows vanish optimistically. Three Server Actions execute in parallel against the DB. All three complete. State stays consistent. No race condition because each Server Action targets a different id.

5. Network drop simulation (DevTools: throttle to Offline) → Click Delete → OK
   - Item vanishes from the UI (optimistic). Server Action fails (network down). Form submission errors. UI doesn't show the error — there's no error state wired up. After re-enabling network and refreshing, the deleted item REAPPEARS in the list. Optimistic update lied — the row never actually deleted.
   - REAL GAP. The optimistic update needs to revert on action failure. Currently it just trusts the action succeeded.`,
        },
        {
          q: "The two gaps surfaced and the fixes",
          a: `Gap 1: Network failure during DELETE leaves UI inconsistent.

The issue: after setAssignments(prev => prev.filter(...)) runs optimistically, if the Server Action fails, the state is wrong. The item should reappear. Currently there's no error handler.

Fix: wrap the Server Action call in try/catch on the form's onSubmit, and revert the optimistic update on failure. Or use React 19's useOptimistic hook, which is built for exactly this pattern — automatically reverts on failure. Going to use useOptimistic next round.

Gap 2: No user-visible error when delete fails.

Even if the optimistic state reverts correctly, the user has no idea the delete failed. They clicked Delete, the item disappeared, then reappeared. From their perspective the app is buggy.

Fix: add a toast or banner when delete fails. "Couldn't delete that assignment. Try again." Combined with the state revert, the user gets correct UX both ways.

Adding both to the cli-session-log.md as "known issues, fix before Week 8 gate." The peer review caught them. That's exactly what the exercise format is FOR — fresh eyes break things in ways my own eyes had stopped seeing.`,
        },
        {
          q: "What this peer session surfaced beyond the bugs",
          a: `Two meta-observations.

First — articulating the UPDATE flow out loud forced me to compress eight steps into a continuous narrative. Reading code, I see the eight steps. Talking through it, I had to make them flow as one motion. That compression is its own skill. The gate verbal is going to demand this exact thing — make a multi-step technical flow sound like ONE thing.

Second — having my partner test on MY machine (vs me testing it for them) caught the network-failure bug because they had no context for what "should" happen. They expected the UI to tell them when something went wrong. I knew it wouldn't and had stopped noticing. Outside eyes restore the user's perspective.

Going to do these breakdown sessions before every demo from now on. Not just at peer review.`,
        },
      ],
    },
    {
      heading: "Coding Challenge — Bookmarks Manager (#14)",
      description:
        "Optional. The bookmarks-manager challenge as a fresh-substrate CRUD app. Scoped to UPDATE + DELETE extensions since those are what I just built.",
      qa: [
        {
          q: "Why this one fit the day",
          a: `Bookmarks Manager is a parallel full-stack CRUD app. The bank version covers READ and CREATE; the variations at the bottom call out UPDATE and DELETE as extensions. That's exactly what I just built in canvas-daily, in a different domain.

Running the challenge as a fresh substrate is the right kind of practice: same patterns, different model. I can't just paste my canvas-daily code — I have to re-derive the structure for bookmarks. If I genuinely understand Server Actions + revalidatePath + optimistic updates, the second build should be faster and cleaner than the first.

Scoped it tight: implement UPDATE + DELETE only, with TDD on the Server Actions. Started a new project (npx create-next-app), seeded a Bookmark model in Prisma, ran the same workflow as today's lab.`,
        },
        {
          q: "TDD on the bookmarks Server Actions",
          a: `Wrote five tests for updateBookmark and deleteBookmark in actions.test.js BEFORE writing the actions. Same pattern as Exercise 1 — vi.mock the Prisma client, mock next/cache, beforeEach clearAllMocks.

Tests covered:
- updateBookmark updates title and url given a valid id
- updateBookmark returns the updated record
- updateBookmark throws on P2025
- deleteBookmark deletes a row given a valid id
- deleteBookmark throws on P2025

All RED. Implemented the actions in 8 lines each. All GREEN on first save. Took ~12 minutes total for both actions including the tests.

Comparing to today's canvas-daily work, where I scaffolded updateAssignment from scratch with no priors — the bookmarks version took maybe 1/4 the time. Same pattern, second rep. Faster.`,
        },
        {
          q: "Where the second build diverged from canvas-daily",
          a: `Three places.

First — bookmarks have a url field, and I added URL validation. updateBookmark calls new URL(formData.get('url')) inside a try/catch and throws on parse failure. canvas-daily's assignment titles don't need validation (any string is valid). Different data, different invariants.

Second — I used React 19's useOptimistic hook for the delete this time, fixing the gap my peer partner found. Wrapped the bookmark list state in useOptimistic with a reducer that removes by id. When the Server Action fails (network drop, P2025), useOptimistic auto-reverts. Going to backport this pattern to canvas-daily.

Third — I used PUT-style UPDATE (replace all fields) instead of canvas-daily's title-only UPDATE. Bookmarks have only two editable fields (title and url) so replacing the whole object is cleaner than per-field PATCH. Both patterns are valid; which one fits depends on the data shape and how the UI presents edits.`,
        },
        {
          q: "What the second rep taught me about the first",
          a: `Three things.

First — the Server Action pattern compresses well across domains. The shape of updateBookmark and updateAssignment is nearly identical: parse the FormData, validate, call prisma.X.update, revalidatePath. The model name changes, the validations differ, but the skeleton is the same. That's a sign the pattern is real, not domain-specific.

Second — useOptimistic is the right tool for the lying-optimistic-update bug. Should have reached for it on canvas-daily today instead of rolling my own optimistic state. Backporting to canvas-daily this week.

Third — running the challenge as a second build is qualitatively different from doing it as my first. The first build is "learn the pattern by struggling with it." The second build is "apply the pattern as a tool." Both have value, but they teach different things. Going to start using the challenges this way — not as standalone practice, but as same-day re-runs of whatever the lab just taught.`,
        },
        {
          q: "Logged it as session #N in cli-session-log.md",
          a: `Bookmarks UPDATE/DELETE rep noted in the cli-session-log.md as session #N (just past 10 logged sessions now). Same template — goal, prompt, what came back, decision, result, what I'd do differently.

The "what I'd do differently" for this session: I asked Codex CLI for the Bookmark model schema, then for the Server Actions, then for the page wiring — three separate sessions with /clear between them, per the four-step method. Worked clean. The discipline of three small sessions vs one big "build me a bookmarks app" session is paying compound interest.

The phase 2 gate at end of Week 8 is two weeks out. By then I'll have logged 15+ sessions. The pattern is the artifact.`,
        },
      ],
    },
  ],
};
