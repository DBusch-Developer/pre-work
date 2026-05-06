export const week2day3 = {
  number: 12,
  label: "Day 3",
  title: "Week 2, Day 3 — Debugging & DevTools",
  subtitle: "The bug is always somewhere. This is how you find it.",
  color: "#fb923c",
  sections: [
    {
      heading: "Warmup — Break Your Day 2 Page on Purpose",
      description: "Four intentional breaks on greet.html + greet.js. Watch what happens. Write down what you saw.",
      qa: [
        {
          q: `Break 1: Changed document.getElementById("name-input") to document.getElementById("nam-input"). What error appeared in the console?`,
          a: `Uncaught TypeError: Cannot read properties of null (reading 'value')
    at HTMLFormElement.<anonymous> (greet.js:14:22)

The typo "nam-input" doesn't match any element ID in the HTML, so getElementById returned null. Null has no .value property, so the moment the submit handler ran and tried to read nameInput.value, it crashed.

The console points directly to the line — greet.js:14 — which is where const name = nameInput.value; lives. The error message even tells you what property it was trying to read when it failed: "reading 'value'".`,
        },
        {
          q: "Break 2: Commented out event.preventDefault(). Submitted the form. What happened and why did the result disappear?",
          a: `The greeting flashed on the screen for maybe half a second, then vanished. The page reloaded and reset to its blank initial state.

What happened: without event.preventDefault(), the form did what forms do by default — it submitted, which triggered a page navigation. The browser reloaded the page. Any DOM changes (like writing the greeting into the paragraph) only existed in the current page's memory. Once the page reloaded, they were gone.

The greeting technically appeared. It just got wiped out before it could be read. That half-second flash is the browser completing the textContent write and then immediately reloading.

This is why preventDefault is the first line in every submit handler. Without it, you're racing against the browser's default behavior — and losing.`,
        },
        {
          q: "Break 3: Changed nameInput.value to nameInput.values (plural). Clicked submit. What did the greeting show? Was there an error?",
          a: `The greeting showed: "Hello, undefined!"

No console error. That's what makes this one sneaky — .values is not a property that exists on an input element, but JavaScript doesn't throw when you access a property that doesn't exist. It just returns undefined silently. Then undefined gets dropped into the template literal and rendered as the literal word "undefined".

So the code ran fine. The output just looked broken. This is a logic bug, not a syntax error — the kind the console won't catch for you. You have to read the output, notice it's wrong, and trace back to where the wrong value came from.`,
        },
        {
          q: `Break 4: Moved <script src="greet.js"></script> from bottom of <body> to inside <head>. What happened and why?`,
          a: `The page crashed immediately on load with:

Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at greet.js:8:6

When the script tag is in <head>, the browser runs the JavaScript the moment it hits that tag — before it has parsed any of the HTML below it. So when greet.js tries to run document.getElementById("greet-form"), the form doesn't exist yet. getElementById returns null. And null.addEventListener() throws immediately.

The fix is putting the script at the bottom of <body>, after all the HTML elements, so the DOM is fully built before any JavaScript tries to interact with it. This is why the script tag belongs at the end — not because of style, because of execution order.`,
        },
      ],
    },
    {
      heading: "Exercise 1 — Read the Error",
      description: "Five error messages. For each: type, plain English meaning, line number, fix.",
      qa: [
        {
          q: `Error A: "Uncaught ReferenceError: username is not defined at script.js:3:18"`,
          a: `Type: ReferenceError

Plain English: JavaScript is looking for a variable called "username" but it doesn't exist anywhere in scope. The variable was declared as "userName" (capital N) on line 1 — but line 3 tries to use "username" (all lowercase). JavaScript is case-sensitive: userName and username are two completely different names.

Line: 3
Fix: Change "username" on line 3 to "userName" to match the declaration.

  // Before (broken):
  const greeting = "Hello, " + username;

  // After (fixed):
  const greeting = "Hello, " + userName;`,
        },
        {
          q: `Error B: "Uncaught TypeError: Cannot read properties of undefined (reading 'length') at script.js:2:24"`,
          a: `Type: TypeError

Plain English: Something is undefined, and you tried to read a property off it. "let fruits;" declares the variable but never assigns it a value — so its value is undefined by default. undefined has no properties, so accessing .length on it throws.

Line: 2
Fix: Give fruits a value before you try to access its properties.

  // Before (broken):
  let fruits;
  console.log(fruits.length); // fruits is undefined

  // After (fixed):
  let fruits = [];
  console.log(fruits.length); // 0 — empty array has length`,
        },
        {
          q: `Error C: "Uncaught SyntaxError: Unexpected token '}' at script.js:4:1"`,
          a: `Type: SyntaxError

Plain English: JavaScript found a closing curly brace it wasn't expecting. The function has one body that opens with { and needs one } to close it. There are two } in the code — line 3 closes the function correctly, and then line 4 has an extra one that has nothing to close.

Line: 4
Fix: Delete the extra } on line 4.

  // Before (broken):
  function sayHello(name) {
    console.log("Hello, " + name)
  }
  } // ← this one doesn't belong to anything

  // After (fixed):
  function sayHello(name) {
    console.log("Hello, " + name)
  }`,
        },
        {
          q: `Error D: "Uncaught TypeError: document.getElementByID is not a function at script.js:1:24"`,
          a: `Type: TypeError

Plain English: getElementByID is not a real method — it doesn't exist on the document object. The correct spelling is getElementById (lowercase 'd'). JavaScript is case-sensitive, so "getElementByID" and "getElementById" are completely different names. Since getElementByID doesn't exist, calling it throws a TypeError.

Line: 1
Fix: Change the capitalization.

  // Before (broken):
  const title = document.getElementByID("main-title");

  // After (fixed):
  const title = document.getElementById("main-title");`,
        },
        {
          q: `Error E: "Uncaught SyntaxError: Unterminated string literal at script.js:1:20"`,
          a: `Type: SyntaxError

Plain English: A string was opened with a quotation mark but never closed. The semicolon at the end got swallowed into the string — JavaScript kept reading looking for a closing quote and hit the end of the line without finding one.

Line: 1
Fix: Add the closing quote mark before the semicolon.

  // Before (broken):
  const message = "Hello, World!;
  //                            ^ missing closing quote — semicolon is inside the string

  // After (fixed):
  const message = "Hello, World!";`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Console.log Detective",
      description: "The code runs. The math is wrong. Add console.logs and trace exactly where it breaks.",
      qa: [
        {
          q: "The calculateAverage bug — what SHOULD the output be for scores 80, 90, 70?",
          a: `(80 + 90 + 70) / 3 = 240 / 3 = 80

Expected output: "Your average score is: 80"
Actual output:   "Your average score is: 120"

The sum is calculated correctly at 240. The bug is on the next line — dividing by 2 instead of 3.`,
        },
        {
          q: "Console.log trace — fill in the variable values and mark which one is wrong",
          a: `Variable   | Expected | Actual | Correct?
-----------|----------|--------|--------
score1     | 80       | 80     | ✓
score2     | 90       | 90     | ✓
score3     | 70       | 70     | ✓
sum        | 240      | 240    | ✓
average    | 80       | 120    | ✗

The sum is correct. The average is wrong. That tells you exactly which line has the bug: const average = sum / 2. The fix: change 2 to 3.`,
        },
        {
          q: "Which line has the bug? What's the fix?",
          a: `Bug line: const average = sum / 2;

240 / 2 = 120 — wrong. There are 3 scores, not 2.

Fix: const average = sum / 3;

240 / 3 = 80 — correct.

The console.log trace made this trivial to find. sum logged as 240 (correct), average logged as 120 (wrong). The bug is on the one line between those two logs.`,
        },
        {
          q: "The applyDiscount bug — console.log(applyDiscount(150)) expected 135, got 15. Find and fix it.",
          a: `Bug: const discounted = price * 0.10;

This calculates 10% OF the price — the discount amount — not the price after the discount is applied.

  price * 0.10 = 150 * 0.10 = 15   ← this is the discount, not the final price
  price * 0.90 = 150 * 0.90 = 135  ← this is what the customer actually pays

A 10% discount means the customer pays 90% of the original price.

Fix: const discounted = price * 0.90;

console.log added inside the function:
  console.log("price:", price);           // 150
  console.log("discounted:", discounted); // was 15, now 135

The naming "discounted" was part of the confusion — the variable was storing the discount amount, not the discounted price. Renaming it "discountAmount" for the original value and "discountedPrice" for what the customer pays would make the intent clearer.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — DevTools Scavenger Hunt",
      description: "Live browser inspection on your greet.html page from Day 2.",
      qa: [
        {
          q: "Challenge 1 — Console tab: typed 2 + 2, document.title, then changed document.title. What happened?",
          a: `2 + 2 → the console evaluated it and returned 4 immediately. The console is a live JavaScript environment — any valid JS expression runs right there.

document.title → returned "Greet Me" — the string from the <title> tag in the HTML head.

document.title = "I changed the title!" → the browser tab updated instantly. The text in the tab changed from "Greet Me" to "I changed the title!" without any page reload. That's the DOM being mutated live — JavaScript can change anything on the page, including the tab title, in real time.`,
        },
        {
          q: "Challenge 2 — Elements tab: found the CSS rule styling the heading, changed color to red, added text-decoration: underline. What happened?",
          a: `Clicking the h1 in the Elements panel highlighted it and opened the Styles panel on the right showing:

  h1 {
    font-size: 2rem;
    font-weight: normal;
    color: #f5f5f5;
    ...
  }

Double-clicking the color value (#f5f5f5) let me type "red" — the heading turned red instantly on the page without refreshing.

Adding text-decoration: underline in the Styles panel (clicking the empty space at the bottom of the rule) drew a line under the heading text immediately.

Both changes were live and instant. No saving, no refreshing. DevTools is editing the CSS in the browser's memory directly — which is why the changes disappeared on refresh. The actual style.css file on disk was never touched.`,
        },
        {
          q: "Challenge 3 — Box Model: which element, and what were the margin, border, padding, and content dimensions?",
          a: `Clicked on the form element in the Elements panel and switched to the Computed tab.

Box model:
  Content:  480px × auto (the max-width from the form CSS rule)
  Padding:  0 (no padding set on the form itself)
  Border:   0 (no border on the form)
  Margin:   0 top/bottom from reset, 0 left/right

Clicked on an input element:
  Content:  ~456px × 38px
  Padding:  10px top/bottom, 12px left/right (from the input CSS rule)
  Border:   1px on all sides (#2d2d44)
  Margin:   0

The box model diagram shows exactly what's eating space — the 10px padding inside the input is why text doesn't butt up against the edge.`,
        },
        {
          q: "Challenge 4 — Network tab: how many files loaded? What did you find?",
          a: `Refreshed with the Network tab open. Three files loaded:

  greet.html    — the HTML document itself
  style.css     — the stylesheet linked in the head
  greet.js      — the script linked at the bottom of body

Clicked on style.css in the Network tab → the Response tab showed the full CSS source, the same as what's in the file. The browser fetched it over HTTP and cached it.

No images, no fonts (Georgia is a system font, loaded locally), no external requests. Clean and minimal.`,
        },
        {
          q: "Challenge 5 — Live editing: changed a paragraph's text in the Elements panel. What happened on refresh?",
          a: `Double-clicked the text content of the <p id="greeting"> element in the Elements panel and typed "I edited this directly in DevTools."

It appeared on the page immediately. No JavaScript, no form submission — just direct DOM editing through the browser.

Refreshed the page → gone. Back to an empty paragraph, exactly as written in greet.html.

That's the important lesson: DevTools edits are in-memory only. They modify the living DOM that the browser is currently rendering, not the file on disk. The moment you refresh, the browser reloads the original HTML and the change disappears. DevTools is for experimenting and debugging — not for making permanent changes.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Fix AI's Bugs",
      description: "Four AI-generated programs, one bug each. Found without asking AI first.",
      qa: [
        {
          q: `Buggy Program 1 — Greeting Generator: heading stays empty. Found the bug, fixed it.`,
          a: `Bug: document.getElementById("greetng") — typo, missing the 'i'.

getElementById("greetng") searched the DOM for an element with id="greetng". There is no such element — the h1 has id="greeting". So it returned null. Then null.textContent = greeting threw:

  Uncaught TypeError: Cannot read properties of null (reading 'textContent')

Found it: checked the console, saw the TypeError, it pointed to the exact line. Compared the string in the JS to the id in the HTML — spotted the missing 'i'.

Fix:
  // Before: document.getElementById("greetng").textContent = greeting;
  // After:  document.getElementById("greeting").textContent = greeting;`,
        },
        {
          q: `Buggy Program 2 — Color Changer: clicking the button does nothing. No console error.`,
          a: `Bug: document.querySelector("h1").style.colour = selectedColor;

"colour" is the British English spelling. JavaScript's style API uses American English — "color". .style.colour is not a valid CSS property in the DOM style object, so the assignment silently does nothing. No error, no effect.

This is the hardest kind of bug to find — it fails silently. The code runs without throwing, but nothing happens. No console error to point you to a line. You have to read the code carefully and know that .style.color is the correct property.

Found it: added console.log(selectedColor) to confirm the color was being picked correctly (it was). Then looked at the line that was supposed to apply it — noticed the British spelling.

Fix:
  // Before: document.querySelector("h1").style.colour = selectedColor;
  // After:  document.querySelector("h1").style.color = selectedColor;`,
        },
        {
          q: `Buggy Program 3 — Counter: display shows the word "count" instead of the number.`,
          a: `Bug: document.getElementById("count").textContent = "count";

The string literal "count" (in quotes) was passed instead of the variable count (no quotes). JavaScript set the text content to the word "count" exactly as written — because that's what a string literal is.

Found it: clicked +1, saw the word "count" appear instead of 1. Read the line — spotted the quotes. The variable name and the string representation are identical, which is what makes it easy to miss.

Fix:
  // Before: document.getElementById("count").textContent = "count";
  // After:  document.getElementById("count").textContent = count;

Removing the quotes tells JavaScript to evaluate count as a variable and use its current numeric value.`,
        },
        {
          q: `Buggy Program 4 — Temperature Message: entering "9" says "It's hot outside!" instead of cold.`,
          a: `Bug: prompt() returns a string, not a number. The variable temp holds the string "9", not the number 9.

When JavaScript compares "9" > 85 using a string on the left, it does string comparison, not numeric comparison. Strings are compared character by character — "9" is compared to the first character of "85" which is "8". Since "9" comes after "8" in Unicode/ASCII order, "9" > "85" evaluates to true. So the first condition fires and the page says "It's hot outside!" for a temperature of 9.

console.log(typeof temp) confirmed it — logged "string" instead of "number".

Fix: Convert the input to a number before comparing.
  // Before:
  const temp = prompt("Enter the temperature in Fahrenheit:");

  // After:
  const temp = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

Now 9 > 85 is a numeric comparison — false — and the correct cold message shows.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Describe a Bug to AI",
      description: "Structured bug report vs. vague one. See which gets better help.",
      qa: [
        {
          q: "The bug I chose and my structured bug description",
          a: `Used Bug 4 — the Temperature Message string comparison issue.

---
I'm working on a temperature message program in JavaScript.

What I expected to happen:
Entering 9 should display "It's cold! Bundle up!" since 9 is below 60.

What actually happens:
Entering 9 displays "It's hot outside!" — the same message as entering 90.

Error message (if any):
No error message. The code runs without throwing — it just gives the wrong output.

Here's the relevant code:

  const temp = prompt("Enter the temperature in Fahrenheit:");

  if (temp > 85) {
    message = "It's hot outside!";
  } else if (temp > 60) {
    message = "Nice weather!";
  } else {
    message = "It's cold! Bundle up!";
  }
---`,
        },
        {
          q: "Did AI identify the correct bug? Was AI's fix correct? Same as mine or different?",
          a: `Yes — AI identified the bug immediately and correctly. It explained that prompt() returns a string and that JavaScript's > operator does lexicographic (string) comparison when the left side is a string, which causes "9" to be greater than "85".

AI's fix was the same as mine: wrap prompt() in parseFloat() or Number(). It also offered parseInt() as an option and noted that parseFloat handles decimals too.

AI explained WHY better than I initially understood it — it spelled out that string comparison is character by character and gave "9" vs "85" as the specific example of why that breaks here.`,
        },
        {
          q: `Sent "my code doesn't work" with the same code. Compare the two responses.`,
          a: `With just "my code doesn't work" and the code pasted in:

AI gave a generic response — it listed several things that could be wrong: maybe the prompt is missing, maybe there's a syntax error somewhere, maybe the element IDs don't match. It found the actual bug eventually, but it led with three guesses before getting there. The response was longer and less focused.

With the structured bug report:

AI went directly to the cause. First sentence identified the type conversion issue. No guessing, no listing possibilities. It knew exactly what "entering 9 shows hot" meant and what kind of bug causes that.

The difference was significant. The structured report gave AI the symptom (9 shows hot), the expected behavior, and the confirmation that no error was thrown — which immediately ruled out syntax errors and pointed to a logic/type issue. "my code doesn't work" gives AI nothing to reason from. It has to guess at what "doesn't work" means.`,
        },
      ],
    },
    {
      heading: "Exercise 6 — Debug a Multi-File Project",
      description: "Two bugs across three files. One file was clean. Decide which is which.",
      qa: [
        {
          q: "Bug 1 — what was it, which file, how did you find it, how did you fix it?",
          a: `Bug: Mismatched HTML list tags — the list opened with <ul> but closed with </ol>.

File: debug-challenge.html

Found it: The task list rendered visually, but something looked off in the layout. Opened DevTools Elements panel — the DOM showed the browser had tried to auto-correct the mismatched tags, which caused unexpected nesting. Looking at the raw HTML, line 22 had <ul id="task-list"> but the closing tag was </ol>.

Fix:
  // Before: <ul id="task-list">  ...  </ol>
  // After:  <ul id="task-list">  ...  </ul>`,
        },
        {
          q: "Bug 2 — what was it, which file, how did you find it, how did you fix it?",
          a: `Bug: CSS property "alignitems" — missing the hyphen. Should be "align-items".

File: debug-style.css

Found it: The delete buttons inside each task item weren't vertically centered — they were floating to the top of the list item instead of aligning with the text. Opened DevTools, clicked on a task item in the Elements panel, checked the Styles panel. The rule "#task-list li" showed up but DevTools had struck through "alignitems" with a warning icon — it wasn't recognized as a valid property.

Fix:
  // Before: alignitems: center;
  // After:  align-items: center;`,
        },
        {
          q: "Which file was clean, and how did you decide?",
          a: `debug-script.js was clean.

Once the HTML and CSS bugs were fixed, everything worked — tasks could be added, displayed, and deleted. No console errors related to the JS, and tracing through the code manually confirmed it was correct: it grabs the input, checks for empty, creates a list item, creates a delete button, wires them together, appends to the list, clears the input. Each step is right.

The decision process: after fixing the two identified bugs, the app worked fully. If the JS had a bug too, something would still be broken. Nothing was. That's how you confirm a file is clean — not just by reading it, but by verifying the working behavior after the other bugs are fixed.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description: "Screen-share your interactive page. Walk your partner through what happens step by step.",
      qa: [
        {
          q: "What bug did I walk through?",
          a: "",
        },
        {
          q: "How did I find it? What tool or technique?",
          a: "",
        },
        {
          q: "What was the fix?",
          a: "",
        },
        {
          q: "How do I know it actually works now?",
          a: "",
        },
        {
          q: `Partner's question: "What would you try first if you saw a similar bug in a different project?"`,
          a: "",
        },
      ],
    },
  ],
};
