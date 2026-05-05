export const week2day2 = {
  number: 11,
  label: "Day 2",
  title: "Week 2, Day 2 — Forms & JavaScript Interactivity",
  subtitle: "Find it. Listen for it. Do something.",
  color: "#a78bfa",
  sections: [
    {
      heading: "Exercise 1 — Build a Contact Form",
      description: "Pure HTML, no JavaScript yet. Get comfortable with form structure and built-in browser validation.",
      qa: [
        {
          q: "The contact form HTML I typed out",
          a: `<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Contact Me</h1>

    <form id="contact-form">
      <label for="name-input">Name</label>
      <input id="name-input" type="text" required>

      <label for="email-input">Email</label>
      <input id="email-input" type="email" required>

      <label for="message-input">Message</label>
      <textarea id="message-input" required></textarea>

      <button type="submit">Send</button>
    </form>
  </body>
</html>

The label-for and input-id pairing clicked immediately — the for attribute on the label has to match the id on the input. That's what connects them. Click the label, the input gets focus. It feels obvious once you see it work.`,
        },
        {
          q: "What happened when I clicked Send without filling anything in",
          a: `The browser caught it before anything happened. A small tooltip appeared directly on the Name field — "Please fill out this field." No JavaScript, no event listener, nothing I wrote. The required attribute on the input is enough. The form never actually submitted.

That's the browser doing validation for free. It knows the field is required, it knows it's empty, it stops the submit and tells the user where the problem is. All I had to do was write required.`,
        },
        {
          q: "What happened when I entered an invalid email like notanemail",
          a: `Same pattern — the browser caught it, showed a tooltip on the email field: "Please enter an email address." Again, no JavaScript. The type="email" attribute is doing that work. The browser knows what an email address is supposed to look like (something @ something . something), and it won't let the form submit if the value doesn't match that shape.

Two attributes — required and type="email" — gave me validation I didn't have to write a single line of JS for. I didn't expect that.`,
        },
        {
          q: "CSS I added to style the form — and what changed visually",
          a: `form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 480px;
}
input, textarea {
  padding: 8px;
  font-size: 16px;
}
button {
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
}

Before the CSS, everything was squished together — label directly touching input, no spacing, the button looked like a default browser button from 2003. After, the flex column layout stacked everything cleanly with consistent gaps. The max-width kept it from stretching all the way across the screen. cursor: pointer on the button was a small thing but it felt right — you expect a pointer on something clickable.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — The Greet Me Page",
      description: "Build the lecture example from scratch — getElementById, addEventListener, preventDefault.",
      qa: [
        {
          q: "The greet.js I wrote and what each line does",
          a: `// Grab the form element by its id — gives us the whole form so we can listen to it
const form = document.getElementById("greet-form");

// Grab just the input — we'll read its value when the form submits
const nameInput = document.getElementById("name-input");

// Grab the paragraph where we'll write the greeting
const greeting = document.getElementById("greeting");

// Listen for the form's submit event
form.addEventListener("submit", (event) => {
  // Stop the browser from reloading the page — without this, everything resets
  event.preventDefault();

  // Read whatever the user typed into the name input
  const name = nameInput.value;

  // Write the greeting into the paragraph as plain text
  greeting.textContent = \`Hello, \${name}!\`;
});

The pattern that locked in: find the element, listen for something to happen, do something when it does. Three steps. Every interactive thing on the web is some version of those three steps.`,
        },
        {
          q: "What happened when I commented out event.preventDefault()",
          a: `The page reloaded. I typed my name, clicked Greet me, saw the greeting flash on the screen for maybe half a second — then gone. The page reset to its initial state like I'd never touched it.

That's what forms do by default. A submit event tells the browser to send the form data somewhere, which triggers a navigation, which reloads the page. preventDefault intercepts that. It says: I'm handling this, don't do your default thing. Without it, the browser does its default thing and any DOM changes you made disappear immediately.

The greeting technically appeared — it just vanished before I could read it. Which is a useful way to understand what preventDefault is actually stopping.`,
        },
        {
          q: "What changed when I switched from .textContent to .innerHTML and used <strong>",
          a: `greeting.innerHTML = \`<strong>Hello, \${name}!</strong>\`;

The greeting appeared bold. The browser parsed the <strong> tags as actual HTML and rendered them — so instead of seeing the literal characters <strong>Hello...</strong>, I saw the word Hello in bold weight.

That's the difference. textContent treats everything as plain text — angle brackets, tags, all of it gets shown literally on the page. innerHTML treats the string as HTML and parses it, so tags actually do something. More powerful, but that power is exactly the problem.`,
        },
        {
          q: "What the page showed when I typed <em>injected</em> as my name — and why that matters",
          a: `With .innerHTML: the word injected appeared on the page in italics. The <em> tags were parsed as HTML and the browser rendered them. I didn't type italics — I typed angle brackets and the word em — but the page treated my input as a styling instruction and followed it.

With .textContent: the literal string <em>injected</em> appeared on the page. Angle brackets, the letters, all of it. No italics. Just text.

That's the risk of innerHTML with user input. If someone types a script tag instead of an em tag, the browser might execute it. Anything the user types gets treated as code. textContent closes that door — it doesn't matter what the user types, it'll always be rendered as text, never as markup or script. For anything coming from a user, .textContent is the right call.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — A 2-Question Survey",
      description: "Collect multiple inputs and display a summary on submit. Same pattern as Exercise 2, two inputs instead of one.",
      qa: [
        {
          q: "The survey.js I wrote — and what I figured out on my own vs. where I got stuck",
          a: `const form = document.getElementById("survey-form");
const favColor = document.getElementById("fav-color");
const yearsCoding = document.getElementById("years-coding");
const summary = document.getElementById("summary");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const color = favColor.value;
  const years = yearsCoding.value;

  summary.textContent = \`Your favorite color is \${color} and you've been coding for \${years} year(s).\`;
});

Figured out on my own: the structure was identical to the greet page, just with two inputs instead of one. getElementById twice, .value twice, build the string with both. That part felt natural — the pattern transferred.

Where I got stuck: I tried using yearsCoding.valueAsNumber instead of .value at first because I thought I should be working with a number type since the input is type="number". It returned NaN when I concatenated it into the string before I figured out .value gives me a string representation of whatever's in the field, which is what I needed here.`,
        },
        {
          q: "The summary text that appeared — what it looked like in the browser",
          a: `Your favorite color is teal and you've been coding for 2 year(s).

Plain text, showed up right below the form where the summary div lives. No styling yet — just the sentence appearing where nothing was before. The "(s)" on year is a small thing but it bugged me enough to add it. "1 year(s)" still looks awkward but it handles both cases without an if statement, which I didn't want to deal with yet.`,
        },
        {
          q: "Stretch: the third question I added and how I included it in the summary",
          a: `Added a "What's your favorite language?" text input with id="fav-lang".

In the HTML:
<label for="fav-lang">Favorite programming language?</label>
<input id="fav-lang" type="text" required>

In survey.js:
const favLang = document.getElementById("fav-lang");

// inside the submit handler:
const lang = favLang.value;
summary.textContent = \`Your favorite color is \${color}, you've been coding for \${years} year(s), and your favorite language is \${lang}.\`;

Grabbed the element, read the value, dropped it into the template literal. Same three steps. The pattern is the same whether there are two inputs or ten — you're just repeating the same moves.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — AI, Build Me an Interactive Thing",
      description: "Practice the accept/reject/modify workflow on JavaScript code. Read every line. Own every decision.",
      qa: [
        {
          q: "The AI-generated HTML and JS (the doubler page)",
          a: `<!-- doubler.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Number Doubler</title>
  </head>
  <body>
    <h1>Double Your Number</h1>
    <form id="double-form">
      <input id="num-input" type="number" placeholder="Enter a number">
      <button type="submit">Show double</button>
    </form>
    <p id="result"></p>
    <script src="doubler.js"></script>
  </body>
</html>

// doubler.js
// Get the form element by its ID
const form = document.getElementById("double-form");

// Get the number input element
const input = document.getElementById("num-input");

// Get the paragraph where the result will be shown
const result = document.getElementById("result");

// Listen for the form submit event
form.addEventListener("submit", function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the number from the input and convert it to a number
  const num = parseFloat(input.value);

  // Calculate the double
  const doubled = num * 2;

  // Display the result in the paragraph
  result.innerHTML = "Your number doubled is: " + doubled;
});`,
        },
        {
          q: "My accept/reject/modify table — the decisions I made and why",
          a: `Line                                          | What It Does                                        | Decision | Why
----------------------------------------------+-----------------------------------------------------+----------+----------------------------------------------
const form = document.getElementById(...)    | Finds the form so we can attach a listener          | Accept   | Correct and clear
const input = document.getElementById(...)   | Finds the number input so we can read its value     | Accept   | Same — no issue
const result = document.getElementById(...)  | Finds the output paragraph                          | Accept   | Fine
form.addEventListener("submit", function(){}) | Listens for submit, runs the callback               | Modify   | Switched to arrow function to stay consistent with how I've been writing it
event.preventDefault()                       | Stops the page from reloading                       | Accept   | Required — without this nothing persists
const num = parseFloat(input.value)          | Converts the string value to a float               | Modify   | Changed to Number() — same result, cleaner for whole numbers since I'm not doing decimal math here
result.innerHTML = "Your number doubled..."  | Writes the result into the paragraph                | Modify   | Switched to .textContent — the result is a number, no HTML needed, and innerHTML is a habit I don't want to build`,
        },
        {
          q: "What I actually changed — and whether it still worked after",
          a: `Three changes:

1. function(event) → (event) => — arrow function syntax. Purely stylistic, same behavior.

2. parseFloat(input.value) → Number(input.value) — Number() handles integers cleanly. If someone types 4, parseFloat gives 4, Number gives 4. Same result here. I just prefer Number() when I'm not expecting decimals.

3. result.innerHTML → result.textContent — the result is always a number in a plain string. There's no markup in it. No reason to use innerHTML.

Still worked after all three. Nothing broke. The page doubled the number and displayed it exactly as before — just without the innerHTML risk and with consistent arrow function style.`,
        },
        {
          q: "If I broke something: the console error, the line, and how I fixed it",
          a: `Nothing broke this time. All three changes were safe swaps — function declarations and arrow functions behave the same in an addEventListener callback, Number() and parseFloat() return the same value for whole number input, and .textContent vs .innerHTML produce identical output when the string contains no HTML.

The one thing I watched for: if I'd tried to use textContent on a string that contained tags I actually wanted rendered, it would have shown the tags literally. But since the output was always "Your number doubled is: 8" — plain text — that wasn't an issue.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Build Your Own",
      description: "Pick one small interactive idea. Build it. Read every line. HTML and CSS first, then JavaScript one feature at a time.",
      qa: [
        {
          q: "The option I picked (counter / todo / color changer / own idea) — and why",
          a: `Option A — the counter. Three buttons (+1, -1, Reset), one number that updates.

I picked it because it has three separate event listeners, which means I had to repeat the find-it-listen-do-something pattern three times. The greet page and survey page only had one form submission to handle. The counter forced me to wire up multiple independent buttons and make sure they all updated the same piece of state. That felt like the right thing to practice.`,
        },
        {
          q: "The HTML and CSS I wrote first — layout before logic",
          a: `<!-- counter.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Counter</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 id="count">0</h1>
    <div class="controls">
      <button id="btn-minus">-1</button>
      <button id="btn-reset">Reset</button>
      <button id="btn-plus">+1</button>
    </div>
    <script src="counter.js"></script>
  </body>
</html>

/* style.css additions */
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #0f0f1a;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
}
h1 {
  font-size: 6rem;
  margin-bottom: 24px;
  color: #a78bfa;
}
.controls {
  display: flex;
  gap: 12px;
}
button {
  padding: 12px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid #3a3a3a;
  background: #1a1a2e;
  color: #e0e0e0;
  border-radius: 6px;
}
button:hover {
  background: #2d2d44;
}

Got the layout right before touching JS. The number is centered on the page, big enough to read at a glance, with three buttons below it. Confirmed it looked right in the browser first.`,
        },
        {
          q: "The JavaScript I added — the pattern: find the element, add an event listener, do something",
          a: `// counter.js

// Find the h1 where the count displays
const countDisplay = document.getElementById("count");

// Find all three buttons
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");
const btnPlus = document.getElementById("btn-plus");

// This variable holds the actual count — the source of truth
let count = 0;

// When +1 is clicked: increment, update the display
btnPlus.addEventListener("click", () => {
  count = count + 1;
  countDisplay.textContent = count;
});

// When -1 is clicked: decrement, update the display
btnMinus.addEventListener("click", () => {
  count = count - 1;
  countDisplay.textContent = count;
});

// When Reset is clicked: set count back to 0, update the display
btnReset.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

The thing that clicked: the count variable is separate from what's on the page. The h1 just shows whatever count holds. I change count, then I update the display to reflect it. The DOM doesn't store the number — my variable does. The DOM is just the view.`,
        },
        {
          q: "What surprised me or broke — and how I debugged it",
          a: `Two things caught me.

First: I initially wrote const count = 0 instead of let count = 0. Clicked +1, got a console error — "Assignment to constant variable." The fix was obvious once I saw it — count needs to change, so it can't be a const. Switched to let.

Second: I initially tried to do count++ directly in the textContent line — countDisplay.textContent = count++. It showed the right number, but it was always one step behind because count++ returns the value before incrementing. Changed it to count = count + 1 on its own line and then set textContent separately. Clearer, and it works correctly.

Neither took long to fix. The console error for the const was immediate and specific. The off-by-one I caught just by clicking the button a few times and noticing the display lagged.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description: "Screen-share your interactive page. Walk your partner through what happens when you click submit — step by step.",
      qa: [
        {
          q: "The question my partner asked me",
          a: "",
        },
        {
          q: "The part I struggled to explain out loud — and what I now know I need to revisit",
          a: "",
        },
      ],
    },
    {
      heading: "Going Deeper (Optional)",
      description: "Pick one if you have time: JS validation on the survey, fade-in with CSS transitions, or localStorage persistence.",
      qa: [
        {
          q: "Which challenge I tried and what happened",
          a: `Tried the JS validation on the survey — checking if the favorite color field is empty before submitting, and showing an error message instead of the summary if it is.

const form = document.getElementById("survey-form");
const favColor = document.getElementById("fav-color");
const yearsCoding = document.getElementById("years-coding");
const summary = document.getElementById("summary");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const color = favColor.value.trim();
  const years = yearsCoding.value;

  if (color === "") {
    summary.textContent = "Please tell me your favorite color.";
    return;
  }

  summary.textContent = \`Your favorite color is \${color} and you've been coding for \${years} year(s).\`;
});

Two things I added beyond the spec: .trim() on the color value, because someone typing a space and hitting submit should still trigger the validation — and return inside the if block, which exits the function before it can reach the summary line. Without return, the if block would set the error message and then immediately overwrite it with the summary. The return is what makes the if act as a guard.`,
        },
      ],
    },
  ],
};
