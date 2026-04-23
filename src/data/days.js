export const days = [
  {
    number: 1,
    title: "What Is AI?",
    subtitle: "Testing limits, building intuition",
    color: "#f59e0b",
    sections: [
      {
        heading: "5 Curiosity Questions",
        description: "Asked AI things I genuinely wanted to know — no code, just curiosity.",
        qa: [
          {
            q: "Why does music give people chills?",
            a: "// Your AI answer here — paste what it told you about frisson, dopamine, and musical expectation.",
          },
          {
            q: "Explain compound interest like I'm 15",
            a: "// Your AI answer here — paste the explanation it gave you.",
          },
          {
            q: "What happens to your body when you don't sleep?",
            a: "// Your AI answer here — what it told you about cortisol, cognition, and cellular repair.",
          },
          {
            q: "What's the difference between a recession and a depression?",
            a: "// Your AI answer here.",
          },
          {
            q: "Why do we dream?",
            a: "// Your AI answer here.",
          },
        ],
      },
      {
        heading: "Testing Its Limits",
        description: "Tried to find where AI breaks down or makes things up.",
        qa: [
          {
            q: "What did I have for dinner last night?",
            a: "// Paste what it said. Did it admit it doesn't know, or did it hallucinate?",
          },
          {
            q: "Count every letter in 'onomatopoeia'",
            a: "// Paste what it said. Was it right? Off by one? Confidently wrong?",
          },
          {
            q: "What's happening right now on my street?",
            a: "// Paste the response. How did it handle a question it literally cannot answer?",
          },
        ],
      },
      {
        heading: "Day 1 Takeaways",
        description: "What I noticed after my first real intentional conversation with AI.",
        qa: [
          {
            q: "One thing AI was surprisingly good at",
            a: "// Write your observation here.",
          },
          {
            q: "One thing AI got wrong — and how I knew",
            a: "// Write your observation here.",
          },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "How Builders Work With AI",
    subtitle: "Prompting with intention",
    color: "#34d399",
    sections: [
      {
        heading: "Vague vs. Specific",
        description: "Same request, two different levels of detail. The results speak for themselves.",
        qa: [
          {
            q: 'VAGUE: "Write about dogs"',
            a: "// Paste the generic output here. Probably not very useful.",
          },
          {
            q: 'SPECIFIC: "Write a 3-paragraph article about why golden retrievers are the most popular family dog in America. Include one statistic. Tone: informative but warm. Audience: someone deciding what breed to get."',
            a: "// Paste the targeted output here. Notice the difference?",
          },
          {
            q: "What specifically made the second prompt better?",
            a: "// Your own analysis — audience, format, tone, goal. What levers actually moved the needle?",
          },
        ],
      },
      {
        heading: "The Iteration Loop",
        description: "Prompt → read → feedback → improve. Practiced this until it felt natural.",
        qa: [
          {
            q: "Initial prompt: professional email to landlord about broken sink (unreported x2 weeks)",
            a: "// Paste the first draft output here.",
          },
          {
            q: "Round 2 feedback I gave it + revised output",
            a: "// What did you ask it to change? Paste the instruction and the result.",
          },
          {
            q: "Round 3 feedback + final version",
            a: "// Final round. How much did it improve from draft 1 to draft 3?",
          },
        ],
      },
      {
        heading: "My Best Prompt",
        description: "The one I'm most proud of from this session.",
        qa: [
          {
            q: "The prompt I wrote (specific version on a topic I care about)",
            a: "// Write your prompt here in full.",
          },
          {
            q: "The output it produced",
            a: "// Paste the result.",
          },
          {
            q: "Why this prompt worked — what details made the difference",
            a: "// Your own analysis.",
          },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Reading What AI Writes",
    subtitle: "Code is just text. Start there.",
    color: "#818cf8",
    sections: [
      {
        heading: "First Code Read",
        description: "AI wrote it, I read it. Every line. No flinching.",
        qa: [
          {
            q: 'Prompt: "Write a simple JS program that asks for a name and says hello. Add a comment on every line."',
            a: "// Paste the full code output here.",
          },
          {
            q: "What I understood after reading it",
            a: "// Walk through it in plain English. What does each part do?",
          },
          {
            q: "What was still confusing after the line-by-line explanation",
            a: "// Be honest. What didn't click yet?",
          },
        ],
      },
      {
        heading: "Modifying the Code",
        description: "Read it, change it, break it, fix it. That's the loop.",
        qa: [
          {
            q: "Added: ask for favorite color + include in greeting",
            a: "// Paste the modified code. What lines changed?",
          },
          {
            q: "Change I made myself (without asking AI)",
            a: "// What text did you find in quotes and swap out? What happened when you ran it?",
          },
          {
            q: "Did I break something? How I fixed it.",
            a: "// If it broke, what did the error say? What did you ask AI to help debug?",
          },
        ],
      },
      {
        heading: "Grocery List Program — Finding Structure",
        description: "A longer program with real moving parts. Can I navigate it?",
        qa: [
          {
            q: "The full program AI generated",
            a: "// Paste the grocery list + prices + total code here.",
          },
          {
            q: "Where the item list is defined",
            a: "// Describe it — line numbers, variable name, how it's structured.",
          },
          {
            q: "Where I'd add a 6th item + a 10% discount",
            a: "// Describe exactly where in the code you'd make those changes.",
          },
        ],
      },
      {
        heading: "Questioning AI Output",
        description: "It looks right. But is it? That's the job.",
        qa: [
          {
            q: "Palindrome function AI wrote + 5 test cases",
            a: "// Paste the function and tests.",
          },
          {
            q: "AI's response when I asked: 'Is this code correct? What edge cases might it miss?'",
            a: "// Paste what it said. Did it catch its own issues?",
          },
          {
            q: "What happens if you pass in a number instead of a word?",
            a: "// What did AI say? Did you test it?",
          },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Tools & Setup",
    subtitle: "Accounts created. Environment tested.",
    color: "#f472b6",
    sections: [
      {
        heading: "Replit Exploration",
        description: "Zero installation. Just code.",
        qa: [
          {
            q: "What changed when I swapped background from #1a1a2e to #2d3436?",
            a: "// Describe what you saw — the color shift, what it reminded you of.",
          },
          {
            q: "What changed when I swapped heading color from #f59e0b to #e74c3c?",
            a: "// Gold to red. What did that feel like visually?",
          },
          {
            q: "My reaction to editing a live web page for the first time",
            a: "// What did it feel like to change something and see it update instantly?",
          },
        ],
      },
      {
        heading: "AI Tool Comparison",
        description: "Same question, two different models. Comparing outputs side by side.",
        qa: [
          {
            q: "Question I asked both tools",
            a: "// What did you ask? Pick something interesting.",
          },
          {
            q: "ChatGPT's response",
            a: "// Paste or summarize what it said.",
          },
          {
            q: "Claude / Gemini response — and which I preferred",
            a: "// Paste or summarize. Which felt more useful, and why?",
          },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Reflection",
    subtitle: "What I actually think, after a week of using it for real.",
    color: "#fb923c",
    sections: [
      {
        heading: "My Honest Reflection",
        description: "Not a textbook answer. My actual take after this week.",
        qa: [
          {
            q: "What is AI, in my own words?",
            a: "// Write your real answer — not a definition, your understanding.",
          },
          {
            q: "What surprised me about AI?",
            a: "// Something you didn't expect — good or bad.",
          },
          {
            q: "Where was AI most helpful?",
            a: "// Which exercise or interaction actually impressed you?",
          },
          {
            q: "Where did AI fall short?",
            a: "// When did it give you something wrong, generic, or useless?",
          },
          {
            q: "What makes a good prompt?",
            a: "// Based on your own experience this week — not what you read, what you noticed.",
          },
          {
            q: "How comfortable am I with technology right now? (1–5)",
            a: "// Be honest. This helps instructors support you on Day 1.",
          },
          {
            q: "What am I most curious about going into the program?",
            a: "// What do you want to build? What are you nervous about?",
          },
        ],
      },
    ],
  },
];
