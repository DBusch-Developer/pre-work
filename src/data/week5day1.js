export const week5day1 = {
  number: 18,
  label: "Day 1",
  title: "Week 5, Day 1 — Node.js & TypeScript First Look",
  subtitle:
    "JavaScript outside the browser. npm, modules, CLI tools. First type annotations.",
  color: "#84cc16",
  sections: [
    {
      heading: "Exercise 1 — Hello Node",
      description:
        "Run JavaScript from the terminal for the first time. Same language, different environment.",
      qa: [
        {
          q: "hello.js — first run with `node hello.js`",
          a: `Code:
console.log("Hello from Node.js!");
console.log("This is running in the terminal, not a browser.");

Output:
Hello from Node.js!
This is running in the terminal, not a browser.

Both lines print straight to the terminal. No browser, no HTML file, no devtools — just node hello.js and the strings come back.`,
        },
        {
          q: "basics.js — variables, math, string building, conditional, loop",
          a: `Output (Marcus, age 28):
My name is Marcus and I was born in 1998.
Marcus is an adult.
Counting to 5:
1
2
3
4
5

Same JS I've written for the last year. const, template-ish concatenation, if/else, for loop. The runner changed. The language didn't.`,
        },
        {
          q: "Step 4 modifications — my own name, age, city, and three-way if/else (age === 18, > 18, < 18)",
          a: `Code:
const firstName = "Diana";
const birthYear = 1986;
const city = "Prescott";

// Flipped the formula from the example. Birth year is the source of truth —
// my age depends on whether I've hit Nov 5 yet, but my birth year is fixed.
const age = 2026 - birthYear - 1; // -1 because birthday hasn't happened yet this year

const intro = "My name is " + firstName + " and I was born in " + birthYear + " in " + city + ".";
console.log(intro);

if (age === 18) {
  console.log(firstName + " just turned an adult!");
} else if (age > 18) {
  console.log(firstName + " is an adult.");
} else {
  console.log(firstName + " is a minor.");
}

console.log("Counting to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Output:
My name is Diana and I was born in 1986 in Prescott.
Diana is an adult.
Counting to 5:
1
2
3
4
5

The === 18 branch had to come first or the > 18 branch would have swallowed it. Order matters in if/else chains.

Also caught an off-by-one in the original example: 2026 - 28 = 1998 for Marcus assumes his birthday already passed. Mine hasn't (Nov 5), so I flipped the formula to derive age from birth year instead.`,
        },
        {
          q: "Checkpoint — what clicked",
          a: `Nothing new on the language side. The shift is mental: JavaScript is not a "browser language." It's a language that happens to run in browsers, and also runs anywhere Node is installed. Everything I've been doing in DevTools console runs the same way from the terminal.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — npm Init + Your First Package",
      description:
        "Set up a project with npm, install the dayjs package, and use it.",
      qa: [
        {
          q: "package.json after `npm init -y` — project name, main file, dependencies?",
          a: `Project name: date-project (taken from the folder name).
Main file: index.js (the default — I haven't created it yet, npm just assumes that's where the entry point will live).
Dependencies: none. The dependencies key isn't even in the file yet. It gets added the first time you install a package.`,
        },
        {
          q: "What changed in package.json after `npm install dayjs`? What new files/folders appeared?",
          a: `package.json — a new "dependencies" section appeared:
"dependencies": {
  "dayjs": "^1.11.21"
}

New on disk:
- node_modules/ — folder holding the actual dayjs source code (and anything dayjs itself depends on, though dayjs has zero dependencies so it's a small one). This is where the import resolves to.
- package-lock.json — a fingerprint of the exact versions of every package in node_modules. Commits the install to a specific tree so my machine and someone else's machine install the same code.`,
        },
        {
          q: "dates.js — output of all four console.log lines",
          a: `Output (ran on May 26, 2026):
Today is: May 26, 2026
It's Tuesday!
Days left in 2026: 218
30 days from now: June 25, 2026

The import dayjs from "dayjs" line is what makes the whole module available. Then dayjs() returns a "now" object, and .format() / .diff() / .add() are methods on it. Standard library-style chaining.`,
        },
        {
          q: "Step 5 modifications — birthday day of week, days since Jan 1 2026, date 100 days from now",
          a: `Code added:
const birthdayThisYear = dayjs("2026-11-05").format("dddd");
console.log("My birthday this year falls on: " + birthdayThisYear);

const startOfYear = dayjs("2026-01-01");
const daysSinceJan1 = dayjs().diff(startOfYear, "day");
console.log("Days since January 1, 2026: " + daysSinceJan1);

const date100 = dayjs().add(100, "day").format("MMMM D, YYYY");
console.log("100 days from now: " + date100);

Output:
My birthday this year falls on: Thursday
Days since January 1, 2026: 145
100 days from now: September 3, 2026

Nov 5 on a Thursday this year. Useful to know.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Build a Module",
      description:
        "Create my own module with exported functions and import them into another file.",
      qa: [
        {
          q: "utils.js — calculateTip, toCelsius, toFahrenheit",
          a: `Three functions, each exported with the export keyword in front of the declaration. The JSDoc comments above each function are what give the editor hover-tooltips — same shape as a docstring in Python.

The Math.round(celsius * 10) / 10 trick is how you round to one decimal place without bringing in a library: multiply, round to int, divide back down.`,
        },
        {
          q: "app.js — importing and using the functions, expected output",
          a: `Output matched the spec exactly:
--- Tip Calculator ---
Bill: $45.50
Tip (20%): $9.10
Total: $54.60

--- Temperature Converter ---
72F = 22.2C
100C = 212F
32F = 0C
0C = 32F

The import { calculateTip, toCelsius, toFahrenheit } from "./utils.js" line is what pulls the three functions out of utils.js. Note the .js extension on the path — required with "type": "module" in ESM. I always forget that and get bitten.`,
        },
        {
          q: "Step 4 — formatCurrency(amount) and getGrade(score) added, exported, and tested",
          a: `Added to utils.js:
export function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

export function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

Tested in app.js:
console.log("--- Grades ---");
console.log("95 -> " + getGrade(95));
console.log("82 -> " + getGrade(82));
console.log("71 -> " + getGrade(71));
console.log("63 -> " + getGrade(63));
console.log("48 -> " + getGrade(48));

Output:
95 -> A
82 -> B
71 -> C
63 -> D
48 -> F

Replaced the .toFixed(2) calls in the tip section with formatCurrency() so the formatting logic lives in one place. Small thing — but that's the whole point of pulling helpers into a module.`,
        },
        {
          q: "Checkpoint — how this maps to how professional projects are organized",
          a: `Exactly how Hype Live was structured. Backend was dozens of small files — one module per concern (kafka consumer, redis client, db schema, route handlers) — and each one exported only what other files needed. Nobody writes one giant index.js in real codebases. The import surface is what defines the contract between files.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Read Someone Else's Code",
      description:
        "Trace through AI-generated Node.js code that reads a JSON file. Predict the output before running.",
      qa: [
        {
          q: "Prediction — what does readFileSync do?",
          a: `Reads a file from disk synchronously and returns its contents. "Sync" means the program waits for the read to finish before moving to the next line. The "utf-8" argument tells it to return the contents as a string instead of a raw Buffer of bytes. Without "utf-8" you'd get a Buffer and have to decode it yourself.`,
        },
        {
          q: "Prediction — what does JSON.parse(raw) do?",
          a: `Takes a string in JSON format and turns it into a real JavaScript object. raw is a string at that point (just text from the file). After JSON.parse it's a plain object with .team and .members properties you can index into.`,
        },
        {
          q: "Prediction — what does \"=\".repeat(30) produce?",
          a: `A string of 30 equals signs in a row: ==============================. .repeat(n) is a method on every string. Used here as a visual divider.`,
        },
        {
          q: "Prediction — what will totalProjects be after the loop, and what will the average be?",
          a: `Members: 3 + 5 + 4 + 2 = 14.
Total: 14.
Average: 14 / 4 = 3.5.

The loop adds each member.projects to totalProjects. Standard accumulator pattern.`,
        },
        {
          q: "Full predicted output vs actual output — what surprised me?",
          a: `Predicted output:
Team: Code Builders
==============================
Aisha - Frontend (3 projects)
Carlos - Backend (5 projects)
Priya - Full Stack (4 projects)
Marcus - Frontend (2 projects)
==============================
Total projects: 14
Average per member: 3.5

Actual output: exact match. Nothing surprised me — the code is short and the flow is linear. The point of the exercise is the discipline of reading first, running second. That's the muscle to build, not the surprise.`,
        },
        {
          q: "Step 6 modifications — added a new member, and code that finds and displays who has the most projects",
          a: `Added to data.json:
{ "name": "Diana", "role": "Backend", "projects": 6 }

Modified report.js to track the top member during the loop instead of doing a second pass:
let topMember = data.members[0];

for (const member of data.members) {
  console.log(member.name + " - " + member.role + " (" + member.projects + " projects)");
  totalProjects = totalProjects + member.projects;
  if (member.projects > topMember.projects) {
    topMember = member;
  }
}

console.log("Most projects: " + topMember.name + " with " + topMember.projects);

Output:
Team: Code Builders
==============================
Aisha - Frontend (3 projects)
Carlos - Backend (5 projects)
Priya - Full Stack (4 projects)
Marcus - Frontend (2 projects)
Diana - Backend (6 projects)
==============================
Total projects: 20
Average per member: 4.0
Most projects: Diana with 6

Could have used reduce or sort, but tucking the comparison inside the existing loop avoids iterating twice. Same complexity either way, cleaner read.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — Build a CLI Tool",
      description:
        "Build a command-line quiz game that asks questions in the terminal and keeps score. prompt-sync for terminal input.",
      qa: [
        {
          q: "quiz.js running end-to-end — what my final score was on the first playthrough",
          a: `Final score: 5 / 5. PERFECT SCORE message printed.

Answers: B (Hyper Text Markup Language), C (Cascading Style Sheets), A (//), B (Node Package Manager), C (on your computer outside the browser).

prompt-sync blocks the loop on each question waiting for input — that's why the terminal pauses after printing the options. .toUpperCase() on the input means "a" / "A" / "a " all behave the same (well, "a " wouldn't — should probably .trim() too, but the spec didn't ask).`,
        },
        {
          q: "Level 1 modification — 2 more questions added to the quiz",
          a: `Two questions appended to the questions array:

{
  question: "What does API stand for?",
  options: ["A) Application Programming Interface", "B) Automated Program Index", "C) Applied Process Integration"],
  answer: "A"
},
{
  question: "Which method reads a file synchronously in Node.js?",
  options: ["A) fs.read()", "B) fs.readFileSync()", "C) fs.openFile()"],
  answer: "B"
}

Score is still out of questions.length so the percentage thresholds for "perfect" / "passed" / "keep studying" still work without touching the closing block. That's why questions.length is used everywhere instead of hardcoding 5.`,
        },
        {
          q: "Level 2 modification — show correct answer + short explanation after each wrong answer",
          a: `Added an explanation field to each question object:
{
  question: "What does HTML stand for?",
  options: [...],
  answer: "B",
  explanation: "HTML uses tags like <h1> and <p> to mark up text structure — that's the 'markup language' part."
}

Then updated the wrong-answer branch:
} else {
  console.log("Wrong. The answer was " + q.answer + ".");
  console.log("Why: " + q.explanation + "\\n");
}

Forces me to actually understand each question well enough to write a one-line "why," which is the real value of this mod.`,
        },
        {
          q: "Level 3 modification — track wrong-answer questions and offer to replay just those at the end",
          a: `Pulled the question loop into a function so I could call it again with a filtered list. Tracked wrong answers by index.

function runQuiz(questionSet) {
  let score = 0;
  const missed = [];

  for (let i = 0; i < questionSet.length; i++) {
    const q = questionSet[i];
    // ... print question, get answer ...
    if (userAnswer === q.answer) {
      score++;
    } else {
      missed.push(q);
    }
  }
  return { score, missed };
}

const first = runQuiz(questions);
console.log("FINAL SCORE: " + first.score + " / " + questions.length);

if (first.missed.length > 0) {
  const retry = prompt("Replay the " + first.missed.length + " you missed? (y/n): ").toUpperCase();
  if (retry === "Y") {
    const second = runQuiz(first.missed);
    console.log("Retry score: " + second.score + " / " + first.missed.length);
  }
}

Pushing the whole question object (not just the index) into missed means runQuiz works on either the full set or the filtered set with no extra logic. That's the kind of small design choice that keeps the code from growing branches.`,
        },
      ],
    },
    {
      heading: "Exercise 6 — Convert JS to TypeScript",
      description:
        "Add type annotations to plain JavaScript functions in the TypeScript playground. Feel where the types go.",
      qa: [
        {
          q: "greet(name: string): string — annotated and running clean in the playground",
          a: `function greet(name: string): string {
  return "Hello, " + name + "!";
}

console.log(greet("Alex"));

Output: Hello, Alex!

Type goes on the parameter (name: string) and on the return (: string after the parens). Reads almost like a function signature in any typed language.`,
        },
        {
          q: "greet(42) — what does the red squiggle / error message say?",
          a: `Argument of type 'number' is not assignable to parameter of type 'string'.

That's TS catching the bug at compile time. In plain JS, greet(42) would have just returned "Hello, 42!" silently — which would only blow up if some downstream code expected a real string-like name (uppercasing it, indexing into it, etc.). TS pulls the error left, before the program even runs.`,
        },
        {
          q: "calculateBill — annotated with types for price, taxRate, tipPercent, and return value",
          a: `function calculateBill(price: number, taxRate: number, tipPercent: number): number {
  const tax = price * taxRate;
  const tip = price * (tipPercent / 100);
  const total = price + tax + tip;
  return total;
}

console.log(calculateBill(50, 0.08, 20));

Output: 64

Three number inputs, one number out. The intermediate consts (tax, tip, total) don't need annotations — TS infers them as number from the math. You only have to annotate where TS can't figure it out on its own, which is mostly function boundaries.`,
        },
        {
          q: "formatName — annotated, string in, string out",
          a: `function formatName(first: string, last: string): string {
  return last.toUpperCase() + ", " + first;
}

console.log(formatName("Diana", "Busch"));

Output: BUSCH, Diana

If I accidentally called formatName(42, "Busch"), the squiggle would catch it. .toUpperCase() also wouldn't even be available on a number — but the annotation catches it before that error has a chance to fire.`,
        },
        {
          q: "Stretch — isAdult(age: number): boolean",
          a: `function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(isAdult(39)); // true
console.log(isAdult(15)); // false

The expression age >= 18 already evaluates to a boolean, so the : boolean annotation is just making the contract explicit. If I accidentally wrote return age (returning the number), TS would flag the return type mismatch immediately.`,
        },
        {
          q: "Checkpoint — the basic move: : number, : string, : boolean and reading the error",
          a: `This is the move I used every day at Hype Live in NestJS — every controller method, every service function, every DTO had types in the same three spots: parameters, return, and any explicit variable annotations. Once you internalize "where do the colons go," everything else in TS is just bigger versions of that shape (objects, generics, unions). The mental model is the same.`,
        },
      ],
    },
    {
      heading: "Exercise 7 — Read AI-Generated TypeScript",
      description:
        "Read-it-back loop on typed code. Point at each annotation and say what it means.",
      qa: [
        {
          q: "type Student = { ... } — walking through each field and what shape it expects",
          a: `type Student = {
  id: number;       // a number — student ID
  name: string;     // a string — student name
  grades: number[]; // an array of numbers — list of grades
  honors?: boolean; // an OPTIONAL boolean — may or may not be present
};

Each line is "field name : type." Semicolons separate fields inside the type body. The number[] syntax means "array where every element is a number." Could also be written as Array<number> — same thing.`,
        },
        {
          q: "honors?: boolean — what does the ? mean?",
          a: `The ? marks the field as optional. A Student object is valid whether honors is present or not. If it's missing, accessing student.honors returns undefined, not an error. The actual runtime type is boolean | undefined when you read it.

That's why the describe function uses the ternary student.honors ? " (Honors)" : "" — to handle both "true" and "undefined/false" gracefully.`,
        },
        {
          q: "averageGrade(student: Student): number — type of student, what the function returns",
          a: `student is a Student (the object shape declared above). The function returns a number — the computed average.

.reduce((sum, g) => sum + g, 0) walks the grades array, summing into the accumulator that starts at 0. Divide by .length to get the average. Standard reduce — same in TS as in plain JS, just typed.`,
        },
        {
          q: "student.honors ? \" (Honors)\" : \"\" — what it evaluates to when honors is true vs undefined",
          a: `When honors is true: evaluates to " (Honors)" (with the leading space).
When honors is undefined (or false): evaluates to "" (empty string).

So the template literal \${student.name}\${honorsLabel} appends the suffix only when it has something to append. For alex it produces "Alex (Honors)". For a student without honors it'd just be "Sam".`,
        },
        {
          q: "const alex: Student = { ... } — what is the : Student doing?",
          a: `It's annotating the variable. "alex must conform to the Student type." If I left off the email field — fine, it's optional. If I left off id, name, or grades — TS would throw. If I added a typo like nmae: "Alex" — TS would flag "object literal may only specify known properties."

The annotation is what lets the rest of the file pass alex around to functions expecting Student without re-checking the shape each time.`,
        },
        {
          q: "Accept / reject / modify — the one annotation I asked AI to explain, and what I learned",
          a: `Picked: the (sum, g) => sum + g, 0 in the reduce call. Specifically, why neither sum nor g needed an explicit type annotation.

AI explanation: TypeScript infers the types from the call site. grades is number[], so reduce knows g is a number. The initial value 0 is a number, so sum is inferred as number too. The whole callback gets typed without me writing anything.

Verdict: accept. This is how good TS code reads — annotations on the public surface (function signatures, types), inference everywhere inside. Over-annotating internals is noise.`,
        },
        {
          q: "Step 5 — added optional email?: string to Student and to alex",
          a: `Updated type:
type Student = {
  id: number;
  name: string;
  grades: number[];
  honors?: boolean;
  email?: string;
};

Updated alex:
const alex: Student = {
  id: 1,
  name: "Alex",
  grades: [88, 92, 79, 95],
  honors: true,
  email: "alex@school.edu",
};

Other students elsewhere in the file can skip email — that's the point of the ?.`,
        },
        {
          q: "Step 5 — topGrade(student: Student): number",
          a: `function topGrade(student: Student): number {
  return Math.max(...student.grades);
}

console.log(topGrade(alex)); // 95

The ...student.grades spread unpacks the array into individual arguments for Math.max, which expects loose numbers rather than an array. Without the spread, Math.max([88, 92, 79, 95]) returns NaN — common gotcha.`,
        },
        {
          q: "Step 5 — summarize(students: Student[]): string returning \"3 students, average 85.4\"",
          a: `function summarize(students: Student[]): string {
  const count = students.length;
  const allAverages = students.map(s => averageGrade(s));
  const overall = allAverages.reduce((sum, a) => sum + a, 0) / count;
  return \`\${count} students, average \${overall.toFixed(1)}\`;
}

Test:
const sam: Student = { id: 2, name: "Sam", grades: [75, 80, 82], honors: false };
const jordan: Student = { id: 3, name: "Jordan", grades: [91, 88, 94, 90] };

console.log(summarize([alex, sam, jordan]));

Output: 3 students, average 86.1

Student[] is the "array of Student" type. Reads naturally. summarize reuses averageGrade per student — not just duplicating the reduce logic. Composing the small functions is the whole point of having them.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "2 minutes to explain one concept out loud. Partner asks one follow-up.",
      qa: [
        {
          q: "Which concept I picked — npm install, import/export, package.json, or TypeScript annotations",
          a: `npm install. I've run that command thousands of times and I wanted to test whether I could actually explain what it does end-to-end, not just "it installs the package." Surface familiarity isn't the same as being able to walk someone through it.`,
        },
        {
          q: "My 2-minute explanation",
          a: `npm install does three things, in this order.

First: it reads package.json. That's the manifest in your project root that lists every package you've declared a dependency on, along with the version range you're willing to accept. If you run npm install with no arguments, it installs every package listed in there. If you run npm install dayjs, it pulls just dayjs and adds it to the dependencies section.

Second: it goes out to the npm registry — which is a giant public server at registry.npmjs.org — and downloads the actual source code for each package. It also downloads anything those packages depend on, and anything those depend on, all the way down. That's the dependency tree. It saves all that code into a folder called node_modules in your project root. node_modules is the staging area where the real code lives. It's usually huge and you never commit it to git.

Third: it writes a file called package-lock.json. That file is a fingerprint of the exact versions of everything in node_modules. Down to the patch version. If I delete node_modules and run npm install again, the lockfile guarantees I get the same code back. If my teammate clones the repo and runs npm install, they get the same code I have. Without the lockfile, you'd get version drift between machines, which is one of the classic ways a project starts "working on my machine."

The flow once it's installed: I write import dayjs from "dayjs" in my code. Node sees that import, looks in node_modules for a folder called dayjs, finds the main file, and loads it. That's the contract — package.json says what I want, the registry has it, node_modules holds the local copy, and the lockfile freezes the exact tree.`,
        },
        {
          q: "Partner's follow-up question and my answer",
          a: `Partner's question: If node_modules has all the code, why do we need package.json at all? Couldn't you just commit node_modules to git and skip the install step?

My answer: Two reasons. First — size. node_modules for a real project is usually hundreds of megabytes, sometimes gigabytes. A typical React app pulls in thousands of small packages. Committing all that to git would balloon the repo and slow down every clone and pull. Second — and more important — node_modules is platform-specific. Some packages compile native binaries during install that are different on Linux vs macOS vs Windows. If I committed my Linux node_modules and you cloned it on a Mac, half of it wouldn't work. The whole point of package.json + lockfile is that they're a portable recipe. The recipe travels in git; the cooking happens fresh on each machine.`,
        },
        {
          q: "Saying it out loud surfaced what? What would I refine?",
          a: `Two things.

First — I caught myself glossing over the dependency tree part. "It installs the package and anything that depends on it" is something I've said for years without really thinking about it. When I said it out loud, my partner asked the follow-up about why we don't just commit node_modules, and I realized the size argument is the obvious one but the platform argument (native binaries, OS-specific builds) is the one that actually closes the loop. I want to lead with that next time.

Second — the lockfile explanation needs to be tighter. I said "fingerprint of exact versions" and that landed, but the WHY of the lockfile — preventing version drift between machines — is the part that gives it meaning. The fingerprint isn't useful in isolation; it's useful because it makes installs reproducible. Next time I'd say "the lockfile is what makes npm install give the same result on every machine, every time." That's the headline. Everything else is detail.`,
        },
      ],
    },
  ],
};
