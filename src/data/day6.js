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
          a: `🚗 How a Car Engine Works (Like You're 10)
 
Think of a car engine like a bunch of tiny explosions happening over and over again to make the car move. Sounds wild—but it's controlled and super cool.
 
🧠 The Big Idea
An engine turns fuel (gasoline) into movement.
It does this by burning fuel inside small metal tubes called cylinders.
Inside each cylinder is a piece called a piston that moves up and down—kind of like a pogo stick.
 
🔄 The 4 Steps (The Engine's "Dance")
Each piston repeats these 4 steps really fast:
 
1. 🫧 Suck In (Intake)
The engine pulls in air + fuel into the cylinder.
👉 Like taking a deep breath.
 
2. 🤏 Squeeze (Compression)
The piston moves up and squishes the air and fuel together.
👉 Like squeezing a balloon really tight.
 
3. 💥 Bang! (Power)
A tiny spark (from something called a spark plug) lights the fuel.
💥 BOOM! A small explosion pushes the piston down.
👉 This is what gives the engine its power.
 
4. 🌬️ Push Out (Exhaust)
The piston goes back up and pushes out the leftover gases.
👉 Like blowing air out after a breath.
 
⚙️ How That Moves the Car
All those pistons are connected to a spinning part (called a crankshaft).
Every time a piston gets pushed down from a tiny explosion, it helps spin that crankshaft.
👉 Spinning = turning the wheels = the car moves!
 
🧩 Simple Way to Picture It
Imagine:
  Your legs = pistons
  Pedaling a bike = crankshaft spinning
  The explosions = super strong pushes helping you pedal
 
⚡ Fun Fact
This whole 4-step cycle happens thousands of times per minute when a car is running!
If you want, I can show you how electric cars are different (no explosions at all 👀).`,
        },
        {
          q: 'Prompt I tried: "What\'s the difference between a croissant and a regular roll?"',
          a: `🥐 Croissant vs. 🍞 Regular Roll — What's the Difference?

🥐 Croissant
A croissant is a flaky, buttery pastry made with a special technique called lamination.

  • Dough is folded with lots of butter over and over
  • This creates thin layers that puff up when baked
  • Texture: light, airy, crispy on the outside
  • Taste: rich and buttery
👉 Think: fancy, delicate, and a little messy (in a good way)

🍞 Regular Roll
A regular roll is just bread dough baked into a small shape.

  • Made with flour, water, yeast, and a little fat
  • No folding layers—just mixed and baked
  • Texture: soft, fluffy, sometimes chewy
  • Taste: mild and bready
👉 Think: simple, sturdy, and great for sandwiches

🔑 The Big Difference
  • Croissant = layered pastry + lots of butter → flaky
  • Roll = simple bread dough → soft

🧠 Easy Way to Remember
A croissant is like a stack of crispy paper-thin sheets, while a roll is like a soft pillow.
If you want, I can explain how bakers make those croissant layers—it's actually pretty cool.`,
        },
        {
          q: 'Prompt I tried: "Why do some people sneeze when they look at the sun?"',
          a: `☀️ Why do some people sneeze when they look at the sun?

This quirky reaction is called the Photic sneeze reflex (yep, really—ACHOO!).

🧠 What's actually happening?
When bright light suddenly hits your eyes:

  1. Your eyes send a signal through the optic nerve to your brain
  2. That signal gets a little "mixed up" with a nearby nerve—the trigeminal nerve, which controls things like sneezing
  3. Your brain accidentally triggers a sneeze reflex

👉 Basically: your brain confuses "bright light" with "something irritating your nose."

🧬 Why only some people?
  • It's genetic (runs in families)
  • About 1 in 4 people have it
  • You're either born with it… or you're not

🤧 Is it dangerous?
Nope—just a little weird. But it can be inconvenient, like:
  • Stepping into sunlight while driving 🚗
  • Looking at bright lights suddenly

🧠 Simple way to think about it
Your brain has "wires" for:
  • 👀 Seeing light
  • 🤧 Sneezing
In some people, those wires are too close together, so the signals get crossed.

If you want, I can show you a quick trick some people use to stop the sneeze before it happens.`,
        },
        {
          q: "What stood out to me from these first conversations?",
          a: "The first conversation for the ten year old is very simple, short sentences, and uses a lot of analogies. The second one is more detailed and technical, but still uses analogies to explain the concepts. The third one is also detailed and technical, but it explains a specific phenomenon in a clear way. Overall, I was surprised by how well AI can explain complex topics in a way that is easy to understand.",
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
          a: `Curious mind, always building something new—whether it's code, ideas, or better habits. I like figuring out how things work and then making them work better. Here for growth, good conversations, and creating things that actually matter.`,
        },
        {
          q: "Was it accurate? Did it sound like me?",
          a: "Actually, very! I loved the tone and style of it. It felt authentic and something I would write myself. It captured my curiosity, love for building, and desire for growth in a way that felt true to me.",
        },
        {
          q: "What I asked it to revise and what changed",
          a: "I didn't ask it to revise anything for this one—I was really happy with the first version it gave me! It felt like it captured my voice and personality well right off the bat.",
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
          a: "I don’t have any way to see you or your surroundings, so I can’t tell what color shirt you’re wearing. If you want, you can tell me what it looks like and I can help you pick an outfit or match it with something 👍",
        },
        {
          q: '"What did I eat for breakfast?" — what did it say?',
          a: "I don’t have access to what you ate earlier, so I can’t know your breakfast unless you tell me. If you’re trying to remember, think about your morning routine—did you grab something quick like eggs, cereal, or coffee, or skip it altogether?",
        },
        {
          q: '"Who\'s in my class right now?" — what did it say?',
          a: "I don’t have any way to see where you are or who’s around you, so I can’t tell who’s in your class. If you’re trying to figure it out, you’d need to look around, check a class roster, or ask someone nearby.",
        },
        {
          q: "What does this tell me about how AI actually works?",
          a: "That AI is really good at generating text based on patterns it has seen in data, but it doesn’t have any real understanding or awareness of the world. It can’t see, hear, or know anything about you or your surroundings unless you tell it. It’s basically a super advanced autocomplete that can create convincing responses, but it doesn’t have any true knowledge or consciousness.",
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
          a: `My Answer: The best thing about Fridays is First Friday Art walks! 
             
AI's Answer: The best thing about Fridays is that everything feels a little lighter—like the pressure eases and the weekend is finally within reach.`,
        },
        {
          q: 'Part A — "If I could have any superpower, I would choose" — my answer vs. AI\'s',
          a: `My Answer: If I could have any superpower, I would choose to have unlimited money.

AI's Answer: If I could have any superpower, I would choose the ability to pause time—so I could think, explore, and enjoy moments without everything rushing past.`,
        },
        {
          q: 'Part A — "The hardest part about starting something new is" — my answer vs. AI\'s',
          a: `My Answer: The hardest part about starting something new is the fear of looking stupid or failing.
          
AI's Answer: The hardest part about starting something new is getting past that first moment of doubt—when you don’t feel ready but have to begin anyway.`,
        },
        {
          q: "Did AI's answers match mine? Why or why not?",
          a: "AI's answers were thoughtful and well-written, but they didn’t match mine at all. That’s because AI generates responses based on patterns in data, not personal experience or feelings.",
        },
        {
          q: "I ran prompt #1 three times — did I get the same answer each time?",
          a: "No, I got a different answer each time. This shows that AI can generate multiple valid responses to the same prompt, and it doesn’t have a single “right” answer.",
        },
        {
          q: "Part B — I asked AI what year it is. What happened?",
          a: "It said - It’s 2026.",
        },
        {
          q: 'Part B — I asked AI to count the letters in "strawberry." What happened?',
          a: "Strawberry has 10 letters. It got it right.",
        },
        {
          q: "Part B — I asked AI something about myself it couldn't possibly know. What happened?",
          a: "I asked ChatGPT if I had mental issues... it said, `I can’t tell whether you have any mental health issues. That’s something a qualified professional—like a therapist, psychologist, or doctor—would need to assess based on a real conversation. If you’re asking because something feels off (stress, anxiety, mood changes, trouble focusing, etc.), it might help to talk it through with someone you trust or a professional. If you want, you can tell me what’s been going on, and I can help you sort through it or suggest what next steps might look like.`",
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
          a: "A blank page with the words 'Hello, World!' in big blue letters in the center.",
        },
        {
          q: "Did it work when I pasted into Replit and hit Run?",
          a: "Yes! It worked perfectly the first time. The page displayed exactly as described, with 'Hello, World!' in big blue letters in the center.",
        },
        {
          q: "Level 1 — I changed 'Hello, World!' to my name. What did I change?",
          a: "I changed the text inside the <h1> tags from 'Hello, World!' to 'Diana Busch'. So it went from <h1 style=\"color: blue; text-align: center; margin-top: 20%;\">Hello, World!</h1> to <h1 style=\"color: blue; text-align: center; margin-top: 20%;\">Diana Busch</h1>.",
        },
        {
          q: "Level 2 — I changed the color from blue to red. How?",
          a: "I changed the value of the 'color' property in the style attribute of the <h1> tag from 'blue' to 'red'. So it went from <h1 style=\"color: blue; text-align: center; margin-top: 20%;\">Diana Busch</h1> to <h1 style=\"color: red; text-align: center; margin-top: 20%;\">Diana Busch</h1>.",
        },
        {
          q: "Level 3 — I added a second line of text. What did I add?",
          a: "I added a new <p> tag below the <h1> tag with the text 'Learning to code with AI!' and styled it to be centered and green. So I added <p style=\"color: green; text-align: center;\">Learning to code with AI!</p> right after the closing </h1> tag.",
        },
      ],
    },
  ],
};
