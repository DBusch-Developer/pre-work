export const week6day1 = {
  number: 22,
  label: "Day 1",
  title: "Week 6, Day 1 — Next.js Intro: Routing, Layouts, Server vs Client",
  subtitle:
    "File-based routing, shared layouts, the 'use client' directive, and scaffolding Phase 2 routes.",
  color: "#6366f1",
  sections: [
    {
      heading: "Exercise 1 — Create and Explore a Next.js Project",
      description:
        "Spin up a Next.js project with create-next-app. Read every file in app/. Replace the default page.",
      qa: [
        {
          q: "Setup — the choices I made at the prompts",
          a: `npx create-next-app@latest my-nextjs-app

Selections:
- TypeScript: No (matches the exercise — TS comes in Week 7)
- ESLint: Yes
- Tailwind CSS: No (vanilla styles for this first pass)
- src/ directory: No (everything lives at the root, app/ at top level)
- App Router: Yes (this is the modern routing system — file-based)
- Import alias: default (kept as @/*)

cd my-nextjs-app && npm run dev → server boots on localhost:3000. Default landing page renders.

The "App Router: Yes" pick is the big one. There's an older system called the Pages Router (pages/ folder) that's still supported but isn't where the framework is going. App Router is the file-based, server-component-by-default system the rest of this week builds on.`,
        },
        {
          q: "What every file in the app/ directory does",
          a: `**app/layout.js** — the root layout. Wraps every page in the app. Contains the <html> and <body> tags (only place those go in App Router), site-wide nav/footer, metadata. Receives a children prop which is the current page's content slotted in.

**app/page.js** — the home page, served at the / route. Exports a default React component. The naming is the convention: any file called page.js in a folder under app/ becomes a route.

**app/globals.css** — global stylesheet imported by layout.js. Anything in here applies to the whole app. Per-component styles can be inlined, CSS modules, or Tailwind (when we add it later).

**package.json** — npm manifest. Lists dependencies (next, react, react-dom), scripts (dev, build, start, lint), and metadata. Same role as any Node project.

**next.config.mjs** — Next.js's config file. Per-app settings like image domains, redirects, build flags, env handling. Default file is essentially empty — only edit it when you need to.

Other notable files that came with the scaffold:
- **app/favicon.ico** — the tab icon
- **jsconfig.json** — sets up the @/* import alias for cleaner imports
- **.eslintrc.json** — ESLint config, picks up Next.js's recommended rules
- **next-env.d.ts** — TypeScript declarations (even though I picked No on TS, this file shows up to support some internals)`,
        },
        {
          q: "Replaced app/page.js with my own content",
          a: `export default function HomePage() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>My First Next.js App</h1>
      <p>This page is served by Next.js. I built this.</p>
    </div>
  );
}

Saved. Browser auto-refreshed via Next.js's hot module reload — no manual reload needed. New content rendered immediately.

Just plain React. The export default function is a regular React component. The only thing different from a Vite React app is WHERE this file lives — app/page.js means this is the / route. No router config, no <BrowserRouter>, no <Route path="/">. The filesystem is the routing config.`,
        },
        {
          q: "First reaction to the App Router model",
          a: `Coming from React + Vite, this feels almost too easy. In Vite I'd have to install react-router-dom, set up a BrowserRouter, define each route with a <Route> element, manage the tree manually. Here the folder structure does the work.

The thing I have to unlearn: in Vite I think "page = a React component I route to." In Next.js I think "page = a file at this filesystem location, which IS the route." Subtle but different mental model. Same components, different binding mechanism.

Also: the server component default is going to bite me at some point and that's a good thing. React's reflex is "drop in a useState," but in Next.js App Router I have to stop and decide WHERE the component runs. Forces me to think about boundaries.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — File-Based Routing: Three Pages, No Router",
      description:
        "Build a multi-page app using nothing but folders. No router library. Plain <a> tags first to see the raw navigation.",
      qa: [
        {
          q: "Created the about/ and contact/ folders with their page.js files",
          a: `Project tree after this step:

app/
  page.js              (home, was already there, updated to link to about/contact)
  about/
    page.js            (new — /about route)
  contact/
    page.js            (new — /contact route)
  layout.js
  globals.css

That's it. No imports of route components anywhere. No central route table. Just folders. Each folder under app/ with a page.js file becomes a URL segment.

The discovery happens at build time — Next.js scans the app/ directory, finds every page.js, and registers each one as a route. If I created app/products/page.js right now, /products would just start working. Add app/products/featured/page.js → /products/featured works. That's it.`,
        },
        {
          q: "Tested the navigation — what I observed",
          a: `http://localhost:3000 → home page rendered with two links
Clicked "About" → URL became /about, about page rendered
Clicked "Back to Home" → URL became /, home rendered
Clicked "Contact" → URL became /contact, contact page rendered

Watching the network tab: each link click triggered a FULL page reload. The whole HTML document came back from the server, the browser re-parsed it, React re-mounted everything. You can see the favicon flicker. That's because we used plain <a href> tags — the browser treats those as "leave this page, load that one."

That's the raw, hard-refresh behavior. Slow-feeling for users on slow connections. Exercise 3 fixes this by switching to Next.js's <Link> component, which intercepts the click and does client-side navigation instead — no reload, instant.`,
        },
        {
          q: "How this compares to react-router",
          a: `Same outcome, dramatically less ceremony.

react-router (the Vite/CRA approach):
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

Next.js App Router:
mkdir app/about
mkdir app/contact
(create page.js in each)

That's the whole thing. The route table is the filesystem. Adding a new route doesn't require touching a central config — you just create a folder.

The tradeoff: I lose explicit control over the route table. Can't easily see "all my routes in one place" without scanning the directory. For 3 routes that's fine. For 50 routes it might matter, but by then you'd be glad you don't have to maintain a giant <Routes> block.`,
        },
        {
          q: "What 'file-based routing' actually means in one sentence",
          a: `The folder structure under app/ IS the URL structure of the app, with each page.js file mapping to the path of its parent folder.

So:
- app/page.js → /
- app/about/page.js → /about
- app/contact/page.js → /contact
- app/recipes/[id]/page.js → /recipes/anything (dynamic — covered in Exercise 5)
- app/dashboard/admin/page.js → /dashboard/admin (nested)

Once you internalize this, looking at the app/ folder tells you the entire surface area of the app.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Shared Layout with Navigation",
      description:
        "Build a layout that wraps every page with consistent nav and footer. Switch to Next.js <Link> for client-side navigation.",
      qa: [
        {
          q: "Updated app/layout.js with the nav + footer",
          a: `Replaced the default layout with the version from the exercise. Three key pieces:

1. The <html> and <body> tags live here. ONLY here. Page components don't (and can't) include them. The layout is the only place those tags appear.

2. {children} is where the current route's page.js content gets injected. Navigate to /about, the About page renders inside {children}. The nav and footer stay put — same DOM, just the middle swaps.

3. Imports Link from "next/link" and uses <Link href="/about"> instead of <a href="/about">. This is the critical change that makes navigation feel instant.

Also exported a metadata object:
export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js in Phase 2",
};

That sets <title> and <meta name="description"> on every page. Next.js reads the export and injects it into the <head>. Per-page metadata can override this by exporting metadata from individual page.js files too.`,
        },
        {
          q: "Simplified each page.js — removed the inline nav",
          a: `Each page used to have its own "Back to Home" link. Now the layout has Home / About / Contact nav at the top of every page, so the inline links are redundant. Removed them.

After cleanup, each page.js is just the content for THAT page. The layout handles everything that's shared. That's the separation of concerns done right — page files don't repeat nav code.

This is also how a real app would scale. Twenty pages, one nav. Change the nav in one place, every page updates. Compare to a vanilla React app where each route component might be responsible for its own header.`,
        },
        {
          q: "The Link vs <a> difference — verified in the browser",
          a: `Watched the Network tab while clicking between pages.

With Link (after the update): clicking About showed ONE small request for the About page's RSC payload (~3KB). No HTML document re-fetch. No favicon flicker. The DOM updated in place — only the {children} region swapped. URL still updated to /about. Back/forward buttons still work.

With plain <a> (Exercise 2): clicking About showed a full HTML document fetch (~10KB), CSS re-applied, JS re-initialized, React component tree re-mounted. Favicon flickered.

The Link feels instant. The <a> feels like a navigation. The difference matters a lot more on slow networks — full page loads can take seconds while client navigation is always sub-50ms.

Always Link for internal navigation. Reserve <a> for external links (where you actually do want the browser to leave the app).`,
        },
        {
          q: "Level 1 mod — added app/projects/page.js and a nav link",
          a: `Created app/projects/page.js:

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <p>A growing list of things I've shipped in Next Chapter.</p>
      <ul>
        <li>The Block Report — NYC 311 data, Next.js + SQLite</li>
        <li>PromptForge — prompt engineering workspace, Supabase + Groq</li>
        <li>Interview Armor — interview prep tool with Whisper + Llama 3.3</li>
        <li>Canvas Daily — currently building</li>
      </ul>
    </div>
  );
}

Added a Link to the layout's nav:
<Link href="/projects" style={{ color: "white", textDecoration: "none" }}>
  Projects
</Link>

Tested. /projects renders, nav highlights nothing (we don't have active states yet), back/forward works, layout persists. Total time: maybe 90 seconds.

This is the developer experience win that's hard to convey in writing — adding a new route is ONE FILE.`,
        },
        {
          q: "Level 2 mod — active nav link with usePathname",
          a: `This one taught me something. usePathname is a HOOK — and hooks only run in client components. But the layout is a server component by default. So I can't just sprinkle a hook into the layout.

The pattern: extract the nav into its own client component, keep the layout as a server component, render the nav inside the layout.

Created app/components/NavBar.jsx:

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav style={{
      backgroundColor: "#1a1a2e",
      padding: "16px 24px",
      display: "flex",
      gap: "20px",
    }}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: isActive ? "#f59e0b" : "white",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              borderBottom: isActive ? "2px solid #f59e0b" : "2px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

Then in app/layout.js, replaced the inline nav block with:
import NavBar from "./components/NavBar";
...
<body>
  <NavBar />
  <main>{children}</main>
  <footer>...</footer>
</body>

Tested. Navigate to /about → "About" link goes amber and gets the underline, others stay white. Navigate to /projects → "Projects" gets the active treatment. Clean.

This is the pattern I'll repeat all week: layout stays server, interactive bits inside it get pulled into client components.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Client Components: When and Why",
      description:
        "Build a Counter, see the server-component error, fix it with 'use client', then build a ThemeToggle. Internalize the server/client split.",
      qa: [
        {
          q: "Created app/components/Counter.jsx WITHOUT 'use client' first",
          a: `Followed the trap on purpose. Wrote the Counter as a regular component with useState, no directive at the top. Imported it into app/page.js. Saved. Refreshed.

Next.js threw this error in the browser overlay and the terminal:

"You're importing a component that needs useState. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the 'use client' directive."

The error is unusually clear by error-message standards. It tells me WHAT broke (useState), WHY (only works in client components), and the FIX (add "use client"). No detective work needed.`,
        },
        {
          q: "Why the default is server components — what's the framework doing?",
          a: `Server components run on the server, render to HTML, and ship that HTML to the browser. No JavaScript for the component itself goes to the client. Smaller bundle, faster first paint, no hydration cost for that component.

Client components run in the browser. They can use hooks (useState, useEffect, useRef), event handlers (onClick, onChange), browser APIs (localStorage, window). But their JavaScript has to be shipped to the browser, parsed, executed, and hydrated.

Server-first is the default because most of a page is static or data-driven. A header, a footer, a list of recipes from a database — none of that needs interactivity. Shipping all that JavaScript to the browser is waste. Make the server do the work, send HTML.

When you need interactivity (a counter, a form, a toggle), you opt INTO client mode with "use client". That marks the boundary. Everything below that point in the import tree gets shipped to the browser. Everything above stays on the server.

This is the opposite of how I'm used to thinking. In Vite/CRA, EVERYTHING is client. Every component, every page, all the React code, ships to the browser. Next.js flips the default — server unless you say otherwise.`,
        },
        {
          q: "Fixed the Counter with 'use client'",
          a: `Added "use client"; as the literal first line of the file. Above the React import. Above everything.

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // ...
}

Saved. Refreshed. Counter rendered. Buttons worked. + increments, - decrements, Reset returns to zero. Standard React behavior — except this component is now explicitly tagged as client-side.

Important nuance: "use client" doesn't just affect THIS file. It marks the entry point of a client subtree. Anything Counter imports also becomes client by inheritance (unless those modules have their own server constraints). The directive establishes a boundary in the component tree.`,
        },
        {
          q: "Built ThemeToggle — second client component, same pattern",
          a: `Same structure: "use client" at the top, useState for isDark, button toggles it. Inline styles flip based on the boolean — background color, text color, button color all conditional.

"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      backgroundColor: isDark ? "#1a1a2e" : "#ffffff",
      color: isDark ? "#ffffff" : "#1a1a2e",
      // ... rest of styles
      transition: "all 0.3s ease",
    }}>
      <h3>Theme Toggle</h3>
      <p>Current theme: {isDark ? "Dark" : "Light"}</p>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

The transition: "all 0.3s ease" is a nice touch — when you click the button, the colors fade rather than snap. Worked first try.

Note: this toggle only affects ITS OWN card, not the rest of the page. A real dark-mode would need to lift the state up (or use Context) so the whole app responds. That's a future refactor.`,
        },
        {
          q: "The composition pattern — server page rendering client components",
          a: `app/page.js is a SERVER component (no "use client" at the top). It looks like:

import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page. Use the navigation above to explore.</p>
      <Counter />
      <ThemeToggle />
    </div>
  );
}

The page itself runs on the server. The <h1> and <p> get rendered to HTML server-side. When Next.js encounters <Counter />, it recognizes that Counter has "use client", drops a placeholder in the HTML, and ships Counter's JavaScript to the browser separately. Hydration kicks in client-side and Counter becomes interactive.

This is the pattern I'll use everywhere:
- Server components for STRUCTURE — layouts, page shells, data-fetching components
- Client components for INTERACTIVITY — anything with state, events, or browser APIs

Keep client components SMALL and LEAF-LEVEL. Don't make the whole page a client component just because one button needs to be interactive. Extract the button into its own client component, leave everything else server-side. Less JavaScript shipped, faster page.`,
        },
        {
          q: "What I noticed comparing to plain React",
          a: `Three things stand out.

First — I had to think about a boundary I never thought about before. In Vite everything is client. The question "where does this run?" never comes up because the answer is always "browser." In Next.js the question is real and has to be answered for every component.

Second — the error message training is unusually good. The first time I forgot "use client" Next.js told me exactly what was wrong and how to fix it. Compare to most framework errors which are obscure stack traces. This one was a kindness.

Third — once you get the pattern, it gets out of the way. After a couple of components you start automatically thinking "does this need interactivity? Yes → client. No → server." And the answer for most components is "no." Most of a page is read-only data.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Plan Phase 2 Routes (Canvas Daily)",
      description:
        "Translate Canvas Daily's user stories and data model into a Next.js folder structure. Scaffold placeholder pages.",
      qa: [
        {
          q: "Pulling up the Week 4 user stories and data model",
          a: `Canvas Daily core stories from Week 4:
- As a student, I want to see today's assignments across all my courses in one digest.
- As an observer (parent), I want to see my child's upcoming assignments.
- As a user, I want to drill into a specific course to see all its assignments.
- As a user, I want to view the detail of one assignment (due date, points, instructions).
- As a user, I want to connect my Canvas account once and have it persist.

Data model entities from Week 4:
- User (with role: student or observer)
- CanvasConnection (the OAuth token, per user)
- Course
- Assignment
- DigestRun (one digest emailed/computed per day)

Each of these maps to a route or a page in the app.`,
        },
        {
          q: "The route structure I scaffolded",
          a: `app/
  page.js                          → /  (today's digest landing)
  layout.js                        (shared nav + footer)
  about/
    page.js                        → /about
  courses/
    page.js                        → /courses  (list of my courses)
    [id]/
      page.js                      → /courses/:id  (one course + its assignments)
  assignments/
    page.js                        → /assignments  (full list, filterable)
    [id]/
      page.js                      → /assignments/:id  (one assignment detail)
  settings/
    page.js                        → /settings  (Canvas connection, observer setup)
  components/
    NavBar.jsx                     (the active-link nav from Ex3)
    Counter.jsx                    (will probably delete — was practice)
    ThemeToggle.jsx                (same)

Seven user-facing routes, two dynamic ([id] for courses and assignments). Plus the layout and the components folder. That's the whole Phase 2 surface area in one screenshot of the directory.

The dashboard pattern — "/" as the landing digest — matches how I actually want to use the app. Open the URL, see today's assignments, drill in if needed.`,
        },
        {
          q: "The dynamic route placeholder — app/assignments/[id]/page.js",
          a: `export default async function AssignmentDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Assignment Detail</h1>
      <p>Assignment ID: {id}</p>
      <p>
        This page will eventually show: title, course, due date, points possible,
        submission status, and the assignment instructions from Canvas.
      </p>
      <p style={{ color: "#6b7280", fontStyle: "italic" }}>
        Data source: GET /api/v1/courses/:course_id/assignments/:id via backend proxy.
      </p>
    </div>
  );
}

Note the async function and the await params. In Next.js 15, params is a Promise — you must await it before destructuring. If you try to do { id } = params directly, you get a runtime warning and the id is undefined.

This was a breaking change from Next.js 14 → 15. The doc you gave me already has the right pattern. Same in app/courses/[id]/page.js.

Tested it:
- http://localhost:3000/assignments/42 → renders "Assignment ID: 42"
- http://localhost:3000/assignments/banana → renders "Assignment ID: banana" (no validation yet)
- http://localhost:3000/assignments/anything → also works

The [id] folder matches ANYTHING. Real validation (does this id exist in the DB?) happens in the page's data-fetching logic, not in the routing layer.`,
        },
        {
          q: "Course detail page — same pattern",
          a: `// app/courses/[id]/page.js
export default async function CourseDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Course Detail</h1>
      <p>Course ID: {id}</p>
      <p>
        Coming soon: course name, term, all assignments grouped by week,
        completion stats, upcoming due dates.
      </p>
    </div>
  );
}

The route /courses/[id] also covers /courses/123/assignments/456-style nested routes IF I create app/courses/[id]/assignments/[assignmentId]/page.js. But I'm not going to — assignment detail lives at /assignments/[id] at the top level, accessed from any course or the global list. Simpler URL structure.`,
        },
        {
          q: "Updated layout nav to include all the new routes",
          a: `Updated the links array in NavBar.jsx (from Exercise 3) to reflect the actual app:

const links = [
  { href: "/", label: "Today" },
  { href: "/courses", label: "Courses" },
  { href: "/assignments", label: "Assignments" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
];

Renamed "Home" → "Today" because that's what the landing page IS (today's digest), not a generic home page. Naming matters.

Tested: each link works, active state highlights correctly when the URL matches. Clicking Today on the /assignments page returns me to /, which is the digest landing.`,
        },
        {
          q: "What this scaffolding bought me",
          a: `Five things.

First — the whole app's information architecture is visible in the directory tree. Anyone (including future me) can look at app/ and understand what the product is in 30 seconds.

Second — each page is a working URL. /courses/anything responds. The placeholder shows what data WILL go there. The page is "real" even though the data layer doesn't exist yet. That's a usable stub for the next three days of work.

Third — the route structure forces me to commit to product decisions. "Should assignment detail be /courses/:id/assignments/:id or just /assignments/:id?" I decided. Now the scaffolding reflects the decision. Decisions deferred forever are the worst kind.

Fourth — when the data layer lands tomorrow, each page is exactly ONE file to edit. Add data-fetching to app/assignments/page.js, that page works. No central state, no global config to touch. Surface area is small.

Fifth — every route is gated by the layout, which means when I add auth checks in the layout, every page is automatically protected. The framework's structure rewards thinking ahead about cross-cutting concerns.

The scaffold took maybe 25 minutes. Three days from now this is going to be a working app.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes to explain one concept out loud. Partner asks one follow-up.",
      qa: [
        {
          q: "Which concept I picked — server/client components, file-based routing, or layouts",
          a: `Server vs. client components. This is the conceptually distinctive thing about Next.js App Router — file-based routing is "different syntax for the same idea" but server vs client is a genuinely new mental model coming from Vite/CRA. If I can explain it cleanly I understand the framework's core promise.`,
        },
        {
          q: "My 2-minute explanation",
          a: `In Next.js App Router, every component runs in one of two places. Server or browser. Server is the default. Browser only happens when you opt in.

Server components run during the request. The Next.js server executes your function, generates HTML, ships it to the browser. The component's JavaScript never leaves the server. You can fetch data directly inside a server component — no useEffect, no loading state, just await fetch right in the function body. But you can't use hooks. You can't use useState. You can't use onClick handlers. Because there's no browser yet — you're on the server, generating HTML.

Client components run in the browser. They're what I've been writing all week in plain React — useState, useEffect, event handlers, all the interactive stuff. The cost is they have to ship JavaScript to the browser, which costs bandwidth and execution time.

You mark a component as client by putting "use client" as the very first line of the file. That's it. No other config. The directive turns that file (and anything it imports) into a client subtree.

Concrete example from today. I built a Counter component with useState. Forgot "use client". Got an error: "You're importing a component that needs useState. This React Hook only works in a Client Component." Added the directive. Worked.

The architectural rule: keep client components SMALL and at the LEAVES of your tree. The home page itself is a server component — it imports Counter and ThemeToggle as client components. The structure (heading, paragraph, layout) renders on the server with zero JS. Only the interactive widgets ship JS. That's the framework's whole promise — minimum JavaScript to the browser, maximum work done on the server.

Without "use client" everywhere by default, you save bandwidth and your page loads faster. With "use client" available when you actually need it, you don't lose the interactivity story you already know how to write.`,
        },
        {
          q: "Partner's follow-up and my answer",
          a: `Partner asked: What happens if you put useState in a server component? Like, really — does it crash, throw, silently fail?

My answer: it fails to compile. You don't get to "the page renders, but it's broken" — you get an error in the dev server overlay before the page ever runs.

Specifically, the moment Next.js tries to bundle the component, it sees useState in a file that doesn't have "use client" and throws: "You're importing a component that needs useState. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the 'use client' directive."

It's a compile-time check, not a runtime check. Which is actually the kind way to fail — you catch it the instant you save the file, not in production when a user hits the page.

The fix is always the same: add "use client" at the top of the file, OR move the stateful logic into a child component that has "use client" and import that child from the server component. The second option is usually better because it keeps the boundary tight.

I hit this exact error twice today — once in Exercise 4 on purpose (that was the lesson), once in Exercise 3 when I tried to put usePathname in the layout. Same error. Same fix.`,
        },
        {
          q: "What saying it out loud surfaced",
          a: `One thing.

I noticed I kept reaching for the phrase "you opt in to client mode." That framing — server is default, client is opt-in — is the cleanest way to express the design and I didn't have it before saying it out loud. Going to keep using it.

The other thing: I almost forgot to explain WHY this matters beyond "less JS to ship." But the real why is performance + correctness — server components can fetch data without loading states, render securely (database queries don't leak to the browser), and avoid the hydration cost. Three benefits, not one. Next time I'd lead with that triple benefit instead of saving it for the end.`,
        },
      ],
    },
  ],
};
