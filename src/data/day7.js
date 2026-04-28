export const day7 = {
  number: 7,
  label: "Cohort 2",
  title: "Cohort Day 2 — Prompt Makeover",
  subtitle: "Better questions get better answers. The proof is in the output.",
  color: "#a78bfa",
  sections: [
    {
      heading: "Lab 1 — Prompt Makeover",
      description: "Three bad prompts. Rewrite them. Compare what changes.",
      qa: [
        {
          q: 'Bad Prompt A — original: "Write code for a calculator" — output',
          a: `Write code for a calculator

Here's a simple calculator program in Python:

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

print("Simple Calculator")
print("Operations: +  -  *  /")

while True:
    choice = input("Enter operation (+, -, *, /) or 'q' to quit: ")
    if choice == 'q':
        print("Goodbye!")
        break
    if choice not in ['+', '-', '*', '/']:
        print("Invalid operation")
        continue
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input. Please enter numbers.")
        continue
    if choice == '+':
        print("Result:", add(num1, num2))
    elif choice == '-':
        print("Result:", subtract(num1, num2))
    elif choice == '*':
        print("Result:", multiply(num1, num2))
    elif choice == '/':
        print("Result:", divide(num1, num2))`,
        },
        {
          q: "Bad Prompt A — my improved prompt",
          a: `I want a more advanced version with a GUI.`,
        },
        {
          q: "Bad Prompt A — improved output",
          a: `Here's a more advanced Python GUI calculator using tkinter:

import tkinter as tk
import math

def press(value):
    entry.insert(tk.END, value)

def clear():
    entry.delete(0, tk.END)

def backspace():
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(0, current[:-1])

def calculate():
    try:
        expression = entry.get()
        expression = expression.replace("π", str(math.pi))
        expression = expression.replace("√", "math.sqrt")
        expression = expression.replace("^", "**")
        result = eval(expression, {"math": math, "__builtins__": {}})
        entry.delete(0, tk.END)
        entry.insert(0, result)
    except Exception:
        entry.delete(0, tk.END)
        entry.insert(0, "Error")

def scientific(func):
    try:
        value = float(entry.get())
        if func == "sin":   result = math.sin(math.radians(value))
        elif func == "cos": result = math.cos(math.radians(value))
        elif func == "tan": result = math.tan(math.radians(value))
        elif func == "log": result = math.log10(value)
        elif func == "ln":  result = math.log(value)
        elif func == "sqrt": result = math.sqrt(value)
        elif func == "factorial": result = math.factorial(int(value))
        entry.delete(0, tk.END)
        entry.insert(0, result)
    except Exception:
        entry.delete(0, tk.END)
        entry.insert(0, "Error")

root = tk.Tk()
root.title("Advanced GUI Calculator")
root.geometry("400x550")
root.resizable(False, False)

entry = tk.Entry(root, font=("Arial", 24), borderwidth=5, relief="ridge", justify="right")
entry.pack(fill="both", padx=10, pady=10, ipady=10)

buttons = [
    ["C", "⌫", "(", ")"],
    ["sin", "cos", "tan", "√"],
    ["log", "ln", "x!", "π"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "^", "+"],
    ["="]
]

for row in buttons:
    frame = tk.Frame(root)
    frame.pack(expand=True, fill="both")
    for button in row:
        action = lambda x=button: press(x)
        if button == "C": action = clear
        elif button == "⌫": action = backspace
        elif button == "=": action = calculate
        elif button == "sin": action = lambda: scientific("sin")
        elif button == "cos": action = lambda: scientific("cos")
        elif button == "tan": action = lambda: scientific("tan")
        elif button == "log": action = lambda: scientific("log")
        elif button == "ln":  action = lambda: scientific("ln")
        elif button == "√":  action = lambda: scientific("sqrt")
        elif button == "x!": action = lambda: scientific("factorial")
        tk.Button(frame, text=button, font=("Arial", 18), command=action).pack(side="left", expand=True, fill="both")

root.mainloop()

Run it with: python calculator.py`,
        },
        {
          q: "Bad Prompt A — what changed and why the output improved",
          a: "The original prompt was very vague — it didn't specify a programming language, the type of calculator, or any features. The output was a basic terminal calculator in Python. The improved prompt added a specific request for a GUI, which led to a much more complex and user-friendly application. The output went from a simple command-line tool to a full graphical interface with scientific functions, demonstrating how adding specific requirements can guide the AI to produce a more useful and targeted result.",
        },
        {
          q: 'Bad Prompt B — original: "Help me with my resume" — output',
          a: `Help me with my resume.

Sure! I'd be happy to help with your resume. To get started, could you share:

  • Your current resume or a description of your work experience
  • The type of job you're applying for
  • Your education and any certifications
  • Key skills you want to highlight

Once I have those details, I can help you:
  • Format it professionally
  • Write strong bullet points
  • Tailor it to a specific job description
  • Make it ATS-friendly

Feel free to paste your resume text or describe your background and I'll get to work!`,
        },
        {
          q: "Bad Prompt B — my improved prompt",
          a: `I'm a backend developer with experience in NestJS, TypeScript, PostgreSQL, Redis, and Kafka. I recently worked at a live streaming startup called Hype Live and I'm now looking for a mid-level backend or full-stack developer role. Write me a one-page resume with a summary, skills section, work experience, and education. Keep it clean and ATS-friendly. Emphasize API development, real-time systems, and database work.`,
        },
        {
          q: "Bad Prompt B — improved output",
          a: `Absolutely — with your background, you actually have a strong story for a resume because you combine:

  • Real-world hands-on work experience
  • Leadership/customer-facing roles
  • Full-stack development training
  • IT/cybersecurity interest
  • Persistence and career transition into tech

That combination stands out more than a generic "junior developer" resume.

Professional Summary
Recent Full-Stack Web Development graduate with hands-on experience building responsive web applications using JavaScript, React, Node.js, Express, and MongoDB. Background includes customer service, operations leadership, technical troubleshooting, and hands-on field work across multiple industries. Passionate about software development, cybersecurity, and building practical solutions with strong user experience and clean functionality. Known for adaptability, persistence, and fast learning in high-pressure environments.

Technical Skills
JavaScript • React • Node.js • Express.js • MongoDB • HTML5 • CSS3 • Tailwind CSS • Redux • Git / GitLab • REST APIs • Responsive Web Design • SQL / PostgreSQL • Basic Python • Cybersecurity Fundamentals

You also have a major advantage: your varied work history makes you look experienced and resilient instead of "just another bootcamp grad."

Send me what you currently have and I'll help transform it into something employer-ready.`,
        },
        {
          q: "Bad Prompt B — what changed and why the output improved",
          a: "What changed was the level of specificity and context. The original prompt was very broad and didn't give the AI enough information to create a tailored resume. The improved prompt provided specific details about your background, skills, and the type of role you're targeting. This allowed the AI to generate a much more relevant and personalized resume that highlights your unique strengths and experiences, making it more likely to catch the attention of employers.",
        },
        {
          q: 'Bad Prompt C — original: "Make a quiz" — output',
          a: `Make a quiz.

Sure! Here's a quick general knowledge quiz:

Quiz Time! 🎉

1. What is the capital of France?
   A) London  B) Berlin  C) Paris  D) Madrid

2. How many planets are in our solar system?
   A) 7  B) 8  C) 9  D) 10

3. What is 12 × 12?
   A) 124  B) 144  C) 134  D) 154

4. Who wrote Romeo and Juliet?
   A) Charles Dickens  B) Mark Twain  C) William Shakespeare  D) Jane Austen

5. What is the largest ocean on Earth?
   A) Atlantic  B) Indian  C) Arctic  D) Pacific

Answers: 1-C, 2-B, 3-B, 4-C, 5-D

Want me to make it harder, change the topic, or turn it into an interactive format?`,
        },
        {
          q: "Bad Prompt C — my improved prompt",
          a: `Create a 5-question multiple choice quiz about JavaScript fundamentals for someone who just completed their first week of a coding bootcamp. Each question should have 4 options (A–D) with one correct answer. Cover topics like variables, data types, and basic syntax. After each question, show whether the answer was correct and give a one-sentence explanation.`,
        },
        {
          q: "Bad Prompt C — improved output",
          a: `JavaScript Fundamentals Quiz — Week 1

Question 1:
Which keyword is used to declare a variable that cannot be reassigned?
  A) var
  B) let
  C) const ✓
  D) def

✅ Correct answer: C — const declares a variable whose binding cannot be reassigned. It's the preferred choice when a value won't change.

---

Question 2:
What data type is the value "hello" in JavaScript?
  A) integer
  B) boolean
  C) array
  D) string ✓

✅ Correct answer: D — Any value wrapped in quotes (single or double) is a string in JavaScript.

---

Question 3:
What will console.log(typeof 42) print?
  A) "integer"
  B) "number" ✓
  C) "string"
  D) "float"

✅ Correct answer: B — JavaScript uses "number" for all numeric values, whether whole or decimal.

---

Question 4:
Which of the following is a boolean value?
  A) "true"
  B) 1
  C) true ✓
  D) "false"

✅ Correct answer: C — A boolean is either true or false (no quotes). "true" with quotes is a string.

---

Question 5:
What symbol is used for single-line comments in JavaScript?
  A) #
  B) /* */
  C) //  ✓
  D) --

✅ Correct answer: C — // starts a single-line comment. /* */ is used for multi-line comments.`,
        },
        {
          q: "Bad Prompt C — what changed and why the output improved",
          a: "The output improved because the improved prompt provided specific details about the topic (JavaScript fundamentals), the target audience (someone who just completed their first week of a coding bootcamp), and the format (5 multiple choice questions with explanations). This allowed the AI to generate a quiz that is relevant, appropriately challenging, and educational for the intended user, rather than a generic quiz with no clear focus.",
        },
        {
          q: "Stretch goal — Bad Prompt A iterated 3 times. What changed each round?",
          a: `Iteration 1: "Write code for a calculator"
→ Got a basic Python terminal calculator. No GUI, no context, just bare functions.

Iteration 2: "I want a more advanced version with a GUI."
→ Got a full Python tkinter GUI with scientific functions (sin, cos, log, sqrt, factorial), backspace, and parentheses support.

Iteration 3: "Now make it web-based using HTML, CSS, and JavaScript — styled dark theme, responsive layout, same scientific functions."
→ Got a fully styled single-file HTML calculator with dark UI, CSS grid button layout, and all the same scientific operations running in the browser with no Python required.

Each iteration added specificity: language → interface type → platform + visual style. The output got more useful and more targeted every round.`,
        },
      ],
    },
    {
      heading: "Lab 2 — Reading Code AI Wrote",
      description: "You read it before you run it. That's the habit.",
      qa: [
        {
          q: "The prompt I sent to get the name/color code",
          a: `Write a simple JavaScript program that:
- Asks the user for their name
- Asks the user for their favorite color
- Displays a greeting message that includes both

Use prompt() for input and document.write() for output.
Add comments explaining each line.`,
        },
        {
          q: "What does prompt() do?",
          a: `prompt() opens a small browser dialog box that asks the user to type something. Whatever they type gets returned as a string and stored in the variable. If they click Cancel, it returns null.`,
        },
        {
          q: "What does const mean?",
          a: `const declares a variable that cannot be reassigned. Once you set it, that binding is locked. It doesn't mean the value itself is frozen (objects/arrays can still be mutated), but you can't point the variable at something new.`,
        },
        {
          q: "What does the + operator do with text?",
          a: `When used with strings, + concatenates them — it joins them end to end. So "Hello, " + "Diana" produces "Hello, Diana". This is called string concatenation.`,
        },
        {
          q: 'If I type "Marcus" and "green", what will the output be?',
          a: `Hello, Marcus! Your favorite color is green.`,
        },
        {
          q: 'What happens if I click "Cancel" on the prompt?',
          a: `The variable gets assigned null instead of a string. When null gets concatenated into the message, it renders as the literal word "null" — so you'd see: "Hello, null! Your favorite color is null." It doesn't crash, it just looks broken.`,
        },
        {
          q: "Step 4 — I added a third question (favorite food) and updated the message. What did I add?",
          a: `// Ask the user for their favorite food
const food = prompt("What is your favorite food?");

// Updated message including all three answers
const message = "Hello, " + name + "! Your favorite color is " + color + " and your favorite food is " + food + ".";`,
        },
        {
          q: "Did the modification work?",
          a: "(what you saw when you ran it)",
        },
      ],
    },
    {
      heading: "Peer Activity — Prompt Partners",
      description: "Same task, two prompts, one winner. Why?",
      qa: [
        {
          q: "Task card we picked",
          a: `Task 3: "Get AI to create a simple HTML page for a dog walking business."`,
        },
        {
          q: "My prompt",
          a: `Create me a simple but effective marketing html website for a dog walking business. It needs to have phone number, hours, rates, services, experiences, references. The user interface needs to be inviting yet simple and user friendly. But also attractive from a marketing perspective.`,
        },
        {
          q: "My partner's prompt",
          a: `Make a vanilla HTML site for a dog walking business, ensure that it is formatted properly, mobile first, and has sleek visuals. Does not need to be minimal, can be bubbly and fun. Please use just plain js, css and html`,
        },
        {
          q: "Whose prompt got a better result and why?",
          a: "So we deciced my prompt was better because it was more specific in terms of content (phone number, hours, rates, services, experiences, references) and also gave clearer guidance on the tone and style (inviting yet simple and user friendly, attractive from a marketing perspective). My partner's prompt was good in asking for mobile-first design and sleek visuals, but it lacked the specific content requirements and was a bit more vague on the desired tone. So some of it's feature were rendered useless because it wasn't attached to content. The result from my prompt had more of the necessary information for a business website with a complete functional product in the end.",
        },
        {
          q: "One thing I learned from seeing my partner's approach",
          a: "One thing I learned about my partner's approach is that they focused more on the visual and design aspects (mobile-first, sleek visuals) which is important for user experience. It made me realize that while I was more focused on content and structure, I could have also included more specific design instructions to ensure the final product was not only informative but also visually appealing. It's a good reminder that both content and design are crucial for a successful website.",
        },
      ],
    },
    {
      heading: "Exercise 1 — Tip Calculator",
      description: "Read the code, trace the values, then modify it.",
      qa: [
        {
          q: "Code tracing — if bill = 50 and tip = 20%, fill in the blanks",
          a: `bill = 50
tipPercent = 20
tip = 50 * (20 / 100) = 50 * 0.20 = 10
total = 50 + 10 = 60`,
        },
        {
          q: "Level 1 — show tip per person split between 2. What did I add?",
          a: `document.write("<p>Tip per person (2): $" + (tip / 2).toFixed(2) + "</p>");`,
        },
        {
          q: "Level 2 — split between any number of people. What changed?",
          a: `const people = parseFloat(prompt("How many people are splitting the bill?"));

document.write("<p>Tip per person (" + people + "): $" + (tip / people).toFixed(2) + "</p>");
document.write("<p>Total per person: $" + (total / people).toFixed(2) + "</p>");`,
        },
        {
          q: 'Level 3 — "Generous tipper!" message if tip > $20. What did I add?',
          a: `if (tip > 20) {
  document.write("<p>Generous tipper! 🎉</p>");
}`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Temperature Converter",
      description: "Trace the math, then flip the formula.",
      qa: [
        {
          q: "Code tracing — if input is 212°F, fill in the blanks",
          a: `F - 32 = 212 - 32 = 180
× 5/9 = 180 × 5/9 = 100
Result: 100°C  ✓ (the boiling point of water)`,
        },
        {
          q: "Level 1 — convert Celsius to Fahrenheit instead. What changed?",
          a: `const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;
document.write("<p>" + celsius + "°C = " + fahrenheit + "°F</p>");`,
        },
        {
          q: "Level 2 — ask the user which direction to convert. How did I handle that?",
          a: `const direction = prompt("Type 'ftoc' for F→C or 'ctof' for C→F:");

if (direction === "ftoc") {
  const f = parseFloat(prompt("Enter Fahrenheit:"));
  const c = (f - 32) * 5/9;
  document.write("<p>" + f + "°F = " + c + "°C</p>");
} else if (direction === "ctof") {
  const c = parseFloat(prompt("Enter Celsius:"));
  const f = (c * 9/5) + 32;
  document.write("<p>" + c + "°C = " + f + "°F</p>");
} else {
  document.write("<p>Invalid direction entered.</p>");
}`,
        },
        {
          q: "Level 3 — round to 1 decimal. What did AI tell me to use?",
          a: `AI said to use .toFixed(1) — a built-in number method that rounds to a set number of decimal places and returns a string.

Example:
const c = ((f - 32) * 5/9).toFixed(1);
// 98.6°F → "37.0"`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Compliment Generator",
      description:
        "Arrays, Math.random(), and a first look at randomness in code.",
      qa: [
        {
          q: "What is the list of compliments stored in?",
          a: `An array — a variable that holds multiple values in order, accessed by index starting at 0. Written with square brackets:

const compliments = ["You're amazing", "You've got this", ...]`,
        },
        {
          q: "What does Math.random() do?",
          a: `It generates a random decimal number between 0 (inclusive) and 1 (exclusive) — something like 0.4273 or 0.9981. Every call gives a different number. It never returns exactly 1.`,
        },
        {
          q: "What does Math.floor() do?",
          a: `It rounds a decimal DOWN to the nearest whole number.
Math.floor(3.9) → 3
Math.floor(0.1) → 0

We need it because array indexes must be whole numbers — you can't access index 2.7.`,
        },
        {
          q: "Why do we need compliments.length?",
          a: `So the random number scales to however many compliments are in the array. If there are 5 compliments, we want a random index from 0–4. Using compliments.length means the math stays correct automatically even if we add or remove items later.`,
        },
        {
          q: "If Math.random() returns 0.7 and there are 5 compliments, which index gets picked?",
          a: `0.7 × 5 = 3.5
Math.floor(3.5) = 3
→ Index 3 gets picked (the 4th compliment in the array).`,
        },
        {
          q: "Level 1 — I added 3 more compliments. What are they?",
          a: `"You show up even when it's hard.",
"The way you think is genuinely impressive.",
"You're going to look back on this and be proud."`,
        },
        {
          q: "Level 2 — display TWO random compliments. What changed?",
          a: `const index1 = Math.floor(Math.random() * compliments.length);
const index2 = Math.floor(Math.random() * compliments.length);

document.write("<p>" + name + ", " + compliments[index1] + "</p>");
document.write("<p>Also: " + compliments[index2] + "</p>");

// Note: both could be the same compliment — that's expected.`,
        },
        {
          q: 'Level 3 — "Get another compliment" while loop. How did it work?',
          a: `let again = "yes";

while (again === "yes") {
  const index = Math.floor(Math.random() * compliments.length);
  document.write("<p>" + name + ", " + compliments[index] + "</p>");
  again = prompt("Want another compliment? (yes/no)");
}

document.write("<p>You're all set. Go be great. 👊</p>");`,
        },
      ],
    },
  ],
};
