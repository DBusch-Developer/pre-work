export const week5day4 = {
  number: 21,
  label: "Day 4",
  title: "Week 5, Day 4 — Fetching Real Data from APIs",
  subtitle:
    "useEffect, async/await, the loading/data/error pattern, environment variables, and the first real API call for Phase 2.",
  color: "#10b981",
  sections: [
    {
      heading: "Exercise 1 — Fetch and Display Posts",
      description:
        "Fetch 10 posts from JSONPlaceholder on mount. Show loading, then render. First real useEffect + fetch combo.",
      qa: [
        {
          q: "Tracing the 4-step lifecycle before running anything",
          a: `Step 1: Component renders for the first time. State is { posts: [], loading: true, error: null }. The if (loading) return <p>Loading posts...</p> branch fires. User sees "Loading posts..."

Step 2: useEffect runs AFTER the first render (this is important — the effect doesn't block the render). fetchPosts() kicks off. A request goes out to JSONPlaceholder. Component is still showing the loading message because none of the state has changed yet.

Step 3: Response comes back ~200ms later. setPosts(data) stores the 10 posts. setLoading(false) hides the loading message. The finally block runs regardless of success or failure.

Step 4: Two state changes from step 3 trigger a re-render. Now loading is false, posts has data. The loading branch is skipped, the error branch is skipped, the main return runs. .map() walks the array and renders 10 post cards.

That's the whole pattern. State drives the view. Effects run after render. Async work updates state, which triggers another render.`,
        },
        {
          q: "Why the empty dependency array on useEffect — what does [] mean?",
          a: `The dep array tells React WHEN to run the effect. Empty array = "run this effect once, after the first render, and never again."

If I left the array off entirely → effect would run after every render → infinite loop the moment setPosts triggers a re-render, because the re-render would fire the effect again, which would fetch again, which would setPosts again. Classic React newbie footgun.

If I put a variable in the array → effect runs whenever that variable changes. So [username] would re-fetch every time username changes — that's the pattern for Exercise 3's GitHub search if you wanted live results instead of click-to-search.

[] is "fetch on mount only." Right answer for this exercise — the data doesn't depend on anything that changes.`,
        },
        {
          q: "Modifications — post number, styled cards, character count",
          a: `Added all three. Inline so the structural change is visible at the call site.

{posts.map((post, index) => (
  <div
    key={post.id}
    style={{
      backgroundColor: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      padding: "20px",
      margin: "12px 0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
    }}
  >
    <h2 style={{ margin: "0 0 8px 0" }}>
      #{index + 1}: {post.title}
    </h2>
    <p style={{ margin: "0 0 8px 0", lineHeight: "1.5" }}>{post.body}</p>
    <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
      {post.body.length} characters
    </p>
  </div>
))}

Used index + 1 for the post number because the assignment said "#1, #2..." (1-indexed, human-readable). post.id from the API would also work but the IDs aren't sequential in real data — they're database IDs. The 1-indexed counter is for display.

Background: soft gray-blue (#f8fafc), rounded corners, subtle shadow. Looks more like a real card and less like a default browser box.`,
        },
        {
          q: "What I noticed about the body lengths",
          a: `Most JSONPlaceholder post bodies are 150-250 characters. They're lorem-ipsum-style — not real content, but real-looking shapes. The character count is a nice debug tool — confirms the data actually loaded and that body isn't undefined or empty.

This is also the kind of derived display I'd build into a real content app. "Reading time: 3 min" is just body.length / averageWordsPerMinute. Once you have the data, derived values are free.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Error Handling",
      description:
        "Break the fetch URL on purpose. See what happens. Replace the raw error with a friendly UI.",
      qa: [
        {
          q: "Changed the URL to /BROKEN — what actually happened?",
          a: `Interesting gotcha. The fetch did NOT throw an error. It resolved successfully — with response.ok === false and response.status === 404.

This trips people up. fetch only rejects the promise on actual network failures (no internet, DNS resolution failed, CORS preflight rejected). A 404 or 500 is a successful HTTP response from fetch's perspective — the server replied. You have to manually check response.ok and throw if you want the catch block to handle it.

That's exactly what the starter code does:
if (!response.ok) {
  throw new Error("Failed to fetch posts");
}

Without that manual throw, setPosts(data) would run with whatever weird body JSONPlaceholder returns for an unknown route, and the app would silently render nothing or crash on data.map. The manual throw is what makes the try/catch actually do its job.`,
        },
        {
          q: "Verified the error state caught it",
          a: `Yes — the catch block ran, setError("Failed to fetch posts") fired, finally ran setLoading(false), and the component re-rendered. The if (error) branch returned the error message.

Before adding the friendly UI: showed "Error: Failed to fetch posts" in plain text. Functional but ugly. Looks like a developer dump, not a product.`,
        },
        {
          q: "The friendly error UI I dropped in",
          a: `if (error) {
  return (
    <div style={{
      padding: "24px",
      maxWidth: "500px",
      margin: "40px auto",
      backgroundColor: "#fef2f2",
      border: "1px solid #fecaca",
      borderRadius: "12px",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#991b1b", margin: "0 0 8px 0" }}>Something went wrong</h2>
      <p style={{ color: "#7f1d1d", margin: "0 0 16px 0" }}>
        We couldn't load the posts. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Retry
      </button>
    </div>
  );
}

Soft red palette — signals "problem" without screaming. The retry button reloads the whole page, which is a blunt instrument but works for an MVP. Better solution would be a refetch function that doesn't reload — just resets state and re-runs the fetch. That's a refactor for later.`,
        },
        {
          q: "Fixed the URL back, verified everything works",
          a: `Changed the URL back to /posts?_limit=10. Cleared the error state automatically on the next mount. 10 cards rendered cleanly. No leftover red error box.

Quick sanity check before moving on: opened DevTools, throttled the network to "Slow 3G" to see the loading state for more than 50ms. The "Loading posts..." actually shows for a couple seconds — confirms the loading branch is doing its job. Without the throttle the fetch is so fast you don't see the loading state, which makes it easy to miss bugs in that branch.`,
        },
        {
          q: "Why this matters — context from real work",
          a: `Every API I integrated at Hype Live had error handling like this around it. Kafka producer fails? Catch, log, fall back to direct DB write. Redis read times out? Catch, fall back to a fresh DB query. The "happy path" is maybe 30% of the code in any real integration — the rest is "what if this fails."

Most newbie code doesn't have error handling. It crashes on network blips and the user sees a white screen. Adding a friendly error UI is a 5-minute task that makes the difference between "this feels broken" and "this feels resilient."`,
        },
      ],
    },
    {
      heading: "Peer Activity — API Exploration",
      description:
        "Browse public-apis or publicapis.dev. Find 3 APIs. Test one. Share with partner.",
      qa: [
        {
          q: "The three APIs I picked",
          a: `1. Open Food Facts — https://world.openfoodfacts.org/api/v2/
   Returns: ingredient lists, allergens, vegan/vegetarian/palm-oil flags, nutritional data for almost any packaged product (search by barcode or name).
   Auth: none.
   Why I picked it: plant-based diet angle. Could build a "is this vegan?" lookup tool.

2. NYC Open Data 311 — https://data.cityofnewyork.us/resource/erm2-nwe9.json
   Returns: 311 complaint records — type, borough, status, dates, location. The dataset I'm already using on The Block Report.
   Auth: optional (higher rate limits if you register an app token, otherwise capped at 1000 reqs/hour).
   Why I picked it: I already know the shape. Listed it for the partner who hadn't worked with civic data before.

3. Open Library — https://openlibrary.org/dev/docs/api/search
   Returns: book metadata — title, author, publisher, ISBN, subjects, cover image URLs.
   Auth: none.
   Why I picked it: actively building a "books to read" list app (the favorites list from Day 2 was the seed). Could plug Open Library into the same component.`,
        },
        {
          q: "Which one is relevant to Phase 2",
          a: `None of the three directly. My Phase 2 is Canvas Daily — a digest of Canvas LMS assignments for me and my daughter. The Canvas LMS API isn't a "public" API in the public-apis sense — it requires per-user OAuth tokens and is hosted per-institution (canvas.yavapai.edu in my case). You can hit it from a browser if you have a personal access token, but real users would need OAuth.

That's actually the whole architectural question for Phase 2. You can't safely put a Canvas access token in a frontend .env file — the token would ship to every user's browser. The real implementation needs a backend that holds the token, makes the Canvas call server-side, and serves a sanitized response to the frontend.

So my Phase 2 stack:
- Backend (Node/Express or NestJS) holds the Canvas token, hits the Canvas API, returns JSON
- Frontend React app fetches from MY backend, not from Canvas directly

For TODAY's lab I'll use JSONPlaceholder /todos as a stand-in (similar shape to assignments). The fetch pattern is the same — only the URL changes when the real backend is ready.`,
        },
        {
          q: "Tested Open Food Facts in a browser tab",
          a: `Hit https://world.openfoodfacts.org/api/v2/product/737628064502.json — a random barcode I had on a sauce bottle. Got back a full JSON response: product name, brand, ingredient list in 12 languages, allergen flags, nutritional facts per 100g, vegan status (true), vegetarian status (true), labels (organic, fair trade).

The vegan flag is what hooked me. Could build a "scan a barcode, get vegan verdict" app pretty fast. Also a good Phase 3 idea — if I want to extend my Bust the Myths site into something interactive, this is the API.

JSON response was deeply nested — like 300+ fields. Real apps would pull maybe 10 of those fields and ignore the rest. Mapping API responses to your app's data model is exactly the schema-mapping exercise from Week 4 Day 3.`,
        },
        {
          q: "Shared with my partner — what they were excited about",
          a: `Partner is building a movie-watchlist app for their Phase 2. I pointed them at TMDb (themoviedb.org) — has movies, TV, posters, cast, ratings — and OMDb. They didn't know about either. They were going to scrape IMDb, which is both against IMDb's TOS and a ton more work than a documented API.

They returned the favor by pointing me at a free OAuth-mocking service so I can prototype the OAuth flow for Canvas Daily without needing a real registered app. Hadn't seen that before. Bookmarked.

This is the value of the peer activity. Half the time you find something better than what you'd have found alone, just by talking to one other person for ten minutes.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — GitHub User Search",
      description:
        "Type a username, click Search, render their profile. Fetch on click — no useEffect needed.",
      qa: [
        {
          q: "Why fetch-on-click doesn't need useEffect",
          a: `useEffect is for "do something AFTER React renders." Specifically, for side effects that need to run on mount, on update, or on unmount — synchronized with the render cycle.

A click is already an event in time. The user did something, I want to respond. I can just call fetch directly in the click handler. No render-cycle synchronization needed. Putting it in useEffect would be wrong — it'd run on every render that the relevant state changed, which isn't what "search button" means.

Rule of thumb:
- useEffect → "when something CHANGES, do X" (mount, prop update, state derived from props)
- Event handler → "when the USER does X, do Y"

Both can call fetch. The wrapper is different.`,
        },
        {
          q: "The full GitHubSearch component with modifications applied",
          a: `Started from the starter. Added: location, company, followers count (fetched from a second endpoint), profile-card styling, Clear button.

import { useState } from "react";

function GitHubSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setLoading(true);
    setError(null);
    setUser(null);
    setFollowers(0);

    try {
      const userRes = await fetch(\`https://api.github.com/users/\${username}\`);
      if (!userRes.ok) {
        throw new Error(userRes.status === 404 ? "User not found" : "Something went wrong");
      }
      const userData = await userRes.json();
      setUser(userData);

      // Second fetch — followers list, just count it
      const followersRes = await fetch(userData.followers_url);
      if (followersRes.ok) {
        const followersData = await followersRes.json();
        setFollowers(followersData.length);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUsername("");
    setUser(null);
    setFollowers(0);
    setError(null);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ flex: 1, padding: "10px", fontSize: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Search
        </button>
        <button type="button" onClick={handleClear} style={{ padding: "10px 16px", backgroundColor: "#e5e7eb", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Clear
        </button>
      </form>

      {loading && <p>Searching...</p>}
      {error && <p style={{ color: "#dc2626" }}>{error}</p>}

      {user && (
        <div style={{
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          textAlign: "center"
        }}>
          <img src={user.avatar_url} alt={user.name} style={{ width: "120px", borderRadius: "50%", border: "3px solid #10b981" }} />
          <h2 style={{ margin: "12px 0 4px 0" }}>{user.name || user.login}</h2>
          <p style={{ color: "#6b7280", margin: "0 0 12px 0" }}>@{user.login}</p>
          <p style={{ fontStyle: "italic", margin: "0 0 16px 0" }}>{user.bio || "No bio available"}</p>

          <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "16px" }}>
            <div><strong>{user.public_repos}</strong><br /><small>repos</small></div>
            <div><strong>{followers}</strong><br /><small>followers</small></div>
            <div><strong>{user.following}</strong><br /><small>following</small></div>
          </div>

          {user.location && <p style={{ margin: "4px 0", color: "#374151" }}>📍 {user.location}</p>}
          {user.company && <p style={{ margin: "4px 0", color: "#374151" }}>🏢 {user.company}</p>}

          <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontWeight: "bold", textDecoration: "none" }}>
            View on GitHub →
          </a>
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;`,
        },
        {
          q: "404 handling — what the user sees when they search a nonexistent username",
          a: `Tested with username "thisuserdefinitelydoesnotexist12345". GitHub responded with 404. The !response.ok check threw with the message "User not found". The catch block set the error state. The component re-rendered showing the red error text.

The status === 404 check inside the throw lets me differentiate between "user not found" and other failures. A 403 (rate limit) or 500 (server down) gets the generic "Something went wrong" message. Good UX — the user knows whether to fix their typo or wait a few minutes.

GitHub's rate limit (60/hour unauthenticated) hit me once during testing. The 403 came back as "Something went wrong" — exactly the bucket it belongs in. Would have been nicer to detect 403 specifically and say "Hit GitHub's rate limit, try again in an hour," but I didn't want to over-engineer.`,
        },
        {
          q: "Searched octocat — what data came back",
          a: `Tested with "octocat" (GitHub's mascot account). Got:
- Name: The Octocat
- Login: octocat
- Bio: null (showed "No bio available")
- Avatar: the classic Octocat image, rendered with the green border I added
- Public repos: 8
- Followers: ~16,000
- Following: 9
- Location: San Francisco
- Company: @github

Card rendered exactly as designed. The conditional rendering on location/company worked — when I searched a user with no location, those rows just didn't show. No empty bullet points or "undefined" leaking into the UI.`,
        },
        {
          q: "Reset state order — why I cleared user/followers/error BEFORE the fetch",
          a: `Inside handleSearch I do this:
setLoading(true);
setError(null);
setUser(null);
setFollowers(0);

The setUser(null) and setError(null) BEFORE the fetch matter. If I search "octocat" (succeeds), then search "fakeuser123" (fails), I want the octocat card to disappear immediately when the new search starts — not stick around until the fetch fails. Resetting user to null on every new search means the UI shows ONLY the loading state during the request.

Without those resets, the old user data would stay visible during the loading state, then get replaced or get the error stacked on top. Confusing UX. Clearing first means each search starts from a clean slate.

Same instinct as cleaning up state between renders in any other lifecycle — don't let stale data leak across operations.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Environment Variables",
      description:
        "Move the API base URL into a .env file. Verify it's read correctly. Make sure it's gitignored.",
      qa: [
        {
          q: "Created .env in the project root",
          a: `VITE_API_BASE_URL=https://api.github.com

One line. No quotes, no semicolons. Vite env files are KEY=VALUE pairs, like shell env vars.

Saved as .env (not .env.txt — the leading dot is the whole point, and Windows likes to hide that). Confirmed with ls -la in the terminal that the file is actually there with the right name.`,
        },
        {
          q: "Wired the variable into the component",
          a: `const API_BASE = import.meta.env.VITE_API_BASE_URL;

const userRes = await fetch(\`\${API_BASE}/users/\${username}\`);
const followersRes = await fetch(\`\${API_BASE}/users/\${username}/followers\`);

(Also updated the followers fetch to use the env var instead of the user.followers_url from the response — same URL, but now it's all coming from one source of truth.)

Pulled the const to the top of the component, above the useState calls. Convention is to put module-level constants up there so anyone reading the file sees "this is where the config comes from" before they see the component logic.`,
        },
        {
          q: "Updated .gitignore",
          a: `Opened .gitignore (Vite scaffolds one by default). Added:
.env
.env.local
.env.*.local

Most Vite projects come with these already in place. Mine had .env.local but not the bare .env. Added both.

The .env.*.local pattern catches .env.development.local, .env.production.local, etc. — env-specific overrides that contain real secrets. Belt and suspenders.`,
        },
        {
          q: "Restarted the dev server — why this step matters",
          a: `Vite reads .env files once at startup. Editing .env while the dev server is running does NOT pick up the changes automatically. Have to kill the server (Ctrl+C) and rerun npm run dev.

Forgot this once and spent five minutes wondering why import.meta.env.VITE_API_BASE_URL was undefined. Restarted, it worked. Now it's reflex.

After the restart, the GitHub search worked exactly the same as before. The API_BASE constant resolves to the env var at build time. From the component's perspective nothing changed — same URL, same fetch, same data.`,
        },
        {
          q: "Verified with git status — .env did NOT show up",
          a: `Ran git status. Output:

On branch main
Changes not staged for commit:
  modified:   src/GitHubSearch.jsx
  modified:   .gitignore

No mention of .env. .gitignore is doing its job — the file exists locally but git isn't tracking it.

To be extra sure, ran git check-ignore .env which printed ".env" — confirming git is explicitly ignoring it. Useful command for debugging when .gitignore patterns aren't working.

This is the habit. Every project I start gets a .env added to .gitignore before I commit a single line. Once a secret hits git history it's effectively leaked — even rewriting history doesn't help if anyone cloned in between.`,
        },
        {
          q: "Why the VITE_ prefix is required — what would happen without it",
          a: `Vite only exposes env vars to the client-side bundle if they start with VITE_. Any variable WITHOUT that prefix stays server-side / build-time only.

This is a security feature. Imagine I had DATABASE_PASSWORD=secret123 in .env. If Vite exposed everything to the browser, that password would ship in the JS bundle to every user. Catastrophic leak.

By requiring an explicit VITE_ prefix, Vite forces you to opt-in to "yes, this is safe to ship to the browser." The default is "no, this is server-only." That's the right default.

So:
- VITE_API_BASE_URL → exposed to import.meta.env (safe — it's just a URL)
- API_SECRET_KEY → NOT exposed, blocked by Vite (correct — secrets don't belong in the browser)

If I try import.meta.env.API_SECRET_KEY in a component, it's undefined. Vite is silently protecting me. The whole "no secrets in the frontend" rule is enforced by the prefix convention.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Phase 2 Project: First API Connection",
      description:
        "Wire a public API into a component for Canvas Daily. Hit the CORS/auth wall on Canvas itself, mock with JSONPlaceholder /todos as a stand-in.",
      qa: [
        {
          q: "Picking the API — Canvas reality check",
          a: `My Phase 2 is Canvas Daily, which means the "right" API is Canvas LMS. Canvas has a documented REST API at /api/v1/users/self/courses, /api/v1/courses/:id/assignments, etc. Tried the direct browser approach first.

Two problems I hit:
1. CORS — Canvas (canvas.yavapai.edu/api/v1/...) doesn't include Access-Control-Allow-Origin headers for arbitrary browser origins. Direct fetch from localhost gets blocked by the browser before the request even completes. Canvas was never designed to be called from a frontend SPA — it expects backend integrations.
2. Auth — Canvas API requires a personal access token in the Authorization header. Even if CORS worked, putting my token in a VITE_ env var would bake it into the client bundle. Bad. Everyone with the bundle would have my Canvas credentials.

The honest architectural answer: Canvas Daily needs a backend. Express or NestJS server holds the token, makes the Canvas call, returns JSON to the frontend. That's the Week 6 work.

For TODAY's exercise, I'll use JSONPlaceholder /todos as a stand-in. It returns objects with { userId, id, title, completed } — close enough to assignments { studentId, id, title, completed } that the component code works the same way.`,
        },
        {
          q: "The stand-in fetch — AssignmentDigest component",
          a: `import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com";

function AssignmentDigest() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        // STAND-IN: hitting JSONPlaceholder /todos until the Canvas backend is built.
        // Real fetch will be: \`\${API_BASE}/api/v1/users/self/upcoming_events\` via our backend proxy.
        const response = await fetch(\`\${API_BASE}/todos?_limit=15\`);
        if (!response.ok) {
          throw new Error("Failed to load assignments");
        }
        const data = await response.json();

        // Map the JSONPlaceholder /todos shape to my Canvas-shaped Assignment type
        const mapped = data.map((todo) => ({
          id: todo.id,
          studentId: todo.userId,
          title: todo.title,
          completed: todo.completed,
          // Fields I'll get from real Canvas API:
          courseName: "Course " + todo.userId,  // placeholder
          dueDate: null,                          // placeholder
          pointsPossible: null,                   // placeholder
        }));

        setAssignments(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAssignments();
  }, []);

  if (loading) return <p>Loading your daily digest...</p>;
  if (error) return <p style={{ color: "#dc2626" }}>{error}</p>;

  const remaining = assignments.filter((a) => !a.completed).length;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Canvas Daily Digest</h1>
      <p style={{ color: "#6b7280" }}>{remaining} assignments still to do</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {assignments.map((a) => (
          <li
            key={a.id}
            style={{
              padding: "12px",
              marginBottom: "8px",
              backgroundColor: a.completed ? "#f0fdf4" : "#fefce8",
              borderLeft: \`4px solid \${a.completed ? "#10b981" : "#f59e0b"}\`,
              borderRadius: "6px"
            }}
          >
            <strong style={{ textDecoration: a.completed ? "line-through" : "none" }}>
              {a.title}
            </strong>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>{a.courseName}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignmentDigest;`,
        },
        {
          q: "Schema mapping — comparing the API shape to my Week 4 data model",
          a: `Pulled up my Week 4 Day 3 schema sketch. My Assignment table was:

assignments (
  id INTEGER PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  title TEXT NOT NULL,
  due_date TIMESTAMP,
  completed BOOLEAN DEFAULT FALSE,
  points_possible NUMERIC,
  canvas_assignment_id INTEGER UNIQUE  -- maps back to Canvas's ID
)

Compared to JSONPlaceholder /todos:
- todo.id → assignment.canvas_assignment_id ✓
- todo.userId → assignment.student_id ✓
- todo.title → assignment.title ✓
- todo.completed → assignment.completed ✓
- (missing) → course_id, due_date, points_possible

The four fields JSONPlaceholder gives me happen to be exactly the minimum viable shape for an assignment. The fields that are MISSING are what I'll get from the real Canvas API. That's a useful exercise — it tells me which parts of my schema are "from Canvas" and which would need to be derived or aggregated.

Mapped the JSONPlaceholder response into my expected shape in the component, leaving the Canvas-only fields as placeholders. When the backend lands, swapping the URL and removing the placeholder mapper is a 3-line change. The component itself doesn't care where the data came from.

This is the abstraction I'd build into any real integration. Data layer in the middle, presentation layer doesn't know about the source.`,
        },
        {
          q: "All three states verified — loading, data, error",
          a: `Loading: visible on mount for ~150ms before the data arrives. Throttled the network to confirm it shows for a real duration. Says "Loading your daily digest..."

Data: 15 assignment cards render. Completed ones (about a third of them) get a green left border and strikethrough text. Incomplete ones get an amber left border. The header says "X assignments still to do" with the correct count derived from .filter().length.

Error: tested by pointing the URL at /BROKEN-TODOS. The fetch resolved with response.ok=false, the manual throw fired, the catch caught it, setError ran, the error branch returned the red text. Switched the URL back and it cleared on next mount.

Same three-state pattern as Exercise 1, just with my own data shape on top. The skeleton transfers cleanly between projects.`,
        },
        {
          q: "What's next for Canvas Daily",
          a: `Three things on the roadmap from this point:

1. Backend proxy — Express server with a single endpoint /api/assignments that holds the Canvas token, calls Canvas, returns JSON. The frontend code I wrote today swaps URLs and works the same way.

2. Real Canvas auth — OAuth flow so other users (including my daughter's school account via my observer role) can connect their own Canvas without me holding their tokens. Personal access token works for me, but OAuth is the real answer.

3. Email digest — the cron job that runs the same fetch every morning and emails the digest. That's a backend feature, not frontend, so it's out of scope for today.

The component I built is the foundation. Everything from this point is plumbing.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes to explain one concept out loud. Partner asks one follow-up.",
      qa: [
        {
          q: "Which concept I picked — loading/data/error, await, or .env",
          a: `The loading/data/error pattern. It's the through-line of every exercise today. If you can explain it cleanly you can explain async data fetching in React, period. The other two (await, .env) are useful but narrower.`,
        },
        {
          q: "My 2-minute explanation",
          a: `Every component that fetches data lives in one of three states. Loading. Data. Error. The whole pattern is a state machine with those three states and rules for moving between them.

State one: loading. The component just mounted. Data is empty. Error is null. The UI shows a spinner or "Loading...". This is the user's first second.

State two: data. The fetch succeeded. Data is populated. Error is still null. Loading flipped to false. The UI shows the real content.

State three: error. The fetch failed. Data is empty (or stale, depending on how you handle it). Error has a message. Loading flipped to false. The UI shows a friendly error message and ideally a retry button.

In code that's three useState calls — one for the data, one for the loading boolean, one for the error string. Then a useEffect that fires the fetch on mount, with a try/catch/finally inside. The try block sets data on success. The catch block sets error on failure. The finally block sets loading to false NO MATTER WHAT.

The reason finally is critical: if I put setLoading(false) at the end of the try block, an error would skip it and the user would be stuck on the loading state forever. Same problem if I put it only in the catch. Finally guarantees it runs in both branches. That's the whole point of finally.

In JSX, the render is a cascade of guards. If loading, return the spinner. Else if error, return the error UI. Else, render the data. Three branches, three states, one rendering rule. Clean.

You'll see this pattern in every React app that talks to an API. Once you internalize the three states, the rest is just deciding what each state looks like for your specific UI.`,
        },
        {
          q: "Partner's follow-up and my answer",
          a: `Partner asked: what if setLoading(false) was outside the finally block — say at the end of the try block instead?

My answer: then it would only run on success. If the fetch throws, control jumps from wherever in the try block to the catch block, skipping any remaining lines in the try. So setLoading(false) would never run on the error path. The component would be stuck showing "Loading..." forever, with the error state set but never reached because the loading guard intercepts the render first.

The user experience would be: it looks like the page never finished loading. They'd refresh or close the tab. The error would never display, even though the error state in React was correctly set.

Finally exists for exactly this case — code that has to run regardless of which branch of try/catch was taken. State cleanup, resource release, "we're done now" flags. setLoading(false) is the textbook example.

I tested this once at Hype Live by accident — had a cleanup line outside the finally. Didn't see the bug until a real error fired in staging. Now it's a code review thing I look for in every PR that has a try/catch.`,
        },
        {
          q: "What saying it out loud surfaced",
          a: `Two things.

First — I noticed I said "state machine with three states" out loud and that's actually the cleanest framing I've used for this. Felt useful enough that I'm going to use it again. Loading / data / error IS a state machine. The transitions are explicit (mount, success, failure). You could draw it on a whiteboard with three circles and arrows.

Second — I almost forgot to explain WHY finally matters and only got to it because my prompt told me to. The finally explanation is the most interesting part of the whole pattern, and it's the part newbies skip. Next time I'd lead with finally instead of saving it for the end. "Here are three states, and here's the one trick that makes the cleanup correct." That ordering would land better.`,
        },
      ],
    },
  ],
};
