export const week7day1 = {
  number: 26,
  label: "Day 1",
  title: "Week 7, Day 1 — Testing with Vitest, TDD, and AI Pair",
  subtitle:
    "First TDD cycles, pure-function tests, mocked Prisma handlers, integration tests against a real DB, Playwright E2E, and GitHub Actions CI.",
  color: "#16a34a",
  sections: [
    {
      heading: "Exercise 1 — Vitest Setup + First TDD Cycle",
      description:
        "Install Vitest in canvas-daily. Write a failing getDomain test. Make it green. Add a second test for the www subdomain.",
      qa: [
        {
          q: "Setup — installed Vitest and added the test script",
          a: `npm install --save-dev vitest

Added to package.json:
"scripts": {
  "test": "vitest"
}

vitest is the watch-mode runner. Save a test file, it re-runs automatically. Save a source file, only the affected tests re-run. The TDD cycle ends up being: write test → save → see red → write impl → save → see green. The terminal is essentially a feedback loop you don't have to babysit.

One note for canvas-daily: I'm on Prisma 7 with @prisma/adapter-pg, Tailwind 4, ESM throughout. Vitest works out of the box with all of that because it shares Vite's transform pipeline. No Babel config, no transformIgnorePatterns archaeology. If this were a Jest project I'd have already lost an hour to ESM compat.`,
        },
        {
          q: "First RED — getDomain.test.js with no implementation",
          a: `Created src/utils/getDomain.test.js:

import { test, expect } from "vitest";
import { getDomain } from "./getDomain.js";

test("extracts domain from a URL", () => {
  expect(getDomain("https://github.com/x/y")).toBe("github.com");
});

Saved. Vitest screamed:

Failed to resolve import "./getDomain.js" from "src/utils/getDomain.test.js"

That's the RED I wanted. The test runner is doing its job — it told me, in plain English, exactly what's missing. The failing test has named the file it expects.

This is the discipline TDD enforces: I'm not allowed to write code that nothing asks for. The failing test is the request. Implementation answers it.`,
        },
        {
          q: "GREEN — minimum implementation",
          a: `Created src/utils/getDomain.js:

export function getDomain(url) {
  return new URL(url).hostname;
}

One line. The built-in URL constructor does the parsing — .hostname returns "github.com" for "https://github.com/x/y". No regex, no string splitting.

Saved. Vitest re-ran. Green tick. ~50ms total.

The minimum-implementation rule matters. If I'd "helpfully" added protocol handling, query-string stripping, port handling — none of that is tested. The test is the only thing that proves behavior. Code that goes beyond the tests is code I haven't verified.`,
        },
        {
          q: "Second test — www subdomain preserved",
          a: `Added:

test("preserves www subdomain", () => {
  expect(getDomain("http://www.github.com/x/y")).toBe("www.github.com");
});

Hit save. Vitest re-ran. Already green — URL.hostname returns "www.github.com" for www-prefixed URLs by default.

This is the test passing without code changes. The first test specified ONE behavior; the second test confirms a related behavior I didn't have to code for. URL handles it for me. If I'd written a string-split implementation, the www case might have broken — the test would have caught it.`,
        },
        {
          q: "Two-test GREEN run — what the terminal showed",
          a: `vitest running on watch:

 ✓ src/utils/getDomain.test.js (2)
   ✓ extracts domain from a URL
   ✓ preserves www subdomain

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Duration  18ms

Whole loop — setup, RED, impl, GREEN, second test — took maybe 4 minutes. The test-runner overhead is essentially zero, which is the point. Slow tests get skipped; fast tests get run constantly. Vitest's watch mode runs only what's affected by your save, so even with hundreds of tests the feedback stays sub-second.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — TDD a Pure Function",
      description:
        "Adapted to Canvas Daily — built formatDueIn(dueDate, now) instead of formatBookmarkAge. Tests first, all RED. Implement to GREEN.",
      qa: [
        {
          q: "Why I adapted the function to formatDueIn(dueDate, now)",
          a: `The lab's formatBookmarkAge was right for the Bookmarks app the lab assumes. Canvas Daily's whole point is surfacing what's DUE — not what's old. So the same shape of function, with a flipped semantic: take a future date and a "now," return a string about how soon something is due.

The Assignment model already has a dueDate field. This function is something I'd actually call in the digest UI ("due in 2 days", "overdue"). Not a toy.

Same TDD discipline either way. Same boundary-table spec, just rephrased:
- <60s → "due now"
- 1-59 min → "due in X minutes"
- 1-23 hours → "due in X hours"
- 1-29 days → "due in X days"
- 30-364 days → "due in X months"
- 365+ days → "due in X years"
- negative diff (in the past) → "overdue"`,
        },
        {
          q: "Tests first — all RED",
          a: `Six tests in formatDueIn.test.js. One per row of the spec table, plus the overdue edge case. Locked NOW at the top so every test is deterministic:

import { test, expect } from "vitest";
import { formatDueIn } from "./formatDueIn.js";

const NOW = new Date("2026-04-27T12:00:00Z");

test('returns "due now" for a due date 30 seconds away', () => {
  const due = new Date(NOW.getTime() + 30 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due now");
});

test('returns "due in 5 minutes" for a due date 5 minutes away', () => {
  const due = new Date(NOW.getTime() + 5 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 5 minutes");
});

test('returns "due in 3 hours" for a due date 3 hours away', () => {
  const due = new Date(NOW.getTime() + 3 * 60 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 3 hours");
});

test('returns "due in 2 days" for a due date 2 days away', () => {
  const due = new Date(NOW.getTime() + 2 * 24 * 60 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 2 days");
});

test('returns "due in 1 months" for a due date 35 days away', () => {
  const due = new Date(NOW.getTime() + 35 * 24 * 60 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 1 months");
});

test('returns "overdue" for a due date 5 minutes in the past', () => {
  const due = new Date(NOW.getTime() - 5 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("overdue");
});

All six RED on save — the import resolves to undefined, every call throws.

The NOW-as-parameter trick is the deepest lesson here. The function never reads the wall clock. The caller passes "now" in. That's what makes the tests deterministic — no flaky tests, no need to mock Date.now(), no time-zone gotchas. In production the digest page passes new Date(). In tests, I pass a fixed reference.

Same pattern I'd use anywhere a function depends on external state. Pass the state in. The function becomes a pure transformation. The transformation is testable. Done.`,
        },
        {
          q: "GREEN — the implementation",
          a: `export function formatDueIn(dueDate, now) {
  const diffMs = dueDate.getTime() - now.getTime();

  if (diffMs < 0) return "overdue";

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return "due now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return \`due in \${minutes} minutes\`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return \`due in \${hours} hours\`;

  const days = Math.floor(hours / 24);
  if (days < 30) return \`due in \${days} days\`;
  if (days < 365) return \`due in \${Math.floor(days / 30)} months\`;

  return \`due in \${Math.floor(days / 365)} years\`;
}

Cascading if-statements, each one handling its row of the spec table. Math.floor at each level — the spec is integer-floor everywhere, so don't introduce fractional rounding. Walking from smallest unit upward means each branch covers a clean range without overlap.

All 6 tests went green on the same save. No bouncing back and forth between RED and GREEN. The tests were specific enough that the implementation just fell out.

This is the TDD payoff. Writing tests first forced me to nail the boundaries (<60s, <60min, <24h, <30d, <365d) BEFORE I wrote a single if-statement. By the time I started typing the function, I knew exactly what shape it had to be.`,
        },
        {
          q: "Reflection — tests-first slower or faster?",
          a: `Slower to START, faster overall.

Writing the tests first felt slow at the beginning because I had to nail the spec — the exact boundary conditions, the exact output strings — before writing a single line of logic. That's the upfront tax.

But once the tests were green, I was DONE. No manual poking at the function with random inputs to convince myself it worked. No "let me try one more edge case" loop. The tests already encoded every boundary I cared about. The 35-day "1 months" case came out right the FIRST time because the test forced me to choose Math.floor(days / 30) before I'd typed anything.

The biggest win was the NOW-as-parameter trick. Passing the clock in instead of reading it inside the function is what made every test deterministic. No flaky tests, no Date.now() mocks. That's the kind of design choice TDD nudges you toward: pure functions, explicit dependencies, easy-to-test shapes. The tests don't just verify the code — they shape it.

If I'd written the code first, I would have written it slightly differently. Probably read new Date() inside the function. Probably skipped the overdue case until I noticed it. Probably gotten the months math subtly wrong because I'd have eyeballed it. Tests-first kept me honest.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — TDD with AI Pair + Edge-Case Discovery",
      description:
        "Pulled the inline search logic from assignment-list.js into a tested pure function. AI implemented from my tests, then suggested edge cases.",
      qa: [
        {
          q: "Picked searchByTitle — refactor of real inline code, not a toy",
          a: `The lab suggests filterByDomain, sortByOldestFirst, or searchByTitle. searchByTitle hit closest to home — the search logic already existed inline in app/assignments/assignment-list.js:

a.title.toLowerCase().includes(search.toLowerCase())

That's the kind of one-liner that grows inline until it becomes too tangled to test. Pulling it into a named, tested pure function NOW means the next time it changes (e.g., to also search course names) I can write the test first, change the function, and the rest of the app inherits the new behavior with zero risk.

That's the value of testing as a refactor enabler. Tests around a function give me confidence to change it. Without tests, I'd be afraid to touch it because the call site is buried in a 100-line client component.`,
        },
        {
          q: "Tests as plain English first, then translated to Vitest",
          a: `Bulleted spec before writing any code:

- Returns empty array when the list is empty
- Returns matching items when titles contain the query
- Returns empty array when nothing matches
- Is case-insensitive
- Matches on substring, not just full title
- Empty query returns everything (substring of all strings)

Translated to six tests. All RED on save because searchByTitle.js didn't exist yet.

Notice the spec is product-shaped, not implementation-shaped. "Is case-insensitive" — yes. "Uses .toLowerCase() on both sides" — that's implementation. The test should say WHAT the function does, not HOW. Implementations are replaceable. Behavior is the contract.`,
        },
        {
          q: "Handed the tests to AI — Pattern 2 (tests-driven AI implementation)",
          a: `Prompt to Codex CLI:

"Here are my failing Vitest tests for searchByTitle. Write the function that makes them pass. Don't add features beyond what the tests describe."

Pasted the test file contents. AI returned:

export function searchByTitle(assignments, query) {
  const q = query.toLowerCase();
  return assignments.filter((a) => a.title.toLowerCase().includes(q));
}

Ran tests. Five of six green. The failing one: "an empty array when the list is null or undefined" — wait, that wasn't in my original six. Let me re-read: actually all six original tests passed. The failures came later when I added the edge-case tests (next step).

What's interesting about this is the AI didn't add features. It didn't add a fuzzy match. It didn't add a max results parameter. It didn't add a "useStartsWith" option. It implemented exactly what my tests asked for. The discipline transferred — clear spec, narrow implementation.

This is the half of the TDD-with-AI workflow that fundamentally changes how I use AI. WITHOUT tests, AI tends to overshoot. With tests, it has a clear stopping point. The tests ARE the prompt.`,
        },
        {
          q: "Pattern 3 — asked AI for missing edge cases",
          a: `Follow-up prompt:

"Here's my function and my tests. What edge cases am I missing? List them in priority order: real-world risks first, paranoid edge cases last."

AI returned six suggestions. Worked through them on a keep/reject/modify basis. Real-or-paranoid split:

| # | Suggestion | Real or Paranoid | Decision |
|---|------------|------------------|----------|
| 1 | assignments is null/undefined | Real | KEEP |
| 2 | query is null/undefined | Real-ish | KEEP (modified) |
| 3 | Assignment with null title | Paranoid | REJECT |
| 4 | Query with surrounding whitespace | Real, but product decision | REJECT for now |
| 5 | Unicode/accents ("café" vs "cafe") | Paranoid | REJECT |
| 6 | 100k-item arrays / perf | Paranoid | REJECT |

The principle: "real" means could plausibly happen with my actual data flow. The /api/assignments fetch CAN return null on a bad response — that's the kind of thing that crashes in production and not in dev. "Paranoid" means technically possible but ruled out by my schema or context. Null title is impossible — Prisma schema is title String (non-null). Unicode is paranoid because Canvas titles are effectively ASCII. 100k arrays are paranoid because this is a personal student digest, not a search engine.`,
        },
        {
          q: "Two edge-case tests added, both RED-first then GREEN",
          a: `Added to the test file:

test("returns an empty array when the list is null or undefined", () => {
  expect(searchByTitle(null, "essay")).toEqual([]);
  expect(searchByTitle(undefined, "essay")).toEqual([]);
});

test("treats a null or undefined query like an empty search", () => {
  expect(searchByTitle(assignments, null)).toEqual(assignments);
  expect(searchByTitle(assignments, undefined)).toEqual(assignments);
});

Saved. Both RED — AI's initial implementation crashed on null inputs.

Updated the function:

export function searchByTitle(assignments, query) {
  // Fail safe if an upstream fetch returns null/undefined instead of an array.
  if (!Array.isArray(assignments)) return [];
  // A missing query behaves like an empty search: return everything.
  const q = (query ?? "").toLowerCase();
  return assignments.filter((a) => a.title.toLowerCase().includes(q));
}

Saved. Both green. All eight tests passing.

Notice what I DIDN'T add: null-checks on title, unicode normalization, length caps, throttling. None of those have failing tests behind them. Defensive code that nothing asks for is dead weight.`,
        },
        {
          q: "Reflection — what AI surfaced that I'd missed",
          a: `The null-list-from-broken-fetch was the genuine catch. I'd have eventually caught the null-query because it's right there in the input I control. But a bad API response returning null instead of an array — that's the kind of thing that crashes in production and not in dev, because dev never sees broken responses. AI surfaced it. I kept it.

The paranoid suggestions (unicode, 100k arrays, null titles) were paranoid PRECISELY because my schema and my actual data rule them out. The DB enforces non-null titles. This is a personal digest of maybe 50 active assignments, not a Google-scale search engine. Adding defensive code for those cases would have been LOC for nothing.

Writing tests first kept the function honest. I only added the two guards I had failing tests for, instead of defensively null-checking everything "just in case" and bloating a four-line function. The discipline scales the other direction too: not just "test before code" but "no code without a test asking for it." If I can't write the test for it, I don't need the code.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Test an Existing Handler with Mocked Prisma",
      description:
        "Five tests on GET /api/assignments — the three lab tests plus courseId filtering and a 500 path. Prisma fully mocked, zero DB hits.",
      qa: [
        {
          q: "vi.mock setup at the top of the file — HOISTING gotcha",
          a: `app/api/assignments/route.test.js, opening lines:

import { test, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    assignment: {
      findMany: vi.fn(),
    },
  },
}));

import { GET } from "./route.js";
import { prisma } from "@/lib/prisma";

beforeEach(() => {
  vi.clearAllMocks();
});

The thing that trips you up: vi.mock looks like it's mid-file, but Vitest hoists it ABOVE all imports at runtime. Same as Jest. So even though the vi.mock call appears between import statements, it actually runs first — which is what we want, because the GET import below has to see the mocked prisma when route.js evaluates.

If I'd put vi.mock at the bottom of the file, route.js would have already imported the real Prisma client by then and the mock would do nothing. The hoisting feels weird until you realize WHY — the mock must be in place before any module-under-test imports the thing being mocked.

The beforeEach(vi.clearAllMocks()) is important too. It resets BOTH the call history AND the mockResolvedValue setup. Means every test starts with findMany returning undefined unless that test explicitly sets it up. Forces tests to declare their own state — no spooky-action-at-a-distance from a previous test.`,
        },
        {
          q: "Three baseline tests — happy path, empty path, ordering verification",
          a: `// Helper because the handler reads request.url
function makeRequest(url = "http://localhost/api/assignments") {
  return { url };
}

test("returns assignments when the DB has them", async () => {
  prisma.assignment.findMany.mockResolvedValue([
    {
      id: 1,
      title: "Final Essay",
      dueDate: new Date("2026-05-01"),
      course: { id: 1, name: "ENG 102" },
    },
  ]);

  const response = await GET(makeRequest());
  const data = await response.json();

  expect(data).toHaveLength(1);
  expect(data[0].title).toBe("Final Essay");
});

test("returns an empty array when the DB is empty", async () => {
  prisma.assignment.findMany.mockResolvedValue([]);

  const response = await GET(makeRequest());
  const data = await response.json();

  expect(data).toEqual([]);
});

test("orders assignments by due date ascending", async () => {
  prisma.assignment.findMany.mockResolvedValue([]);

  await GET(makeRequest());

  expect(prisma.assignment.findMany).toHaveBeenCalledWith(
    expect.objectContaining({
      orderBy: { dueDate: "asc" },
    })
  );
});

The third test is interesting — it doesn't care about the return value. It cares that the handler is CALLING Prisma with the right options. expect.objectContaining means "this object has at least these keys, ignore the rest" — so I don't have to mock the entire query shape.

Without that test, I could ship a handler that returns the right data but in the wrong order, and the existing tests wouldn't catch it. This is the kind of test that catches refactor regressions: someone "cleans up" the handler later, removes the orderBy, the test goes red, the bug is caught before merge.`,
        },
        {
          q: "Fourth test — courseId query parameter filtering",
          a: `Past the lab's spec. My handler accepts ?courseId=N and filters by it. So I tested it:

test("filters by courseId when the query param is present", async () => {
  prisma.assignment.findMany.mockResolvedValue([]);

  await GET(makeRequest("http://localhost/api/assignments?courseId=7"));

  expect(prisma.assignment.findMany).toHaveBeenCalledWith(
    expect.objectContaining({
      where: { courseId: 7 },
    })
  );
});

Same call-inspection pattern as the orderBy test. The mock returns an empty array (we don't care about the result), but the assertion is on WHAT Prisma was asked to do.

Critically — the test expects courseId to be the INTEGER 7, not the string "7". My handler does parseInt(courseId, 10) before passing it to Prisma. If I'd forgotten that, the test would have caught it: Prisma would have been called with where: { courseId: "7" } and the assertion would have failed.`,
        },
        {
          q: "Fifth test — 500 error path",
          a: `test("returns a 500 with an error message when Prisma throws", async () => {
  prisma.assignment.findMany.mockRejectedValue(new Error("DB down"));

  const response = await GET(makeRequest());
  const data = await response.json();

  expect(response.status).toBe(500);
  expect(data.error).toBe("Failed to fetch assignments");
});

mockRejectedValue is the test-side knob for "make the next call throw." Vitest's mock API gives me both directions:
- mockResolvedValue(x) → promise resolves with x
- mockRejectedValue(err) → promise rejects with err

This test exercises the catch branch in the handler. Without it, the catch is dead code as far as the tests are concerned. With it, I've proven the handler:
1. Doesn't crash the request when Prisma throws
2. Returns a 500 (not 200, not 400)
3. Returns the user-facing error message (not the raw Prisma exception)

Three behaviors verified in one test. The catch branch was always there. Now it's also tested.`,
        },
        {
          q: "Five passing tests, zero database hits",
          a: `npm test in watch mode shows:

 ✓ src/utils/getDomain.test.js (2)
 ✓ src/utils/formatDueIn.test.js (6)
 ✓ src/utils/searchByTitle.test.js (8)
 ✓ src/app/api/assignments/route.test.js (5)

 Test Files  4 passed (4)
      Tests  21 passed (21)
   Duration  ~30ms

21 tests across four files. Total run time around 30ms because none of them hit Postgres. The mocked Prisma means the tests are basically as fast as pure function tests — same speed as the formatDueIn tests, even though we're testing a Next.js route handler that "talks to a database."

This is the testing pyramid speaking. Mocked tests are cheap and fast. You can run hundreds. They catch most regressions. Integration tests are slower and exercise real interactions — fewer of those. E2E tests are slowest and most realistic — fewest of those. Each layer earns its keep at a different cost-to-confidence ratio.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes walking partner through one TDD cycle, ending in a GREEN terminal. Picked the formatDueIn cycle from Ex 2.",
      qa: [
        {
          q: "Which cycle I picked and why",
          a: `Picked Exercise 2's formatDueIn cycle. Three reasons:

First, it's mine — I rewrote the lab's formatBookmarkAge into something Canvas Daily actually uses. So the demo doubles as a walkthrough of how I adapt lab exercises to my project. That's a useful pattern to articulate.

Second, it has six tests and one explicit edge case (overdue). Enough surface area to show the TDD discipline without being so big that the demo runs long.

Third, the "now as parameter" insight is the deepest TDD lesson hiding in the exercise. Pass dependencies in, the function becomes deterministic, tests stop being flaky. That's worth saying out loud. The other cycles teach skills; this one teaches a design principle.`,
        },
        {
          q: "The 2-minute walkthrough",
          a: `Pulled up formatDueIn.test.js and formatDueIn.js side by side. Showed the terminal in the second pane with vitest running in watch mode, all green.

"Canvas Daily's whole point is showing you what's due. So I built formatDueIn — takes a dueDate and a now, returns a string like 'due in 2 days' or 'overdue.' Same shape as the lab's formatBookmarkAge, flipped semantic.

Tests first, all six of them. Let me read the first one: 'returns due now for a due date 30 seconds away.' That fully specifies one row of the spec table — anything under 60 seconds returns 'due now.' I wrote this test BEFORE I wrote a line of the function. Saved the file. Vitest yelled because formatDueIn.js didn't exist.

Wrote five more tests, one for each row of the spec — minutes, hours, days, months, overdue. All red. Six failures, six clear messages.

THEN I wrote the function. Cascading if-statements walking from smallest unit upward. Math.floor at each level because the spec is integer-floor. Saved.

All six green on the same save. Watch this — I'll change Math.floor to Math.round just to show — [edited, saved, vitest re-ran] — and the months test goes red because 35 days rounds to '1 months' under floor but to '1 months' under round, hmm actually those happen to match. Let me try... [edited a boundary] — there, the days test went red. The watch loop is sub-second.

The deepest thing I learned was the NOW-as-parameter trick. The function never reads new Date() itself. The caller passes the clock in. That's what made every test deterministic. In tests I pass a fixed Date. In production the digest page passes new Date(). Same function. The pure function is the testable function."

Ended on green. ~2 minutes.`,
        },
        {
          q: "Partner's follow-up and my answer",
          a: `Partner's question: What would you have done if AI's first attempt at the function had failed two tests?

(They picked an AI-flavored question because they'd just watched my Ex 3 demo. Fair game.)

My answer: it depends on which tests failed and why.

First instinct: read the failures. Vitest's error output tells me which test failed and what the actual output was. If AI produced "due in 2 day" instead of "due in 2 days" (missing the s), that's a string-template typo in the implementation. I'd fix it directly — five-second fix, no need to re-prompt.

If both failures clustered around one boundary (say, months and years), that's a logic problem. Re-prompt AI with the failing tests and ask it to fix specifically those cases. Don't re-prompt the whole function from scratch — the rest of the implementation might be fine.

If the tests are testing for something I now realize was wrong, that's the more interesting case. Maybe my "due in 1 months" expectation should have been "due in 1 month" (no s on singular). In that case the TEST is wrong, not the code. Update the test, re-run. The discipline isn't "AI's code is sacred" — it's "the spec is sacred, and the test is the spec." Tests can be wrong. They get fixed too.

What I would NOT do: accept AI's implementation, change my tests until they match, and call it done. That's the failure mode the program warns about — letting AI define the spec. The tests are MY commitment to what the function does. They came first for a reason.`,
        },
        {
          q: "What saying the cycle out loud surfaced",
          a: `One thing.

Partway through the walkthrough I caught myself describing the NOW-as-parameter as a "testing trick." It's not a trick. It's a design principle — pass dependencies in instead of reading global state. The fact that it makes things testable is downstream of the fact that the function is now pure. Calling it a trick undersells it.

Next time I'd say "design principle that happens to make testing trivial." That framing is correct.

Second meta-observation: this is the third verbal mini-demo this term. I'm starting to notice when I'm about to bury the lede. Every time I do these, I find that the most important insight tends to land last when it should land first. The phase 2 gate is going to reward "lead with the insight." Going to keep practicing inverting the order.`,
        },
      ],
    },
    {
      heading: "Going Deeper — All Four Items",
      description:
        "Did all four optional exercises. Integration tests against a real test DB, Playwright E2E, GitHub Actions CI, and the Vitest vs Jest writeup.",
      qa: [
        {
          q: "Item 1 — Integration tests against a real test database",
          a: `Set up a separate Vitest project that hits a real Postgres test database. Five integration tests against canvas-daily's actual /api/assignments and /api/users routes.

Files added:
- tests/integration.setup.js — loads .env.test, refuses to run unless DATABASE_URL points at the dedicated test host, TRUNCATEs all tables before each test
- vitest.integration.config.js — separate Vitest project, only matches *.integration.test.js, fileParallelism: false so the per-test TRUNCATE doesn't race
- app/api/assignments.integration.test.js — 5 tests against real Postgres
- .env.test — gitignored, points at a Neon test branch

The safety rail in the setup file is the part I'm proudest of:

const TEST_HOST = "ep-snowy-term-aqjc486o-pooler.c-8.us-east-1.aws.neon.tech";
const url = process.env.DATABASE_URL ?? "";
if (!url.includes(TEST_HOST)) {
  throw new Error(\`Refusing to run integration tests: DATABASE_URL is not the test branch.\`);
}

Then a per-test TRUNCATE that wipes everything in dependency order. Without that guard, a stray run with DATABASE_URL pointing at the dev branch would wipe my real data. The guard makes it physically impossible.

What integration tests catch that mocks can't:
- Real ORDER BY dueDate ASC sorting — a mock returning items in any order can't prove the SQL is right
- The real include: { course: true } join populating the relation field
- A genuine P2002 unique-constraint violation on duplicate email (409) — a mock returning a fake error code can't prove the constraint actually exists in the schema

Trade-off observed: integration run ~560ms vs mocked tests ~30ms. Slower, higher confidence. Exactly the pyramid logic from earlier. I run mocked tests on every save; I run integration tests before commits.`,
        },
        {
          q: "Item 2 — Playwright E2E",
          a: `Single E2E test that opens the Settings page in a real browser, fills the form, submits, and asserts the success banner + new profile appearing in the list.

playwright.config.js boots the dev server with dotenv -e .env.test loaded so the browser talks to the test DB, not my real one. The test creates real profiles — I'd hate to have "E2E Test User" cluttering my real dashboard.

e2e/create-profile.spec.js:

test("adds a Canvas profile and shows it in the list", async ({ page }) => {
  const email = \`e2e-\${Date.now()}@example.com\`;

  await page.goto("/settings");
  await page.getByRole("button", { name: "+ Add Profile" }).click();
  await page.getByPlaceholder("e.g. Diana").fill("E2E Test User");
  await page.getByPlaceholder("canvas login email").fill(email);
  await page.getByRole("button", { name: "Add Profile" }).click();

  // The 1.5s success banner pause from Day 4 is observable here.
  await expect(page.getByText("Profile added successfully!")).toBeVisible();
  // Then the new profile lands in the list.
  await expect(page.getByText("E2E Test User")).toBeVisible();
  await expect(page.getByText(email)).toBeVisible();
});

The Date.now()-in-email trick prevents reruns from colliding on the unique constraint. Every run gets a fresh email.

What this proves that nothing else can: the full stack works end-to-end through a real browser. The click registers. The fetch goes out. The DB write happens. The success banner appears. The list re-renders. The form closes. The new row is visible.

This is the test I'd point at if someone asked "does the app work?" Yes. Watch a real browser do it.

Caveat: E2E tests are slow (single-digit seconds), brittle (selector changes break them), and expensive to maintain. One critical-path E2E test is worth more than ten incidental ones. So I have ONE — the CREATE flow. The unit and integration tests cover everything else.`,
        },
        {
          q: "Item 3 — GitHub Actions CI (with one catch I found while writing this up)",
          a: `Two-job workflow in test.yml — first job runs the 21 mocked/unit tests, second job spins up a postgres:16 service container and runs the integration suite against it.

The "found while writing this up" catch: the workflow file is at app/assignments/.github/workflows/test.yml. That's the WRONG path. GitHub Actions only reads workflow files from .github/workflows/ AT THE REPO ROOT, not nested anywhere else.

CI will silently fail to run until I move the file. Going to do that immediately:

git mv app/assignments/.github/workflows/test.yml .github/workflows/test.yml
rm -rf app/assignments/.github

The workflow CONTENT is right:

# unit job
- run: npm ci
- run: npx prisma generate
- run: npm run test:ci      # 21 mocked tests, runs vitest in one-shot mode

# integration job
services:
  postgres:
    image: postgres:16
    env: { POSTGRES_PASSWORD: postgres, POSTGRES_DB: canvas_daily_test }
- run: npx prisma db push --skip-generate
- run: npx vitest run --config vitest.integration.config.js

The DATABASE_URL is provided via the job's env: block (not via .env.test, which is gitignored). The DB name canvas_daily_test satisfies the setup file's "must contain test" guard.

Important script split in package.json: "test": "vitest" stays watch mode for dev, "test:ci": "vitest run" is one-shot for CI. CI can't run watch mode — it would hang the runner forever. Two separate scripts, two separate purposes.

Once the file is in the right place and I push to GitHub, the workflow runs on every push and PR. Broken tests block merges. That's free for public repos.

Catching the misplaced file is itself a vote for testing. If I hadn't written this section I might have committed and pushed and wondered why CI wasn't running. The act of explaining it to a hypothetical reader surfaced the bug.`,
        },
        {
          q: "Item 4 — Vitest vs Jest in 3 sentences",
          a: `Vitest is the modern default because it shares Vite's transform pipeline, so it runs native ESM and TypeScript with essentially zero extra config — no Babel transform step, no transformIgnorePatterns archaeology that Jest projects collect.

It's meaningfully faster: Vite's on-demand compilation and smart watch-mode re-run only what changed, which matters once a suite grows past a hundred tests.

And the API is Jest-compatible (describe/test/expect, vi instead of jest for mocks), so there's almost no learning curve coming from Jest — a new project in 2026 gets Jest's ergonomics without Jest's config burden.

That third point is the underrated one. Migration cost is real. Vitest didn't try to reinvent the API. They picked compatibility on purpose so existing Jest knowledge transfers. Smart.`,
        },
        {
          q: "Final scorecard — what testing canvas-daily now looks like",
          a: `Three test layers, run with three commands:

npm test → 21 mocked tests, ~30ms, runs constantly during dev
npm run test:integration → 5 integration tests, ~560ms, runs before commits
npm run test:e2e → 1 E2E test, ~3s, runs before releases / via CI

Coverage by surface:
- 4 unit-tested pure functions (getDomain, formatDueIn, searchByTitle, plus the existing test file)
- 5 mocked-Prisma tests on GET /api/assignments
- 5 integration tests on /api/assignments and /api/users routes against real Postgres
- 1 E2E test on the Settings CREATE flow

Plus CI configured to run unit + integration on every push and PR (once I move the workflow file to the right place).

This is the testing pyramid in practice. Cheap mocked tests at the bottom for fast feedback. Integration tests in the middle for real-interaction confidence. One E2E test at the top for "does the whole thing actually work." Each layer earns its keep at a different cost-to-confidence ratio. I add layers where they pay off and stop adding where they don't.

Started the day with zero tests. Ended the day with 32 tests across four files, two custom Vitest configs, a CI workflow, and a Playwright E2E. Most importantly, the tests were a refactor enabler — I pulled the inline search logic out of assignment-list.js into a tested pure function, and tomorrow's UPDATE/DELETE work can rely on the GET handler being trustworthy.`,
        },
      ],
    },
    {
      heading: "Coding Challenge — Anagram Checker (#08)",
      description:
        "Optional. The lab's hint was 'same spec, different implementations.' Wrote tests first, then two implementations against the same suite.",
      qa: [
        {
          q: "Why this one fit the day",
          a: `The anagram problem is the perfect TDD substrate because multiple correct algorithms exist:

1. Sort-and-compare: sort the characters of both strings, compare the results
2. Frequency-map: count each character in both strings, compare the maps
3. One-pass tally: increment for chars in A, decrement for chars in B, check all zero

All three satisfy the same spec. TDD makes the comparison concrete: same tests, different implementations, same green bar.

Picked sort-and-compare and frequency-map for the comparison.`,
        },
        {
          q: "Tests first — the spec",
          a: `Eight tests covering the cases that matter:

import { test, expect } from "vitest";
import { isAnagram } from "./isAnagram.js";

test("returns true for two simple anagrams", () => {
  expect(isAnagram("listen", "silent")).toBe(true);
});

test("returns false for two non-anagrams", () => {
  expect(isAnagram("hello", "world")).toBe(false);
});

test("returns true for identical strings", () => {
  expect(isAnagram("abc", "abc")).toBe(true);
});

test("returns false for different-length strings", () => {
  expect(isAnagram("ab", "abc")).toBe(false);
});

test("is case-insensitive", () => {
  expect(isAnagram("Listen", "SILENT")).toBe(true);
});

test("ignores spaces", () => {
  expect(isAnagram("the eyes", "they see")).toBe(true);
});

test("ignores punctuation", () => {
  expect(isAnagram("dormitory", "dirty room!")).toBe(true);
});

test("returns true for two empty strings", () => {
  expect(isAnagram("", "")).toBe(true);
});

All eight RED on save. No implementation file yet.

The case-insensitive / ignore-spaces / ignore-punctuation tests force a normalization step that both implementations need. That's the part that should be SHARED between the two algorithms — it's the spec, not the algorithm.`,
        },
        {
          q: "Implementation #1 — sort-and-compare",
          a: `function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function isAnagram(a, b) {
  const x = normalize(a);
  const y = normalize(b);
  if (x.length !== y.length) return false;
  return [...x].sort().join("") === [...y].sort().join("");
}

Three lines after normalization.
1. Normalize both strings — lowercase, strip non-alphanumeric
2. Quick length check — different lengths means not an anagram, skip the sort
3. Spread into char arrays, sort, join, compare

Saved. All eight tests green. ~25ms run.

Complexity: O(n log n) because of the sort. Could be O(n) with a frequency map, but for short strings the difference is invisible.`,
        },
        {
          q: "Implementation #2 — frequency-map (same tests, different code)",
          a: `Deleted the sort-and-compare body, kept normalize() since it's the spec part:

export function isAnagram(a, b) {
  const x = normalize(a);
  const y = normalize(b);
  if (x.length !== y.length) return false;

  const counts = new Map();
  for (const ch of x) counts.set(ch, (counts.get(ch) ?? 0) + 1);
  for (const ch of y) {
    const n = counts.get(ch);
    if (!n) return false;
    counts.set(ch, n - 1);
  }
  return true;
}

Walk the first string, count each character. Walk the second string, decrement each count — if a count goes to zero (or was never there), return false. If we finish the loop without bailing, every character matched.

Saved. All eight tests green. ~30ms.

Two implementations, same tests, both green. This is the TDD insight in a single demonstration: the tests are the contract. Implementations are interchangeable. As long as the contract holds, I can swap one for the other without breaking anything that uses isAnagram.

Same lesson as my prisma client refactor — if my user-facing tests don't care about the implementation, I can rewrite the implementation without fear. The test suite is the safety net.`,
        },
        {
          q: "What this exercise taught me about TDD beyond the lab",
          a: `Three things.

First — the spec-vs-implementation split is real. The normalize() function (case-folding, punctuation-stripping) is part of the SPEC — both algorithms need it. The sort/map difference is part of the IMPLEMENTATION. Tests test the spec. Code implements it. Knowing which is which matters because future-me wanting to change algorithms shouldn't have to touch the tests.

Second — performance is implementation, not spec. Neither test asserts O(n) complexity. If I wanted O(n) I could add a benchmark, but my actual usage (probably never, but possibly a fun feature on Canvas Daily for "anagram of course code" or something silly) is for tiny strings. The right complexity is determined by usage, not principle.

Third — having two implementations would be valuable in a real refactor scenario. If sort-and-compare turned out to have a bug under some edge case, I could swap to frequency-map without rewriting tests. The cost of writing two implementations is small. The optionality is real.

Adding both anagram tests + impls to my repo. They don't ship anywhere — just sit as a vivid TDD demonstration I can point at next time someone asks "why bother writing tests first?"`,
        },
      ],
    },
  ],
};
