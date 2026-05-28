export const week5day3 = {
  number: 20,
  label: "Day 3",
  title: "Week 5, Day 3 — Forms, Lists, Filters, and a To-Do App",
  subtitle:
    "Controlled inputs, .map() for lists, chained filters, conditional rendering, and the first real Codex CLI session.",
  color: "#f59e0b",
  sections: [
    {
      heading: "Exercise 1 — Controlled Form",
      description:
        "Build a contact form with two inputs (name + email). Display the values live as the user types. Submit clears the form.",
      qa: [
        {
          q: "What I built — the full ContactForm component",
          a: `import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted!\\nName: \${name}\\nEmail: \${email}\`);
    setName("");
    setEmail("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "14px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "14px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#f0f0f0", borderRadius: "6px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>Preview:</h3>
        <p style={{ margin: "4px 0" }}>Name: {name || <em style={{ color: "#999" }}>(empty)</em>}</p>
        <p style={{ margin: "4px 0" }}>Email: {email || <em style={{ color: "#999" }}>(empty)</em>}</p>
      </div>
    </div>
  );
}

export default ContactForm;`,
        },
        {
          q: "Why 'controlled' — what makes this a controlled input?",
          a: `Two pieces tied together:
1. value={name} → the input's displayed value comes FROM React state
2. onChange={(e) => setName(e.target.value)} → every keystroke updates that state

That's the control loop. React owns the source of truth. The DOM never holds a value React doesn't know about. Compare to an uncontrolled input where the DOM holds its own value and React reads it via a ref — fine for some cases, but you lose live access to what's in there.

Live preview only works because of this. The <p>Name: {name}</p> below the form re-renders on every keystroke because name updates on every keystroke. No event listeners, no DOM queries — React just re-renders the whole component when state changes, and the preview reflects the new value.`,
        },
        {
          q: "Behavior verified in the browser",
          a: `Typed "D" → preview shows "Name: D" instantly. Kept typing — each character appeared in the preview as I typed it. No lag, no debounce, just React re-rendering on every state update.

Switched to the email field. Typed an email — preview updated for that field independently. Two pieces of state, two inputs, fully isolated.

Clicked Submit on empty fields → alert showed "Name: , Email: " (the empty strings). Should probably add validation but the assignment didn't require it. Clicked Submit with values filled in → alert showed both values, then both fields cleared. Both setName("") and setEmail("") fire from the same handler.`,
        },
        {
          q: "Why e.preventDefault() in the submit handler?",
          a: `Without it, the default browser form submission fires — which means the page reloads and posts the form data to the current URL. That blows away all your React state, the alert never shows (or shows on the new page), and your SPA becomes a regular form post.

e.preventDefault() stops the default and lets React take over. The form still validates HTML5 stuff like required and type="email" before submit fires, but the actual submission is now under JS control.

This is the one line that's easy to forget and makes the form behave bizarrely when you do. Got bit by this exact bug in a Banyan Labs intern project. Now it's reflex.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Render a Product List",
      description:
        "Render five product cards from an array using .map(). First exposure to the key prop.",
      qa: [
        {
          q: "ProductCard component",
          a: `function ProductCard({ name, price, category }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "240px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{name}</h3>
      <p style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "bold" }}>
        \${price.toFixed(2)}
      </p>
      <span style={{
        backgroundColor: "#e0e7ff",
        color: "#3730a3",
        padding: "3px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        {category}
      </span>
    </div>
  );
}

price.toFixed(2) handles the $49.99 formatting. Always two decimals, even when the trailing digit is zero. If I had a $30 product it'd render as $30.00 — usually what you want for prices.`,
        },
        {
          q: "Mapping the list with key={product.id}",
          a: `function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

key={product.id} is on the OUTER element returned by map, not inside ProductCard. The key has to be on whatever JSX expression map returns directly. Tomorrow's lecture covered why this matters with edit-able lists — using product.id (a stable identifier on the data) is the right answer here.

Five cards laid out in a flex row, wrapping if the window's narrow. Browser rendered them clean on first try.`,
        },
        {
          q: "Could I have passed the whole product object instead of three separate props?",
          a: `Yes — <ProductCard key={product.id} product={product} /> and then function ProductCard({ product }) { ... product.name ... }.

Tradeoffs:
- Separate props: explicit contract. ProductCard only knows about the three fields it uses. Easier to test, easier to type in TS later.
- Whole object: less typing at the call site. But the component now depends on the full product shape, which means changing the data shape ripples through every consumer.

For something this small, either works. The "spread the fields" version reads cleaner because the component's API is right there in the destructuring. I'd reach for whole-object passing when the component genuinely needs lots of fields or when I'm passing the same shape through multiple layers.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Search + Filter",
      description:
        "Add a search input above the product list. Filter the list live as the user types, case-insensitive.",
      qa: [
        {
          q: "Added searchTerm state and the filter pattern",
          a: `import { useState } from "react";

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          fontSize: "14px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
      </div>
    </div>
  );
}

Both sides of .includes() are lowercased so "Head", "head", and "HEAD" all match "Headphones". searchTerm is a controlled input — same pattern as Exercise 1.`,
        },
        {
          q: "Verified the live filtering — what does typing each term show?",
          a: `Typed "head" → Wireless Headphones (the only match — only one product has "head" in the name).

Typed "book" → JavaScript Textbook, React Handbook. Both match because the substring "book" appears in both "Textbook" and "Handbook". This is a common gotcha with .includes() — substring matching, not whole-word. If a product were named "Cookbook" it would also match.

Typed "electron" → no matches. Interesting one. There are two Electronics products but the filter checks PRODUCT NAME, not category. "Wireless Headphones" doesn't contain "electron" in its name. If I wanted to search across both, I'd OR the two conditions:

.filter(p =>
  p.name.toLowerCase().includes(term) ||
  p.category.toLowerCase().includes(term)
)

Cleared the input → all five products back. Empty string is a substring of every string, so the filter passes everyone through.`,
        },
        {
          q: "Why chain .filter().map() instead of doing it in one pass?",
          a: `Each method has one job. .filter() returns a new array of items that pass the predicate. .map() returns a new array of transformed items. Chaining them keeps the intent obvious — "narrow first, then render."

You could do it imperatively with a for loop and a conditional inside, but you'd lose the declarative read. The chain reads as a sentence: "products, filter by name, map to cards." That's the React style — describe what you want, not how to compute it.

Both operations are O(n) so the chain is O(2n) which is still O(n). For five products it's irrelevant. For 50,000 it'd be the same — the constant factor doesn't matter, the algorithm shape does.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Component Sketching",
      description:
        "Pair up and sketch the component tree for an app idea. Compare with partner. Where does state live?",
      qa: [
        {
          q: "Which app I picked and why",
          a: `Recipe list with search and category filters. Closest substrate to the product list I just built, so I could lean on the pattern. Also plant-based recipe filtering is something I'd actually use — the kind of project I'd ship to my portfolio.`,
        },
        {
          q: "My component tree sketch",
          a: `RecipeApp (owns recipes, searchTerm, selectedCategory state)
├── Header
├── SearchBar           — props: searchTerm, onSearchChange
├── CategoryFilter      — props: categories, selected, onSelect
├── RecipeList          — props: recipes (filtered), onFavorite
│   └── RecipeCard      — props: recipe, onFavorite
│       └── FavoriteButton — props: isFavorite, onToggle
└── EmptyState          — shown when filtered list is empty

State lives in RecipeApp at the top. SearchBar and CategoryFilter are controlled — they receive their current value and a change callback. RecipeList just receives the already-filtered array and doesn't know about searching/filtering at all. That's the separation: filtering logic lives ABOVE the list, the list just renders.

Drew arrows showing data going down (recipes, searchTerm, selectedCategory) and events going up (onSearchChange, onSelect, onFavorite). Standard "data down, events up" React shape.`,
        },
        {
          q: "Comparing with partner — where did we break things differently?",
          a: `Partner had FavoriteButton inlined into RecipeCard rather than pulling it out as its own component. They argued it's a tiny piece (a button with a star icon) and pulling it out adds indirection for no benefit. Fair point.

I argued that breaking it out makes it testable in isolation and lets the favorite animation/state live in one place. But honestly, for an app this size, their version is probably cleaner. Premature decomposition is a real thing — I've over-componentized before and ended up with twenty files when five would do.

Where we agreed: state has to live above SearchBar and CategoryFilter. Neither of us put the filters in individual cards (which would be a mess — the card has no business knowing the filter state).

Where we diverged: I had searchTerm and selectedCategory as two separate useState calls. They had a single useState({ search: "", category: "All" }) object. Both work. Theirs makes it easier to add more filter fields later without growing the useState count. Mine makes each piece update independently without spreading.`,
        },
        {
          q: "What this exercise taught me about 'thinking in React'",
          a: `The hardest part isn't the syntax — it's deciding where state lives and what counts as a component. Sketching first means you make the decisions explicitly instead of letting them happen by accident when you're typing.

The lift-state-up question is the one I'll keep hitting. State always wants to live at the lowest level that has access to everything that needs to read or change it. SearchBar can't own searchTerm if RecipeList needs to read it to filter. So it lifts to the parent that owns both.

This is the same problem I solved at Hype Live with Redis state across services — different scale, same shape. Where does the source of truth live? Who reads it? Who writes it? Get those three questions right and the rest follows.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Category Filter with Conditional Rendering",
      description:
        "Add category filter buttons (All / Electronics / Books / Clothing). Chain a second filter. Show 'No products found' when the list is empty. Highlight the active button.",
      qa: [
        {
          q: "Added selectedCategory state and the chained filters",
          a: `const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const categories = ["All", "Electronics", "Books", "Clothing"];

const visibleProducts = products
  .filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

The category filter is the second .filter() in the chain. It returns true unconditionally when "All" is selected (passes everything through) and otherwise checks for an exact category match. Ternary inside the filter callback — clean.

The categories array is hardcoded for now. In a real app I'd derive it from the data:
const categories = ["All", ...new Set(products.map(p => p.category))];

Set deduplicates, spread converts back to array, prepend "All". One line. Would do that next round.`,
        },
        {
          q: "Filter buttons with active-state highlighting",
          a: `<div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        border: "2px solid",
        borderColor: selectedCategory === category ? "#1a1a2e" : "#ccc",
        backgroundColor: selectedCategory === category ? "#1a1a2e" : "white",
        color: selectedCategory === category ? "white" : "#333",
        borderRadius: "6px",
        fontWeight: selectedCategory === category ? "bold" : "normal"
      }}
    >
      {category}
    </button>
  ))}
</div>

The selectedCategory === category check is everywhere in the style — that's the trade for inline styles. In a real app I'd extract this to a className that flips based on a single isActive boolean, but for now inline ternaries are fine. Four properties flip together when you click a different button.`,
        },
        {
          q: "Conditional rendering — empty state vs the list",
          a: `{visibleProducts.length === 0 ? (
  <p style={{ color: "#999", fontStyle: "italic", textAlign: "center", padding: "40px" }}>
    No products found.
  </p>
) : (
  visibleProducts.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      price={product.price}
      category={product.category}
    />
  ))
)}

Ternary instead of && because there's a real "else" branch — show the list. With && I'd just be hiding the empty state when there are results, but I'd still need to render the list somewhere. The ternary keeps both branches at the same level of the tree.

The empty state fires when you search for something nonexistent or pick a category with no matches. Tried searching "zzz" — got the empty message. Picked Books and searched "head" — empty (no books contain "head"). The double filter narrows fast.`,
        },
        {
          q: "Edge case — what happens when I search 'electron' with category 'Electronics' selected?",
          a: `Empty list. "No products found."

Why: the search filter checks .name (not .category). None of the product names contain "electron" — only the category does. So the first filter strips everything, the second filter has nothing left to narrow, and visibleProducts is [].

This is the search behavior the user might not expect — "I'm in the Electronics tab, surely 'electron' matches?" Realized this is a UX bug in the making. The fix would be searching name OR category, or maybe disabling the search bar when a category is selected. Worth noting for any real product list I build.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — To-Do App",
      description:
        "The classic. Forms + state + lists + events + conditional rendering, all together. Trace through the starter, then extend.",
      qa: [
        {
          q: "Tracing — what happens when I type 'Buy groceries' and click Add",
          a: `1. Every keystroke fires onChange on the input → setInputValue updates inputValue character by character.
2. After typing, inputValue is "Buy groceries", todos is still [].
3. Click Add → form's onSubmit fires → addTodo(e) runs.
4. e.preventDefault() stops the page reload.
5. inputValue.trim() === "" check → false (non-empty), so we don't return early.
6. Build newTodo = { id: Date.now(), text: "Buy groceries", completed: false }.
7. setTodos([...todos, newTodo]) → spread the empty array, append newTodo → new array is [newTodo].
8. setInputValue("") → input clears.
9. React re-renders. The list shows one <li> with "Buy groceries". The "0 items remaining" line becomes "1 item remaining" (singular handled by the ternary). The "No tasks yet" message disappears because todos.length is no longer 0.

That's the full flow from keystroke to render. Nine steps. Three pieces of state involved (inputValue, todos, and React's internal re-render scheduling).`,
        },
        {
          q: "Tracing — what happens when I check the checkbox on 'Buy groceries'",
          a: `1. Click the checkbox → its onChange fires → toggleTodo(1) runs (1 is the id, Date.now()-derived).
2. Inside toggleTodo: todos.map(...) walks every todo. For the one whose id matches (id === 1), returns a new object: { ...todo, completed: !todo.completed } → completed flips from false to true. Every OTHER todo is returned unchanged.
3. setTodos(...) gets the new array — same length, but the matching item is a new object.
4. React re-renders. The matching <li>'s checkbox is now checked (because checked={todo.completed} reads the new true). The text gets style={{ textDecoration: "line-through" }} via the inline ternary. Strikethrough appears.
5. The remainingCount recalculates: todos.filter(t => !t.completed).length → 0 now, since the one todo is completed. Footer reads "0 items remaining".

The {...todo, completed: !todo.completed} is the spread-then-override pattern. Copy every field, then override one. New object, new reference, React sees the change.`,
        },
        {
          q: "Tracing — what happens when I click Delete on 'Buy groceries'",
          a: `1. Click Delete → onClick fires → deleteTodo(1) runs.
2. todos.filter(t => t.id !== 1) — returns a new array with everything EXCEPT the matching item. So [{id: 1, ...}] becomes [].
3. setTodos([]) → state replaced with empty array.
4. React re-renders. The <ul> is now empty (map over [] produces nothing). The "0 items remaining" line shows. The "No tasks yet. Add one above!" message reappears because todos.length === 0 is true again.

Three operations, three patterns: add uses spread ([...todos, newTodo]), toggle uses map (return new object for the match, untouched for the rest), delete uses filter (keep everything that ISN'T the match). Each one returns a new array — no mutation, ever.`,
        },
        {
          q: "Extension — 'Clear completed' button",
          a: `Added below the list:

const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};

{todos.some((t) => t.completed) && (
  <button onClick={clearCompleted} style={{ marginTop: "12px" }}>
    Clear completed
  </button>
)}

Same filter pattern as deleteTodo, just inverted — keep the items that are NOT completed. The button only renders when there's at least one completed item to clear, so it doesn't sit there inert. todos.some(...) short-circuits as soon as it finds one completed item.`,
        },
        {
          q: "Extension — All / Active / Completed filter buttons",
          a: `Added const [filter, setFilter] = useState("All") and three buttons that call setFilter.

const visibleTodos = todos.filter((todo) => {
  if (filter === "Active") return !todo.completed;
  if (filter === "Completed") return todo.completed;
  return true; // "All"
});

Then mapped visibleTodos instead of todos for the list rendering. The actual todos array stays intact — the filter only affects what's displayed. So if I'm on "Active" and I complete an item, it disappears from the view but it's still in todos, just hidden by the filter. Tested: completed an item while on Active view → item vanished. Switched to Completed → it appeared there. Switched to All → everything visible.

The remainingCount and the underlying data don't change based on the filter view. That separation is important — UI state (which tab is active) is distinct from data state (what's in the list).`,
        },
        {
          q: "Extension — styling pass",
          a: `Pulled the inline styles into a slightly more polished look. Card-style container, soft shadows, color-coded buttons (green for Add, red-tinted X for delete, dark for active filter). Used a single accent color (#3b82f6 blue) consistently.

Didn't pull in Tailwind for this since the exercise wanted vanilla inline. If I were keeping this app, I'd convert to Tailwind or CSS modules next round. Inline styles work but they don't scale — same prop spread everywhere, no hover states, can't use pseudo-selectors. Fine for a 50-line component, painful for anything bigger.`,
        },
      ],
    },
    {
      heading: "Exercise 6 — Component Decomposition",
      description:
        "Refactor the to-do app into separate components. TodoApp owns state and passes callbacks down.",
      qa: [
        {
          q: "TodoItem — receives todo, onToggle, onDelete",
          a: `function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "center",
      padding: "8px",
      borderBottom: "1px solid #eee"
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: "12px" }}
      />
      <span style={{
        flex: 1,
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#999" : "#333"
      }}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer" }}
      >
        Delete
      </button>
    </li>
  );
}

TodoItem doesn't know what "toggle" or "delete" actually do — it just calls the function it was handed with the id. Same pattern as the favorites list yesterday. The parent owns the logic, the child fires the event.`,
        },
        {
          q: "TodoList — receives todos array and the two callbacks",
          a: `function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ color: "#999", textAlign: "center" }}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

The empty-state check moves into TodoList — that's its concern, not TodoApp's. TodoList knows what "no items" looks like in the list. TodoApp doesn't need to.

Note: passed the entire todo object to TodoItem rather than spreading the fields. For this case the object IS the unit — TodoItem only ever wants to display one todo, so the prop name matches the concept.`,
        },
        {
          q: "TodoForm — manages its own inputValue state internally",
          a: `function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAdd(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        style={{ flex: 1, padding: "10px", fontSize: "14px" }}
      />
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#2ecc71", color: "white", border: "none", cursor: "pointer" }}>
        Add
      </button>
    </form>
  );
}

This is the interesting one. inputValue is OWNED BY TodoForm — TodoApp doesn't need to know what's currently typed, only what the user finally submitted. So inputValue stays local, and TodoForm calls onAdd(text) with just the trimmed final string when the user submits.

The empty-check also lives here. The trim() happens here. TodoApp's onAdd implementation can assume it's getting a clean non-empty string. Each component owns one piece of the contract.

This is "lifting state up" applied in reverse — keeping state DOWN where it belongs. Just because the parent COULD own inputValue doesn't mean it should.`,
        },
        {
          q: "TodoStats — just receives a number",
          a: `function TodoStats({ remainingCount }) {
  return (
    <p style={{ color: "#666", fontSize: "14px" }}>
      {remainingCount} item{remainingCount !== 1 ? "s" : ""} remaining
    </p>
  );
}

The simplest of the lot. One prop in, one line out. The pluralization ternary lives here because it's a display concern — singular vs plural is how this component speaks, nothing else cares.

Could have called it TodoCount or TodoFooter. Named it Stats because if I add more stats later (completed count, total time, whatever), they'd land here.`,
        },
        {
          q: "TodoFilters — All / Active / Completed",
          a: `function TodoFilters({ currentFilter, onFilterChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            border: "1px solid",
            borderColor: currentFilter === f ? "#3b82f6" : "#ccc",
            backgroundColor: currentFilter === f ? "#3b82f6" : "white",
            color: currentFilter === f ? "white" : "#333",
            borderRadius: "4px"
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

Same pattern as the category filter buttons in Exercise 4. TodoFilters doesn't track which filter is active itself — TodoApp does (because TodoApp uses it to filter the list before passing to TodoList). TodoFilters just gets the current value and a setter.`,
        },
        {
          q: "TodoApp — the composer that holds state and wires everything",
          a: `function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const visibleTodos = todos.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoFilters currentFilter={filter} onFilterChange={setFilter} />
      <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <TodoStats remainingCount={remainingCount} />
    </div>
  );
}

export default TodoApp;

The whole composition fits in 30 lines. TodoApp doesn't know how the form looks, doesn't know how items render, doesn't know how the filter buttons style themselves. It owns the data (todos, filter) and the functions that change it. Everything else is delegated.

This is the shape every NestJS controller had at Hype Live too — the controller doesn't do the work, it routes to services and returns the result. Same instinct, different layer.`,
        },
        {
          q: "What I noticed after decomposing",
          a: `Three things.

First — the file went from one 60-line component to six smaller ones totaling maybe 120 lines. MORE code, not less. But each piece is easier to read in isolation, and I can change one without touching the others. Worth the tradeoff for anything beyond a toy.

Second — the prop drilling is real even at this small scale. onToggle goes TodoApp → TodoList → TodoItem. Two hops for a function that doesn't change. For three hops or more, that's where Context or a store starts to make sense. Not yet, but I see the shape of the problem.

Third — TodoForm owning its own inputValue felt right. There's a real architectural question of what state belongs to the parent vs the child. Rule of thumb I'm landing on: if no other component needs the data, it stays local. The form's draft text is local to the form. The submitted todos are shared, so they live in the parent.`,
        },
      ],
    },
    {
      heading: "Exercise 7 — Apply Codex CLI to Your React Work",
      description:
        "Run a focused Codex CLI session. Scope a small task. Read the diff. Decide. Log the session.",
      qa: [
        {
          q: "Step 1 — Goal scoped before starting",
          a: `One sentence: I want to add localStorage persistence to src/TodoApp.jsx so the todos array survives a page refresh, using a useEffect that runs when todos changes.

Picked this from the suggestion list because it's a real-world feature that matters (every to-do app needs it) and it's exactly 5-10 lines if done right. No new UI, no scope creep, just one persistence hook.`,
        },
        {
          q: "Step 2 — Tried myself first (1-2 min)",
          a: `Sketched in my notes:
- useState initializer reads from localStorage on first mount: useState(() => JSON.parse(localStorage.getItem("todos")) || [])
- useEffect with [todos] dep array writes to localStorage whenever todos changes

Two pieces. Both go in TodoApp where todos lives. Should be straightforward. The function-as-initial-state trick is the part I'm least sure about — I think useState(() => ...) only runs the function once on mount, but I want to verify the syntax.

This is the "sketch the shape" step from the four-step method. Didn't write the actual code. Just confirmed I had a mental model before asking Codex CLI for help.`,
        },
        {
          q: "Step 3 — The actual prompt I sent",
          a: `"In src/TodoApp.jsx, add localStorage persistence to the todos state. On initial render, load todos from localStorage if present. Whenever todos changes, save it back to localStorage. Use the existing useState pattern and add useEffect from react. Show me the diff before applying, and don't change anything else in the file."

Notes on the prompt:
- Referenced the file by exact path
- Specified BOTH directions of persistence (read on mount, write on change)
- Asked for the diff before applying — gives me a chance to read it
- Told it not to change anything else — guardrails against scope creep
- Mentioned the existing useState pattern so it matches the existing style`,
        },
        {
          q: "Step 4 — What came back, and my decision",
          a: `Codex CLI returned a diff:

+ import { useState, useEffect } from "react";
- import { useState } from "react";

  function TodoApp() {
-   const [todos, setTodos] = useState([]);
+   const [todos, setTodos] = useState(() => {
+     const saved = localStorage.getItem("todos");
+     return saved ? JSON.parse(saved) : [];
+   });
    const [filter, setFilter] = useState("All");
+
+   useEffect(() => {
+     localStorage.setItem("todos", JSON.stringify(todos));
+   }, [todos]);

5 lines added, 2 lines modified. Touched only the imports, the useState initializer, and added the useEffect. Didn't touch any handlers, didn't add error handling, didn't try to extract a custom hook.

Decision: KEEP with one modification.

Modification: wrapped the JSON.parse in a try/catch. If localStorage has corrupted data (e.g., someone manually edited it), the parse throws and the app crashes on load. Defensive coding I learned the hard way at Hype Live with Redis caches.

Final initializer:
useState(() => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});`,
        },
        {
          q: "Result — did it work?",
          a: `Refreshed the browser — todos persisted. Added three items, refreshed, all three still there. Marked one complete, refreshed, the completed state survived. Cleared completed, refreshed, the list was correct.

One follow-up I had to make myself: when the page loads, useEffect fires once with the initial todos (already loaded from localStorage) and writes them BACK to localStorage. Wasteful but harmless. A more careful version would use a ref to skip the first write. Not worth the complexity for a 5-line feature.`,
        },
        {
          q: "One thing I'd do differently next session",
          a: `My prompt didn't specify what key to use in localStorage. Codex CLI picked "todos" which is fine, but I should have spelled it out — in a real app I'd want something namespaced like "todoapp.v1.todos" so I can version the storage schema if the shape changes later.

Lesson: be specific about strings that get committed to storage (or URLs, or env var names). Those are the bits that are hard to change later and the AI will pick whatever's most obvious if you don't say.`,
        },
        {
          q: "cli-session-log.md — the actual log file I created",
          a: `# CLI Session Log — Week 5 Day 3

**Goal (one sentence):**
Add localStorage persistence to src/TodoApp.jsx so the todos array survives a page refresh.

**Prompt:**
"In src/TodoApp.jsx, add localStorage persistence to the todos state. On initial render, load todos from localStorage if present. Whenever todos changes, save it back to localStorage. Use the existing useState pattern and add useEffect from react. Show me the diff before applying, and don't change anything else in the file."

**What came back (summary of the diff):**
Added useEffect to the react import. Changed the useState([]) to a function-form initializer that reads from localStorage. Added a useEffect with [todos] dep that writes to localStorage on every change. 5 lines added, 2 modified. Did not touch handlers or other state.

**Decision:** Modify
Kept the structure but wrapped JSON.parse in a try/catch to handle corrupted localStorage data. Saw that gotcha at Hype Live with bad Redis cache reads — better to default to [] than crash on load.

**Result:**
Works. Refreshed the page multiple times with various states (empty, items added, items completed, items deleted). All persisted correctly. Noticed a minor inefficiency — the useEffect writes once on mount with the just-loaded data, redundant but harmless.

**One thing I'd do differently next session:**
Specify the localStorage key explicitly in the prompt. Codex CLI picked "todos" which works, but a namespaced/versioned key like "todoapp.v1.todos" would be safer for future schema changes. Generally: be explicit about strings that get committed to persistence or external systems.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "Walk partner through the Codex CLI session from Exercise 7. Two minutes per person.",
      qa: [
        {
          q: "My 2-minute walkthrough",
          a: `My goal: add localStorage persistence to the to-do app so todos survive a page refresh. Scoped to one file, src/TodoApp.jsx, and one feature — load on mount, save on change.

Before I prompted, I sketched the shape in my notes. Two pieces — a useState initializer function that reads from localStorage, and a useEffect that writes to localStorage whenever todos changes. Took maybe 90 seconds to think through.

Then I wrote the prompt. Here it is:

"In src/TodoApp.jsx, add localStorage persistence to the todos state. On initial render, load todos from localStorage if present. Whenever todos changes, save it back to localStorage. Use the existing useState pattern and add useEffect from react. Show me the diff before applying, and don't change anything else in the file."

What came back: a diff with 5 lines added and 2 modified. Updated the import to include useEffect. Changed useState([]) to useState with a function-form initializer that reads from localStorage. Added a useEffect with todos in the dep array that writes back.

I modified one thing — wrapped the JSON.parse in a try/catch. If localStorage has corrupted data the parse throws, and I don't want the app to crash on load. Hype Live had a bug like that with a bad Redis cache once. Better to default to an empty array than to break.

Applied it, refreshed the browser a bunch of times with different states. All persisted. Done.

One thing I'd do differently: be explicit about the localStorage key in my prompt. The AI picked "todos" — fine for this exercise, but in a real app I'd want it namespaced and versioned.`,
        },
        {
          q: "Partner's follow-up and my answer",
          a: `Partner's question: "Why did you ask for the diff before applying instead of just letting it apply directly?"

My answer: Two reasons. First, the four-step method requires it — you can't make a real keep/reject/modify decision if you didn't read the diff. If I let it auto-apply, I'm just trusting the AI, which is the exact thing the program is teaching me NOT to do.

Second, on a real codebase, applied changes are sometimes hard to back out — touch the wrong file, change something subtle, and now I'm rolling back a commit. Reading the diff first means I never get into that state in the first place.

It also forces me to actually understand what's being added. If I can't follow the diff line by line, that's a signal I'm in over my head and should slow down. Cheap insurance.`,
        },
        {
          q: "Reflection — what saying it out loud surfaced",
          a: `Telling the story made me realize I skipped a step in my notes. I had "sketch the shape" written down, but when I described it out loud I noticed I didn't actually write out the pseudocode — I just thought about it. The discipline of the method works better when the thinking is on paper, not in my head, because I can compare what I sketched to what came back.

Next session I'll force myself to write the sketch in the cli-session-log.md BEFORE the prompt. Same file, just earlier. That way the log itself becomes the artifact that captures the discipline.

Also: my partner's question about reading diffs was the right one. The whole point of the method is the human-in-the-loop check. The day I stop reading diffs is the day I stop being a developer and become a copy-paste machine.`,
        },
      ],
    },
    {
      heading: "Going Deeper — Read the Docs",
      description:
        "Picked option 3: skim codex --help, find a feature I didn't know existed, try it in a real session.",
      qa: [
        {
          q: "Why I picked the docs option",
          a: `The multi-file option felt like a bigger time investment, and I already decomposed into multiple files in Exercise 6 — the lesson of "diffs that touch multiple files" wasn't novel. The "compare two agents" option needed me to spin up another tool I don't have set up.

Reading the docs is the unglamorous option. But it's also the one with the highest expected value per minute — I've used Codex CLI for one whole session and there's almost certainly a feature I haven't touched that would change how I use the tool.`,
        },
        {
          q: "The feature I found",
          a: `Slash commands inside a session. Specifically /clear — resets the conversation context without exiting the CLI. Before this I was either exiting and restarting (slow) or just piling new tasks into the same context (which the lab notes explicitly warn against because of scope creep and confused state).

/clear is the right tool for "I finished one task, now I want to start a clean second task in the same project." Same shell session, fresh AI context. Avoids re-entering the project directory, avoids re-establishing context, but doesn't carry over the previous task's conversation.`,
        },
        {
          q: "Tried it in a real session",
          a: `Finished the localStorage feature, typed /clear, then started a new mini-task: "In src/TodoApp.jsx, add a 'Completed: N' line next to the existing 'X items remaining' line." Tiny scope, just one more stat.

What I noticed: the AI didn't reference any of the previous conversation. Asked it about "the persistence we just added" as a test — it didn't know what I was talking about. Clean slate confirmed.

One sentence on what /clear does: it resets the AI's conversation memory within a Codex CLI session without ending the session, so the next prompt starts fresh while you stay in the same project directory.`,
        },
      ],
    },
    {
      heading: "Coding Challenge — React Component Refactor (#13)",
      description:
        "Ran the challenge as a Codex CLI session. Same four-step method. Optional but worth the rep.",
      qa: [
        {
          q: "The starter — what the monolithic component looked like",
          a: `60-line component doing too much: a contact list with search, sort, a form to add contacts, an edit-in-place feature, and a delete button. All in one function. Mixed responsibilities — the form's state was tangled with the list's state, the sort logic was inline inside the JSX, and the same styles were repeated four or five times.

This is the kind of component every junior dev writes (myself included, in my pre-Hype Live work). It works, but every change you make risks breaking something unrelated.`,
        },
        {
          q: "Step 1 — Goal scoped",
          a: `Break the monolithic component into focused sub-components, modeled on the same decomposition I just did for the to-do app in Exercise 6. Target structure:

ContactApp (holds state)
├── ContactForm (owns its own form state)
├── ContactSearch (controlled input)
├── ContactSort (sort direction toggle)
└── ContactList
    └── ContactItem

State that's shared (contacts, searchTerm, sortDirection) lives in ContactApp. State that's local (the form's draft fields) lives in ContactForm.`,
        },
        {
          q: "Step 2 — Tried myself first",
          a: `Looked at the monolithic file. Identified five boundaries where I'd cut. The form was the cleanest extraction — it had its own state already (just inlined in the parent) and a clear submit handler. The list of items was the next-cleanest.

The trickier piece was the search + sort. Both were doing array transforms on the contacts list. I decided to keep the filter/sort logic in ContactApp (single source of truth for "what's visible") and just extract the input controls as pure UI components.

This is the same pattern from Exercise 4 — filtering logic lives ABOVE the list. Confirmed by sketching for 90 seconds before writing the prompt.`,
        },
        {
          q: "Step 3 — The prompt I sent",
          a: `"Refactor src/ContactApp.jsx into separate components. Target structure: ContactApp holds the contacts, searchTerm, and sortDirection state. Extract ContactForm (with its own form state), ContactSearch (controlled input), ContactSort (toggle button), ContactList, and ContactItem. Pass callbacks down for add/edit/delete/toggle. Don't change behavior — just decompose. Show me the diff and put each new component in src/components/ as its own .jsx file."

Specified the target structure explicitly because I'd already designed it. Asked for separate files in src/components/ to enforce the boundaries. "Don't change behavior" is a critical guardrail for refactors — the AI loves to "improve" things while it's in there, and I want to verify the refactor before any feature changes.`,
        },
        {
          q: "Step 4 — Reading the diff and decision",
          a: `Codex CLI returned six new files and a heavily modified ContactApp.jsx. Read each one.

Things I accepted:
- The component boundaries matched my sketch exactly.
- Props/callbacks were named consistently (onAdd, onEdit, onDelete, onToggleSort).
- The form state stayed local to ContactForm.

Things I modified:
- ContactItem received the full contact object PLUS three separate callback props. Refactored to receive contact + a single onAction prop that takes an action type — cleaner API surface, easier to test. Pushed back on the AI's first instinct here.
- The sort logic was duplicated inline in ContactApp's render. Pulled it into a named function sortContacts(contacts, direction) at the top of the file. Easier to reason about, easier to test in isolation later.

Things I rejected:
- AI added PropTypes imports and validation to every component. Useful in some projects, overkill for a 5-component refactor. Removed.

Final result: 7 files, total LOC went UP from 60 to about 180. But every file is under 40 lines, each has one job, and the seam where state crosses component boundaries is explicit. That's the trade.`,
        },
        {
          q: "Result and reflection",
          a: `Ran the app after refactor. All four original features worked: add, edit-in-place, delete, search+sort. No behavior changed (which was the goal). The Coding Challenge passed its acceptance criteria.

Three observations:

First — the AI is genuinely good at this kind of mechanical refactor. Component extraction with explicit boundaries is a high-pattern task and Codex CLI nailed the structure. Where it needed pushback was the API design (onAction vs three callbacks) and the over-eager additions (PropTypes).

Second — having the to-do app decomposition from Exercise 6 in my recent memory made this 10x faster. Same pattern, different domain. The skill compounds.

Third — the "don't change behavior" guardrail is the single most valuable line in the prompt. Without it, the AI would have "fixed" three things while it was refactoring. With it, the diff is reviewable. Refactor and feature change are two separate operations, and they should never share a commit.`,
        },
        {
          q: "Logged in cli-session-log.md as session #2",
          a: `Added a second entry to the same log file, separated with a divider. Same template — goal, prompt, what came back, decision, result, what I'd do differently.

The "what I'd do differently" for this one: I could have skipped specifying the file structure (src/components/...) and let Codex CLI propose its own. Mine matched what I'd have chosen, but the lab is partly about learning what GOOD looks like — and sometimes the AI's defaults teach you a convention you didn't know.

Two sessions logged in one day. That's the rep the Phase 2 gate is measuring.`,
        },
      ],
    },
  ],
};
