export const day6 = {
  number: 6,
  label: "Cohort 1",
  title: "Cohort Day 1 — First Contact",
  subtitle: "Tools live. Code runs. The loop begins.",
  color: "#60a5fa",
  sections: [
    {
      heading: "Tool Setup",
      description:
        "Getting everything confirmed before we touch a single line of code.",
      qa: [
        {
          q: "ChatGPT — logged in at chatgpt.com?",
          a: "Logged in, got an account, ready to go.",
        },
        {
          q: "Replit — logged in at replit.com?",
          a: "Signed up, can create a new Replit, and run code.",
        },
        {
          q: "VS Code — installed and ready?",
          a: "Already have it installed and set up with GitHub Copilot extension. Use it every day for work and personal projects.",
        },
        {
          q: "GitHub — logged in?",
          a: "Used this every day for running code.",
          link: {
            label: "DBusch-Developer",
            url: "https://github.com/DBusch-Developer",
          },
        },
      ],
    },
    {
      heading: "Exercise 1 — Curiosity Prompts",
      description:
        "No code. No right answer. Just get comfortable talking to AI.",
      qa: [
        {
          q: 'Prompt I tried: "Explain how a car engine works like I\'m 10 years old"',
          a: "(paste what AI said)",
        },
        {
          q: 'Prompt I tried: "What\'s the difference between a croissant and a regular roll?"',
          a: "(paste what AI said)",
        },
        {
          q: 'Prompt I tried: "Why do some people sneeze when they look at the sun?"',
          a: "(paste what AI said)",
        },
        {
          q: "What stood out to me from these first conversations?",
          a: "(your reflection)",
        },
      ],
    },
    {
      heading: "Exercise 2 — The Bio Loop",
      description:
        "Prompt → output → feedback → iterate. This is the core workflow.",
      qa: [
        {
          q: 'Prompt I used: "Write me a 3-sentence bio for a social media profile"',
          a: "(paste what AI wrote)",
        },
        {
          q: "Was it accurate? Did it sound like me?",
          a: "(your take)",
        },
        {
          q: "What I asked it to revise and what changed",
          a: "(describe the revision and paste the new version)",
        },
      ],
    },
    {
      heading: "Exercise 3 — Breaking AI",
      description:
        "AI will answer confidently — and be completely wrong. That's the point.",
      qa: [
        {
          q: '"What color shirt am I wearing right now?" — what did it say?',
          a: "(paste or summarize AI's response)",
        },
        {
          q: '"What did I eat for breakfast?" — what did it say?',
          a: "(paste or summarize AI's response)",
        },
        {
          q: '"Who\'s in my class right now?" — what did it say?',
          a: "(paste or summarize AI's response)",
        },
        {
          q: "What does this tell me about how AI actually works?",
          a: "(your reflection — what's the takeaway here?)",
        },
      ],
    },
    {
      heading: "Lab 4 — The Prediction Game",
      description:
        "Part A: what does AI predict vs. what would you say? Part B: break it on purpose.",
      qa: [
        {
          q: 'Part A — "The best thing about Fridays is" — my answer vs. AI\'s',
          a: "(my answer: / AI's answer:)",
        },
        {
          q: 'Part A — "If I could have any superpower, I would choose" — my answer vs. AI\'s',
          a: "(my answer: / AI's answer:)",
        },
        {
          q: 'Part A — "The hardest part about starting something new is" — my answer vs. AI\'s',
          a: "(my answer: / AI's answer:)",
        },
        {
          q: "Did AI's answers match mine? Why or why not?",
          a: "(reflection)",
        },
        {
          q: "I ran prompt #1 three times — did I get the same answer each time?",
          a: "(yes / no — and what that tells me about how AI works)",
        },
        {
          q: "Part B — I asked AI what year it is. What happened?",
          a: "(paste response + what was wrong or interesting)",
        },
        {
          q: 'Part B — I asked AI to count the letters in "strawberry." What happened?',
          a: "(paste response + whether it got it right)",
        },
        {
          q: "Part B — I asked AI something about myself it couldn't possibly know. What happened?",
          a: "(the question I asked + what it said + why it happened)",
        },
      ],
    },
    {
      heading: "Lab 5 — AI Can Code",
      description:
        "The prompt → copy → paste → run loop. Your first working webpage.",
      qa: [
        {
          q: "I asked AI to write the Hello World HTML page. What did it generate?",
          a: "(paste the code it gave you)",
        },
        {
          q: "Did it work when I pasted into Replit and hit Run?",
          a: "(what did I see?)",
        },
        {
          q: "Level 1 — I changed 'Hello, World!' to my name. What did I change?",
          a: "(what line changed + what it looks like now)",
        },
        {
          q: "Level 2 — I changed the color from blue to red. How?",
          a: "(what I changed and where I found it in the code)",
        },
        {
          q: "Level 3 — I added a second line of text. What did I add?",
          a: "(the line I added + what it says)",
        },
      ],
    },
  ],
};
