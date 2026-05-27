export const week5day2 = {
  number: 19,
  label: "Day 2",
  title: "Week 5, Day 2 — React Components, Props, and State",
  subtitle:
    "Read components first, then write them. JSX, props, useState, composition, event handling.",
  color: "#61dafb",
  sections: [
    {
      heading: "Exercise 1 — Read a React Component",
      description:
        "Trace through a MovieCard component before running it. Predict the output, then verify in the browser.",
      qa: [
        {
          q: "What props does MovieCard accept?",
          a: `Four: title, year, rating, genre. They're destructured straight out of the props object in the function signature — function MovieCard({ title, year, rating, genre }). The component never sees props as a single object, just the four fields it actually uses.`,
        },
        {
          q: "For \"The Matrix\", what will the <h2> display?",
          a: `"The Matrix (1999)" — the title interpolated, then a space, then the year in parens. The {} braces in JSX are JS expression slots, so {title} and {year} get substituted in.`,
        },
        {
          q: "What does {\"*\".repeat(rating)} do for a rating of 5? What about a rating of 2?",
          a: `rating 5: produces "*****" (five asterisks).
rating 2: produces "**" (two asterisks).

String.prototype.repeat(n) returns the string repeated n times. The {} around it is the JSX expression slot — so the result of the JS expression gets rendered as text inside the <p>.`,
        },
        {
          q: "The line {rating >= 4 && <p>...</p>} — what does this do? Which movies will show \"Highly Recommended!\" and which won't?",
          a: `Short-circuit conditional rendering. The && operator returns the left value if it's falsy, otherwise the right value. So:

- rating >= 4 is true → the expression evaluates to the <p> JSX → React renders it
- rating >= 4 is false → the expression evaluates to false → React renders nothing (false, null, and undefined all render as nothing in JSX)

Results:
- The Matrix (rating 5): shows the banner
- Toy Story (rating 4): shows the banner
- A Bad Movie (rating 2): does NOT show the banner

This pattern is everywhere in React. Inline conditional renders without needing if statements or ternaries.`,
        },
        {
          q: "If you wanted to add a director prop, what would you change? (Two places.)",
          a: `Two places:

1. Inside the component definition: add director to the destructured props and render it in the JSX.
function MovieCard({ title, year, rating, genre, director }) {
  return (
    <div className="movie-card">
      <h2>{title} ({year})</h2>
      <p>Director: {director}</p>
      <p>Genre: {genre}</p>
      ...
    </div>
  );
}

2. At each call site: pass director as a prop.
<MovieCard title="The Matrix" year={1999} rating={5} genre="Sci-Fi" director="The Wachowskis" />

Forget either one and you get either a missing field or an unused prop. The compiler won't catch it in plain JS — only TS would.`,
        },
        {
          q: "Modification — added a fourth movie (V for Vendetta) and a director prop displayed below the genre",
          a: `Added director prop and a fourth card. V for Vendetta is the personal favorite.

function MovieCard({ title, year, rating, genre, director }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "8px", borderRadius: "8px" }}>
      <h2>{title} ({year})</h2>
      <p>Director: {director}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {"*".repeat(rating)}</p>
      {rating >= 4 && <p style={{ color: "green", fontWeight: "bold" }}>Highly Recommended!</p>}
    </div>
  );
}

<MovieCard title="V for Vendetta" year={2005} rating={5} genre="Dystopian" director="James McTeigue" />

Renders with director above genre, five stars, and the green "Highly Recommended!" banner. Worked first try.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Build Your First Component (ProfileCard)",
      description:
        "Build a reusable component from scratch, pass it different data, and see the power of reuse.",
      qa: [
        {
          q: "Step 4 — added two more ProfileCard instances with different data",
          a: `Three cards on screen, one component definition. Aisha, Carlos, and one of my own — kept "Diana / Backend Developer / NestJS, Redis, Kafka. Learning database design and full-stack patterns at Next Chapter." for the third.

The reuse story is the whole point: I wrote ProfileCard once. Every additional card is just <ProfileCard name="..." role="..." bio="..." />. If I wanted ten of them I'd write ten lines, not ten components. This is exactly how the team grid on my portfolio works — one component, data passed in.`,
        },
        {
          q: "Level 1 modification — added a color prop to change each card's border",
          a: `Added color to the destructured props and used string concatenation in the border style:

function ProfileCard({ name, role, bio, color }) {
  return (
    <div style={{
      border: "2px solid " + color,
      borderRadius: "12px",
      padding: "20px",
      margin: "12px",
      maxWidth: "300px",
      backgroundColor: "#f9f9f9"
    }}>
      ...
    </div>
  );
}

<ProfileCard name="Aisha" role="Frontend" bio="..." color="#e74c3c" />
<ProfileCard name="Carlos" role="Backend" bio="..." color="#3498db" />
<ProfileCard name="Diana" role="Backend" bio="..." color="#2ecc71" />

Three differently-colored borders, same component. Could also have used a template literal — \`2px solid \${color}\` — same result, cleaner read. Did the concatenation version to match the assignment example.`,
        },
        {
          q: "Level 2 modification — skills prop as comma-separated string, rendered as badges",
          a: `The prop arrives as a single string. Split on comma, trim each piece, then map to badge elements.

function ProfileCard({ name, role, bio, color, skills }) {
  const skillList = skills.split(",").map(s => s.trim());

  return (
    <div style={{ border: "2px solid " + color, /* ...rest of styles */ }}>
      <h2>{name}</h2>
      <p style={{ fontStyle: "italic" }}>{role}</p>
      <p>{bio}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
        {skillList.map((skill, i) => (
          <span key={i} style={{
            backgroundColor: "#e0e0e0",
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: "12px"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

<ProfileCard
  name="Diana"
  role="Backend Developer"
  bio="Built event-driven services with Kafka and Redis at Hype Live."
  color="#2ecc71"
  skills="NestJS, TypeScript, Redis, Kafka, PostgreSQL"
/>

Used the array index as the key since the badges are static within a render — fine here. Wouldn't fly for a list that can be edited (Exercise 5 covers why).`,
        },
      ],
    },
    {
      heading: "Exercise 3 — State: Counters and Toggles",
      description:
        "Learn useState by building interactive components. The data changes, React updates the screen.",
      qa: [
        {
          q: "Step 1 — Counter built and running. What useState gives you back.",
          a: `const [count, setCount] = useState(0) — array destructuring on the return value of useState.

- count → the current value of the state variable
- setCount → the function you call to update it
- 0 → the initial value, used on the first render

Clicking + Add 1 calls setCount(count + 1). That schedules a re-render with the new value. The crucial thing: you never write count++ or count = count + 1 directly. State updates go through the setter. That's how React knows something changed.

The three buttons all work the same way: pass a new value into setCount, React re-renders, the new value shows up in the <h2>.`,
        },
        {
          q: "Step 2 — Toggle built. Explain the ternary and the !isOn syntax in your own words.",
          a: `isOn ? "ON" : "OFF" — ternary operator. Reads as "if isOn is true, use 'ON'; else use 'OFF'." It's a one-liner if/else that returns a value, which is exactly what JSX needs because JSX expression slots want values, not statements.

!isOn — boolean negation. Flips true to false and false to true. So onClick={() => setIsOn(!isOn)} is "set isOn to its opposite." Clicking the button toggles the state.

The button's background color also uses the same ternary trick — green when on, red when off — and the label text flips between "Turn OFF" and "Turn ON". One piece of state, three things on screen that respond to it.`,
        },
        {
          q: "Step 3 code tracing — When count is 3, what color is the number? What message shows?",
          a: `count = 3:
- getColor: 3 is not >= 10, not >= 5, so returns "#2ecc71" → green
- Message: 3 < 5 → "Keep going!"

The number renders large and green, the message below says Keep going!`,
        },
        {
          q: "When count is 7, what color? What message?",
          a: `count = 7:
- getColor: 7 is not >= 10, but is >= 5, so returns "#f39c12" → orange
- Message: 7 is not < 5, but 7 >= 5 && 7 < 10 is true → "Getting warm..."

Orange number, "Getting warm..." below.`,
        },
        {
          q: "When count is 10, what color? What message?",
          a: `count = 10:
- getColor: 10 >= 10 → returns "#e74c3c" → red
- Message: 10 >= 10 → "You made it to 10!"

Red number, success message. The three boolean checks for the message are stacked && expressions — only the one whose condition is true renders its string. The others evaluate to false and render nothing. Same short-circuit trick as Exercise 1's "Highly Recommended" banner.`,
        },
        {
          q: "What does the Reset button do?",
          a: `Calls setCount(0). State drops back to 0, React re-renders, the number is 0 again, color resets to green, message resets to "Keep going!" Everything that depends on count updates because they all read from the same state variable. That's the React data flow in miniature.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Compose Components: Build a Page",
      description:
        "Build a small app out of multiple components — Header, Main, ProfileCard, Footer. This is the real pattern.",
      qa: [
        {
          q: "What composition looks like — App is built of Header / Main / Footer, Main is built of ProfileCards",
          a: `Walked through the structure before changing anything.

App
├── Header (receives appName prop)
├── Main
│   ├── ProfileCard (Aisha)
│   ├── ProfileCard (Carlos)
│   └── ProfileCard (Priya)
└── Footer (computes year internally)

Each component is self-contained. Header doesn't know what's in Main, Main doesn't know what's in Footer. They're glued together by App. Data flows DOWN — App passes appName to Header. Header doesn't reach back up.

This is the same shape every React app I've worked on has. Hype Live's admin panel was App → Layout → (Sidebar + Content), Content was a router that swapped in pages, each page was its own tree of components. Composition all the way down.`,
        },
        {
          q: "Level 1 modification — changed app name, team members, and colors",
          a: `Renamed the app to "Diana's Reading Room" (test app, going with something fun).

<Header appName="Diana's Reading Room" />

Replaced the three team members with three book recommendations as ProfileCards — name became book title, role became author, bio became one-sentence pitch. Same component, totally different content. Demonstrates how loose the coupling is between the component and the data it shows.

Swapped the header background to dark forest green (#1b4332) and the footer to a warm stone color (#6b5b4f). Header and footer are just <header> and <footer> with inline styles — changing the colors is one keystroke.`,
        },
        {
          q: "Level 2 modification — added a Contact section component between Main and Footer",
          a: `Built a new Contact component as a sibling of Main:

function Contact({ email, message }) {
  return (
    <section style={{
      padding: "30px 20px",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      borderTop: "1px solid #ddd"
    }}>
      <h2>Get in Touch</h2>
      <p style={{ maxWidth: "500px", margin: "0 auto 12px auto" }}>{message}</p>
      <a href={"mailto:" + email} style={{ color: "#1a1a2e", fontWeight: "bold" }}>
        {email}
      </a>
    </section>
  );
}

Then dropped it into App:
<Header appName="..." />
<Main />
<Contact email="diana@example.com" message="Drop me a line about React, NestJS, or what you're reading." />
<Footer />

The email becomes a clickable mailto: link via string concatenation in the href. Standard pattern.`,
        },
        {
          q: "Level 2 modification — Header now accepts a subtitle prop",
          a: `Added subtitle to the destructured props and rendered it below the h1:

function Header({ appName, subtitle }) {
  return (
    <header style={{ /* ... */ }}>
      <h1 style={{ margin: 0 }}>{appName}</h1>
      {subtitle && <p style={{ margin: "8px 0 0 0", color: "#aaa" }}>{subtitle}</p>}
    </header>
  );
}

<Header appName="Diana's Reading Room" subtitle="One book at a time" />

Wrapped the <p> in subtitle && so the paragraph doesn't render at all when no subtitle is passed. Same short-circuit pattern as the rating banner in Exercise 1. Means the component is backwards-compatible — old call sites without subtitle still work.`,
        },
        {
          q: "Checkpoint — composition as the core React mental model",
          a: `Every real app I've worked on or built — Hype Live admin, PromptForge, my portfolio, the Block Report — is a tree of small components that don't know much about each other. The "magic" of React isn't the syntax. It's the discipline of breaking the page into pieces and gluing them with props.

Once you internalize that, the rest is variations on a theme. State in the right place, props flowing down, events flowing up.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Build a Mini-App: Favorites List",
      description:
        "Working interactive app combining state, props, event handling, and list rendering. Add items, remove items, count updates automatically.",
      qa: [
        {
          q: "Built the starter, ran it, added several items, removed one. What I observed.",
          a: `Typed "Coffee", clicked Add — appeared as the first item, input cleared. Typed "Books" and hit Enter — same result (the Enter key handler works). Added three more. The "Total favorites: 5" line at the bottom updated as I added each one. Clicked the X next to "Books" — it vanished from the middle of the list, the others stayed in order, total went to 4.

No flicker, no manual DOM manipulation. The state changes, React figures out what to update. Same as the counter from Exercise 3, just with an array of state instead of a number.`,
        },
        {
          q: "State — what are the two pieces of state and what does each track?",
          a: `favorites — an array of items. Each item is an object with { id, text }. Starts as [].
inputValue — the string currently in the input box. Starts as "".

Two separate useState calls. Could have been one object with both fields, but keeping them separate is cleaner because they update independently — typing changes inputValue without touching favorites, clicking Add changes both. Splitting state by "what changes together" is a useful instinct.`,
        },
        {
          q: "Props — what props does FavoriteItem receive?",
          a: `Two:
- text — the string to display
- onRemove — a function to call when the X button is clicked

onRemove is a callback. The parent (App) defines what removing means, then hands a pre-bound function down to each FavoriteItem. The child doesn't know how removal works — it just calls onRemove() when its button is clicked. This is the "events flow up" half of React's data flow.

The actual handler in App is:
onRemove={() => handleRemove(item.id)}

A new arrow function per item, closing over that item's id. So each X button knows which id to remove without the child needing to know anything about ids.`,
        },
        {
          q: "Event handling — trace through what happens when you click the Add button",
          a: `1. The button's onClick fires → handleAdd() runs
2. Check: if inputValue.trim() === "" → return early. Empty strings don't get added.
3. Build a new item: { id: Date.now(), text: inputValue.trim() }
4. setFavorites([...favorites, newItem]) → spread the current array, append the new item, hand the new array to setFavorites
5. setInputValue("") → clear the input

React sees two state changes (favorites and inputValue) and re-renders. The list shows the new item, the input box is empty, total count goes up by one. All from clicking one button.

Pressing Enter inside the input does the exact same thing — handleKeyPress checks event.key === "Enter" and calls handleAdd().`,
        },
        {
          q: "Spread vs mutate — why [...favorites, newItem] instead of favorites.push(newItem)?",
          a: `React detects state changes by reference, not by deep equality. If I called favorites.push(newItem), the array would mutate but it'd still be the same array reference — React wouldn't know anything changed and wouldn't re-render.

Spreading creates a new array. Different reference. React sees it as a new state value, schedules a re-render. Same reason favorites.filter(...) is used for removal — filter returns a new array, doesn't mutate the original.

"Never mutate state directly" is one of the first rules you internalize in React. The spread / filter / map patterns exist exactly to give you new arrays/objects every time.`,
        },
        {
          q: "Why each item has an id (Date.now()) instead of using array index as the key",
          a: `React needs a stable key for each list element to track it across renders. If I use the array index, the key for "second item" is always 1 — even if I delete the actual first item and "second item" becomes "first item." React thinks the item at index 0 just had its text change, when really the item was removed.

For a list that never changes order or gets edited, index is fine. For anything dynamic — add, remove, reorder — you need an id that belongs to the item itself. Date.now() is good enough here because two clicks can't happen in the same millisecond from a single user (in a multi-user system you'd want UUIDs).

Tomorrow's lecture apparently goes deeper on this. Looking forward to that — I've hit this bug in real code before.`,
        },
        {
          q: "Level 1 modification — changed the title to something specific",
          a: `Changed <h1>My Favorites</h1> to <h1>Books to Read</h1>. Updated the placeholder on the input to "Add a book..." and the empty state message to "No books yet. Add one!" — those copy changes make the app feel intentional instead of generic. The placeholder and empty message are easy to miss, but they're the difference between a demo and a real app.`,
        },
        {
          q: "Level 2 modification — Clear All button",
          a: `Added a Clear All button next to the Add button area. Renders only when there's at least one item, otherwise it's hidden:

{favorites.length > 0 && (
  <button
    onClick={() => setFavorites([])}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginBottom: "20px"
    }}
  >
    Clear All ({favorites.length})
  </button>
)}

setFavorites([]) replaces the array with an empty one. The list disappears, the total goes to 0, the empty-state message reappears. Showing the count in the button label was a nice touch — makes it obvious what you're about to clear.`,
        },
        {
          q: "Level 3 modification — prevent duplicate entries",
          a: `Added a duplicate check inside handleAdd before building the new item:

const handleAdd = () => {
  const trimmed = inputValue.trim();
  if (trimmed === "") return;

  // Check for duplicates (case-insensitive)
  const exists = favorites.some(item => item.text.toLowerCase() === trimmed.toLowerCase());
  if (exists) {
    setInputError(true);
    setTimeout(() => setInputError(false), 1000);
    return;
  }

  const newItem = { id: Date.now(), text: trimmed };
  setFavorites([...favorites, newItem]);
  setInputValue("");
};

Also added a new piece of state — const [inputError, setInputError] = useState(false) — and used it to flip the input's border to red when a duplicate is detected:

border: inputError ? "2px solid #e74c3c" : "2px solid #ddd",

The setTimeout resets the border back to gray after 1 second. Visual feedback without an alert popup. Array.prototype.some short-circuits as soon as it finds a match, so it doesn't scan the whole array unnecessarily. Lowercase comparison so "Coffee" and "coffee" count as the same item.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes to explain one concept out loud. Partner asks one follow-up.",
      qa: [
        {
          q: "Which concept I picked — props vs state, JSX, or useState",
          a: `Props vs state. It's the question that comes up in every React interview and it's the one that matters most for the mental model. If you don't have a clean answer for this, everything else gets confused — where to put state, when to lift it up, why a child can't change a prop.`,
        },
        {
          q: "My 2-minute explanation",
          a: `Props and state are both ways of giving a component data. The difference is where the data lives and who can change it.

Props are data passed IN to a component from its parent. The parent owns the data. The child receives it and reads it, but never changes it. If a parent renders <ProfileCard name="Aisha" />, then inside ProfileCard, name is "Aisha" — period. The component can't reassign it. Props are read-only from the child's perspective.

State is data that lives INSIDE a component. The component owns it and is the only thing that can change it. You declare it with useState. If I have const [count, setCount] = useState(0) inside a Counter component, only Counter can call setCount. The parent has no idea count even exists.

The rule of thumb: if the data belongs to this component and only this component, it's state. If the data comes from somewhere else, it's props.

Concrete example from today's work. In the favorites list — favorites and inputValue are state, declared with useState inside App. They live in App because App is the only thing that needs to manage them. But FavoriteItem receives text and onRemove as props. Each item card doesn't know it's part of a list, doesn't know what removing means — it just displays text and calls onRemove when its X is clicked. The data flows down (text), the events flow up (onRemove). That's the whole pattern.

One more thing — when state changes, the component re-renders. When the parent re-renders, the children receive their props again. So even though a child can't change its own props, the props can still change between renders because the parent passed new values. That trips people up the first few times.`,
        },
        {
          q: "Partner's follow-up question and my answer",
          a: `Partner's question: If a child can't change a prop, how does a child trigger an update? Like, how does the X button in FavoriteItem actually remove the item if the favorites array lives in App?

My answer: Through callbacks passed down as props. The parent owns the data AND the function that updates it. It passes both down — the data as a regular prop, the updater as a function prop. The child invokes the function, the parent's state changes, the parent re-renders, the child gets new props.

So in the favorites list: App owns favorites. App defines handleRemove which calls setFavorites with a filtered array. When App renders the list, it passes onRemove={() => handleRemove(item.id)} to each FavoriteItem. The X button in FavoriteItem calls onRemove() — which is really just a wrapper around App's handleRemove with the id baked in. The child doesn't know what's happening, it just calls the function it was handed. The parent does the actual work.

That's the React data flow in one sentence: data down, events up.`,
        },
        {
          q: "Saying it out loud surfaced what? What would I refine?",
          a: `Two things.

First — I started by saying "props are read-only" and my partner's follow-up forced me to immediately add the nuance that props can CHANGE between renders, the child just can't change them. The static-sounding "read-only" framing buries that point. Next time I'd say "the child can read but not write" — that's the precise version.

Second — the "data down, events up" line at the very end is the single sentence I should have led with. It's the headline. Everything else I said is detail. I want to restructure the explanation next time to lead with the slogan, then unpack it. Not bury the lede in the third minute.`,
        },
      ],
    },
  ],
};
