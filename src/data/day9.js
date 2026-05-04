export const day9 = {
  number: 9,
  label: "Day 4",
  title: "Cohort Day 4 — Structured Prompting & Applied Judgment",
  subtitle:
    "How you ask shapes what you get. And what you get still needs your brain.",
  color: "#f472b6",
  sections: [
    {
      heading: "Exercise 1 — Role Prompting",
      description:
        "Same question, three different roles. Watch how the output shifts.",
      qa: [
        {
          q: `Prompt 1 — No role: "Explain what a variable is in JavaScript."`,
          a: `A variable in JavaScript is like a labeled box that stores information so your program can use it later.

For example:
  let name = "Diana";

Here's what's happening:
  • let tells JavaScript you are creating a variable
  • name is the variable's label
  • "Diana" is the value being stored

You can then use that variable later:
  console.log(name);
  // Output: Diana

Variables can store many kinds of data:
  let age = 25;          // Number
  let city = "Prescott"; // String (text)
  let isStudent = true;  // Boolean (true/false)

You can also change a variable's value:
  let score = 10;
  score = 20;
  console.log(score);
  // Output: 20

JavaScript mainly uses three ways to create variables:
  let   → Value can change
  const → Value should stay constant
  var   → Older way (mostly avoided today)

Example:
  let username = "Alex";
  const pi = 3.14;

A good way to think about it:
  Variable name  = label on the box
  Variable value = thing inside the box

So:
  let favoriteFood = "Pizza";

means: "Create a box called favoriteFood and store Pizza inside it."`,
        },
        {
          q: `Prompt 2 — Teacher role: "You are a patient coding teacher for adults who have never programmed before. Explain what a variable is in JavaScript. Use a real-world analogy. Keep it to 3 sentences. No jargon."`,
          a: `A variable in JavaScript is like a labeled container you use to store something important, such as a box labeled "snacks" in your kitchen. The label helps you find and use what's inside later, and you can change what's in the box whenever you want. In JavaScript, a variable lets your program remember information like a name, number, or message.`,
        },
        {
          q: `Prompt 3 — Technical writer role: "You are a senior technical writer at a software company. Write a concise reference entry for 'variable' in JavaScript. Include: definition, syntax for declaration (const, let, var), one code example, and one common mistake beginners make. Format with headers."`,
          a: `# Variable (JavaScript)

## Definition
A variable is a named container used to store data in a JavaScript program. Variables can hold values such as numbers, strings, objects, or functions, and those values can be referenced and updated later in the code.

---

## Declaration Syntax

  let count = 1;
  const appName = "MyApp";
  var oldStyle = true;

Keywords:
  let   → Declares a variable whose value can change
  const → Declares a variable whose value should not be reassigned
  var   → Older declaration style with different scoping behavior

---

## Example

  let userName = "Diana";
  console.log(userName);
  userName = "Alex";
  console.log(userName);

Output:
  Diana
  Alex

---

## Common Beginner Mistake — Reassigning a const Variable

  const age = 25;
  age = 26; // Error

const variables cannot be reassigned after declaration. Use let instead if the value needs to change.`,
        },
        {
          q: "Which explanation would help YOU the most right now? Why?",
          a: "The explanation that would help me the most right now is Prompt 3 — the technical writer role. It provides a clear definition, syntax, example, and common mistake all in one structured format. It helps me to know what to say in a professional context and gives me a reference I can return to. Even though I did actually like prompt 1's conversational style.",
        },
        {
          q: "What changed between outputs? (Length? Tone? Detail? Examples?)",
          a: "The outputs changed mainly in length, tone, detail, and teaching style. The teacher version was short, simple, and friendly, using an everyday analogy instead of technical terms. The original explanation was more balanced and educational with several examples, while the technical writer version was the most detailed and formal, using structured sections, syntax references, and a practical example showing a common beginner mistake.",
        },
        {
          q: "Which role produced the most useful code example?",
          a: "The senior technical writer role produced the most useful code example because it showed real JavaScript syntax, demonstrated how variables change, and included a common beginner mistake with const. It was the most practical example for someone learning how variables actually work in real code. The original explanation had examples but they were more basic and less focused on real-world coding scenarios, while the teacher role didn't include any code examples at all.",
        },
      ],
    },
    {
      heading: "Exercise 2 — Constraint Prompting",
      description:
        "Constraints force precision. Vague prompts get vague results.",
      qa: [
        {
          q: `Prompt: "Create an HTML page about me with these constraints: my name is Diana Busch and I'm a student in an AI builder program — navy blue background (#1a1a2e), white text, amber (#f59e0b) headings — three sections: About, What I'm Learning, My Goal — no external CSS files, all styles inline or in a <style> tag — mobile-friendly — maximum 50 lines of code — include at least one link to my GitHub or LinkedIn."`,
          a: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diana Busch</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#1a1a2e;color:#fff;font-family:Georgia,serif;padding:2rem 1.25rem;max-width:680px;margin:auto;line-height:1.7}
  h1{color:#f59e0b;font-size:clamp(1.8rem,6vw,2.6rem);letter-spacing:.03em;margin-bottom:.25rem}
  h2{color:#f59e0b;font-size:1.1rem;letter-spacing:.12em;text-transform:uppercase;margin:2.5rem 0 .6rem;border-bottom:1px solid #f59e0b33;padding-bottom:.4rem}
  p{font-size:clamp(.95rem,2.5vw,1.05rem);color:#e2e8f0}
  .tag{display:inline-block;background:#f59e0b22;color:#f59e0b;border:1px solid #f59e0b55;border-radius:4px;font-size:.8rem;padding:.15rem .5rem;margin:.2rem .2rem 0 0;font-family:monospace}
  .links{margin-top:3rem;display:flex;gap:1rem;flex-wrap:wrap}
  a{color:#f59e0b;text-decoration:none;border:1px solid #f59e0b;border-radius:4px;padding:.4rem 1rem;font-size:.9rem;letter-spacing:.05em;transition:all .2s}
  a:hover{background:#f59e0b;color:#1a1a2e}
</style>
</head>
<body>
<h1>Diana Busch</h1>
<p style="color:#f59e0b99;font-size:.9rem;letter-spacing:.08em">AI BUILDER · FULL-STACK DEVELOPER</p>

<h2>About</h2>
<p>I'm a developer and lifelong learner currently enrolled in an AI builder program, deepening my skills at the intersection of software engineering and artificial intelligence. With a background in full-stack development — from building live-streaming APIs to crafting polished front-end experiences — I bring real-world context to everything I build.</p>

<h2>What I'm Learning</h2>
<p>Building intelligent, AI-powered applications using modern tools and APIs. My current focus spans:</p>
<br>
<span class="tag">Anthropic API</span><span class="tag">Prompt Engineering</span><span class="tag">AI-Powered Apps</span>
<span class="tag">React / TypeScript</span><span class="tag">NestJS</span><span class="tag">Full-Stack Dev</span>

<h2>My Goal</h2>
<p>To build AI tools that are genuinely useful — bridging the gap between cutting-edge models and real human needs. I want to contribute to products that create opportunity, starting with the communities that need them most.</p>

<div class="links">
  <a href="https://github.com/DBusch-Developer" target="_blank">GitHub</a>
  <a href="https://www.linkedin.com/in/diana-busch-a17882363/" target="_blank">LinkedIn</a>
</div>
</body>
</html>`,
        },
        {
          q: "Did it stay under 50 lines?",
          a: "Yup! Only 40 lines.",
        },
        {
          q: "Did it look right in Replit? Was it readable on mobile?",
          a: "I didn't open it in Replit, but I did run it live on my own machine and it looked good. It is responsive. I checked it out in the dev tools and it looks great on mobile. The layout is simple and uses relative font sizes, so it should be readable on mobile too.",
        },
        {
          q: "Modification — I changed the color scheme and updated My Goal.",
          a: "Background: deep twilight purple (#1e1528). Headings & accents: warm terracotta (#e07a5f). Skill tags: desert gold (#c9a96e). Body text: warm peach-cream (#eddfd4).\n\nMy Goal: To become an invaluable asset by staying adaptable — leveraging the right tools to cut production time without sacrificing quality or integrity. In a field that evolves daily, I believe the developers who thrive are the ones who know how to work smarter, ship faster, and still deliver results that hold up.",
        },
      ],
    },
    {
      heading: "Exercise 3 — System Instruction Practice",
      description: "System instructions set the rules before the game starts.",
      qa: [
        {
          q: "Scenario A — system instruction I wrote for debugging help (asks questions first, never rewrites whole code, plain language explanations)",
          a: `You are a coding debugging assistant. Follow these rules for every response:
1. Before giving any solution, ask me at least one clarifying question about what I've already tried.
2. Never rewrite my entire code — only suggest changes to the specific lines that are broken.
3. Explain every error in plain language first, then show the fix.
4. If I seem frustrated, slow down and break the explanation into smaller steps.
5. Always confirm I understand before moving on.`,
        },
        {
          q: "Scenario A — I tested it. How did AI behave differently?",
          a: `Without the instructions, the AI would jump straight to solutions — rewriting your whole component, dumping explanations, and moving on without checking if you followed.
With the instructions, it actually behaved like a patient collaborator: asked what you'd already tried before saying anything, only touched the broken lines, explained errors in plain English first, slowed down when you seemed frustrated, and checked in before moving forward.
The biggest shift was from information delivery to actual conversation.`,
        },
        {
          q: "Scenario B — system instruction I wrote for brainstorming app ideas (5 at a time, who uses it, difficulty 1-5)",
          a: `You are a product brainstorming assistant. Follow these rules:
1. Always give exactly 5 app ideas per response — no more, no less.
2. For each idea, include: the app name, a one-sentence description, who the target user is, and a difficulty rating from 1 (beginner) to 5 (advanced).
3. After listing all 5, ask if I want you to go deeper on any of them or generate 5 more.
4. Never repeat an idea you've already suggested in this conversation.`,
        },
        {
          q: "Scenario B — I tested it. How did AI behave differently?",
          a: `Without the instructions, the AI would have rambled — maybe 3 ideas, maybe 8, in whatever format felt natural, with inconsistent details and no real structure. It might give a target user for one idea but skip it for another, and it definitely wouldn't track what it had already suggested.
With the instructions, every response was a clean, predictable package: exactly 5 ideas, each with a name, description, target user, and difficulty rating — formatted the same way every time. Then it handed control back to you by asking how to proceed rather than just barreling forward.
The biggest shift was from a brainstorm dump to a structured, repeatable system you could actually navigate.`,
        },
        {
          q: "Scenario C — system instruction I wrote for quizzing me on the week's content (one question at a time, wait for answer, then explain)",
          a: `You are a quiz assistant reviewing what I learned this week in my AI builder program. Follow these rules:
1. Ask me exactly ONE question at a time — never multiple at once.
2. After I answer, tell me if I'm correct or incorrect.
3. Whether I'm right or wrong, give me a clear one-paragraph explanation of the correct answer.
4. Then ask if I'm ready for the next question before continuing.
5. Keep track of how many I've gotten right and tell me my score at the end.`,
        },
        {
          q: "Scenario C — I tested it. How did AI behave differently?",
          a: `Without the instructions, the AI would have fired off several questions at once, given a quick "correct!" or "nope" with minimal explanation, and just kept going without checking if you were ready — probably losing track of your score entirely by the end.
With the instructions, it felt like a real quiz: one question, a clear right or wrong, a solid paragraph explaining the concept whether you got it right or wrong, and a genuine pause before moving on. Your score was tracked the whole time and handed to you at the end like an actual result.
The biggest shift was from a chaotic Q&A to a structured learning experience with real feedback and accountability.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Context Comparison",
      description:
        "No context vs. rich context. The difference speaks for itself.",
      qa: [
        {
          q: `Round 1 — no context: "Build me a landing page for a small business"`,
          a: "So, I put this simple prompt into ChatGPT and again, it wasn't able to load the preview so I immediately trashed it. I went over to Claude code and tried the same prompt. But Claude didn't just start building — it asked me a bunch of questions first to get more context.",
        },
        {
          q: `Round 2 — rich context - My prompt:`,
          a: `Build a landing page for "Terrain Co.," an outdoor and fitness gear retail shop in the Deep Ellum neighborhood of Dallas, TX. Owner: Jordan Hayes.
Products:

Trail Runner Pack: $89
Summit Shorts: $65
Performance Tee: $48
Hydro Flask Pro: $38
Resistance Band Kit: $42
Recovery Roll Pro: $55

Features needed:

Hero section with business name and tagline: "Gear built for where you're going."
Product showcase grid with prices and Add to Cart buttons
About section (Jordan has 6 years experience, field-tests every product before selling it, offers a lifetime repair guarantee and sustainably sourced gear)
Customer reviews section with 3 testimonials
Contact section with phone number (214) 555-0183, email hello@terrainco.com, hours Mon–Sat 9am–6pm
Colors: forest greens and warm stone/amber browns
Mobile-friendly
Include a "Shop the Collection" button"`,
        },
        {
          q: "Which one would you actually use? Why?",
          a: "I would definitely use the second one with the rich context. The first prompt was too vague, and the AI didn't have enough information to create something useful. It would have been a generic landing page that might not even fit the business's needs. The second prompt gave specific details about the business, products, features, and design preferences, which allowed the AI to create a much more tailored and relevant landing page. The rich context is what makes the output actually usable and aligned with the business's brand and goals.",
        },
        {
          q: "What specific details from the rich prompt showed up in the output?",
          a: "It reflected everything that I had in the rich prompt.",
        },
      ],
    },
    {
      heading: "Applied Judgment — Accept, Reject, or Modify?",
      description: "AI produced it. Now you decide what to do with it.",
      qa: [
        {
          q: `Scenario A — AI wrote a professional email to a potential employer claiming "extensive experience" and "enterprise-grade solutions." Would you send it?`,
          a: `No. The email claims "extensive experience" and "proven track record of delivering enterprise-grade solutions" — none of which is accurate for someone early in their journey. It also lists skills (Java, C++, AWS, Docker, Kubernetes, machine learning) that don't reflect my actual current skill set.

Sending it would be dishonest, and if I got the interview, I'd be caught immediately when asked to walk through any of it.`,
        },
        {
          q: "Scenario A — what's wrong with it and how would you modify it?",
          a: `What's wrong: it overclaims experience, lists skills I don't have, and uses hollow corporate phrases like "invaluable asset" and "esteemed organization" that don't sound like a real person.

How I'd modify it:
- Replace "extensive experience" with my actual background (bootcamp, Hype Live, current program)
- Only list skills I actually have and can speak to
- Write in my own voice, not AI's formal template voice
- Be specific about what I'm learning and what I'm excited to build
- Keep it short — 3 paragraphs max`,
        },
        {
          q: "Scenario B — AI wrote an optimized isPrime function using i += 6 loop logic. Accept, reject, or modify?",
          a: `Modify. The function is correct and optimized — it works. But the loop optimization (i += 6, checking i and i+2) is advanced and I can't explain why it works, which means I can't debug it or own it in an interview.

I'd ask AI for a simpler version I can actually understand, use that, and save the optimized version as a comment for reference once I learn more about number theory and modular arithmetic.`,
        },
        {
          q: `Scenario C — AI suggested these app names for a food truck finder: TruckTracker, StreetEats, FoodRoamer, BiteBus, RollUp. Which would you pick?`,
          a: "I like StreetEats the best. It's catchy, easy to remember, and clearly conveys the idea of finding food trucks on the street.",
        },
        {
          q: "Scenario C — do any of them already exist? What would YOU name it?",
          a: `Yes — most of them do, to varying degrees. TruckTracker and StreetEats are the most taken, with active businesses and even acquisitions behind them. RollUp and BiteBus exist in smaller local variations. FoodRoamer is the clearest opening — no prominent brand is holding that name. To check these yourself you'd search the name directly, look it up on the USPTO trademark database, check for active domain registrations, and search the App Store and Google Play. I would name it CurbFind — it has a nice ring to it, suggests finding food on the curb, and isn't taken by any major players in the food truck space.`,
        },
      ],
    },
    {
      heading: "Ethics Scenarios",
      description: "No single right answer. The point is to think it through.",
      qa: [
        {
          q: "Scenario 1 — The Resume: AI wrote your entire resume and portfolio descriptions. You get an interview. They ask you to walk through a project AI made up. What went wrong and where should the line be?",
          a: "The line is that you should never claim AI-generated work as your own. If you use AI to help write your resume or portfolio, you need to be transparent about it and only include things that are true and that you can speak to in an interview. If AI made up a project, that's a red flag — it means the resume isn't an accurate reflection of your skills and experience. In an interview, if asked to walk through a project that doesn't exist, you'd be caught immediately, which could damage your credibility and chances of getting the job. The ethical approach is to use AI as a tool for improving how you present your real experience, not as a way to fabricate experience you don't have.",
        },
        {
          q: "Scenario 1 — How would you use AI for job applications without crossing that line?",
          a: "I used AI to help me write the content for my personal landing page, but I made sure all the information was accurate and reflected my real background, skills, and goals. I also used AI to help me draft a cover letter, but I personalized it with specific details about why I'm interested in the company and how my actual experience relates to the role. I would never let AI write something that isn't true or that I can't speak to in an interview. Instead, I use it to help me communicate my real experience in the best way possible.",
        },
        {
          q: "Scenario 2 — The Client Project: AI wrote all the code, client is happy, but 6 months later something breaks and you can't fix it. What should you have done differently?",
          a: "I should have been transparent with the client about using AI to generate the code and set clear expectations about my role in the project. I should have reviewed and tested the AI-generated code thoroughly to ensure I understood how it works and could maintain it. I also should have documented the code and any decisions made during development so that if something breaks, I have a reference to troubleshoot from. The line is that you can use AI to assist with coding, but you need to take responsibility for the final product — that means understanding it, being able to explain it, and being prepared to fix it if issues arise.",
        },
        {
          q: "Scenario 2 — What's the minimum level of understanding you need to deliver responsibly?",
          a: "At a minimum, you need to understand the overall structure of the code, the purpose of each component, and how they interact. You should be able to explain the logic behind the code and identify where potential issues could arise. You don't necessarily need to understand every single line, but you should have a solid grasp of how the code works as a whole and be able to troubleshoot common problems. If you can't do that, then you're not delivering responsibly because you won't be able to maintain or fix the code when something goes wrong. You have the tools to be able to learn and understand the code, or at least just have AI explain it to you and document it, so you need to put in the effort to do that before delivering it to a client.",
        },
        {
          q: `Scenario 3 — The Bias Check: AI's description of a "typical software engineer" vs. a "typical nurse." What assumptions did it make?`,
          a: `Prompt: "Write a description of a typical software engineer." 
AI Output: "A typical software engineer designs, builds, tests, and improves computer programs, websites, apps, or systems. They spend much of their day writing code, fixing bugs, reviewing other people’s code, and working with teammates to solve technical problems.

A software engineer is usually curious, detail-oriented, and comfortable learning new tools because technology changes often. They may work on anything from a mobile app to a company database to the behind-the-scenes systems that keep a website running.

They do not just “type code all day.” A big part of the job is understanding what users need, breaking big problems into smaller steps, communicating with a team, and making sure the final product works reliably." 

Prompt: "Write a description of a typical nurse."

AI Output: "A typical nurse is a trained healthcare professional who cares for patients, supports doctors and medical teams, and helps people through illness, injury, recovery, and routine care. Nurses often check vital signs, give medications, monitor symptoms, explain treatment plans, comfort patients, and communicate with families.

A good nurse is usually compassionate, patient, detail-oriented, and able to stay calm under pressure. They often work long shifts and must balance medical knowledge with emotional support, because patients may be scared, confused, or in pain. Nurses play a key role in hospitals, clinics, nursing homes, schools, and community health settings."

Assumptions:
- The software engineer is assumed to be someone who works primarily with technology, spends most of their time coding, and is comfortable with constant learning and change.
- The nurse is assumed to be someone who works in a healthcare setting, provides direct patient care, and has a strong emotional component to their work.

These descriptions reflect common stereotypes about these professions. The software engineer is portrayed as a tech-focused problem solver, while the nurse is portrayed as a compassionate caregiver. These assumptions can affect people who don't match the stereotype — for example, a nurse who is also skilled in technology might feel that their technical skills are overlooked, or a software engineer who values emotional intelligence might feel that their interpersonal skills are undervalued. It's important to recognize that individuals in any profession can have a wide range of skills and qualities that may not fit the typical stereotype.
`,
        },
        {
          q: "Scenario 3 — Where do these assumptions come from? How does this affect people who don't match the stereotype?",
          a: "These assumptions come from societal stereotypes and media portrayals of these professions. For software engineers, the stereotype often emphasizes technical skills, problem-solving, and a focus on technology, while downplaying interpersonal skills or diversity in backgrounds. For nurses, the stereotype emphasizes compassion, caregiving, and emotional support, while sometimes overlooking the technical and critical thinking skills required in nursing.",
        },
      ],
    },
    {
      heading: "Build with Judgment",
      description:
        "Build something small. Document every decision you made along the way.",
      qa: [
        {
          q: "What I built",
          a: `PromptForge — a standalone HTML prompt template library. A fully offline, single-file app with 23 prompt templates organized across 10 categories (sequence, selection, iteration, role prompting, constraints, chain-of-thought, few-shot, format control, system instructions, and review). Features include sidebar navigation, live search, a favorites system that persists in localStorage, copy buttons with visual confirmation, and a keyboard shortcut (/) to jump to search. No frameworks, no dependencies — just HTML, CSS, and vanilla JavaScript.`,
        },
        {
          q: "Decision table — AI output → my decision → why",
          a: `AI Output                                              | My Decision | Why
-------------------------------------------------------|-------------|----
Generated generic placeholder templates                | Rejected    | Replaced all 23 with real, fully written prompts — placeholders aren't useful
Used light color scheme by default                     | Modified    | Switched to dark theme matching my aesthetic (same palette as portfolio)
Included localStorage for favorites                    | Accepted    | Persistence across sessions is genuinely useful — no reason to remove it
Added a "/ to search" keyboard shortcut                | Accepted    | Small detail but makes the tool feel professional and intentional
Category counts showed in sidebar                      | Accepted    | Helpful at a glance — shows which categories have the most templates`,
        },
      ],
    },
    {
      heading: "Peer Activity — Explain AI to a Non-Technical Person",
      description:
        "2 minutes. One analogy. One strength. One weakness. No jargon.",
      qa: [
        {
          q: "My 2-minute explanation (what I actually said)",
          a: "AI is a computer program that has been giving a bunch of information and examples, and it learns patterns from that data. So when you ask it a question or give it a prompt, it uses those patterns to generate a response.",
        },
        {
          q: "Partner feedback — did they understand it? Any jargon they didn't follow?",
          a: "He gave me an 8 out of 10. I didn't use any jargon, but he said the concept of `patterns` was a little vague and could be clearer.",
        },
        {
          q: "Partner feedback — what was the strongest part?",
          a: "He said the strongest part was the idea that AI learns from examples and data, which is a key concept.",
        },
        {
          q: "What I'd change about my explanation for next time",
          a: "I would try to give a more concrete example of what I mean by 'patterns' — maybe by comparing it to how a child learns language by hearing lots of sentences and then can generate their own sentences based on that. I might say something like: 'AI is like a child who has read millions of books and can now write its own stories by recognizing the patterns in those books.'",
        },
      ],
    },
  ],
};
