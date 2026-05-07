export const week2day4 = {
  number: 13,
  label: "Day 4",
  title: "Week 2, Day 4 — Functions, Arrays & the DOM",
  subtitle: "Data lives in arrays. Functions do the work. The DOM shows the result.",
  color: "#818cf8",
  sections: [
    {
      heading: "Exercise 1 — Write Your First Functions in the Console",
      description: "No HTML needed. DevTools console only.",
      qa: [
        {
          q: `Function 1 — greet(name): "function greet(name) { return \`Hello, \${name}!\`; }" — tested with greet("Alex") and greet("Sam")`,
          a: `greet("Alex") → "Hello, Alex!"
greet("Sam")  → "Hello, Sam!"`,
        },
        {
          q: `Function 2 — addNumbers(a, b): "function addNumbers(a, b) { return a + b; }" — tested with addNumbers(3, 4) and addNumbers(10, 25)`,
          a: `addNumbers(3, 4)   → 7
addNumbers(10, 25) → 35`,
        },
        {
          q: `Function 3 — isEven(n): "function isEven(n) { return n % 2 === 0; }" — tested with isEven(4) and isEven(7)`,
          a: `isEven(4) → true  (4 % 2 = 0)
isEven(7) → false (7 % 2 = 1)

% is the modulo operator — it returns the remainder after division.
4 divided by 2 has no remainder → 0 → even.
7 divided by 2 has a remainder of 1 → odd.`,
        },
        {
          q: `My function — square(n): returns n times itself. Code and test results.`,
          a: `function square(n) {
  return n * n;
}

square(4)  → 16
square(9)  → 81
square(12) → 144`,
        },
        {
          q: `My function — shout(message): returns the message in all caps. Code and test results.`,
          a: `function shout(message) {
  return message.toUpperCase();
}

shout("hello world")   → "HELLO WORLD"
shout("keep it quiet") → "KEEP IT QUIET"
shout("JavaScript")    → "JAVASCRIPT"`,
        },
        {
          q: `My function — isLong(text): returns true if text has more than 10 characters. Code and test results.`,
          a: `function isLong(text) {
  return text.length > 10;
}

isLong("hi")          → false  (2 chars)
isLong("hello world") → true   (11 chars)
isLong("JavaScript")  → false  (10 chars — NOT more than 10, exactly 10)
isLong("I love code") → true   (11 chars)`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Loop Over an Array",
      description: "for...of, indexed loops, conditionals inside loops, building a new array.",
      qa: [
        {
          q: `Step 2 — basic for...of loop logging greetings for all 5 names. Code and console output.`,
          a: `const names = ["Alex", "Sam", "Jordan", "Riley", "Casey"];

for (const name of names) {
  console.log(\`Hello, \${name}!\`);
}

// Console output:
// Hello, Alex!
// Hello, Sam!
// Hello, Jordan!
// Hello, Riley!
// Hello, Casey!`,
        },
        {
          q: `Step 3a — classic for loop with position number: "1. Hello, Alex!", etc.`,
          a: `for (let i = 0; i < names.length; i++) {
  console.log(\`\${i + 1}. Hello, \${names[i]}!\`);
}

// Console output:
// 1. Hello, Alex!
// 2. Hello, Sam!
// 3. Hello, Jordan!
// 4. Hello, Riley!
// 5. Hello, Casey!

// i starts at 0 (array index), so i + 1 gives the human-readable position number`,
        },
        {
          q: `Step 3b — for...of, log only names longer than 4 characters.`,
          a: `for (const name of names) {
  if (name.length > 4) {
    console.log(\`Hello, \${name}!\`);
  }
}

// Console output:
// Hello, Jordan!
// Hello, Riley!
// Hello, Casey!

// "Alex" has exactly 4 characters — fails the > 4 check, skipped
// "Sam" has 3 characters — skipped
// Jordan (6), Riley (5), Casey (5) — all pass`,
        },
        {
          q: `Step 3c — build a greetings array, log it after the loop.`,
          a: `const greetings = [];

for (const name of names) {
  greetings.push(\`Hello, \${name}!\`);
}

console.log(greetings);

// Console output:
// ["Hello, Alex!", "Hello, Sam!", "Hello, Jordan!", "Hello, Riley!", "Hello, Casey!"]

// .push() adds an item to the end of an array
// The array starts empty and gets one item added per loop iteration`,
        },
        {
          q: `Step 4 — replaced the array with 5 things to remember from this week. What did you write?`,
          a: `const weekReview = [
  "error messages are a map, not an insult — read the type and the line number",
  "prompt() returns a string — always wrap in parseFloat() before comparing numbers",
  "script tags belong at the bottom of body, not in head",
  "console.log is your first debugging tool — add one after every calculation",
  "the DOM is just JavaScript objects — you can change anything on the page in real time"
];

for (const note of weekReview) {
  console.log(note);
}`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Build a List Dynamically from an Array of Objects",
      description: "Arrays of objects → DOM elements. This is the pattern behind every list in React.",
      qa: [
        {
          q: `books.js — the initial render loop. Code and what appeared on the page.`,
          a: `const books = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Educated", author: "Tara Westover" },
  { title: "The Mountain Is You", author: "Brianna Wiest" },
  { title: "Becoming", author: "Michelle Obama" },
];

const list = document.getElementById("book-list");

for (const book of books) {
  const li = document.createElement("li");
  li.textContent = \`\${book.title} -- \${book.author}\`;
  list.appendChild(li);
}

// Page rendered:
// • Atomic Habits -- James Clear
// • Educated -- Tara Westover
// • The Mountain Is You -- Brianna Wiest
// • Becoming -- Michelle Obama`,
        },
        {
          q: `Step 3a — added 2 more book objects. What did I add and what happened?`,
          a: `Added to the array:
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Between the World and Me", author: "Ta-Nehisi Coates" },

Refreshed the page — two new items appeared at the bottom automatically.
The rendering code didn't change at all. That's the point: when data and
rendering are separated, you only ever touch the data to change the output.`,
        },
        {
          q: `Step 3b — changed rendering so title is in <strong> and author is in normal text.`,
          a: `for (const book of books) {
  const li = document.createElement("li");

  const strong = document.createElement("strong");
  strong.textContent = book.title;

  li.appendChild(strong);
  li.appendChild(document.createTextNode(" — " + book.author));

  list.appendChild(li);
}

// Each list item now shows the title in bold, then " — Author Name" in regular weight
// createTextNode is used instead of innerHTML to avoid XSS risk with user content`,
        },
        {
          q: `Step 3c — wrapped rendering in renderBooks(bookArray). Called it twice with different arrays.`,
          a: `function renderBooks(bookArray) {
  list.innerHTML = "";
  for (const book of bookArray) {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = book.title;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(" — " + book.author));
    list.appendChild(li);
  }
}

renderBooks(books); // renders all 6 books

const shortList = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Becoming", author: "Michelle Obama" },
];

renderBooks(shortList); // clears and renders just 2

// list.innerHTML = "" wipes the previous render before each call
// so calling it twice shows only the second list, not both stacked`,
        },
      ],
    },
    {
      heading: "Exercise 4 — AI, Refactor My Code",
      description: "Accept, reject, or modify every change AI makes. You own the result.",
      qa: [
        {
          q: `The messy.js code I sent to AI for refactoring`,
          a: `const score1 = 85;
const score2 = 92;
const score3 = 78;
const score4 = 88;
const score5 = 95;

const sum = score1 + score2 + score3 + score4 + score5;
const average = sum / 5;
console.log("Average:", average);

let highest = score1;
if (score2 > highest) highest = score2;
if (score3 > highest) highest = score3;
if (score4 > highest) highest = score4;
if (score5 > highest) highest = score5;
console.log("Highest:", highest);`,
        },
        {
          q: `What AI returned`,
          a: `const scores = [85, 92, 78, 88, 95];

// Calculate the average of an array of numbers
function getAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

// Find the highest number in an array
function getHighest(arr) {
  return Math.max(...arr);
}

console.log("Average:", getAverage(scores)); // 87.6
console.log("Highest:", getHighest(scores)); // 95`,
        },
        {
          q: `Decision table — AI's changes, what each does, accept/reject/modify and why`,
          a: `AI's Change                       | What It Does                              | Decision | Why
----------------------------------|-------------------------------------------|----------|-----------------------------------------------
Moved scores to an array          | Single source of data, easy to update     | Accept   | Cleaner — one place to change scores
Created getAverage(arr) function  | Separates logic, makes it reusable        | Accept   | Good pattern — function does one job
Created getHighest(arr) function  | Same — reusable, named clearly            | Accept   | Same reason
Used .reduce() for sum            | Concise but unfamiliar syntax             | Modify   | Not comfortable with reduce yet — too early
Used Math.max(...scores)          | Spread operator — Phase 2 content        | Modify   | Asked AI for a for...of version instead`,
        },
        {
          q: `Final refactored version after applying my decisions`,
          a: `const scores = [85, 92, 78, 88, 95];

// Calculate the average of an array of numbers
function getAverage(arr) {
  let sum = 0;
  for (const score of arr) {
    sum += score;
  }
  return sum / arr.length;
}

// Find the highest number in an array
function getHighest(arr) {
  let highest = arr[0];
  for (const score of arr) {
    if (score > highest) {
      highest = score;
    }
  }
  return highest;
}

console.log("Average:", getAverage(scores)); // 87.6
console.log("Highest:", getHighest(scores)); // 95`,
        },
        {
          q: `Did the output match the original messy.js?`,
          a: `Yes — identical output.

Average: 87.6  ✓  (85 + 92 + 78 + 88 + 95 = 438 ÷ 5 = 87.6)
Highest: 95    ✓

Same numbers, cleaner structure. No .reduce(), no spread operator —
everything readable at the current level. If something breaks, I can
trace through it line by line because I understand every piece.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Mini-App: Todo List",
      description: "Functions + arrays + conditionals + DOM updates. The pattern behind every React app.",
      qa: [
        {
          q: `The HTML structure`,
          a: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Todo List</h1>

    <form id="todo-form">
      <label for="task-input">New task</label>
      <input id="task-input" type="text" placeholder="What needs doing?">
      <button id="add-btn" type="submit">Add</button>
    </form>

    <p id="empty-msg" style="display:none;color:#f87171;font-family:monospace;font-size:0.85rem;">
      Please enter a task first.
    </p>

    <ul id="task-list"></ul>
    <button id="clear-btn">Clear all</button>

    <script src="todo.js"></script>
  </body>
</html>`,
        },
        {
          q: `The JavaScript (todo.js)`,
          a: `// Source of truth — all tasks live here
// const protects the binding (tasks can't be reassigned to a new array)
// but .push() and setting .length = 0 still work on the contents
const tasks = [];

// DOM elements
const input    = document.getElementById("task-input");
const addBtn   = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const list     = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");

// Wipe and re-render the full list from the tasks array
function renderTasks() {
  list.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  }
}

// Add handler — validate, push to array, re-render
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask === "") {
    emptyMsg.style.display = "block";
    return;
  }
  emptyMsg.style.display = "none";
  tasks.push(newTask);
  input.value = "";
  renderTasks();
});

// Clear handler — empty the array, re-render (renders nothing)
clearBtn.addEventListener("click", () => {
  tasks.length = 0;
  renderTasks();
});`,
        },
        {
          q: `Did it work? What happened when I tested adding tasks, submitting empty, and clearing?`,
          a: `Adding a task: typed "Buy groceries", clicked Add — appeared in the list immediately. Typed another, clicked Add — both showed. The array grew with each addition and renderTasks() rebuilt the list from scratch each time.

Submitting empty: clicked Add with nothing in the input — the red "Please enter a task first." message appeared. Typed something and clicked Add — message disappeared, task added normally.

Clearing: clicked "Clear all" — the list wiped instantly. tasks.length = 0 empties the array in place (without replacing it), then renderTasks() renders an empty list.

The key insight: the list on the page is never the source of truth. tasks[] is. renderTasks() always builds the DOM fresh from the array. This means the page can never get out of sync with the data.`,
        },
        {
          q: `Stretch — checkboxes with classList.toggle to cross out completed tasks`,
          a: `// Updated renderTasks() to include a checkbox per item
function renderTasks() {
  list.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("span");
    label.textContent = task;

    // When checkbox is clicked, toggle the "done" class on the span
    checkbox.addEventListener("change", () => {
      label.classList.toggle("done");
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    list.appendChild(li);
  }
}

// CSS added to style.css:
// .done {
//   text-decoration: line-through;
//   opacity: 0.5;
// }

// Checking a box strikes through the task text
// Unchecking removes the strikethrough — classList.toggle handles both directions`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description: "Read a function aloud line by line, then explain it, then say what you'd change.",
      qa: [
        {
          q: "Which function did I pick to read aloud?",
          a: "",
        },
        {
          q: "My literal read-through (line by line)",
          a: "",
        },
        {
          q: "My plain English explanation",
          a: "",
        },
        {
          q: "One thing I'd change and why",
          a: "",
        },
        {
          q: `Partner's question: "Why would you change that?" — my defense`,
          a: "",
        },
      ],
    },
    {
      heading: "Going Deeper — Optional Extensions",
      description: "Filter buttons, localStorage persistence, and map/filter rewrites.",
      qa: [
        {
          q: "Filter buttons — All, Done, Not Done. Track task state as objects, filter the rendered list.",
          a: `// Updated data structure — tasks are objects instead of strings
const tasks = [];
// Each task: { text: "Buy groceries", done: false }

function renderTasks(filter = "all") {
  list.innerHTML = "";

  const filtered = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "notdone") return !task.done;
    return true; // "all"
  });

  for (const task of filtered) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    const label = document.createElement("span");
    label.textContent = task.text;
    if (task.done) label.classList.add("done");

    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      renderTasks(filter);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    list.appendChild(li);
  }
}

// Filter buttons in HTML:
// <button onclick="renderTasks('all')">All</button>
// <button onclick="renderTasks('done')">Done</button>
// <button onclick="renderTasks('notdone')">Not Done</button>

// Add handler updated:
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask === "") { emptyMsg.style.display = "block"; return; }
  emptyMsg.style.display = "none";
  tasks.push({ text: newTask, done: false });
  input.value = "";
  renderTasks();
});`,
        },
        {
          q: "localStorage persistence — tasks survive a page refresh.",
          a: `// Save to localStorage after every change
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from localStorage on page start
const saved = localStorage.getItem("tasks");
if (saved) {
  const parsed = JSON.parse(saved);
  for (const task of parsed) {
    tasks.push(task);
  }
  renderTasks();
}

// Add saveTasks() call after every mutation:
// After tasks.push()    → saveTasks();
// After tasks.length=0  → saveTasks();
// After task.done flip  → saveTasks();

// JSON.stringify turns the array into a string for storage
// JSON.parse turns it back into an array on load
// localStorage.getItem returns null if the key doesn't exist
// — the || "[]" fallback gives JSON.parse an empty array instead of null`,
        },
        {
          q: "Convert rendering to .map() and .filter(). Compare readability.",
          a: `// map() version of renderBooks from Exercise 3
function renderBooks(bookArray) {
  list.innerHTML = "";
  bookArray
    .map((book) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = book.title;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" — " + book.author));
      return li;
    })
    .forEach((li) => list.appendChild(li));
}

// filter() version of the "names longer than 4 chars" loop
const longNames = names.filter((name) => name.length > 4);
console.log(longNames); // ["Jordan", "Riley", "Casey"]

// Readability comparison:
// for...of is more explicit — you can see every step
// .map() and .filter() are shorter but require knowing the methods
// At this stage, for...of is easier to debug because you can add
// console.logs inside the loop — harder to do inside a .map() chain`,
        },
      ],
    },
    {
      heading: "Coding Challenge — FizzBuzz",
      description: "For loop + conditionals + modulo. Classic interview problem.",
      qa: [
        {
          q: "The FizzBuzz problem — what it asks",
          a: `Loop from 1 to 100. For each number:
  - If divisible by both 3 and 5 → print "FizzBuzz"
  - If divisible by 3 only       → print "Fizz"
  - If divisible by 5 only       → print "Buzz"
  - Otherwise                    → print the number

The key trap: check the combined case (divisible by both) FIRST.
If you check divisible-by-3 first, numbers like 15 print "Fizz" and never reach "FizzBuzz".`,
        },
        {
          q: "My solution",
          a: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Sample output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
// 11, Fizz, 13, 14, FizzBuzz, 16...
// ...
// 98, Fizz, Buzz`,
        },
        {
          q: "How modulo makes this work",
          a: `% returns the remainder after division.

  15 % 3 = 0  → 15 is divisible by 3 (no remainder)
  15 % 5 = 0  → 15 is divisible by 5 (no remainder)
  7  % 3 = 1  → not divisible by 3
  10 % 3 = 1  → not divisible by 3
  10 % 5 = 0  → divisible by 5

So i % 3 === 0 means "i divides evenly by 3."
Combining both checks with && catches the FizzBuzz case.

The order matters: JavaScript evaluates if/else top to bottom and stops
at the first true condition. FizzBuzz must be first or it never fires.`,
        },
        {
          q: "What I'd change or extend",
          a: `A cleaner version that avoids repeating the modulo checks:

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}

// output starts as an empty string
// If divisible by 3, append "Fizz"
// If divisible by 5, append "Buzz"
// If both, output becomes "FizzBuzz" automatically
// output || i — if output is still empty (""), it's falsy, so i prints instead

// This is the version most developers would write.
// It handles the combined case without a special check.`,
        },
      ],
    },
  ],
};
