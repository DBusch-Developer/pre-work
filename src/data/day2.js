export const day2 = {
    number: 2,
    label: "Pre-Work 2",
    title: "How Builders Work With AI",
    subtitle: "Prompting with intention",
    color: "#34d399",
    sections: [
      {
        heading: "Exercise 1: Vague vs. Specific",
        description:
          "Ask AI the same thing two different ways. Compare the outputs side by side.",
        qa: [
          {
            q: 'Round 1 — Vague: "Write about dogs"',
            a: `🐶 Dogs: Companions, Workers, and Family

Dogs have lived alongside humans for thousands of years, evolving from wolves into one of the most diverse and beloved animals on the planet. Scientifically known as Canis lupus familiaris, dogs aren't just pets — they're partners. From ancient hunting companions to modern-day service animals, they've adapted to fit almost every role humans could ask of them.

🧠 Smart and Social

Dogs are incredibly tuned in to people. They can read facial expressions, follow pointing gestures, and even pick up on emotional cues. That's why many dogs seem to "know" when you're happy, stressed, or upset. Their intelligence varies by breed and individual, but many can learn commands, routines, and even complex tasks.

🏡 Roles Dogs Play

Dogs aren't one-size-fits-all — they serve many purposes:
  • Companions: Loyal pets that provide comfort and friendship
  • Working dogs: Herd livestock, guard property, or assist in hunting
  • Service dogs: Help people with disabilities navigate daily life
  • Therapy dogs: Visit hospitals or schools to boost emotional well-being

Each role highlights a different strength, whether it's physical ability, trainability, or emotional sensitivity.

❤️ Why People Love Dogs

There's a reason dogs are often called "man's best friend." They offer:
  • Unconditional loyalty
  • Consistent companionship
  • A sense of routine and responsibility

Spending time with dogs can even reduce stress and improve mood — something many owners feel instinctively.

🐕 A World of Variety

There are hundreds of dog breeds, from tiny Chihuahuas to massive Great Danes. Some are built for speed, others for strength, and some just for cuddling on the couch. Mixed-breed dogs, often found in shelters, combine traits in unique and unpredictable ways — and can make just as wonderful companions.

Dogs aren't just animals we live with — they're part of our lives, our routines, and often our families. Whether working in the field or napping on the couch, they've earned their place beside us.`,
          },
          {
            q: 'Round 2 — Specific: "Write a 3-paragraph article about why golden retrievers are the most popular family dog in America. Include one statistic. Tone: informative but warm. Audience: someone deciding what breed to get."',
            a: `Golden retrievers have earned their reputation as one of the most popular family dogs in the United States for good reason. According to the American Kennel Club, golden retrievers consistently rank among the top 5 most popular dog breeds nationwide — a reflection of how widely loved and trusted they are. Originally bred as hunting companions, they've evolved into dependable, easygoing pets that adapt well to a variety of households, from active families to quieter homes.

One of the biggest reasons people choose golden retrievers is their temperament. They are known for being friendly, patient, and especially gentle with children, which makes them a strong choice for first-time dog owners. Goldens are also highly intelligent and eager to please, meaning they tend to pick up training quickly and respond well to positive reinforcement. Whether it's basic commands or more advanced tasks, their cooperative nature makes everyday life with them smoother and more enjoyable.

Beyond personality, golden retrievers fit naturally into family routines. They love being involved — whether that's going on walks, playing in the yard, or simply relaxing nearby. While they do require regular exercise and grooming, many families find the trade-off well worth it for their loyalty and companionship. If you're looking for a dog that is affectionate, reliable, and great with people of all ages, a golden retriever is one of the safest and most rewarding choices you can make.`,
          },
          {
            q: "Which output is more useful? Why?",
            a: `The three-paragraph golden retriever piece — by a mile. The first answer just talked about dogs. It was technically correct but you couldn't do anything with it. The second gave you something specific enough to act on — a real audience, a real argument, a real statistic. That's the difference between information and useful information.`,
          },
          {
            q: "What specifically made the second prompt better?",
            a: `Five things, and they all compounded on each other.

First, it had an audience. "Someone deciding what breed to get" told AI exactly who it was writing for — not dog experts, not kids, someone at a decision point. That one detail changed the whole angle.

Second, it had a format. Three paragraphs. AI knew exactly how much to write and how to structure it — no rambling, no bullet dumps.

Third, it had a tone. "Informative but warm" is specific enough to actually mean something. The vague prompt got a neutral encyclopedic voice. The specific one felt like a recommendation from someone who actually likes dogs.

Fourth, it had a goal baked in. The statistic requirement forced AI to include a real data point instead of staying vague. That one word — "include" — added credibility to the whole piece.

Fifth, it had a subject, not just a topic. "Write about dogs" is a topic. "Why golden retrievers are the most popular family dog in America" is a subject with a point of view. AI had something to argue, not just describe.

The vague prompt gave AI permission to write anything. The specific prompt gave it a job.`,
          },
          {
            q: "What would happen if you added even more detail?",
            a: `It would keep getting better — up to a point. More detail means less guessing. If I had added a word count, a specific statistic source, a required subheading, or a call to action at the end, each one would have tightened the output further. But there's a ceiling. At some point you're writing the article yourself inside the prompt, and AI is just filling in sentences. The sweet spot is enough detail to close off the wrong directions without writing the thing for it.`,
          },
        ],
      },
      {
        heading: "Exercise 2: The Iteration Loop",
        description:
          "Prompt → read → feedback → improve. Option C: explain what an API is.",
        qa: [
          {
            q: "Step 1 — Read the whole thing. Is it good? (First draft output)",
            a: `Prompt: "Explain what an API is to someone who has never written code. Use a real-world analogy. Keep it under 100 words."

---

An API (Application Programming Interface) is like a restaurant menu. You don't go into the kitchen — you just pick what you want from the menu, place an order, and the kitchen brings it back.

In this analogy, you're the user, the menu is the API, and the kitchen is the software or system doing the work. The API lets different programs "order" and exchange information without needing to know how everything works behind the scenes.`,
          },
          {
            q: "Step 2 — Find one thing to change. Tell AI exactly what to change. (Feedback + revision)",
            a: `My feedback: The menu analogy is good but I want a real-world example added — like what happens when you log in with Google on another app.

---

An API (Application Programming Interface) is like a restaurant menu. You don't go into the kitchen — you just pick what you want, place an order, and the kitchen brings it back. The API handles the communication in between.

A real example: when you click "Log in with Google" on another website, that site is using Google's API. It sends a request to Google, Google verifies your identity, and sends back a response — all without you typing a password into that site directly.`,
          },
          {
            q: "Step 3 — Read the revision. Better?",
            a: `Yes — the real-world Google login example made it click in a way the analogy alone didn't. Abstract concepts land better when you can point to something you've actually done before.`,
          },
          {
            q: "Step 4 — One more round of specific feedback. (Feedback + final version)",
            a: `My feedback: Make it punchier. Cut anything that feels repetitive and tighten the whole thing to feel more confident.

---

An API is like a restaurant menu — you don't go into the kitchen, you just order and get results. It handles the communication between two systems so they can share information without either one knowing how the other works internally.

Real example: "Log in with Google" on another site uses Google's API. Your app asks Google to verify you, Google says yes or no, and the door opens — or it doesn't. You never touched Google's code directly.`,
          },
        ],
      },
      {
        heading: "Exercise 3: Your Turn",
        description:
          "Topic: vegan advocacy. One vague prompt, one specific prompt. Iterate on the specific one twice.",
        qa: [
          {
            q: 'Vague prompt + output: "Write about veganism"',
            a: `Veganism is a lifestyle that avoids using animal products, especially in diet. People who follow it don't eat meat, dairy, eggs, or honey, and often choose alternatives in clothing and cosmetics as well.

Many adopt veganism for ethical reasons, aiming to reduce harm to animals. Others are drawn to its environmental impact — plant-based diets typically use fewer resources and produce less pollution. Health can also be a factor, as a well-planned vegan diet can be rich in nutrients like fiber, vitamins, and antioxidants.

At its core, veganism is about making intentional choices that align with personal values, whether those center on compassion, sustainability, or well-being.`,
          },
          {
            q: "Specific prompt + output: \"Write a 2-paragraph response to the myth that vegans don't get enough protein. Tone: confident and direct. Audience: someone who just said 'but where do you get your protein?' Include at least one specific food example.\"",
            a: `The idea that vegans don't get enough protein is outdated and just not supported by how nutrition actually works. Protein isn't exclusive to meat — it's found in a wide range of plant foods. Lentils, chickpeas, tofu, tempeh, quinoa, nuts, and even vegetables all contribute meaningful amounts. For example, a cup of lentils has about 18 grams of protein, which is comparable to many animal-based sources. If you're eating enough calories from a varied diet, you're almost certainly getting enough protein — vegan or not.

The real question isn't "where do you get your protein," but whether your overall diet is balanced. Plenty of professional athletes and bodybuilders follow plant-based diets successfully, which wouldn't be possible if protein were an issue. The focus should be on eating a mix of whole foods throughout the day, not on a single nutrient myth that's been repeated more than it's been questioned.`,
          },
          {
            q: "Iteration round 1 — feedback + revised output",
            a: `My feedback: Add a second specific food example and make the closing line hit harder.

---

The idea that vegans don't get enough protein is outdated and just not supported by how nutrition actually works. Protein isn't exclusive to meat — it's found across a wide range of plant foods. A cup of lentils has about 18 grams of protein. A cup of cooked edamame has around 17. Chickpeas, tofu, tempeh, quinoa — all of it adds up fast. If you're eating enough calories from a varied diet, you're almost certainly hitting your protein needs, vegan or not.

The real question isn't "where do you get your protein" — it's why that question keeps getting asked in 2025. Plenty of professional athletes and bodybuilders follow plant-based diets successfully. The science is settled. The myth just hasn't caught up yet.`,
          },
          {
            q: "Iteration round 2 — feedback + final output",
            a: `My feedback: The last line is good but I want the whole thing to feel more like someone speaking from experience, not just citing facts.

---

The idea that vegans don't get enough protein is one of those myths that sounds plausible until you actually look at what plant-based people eat. Lentils, edamame, tofu, tempeh, chickpeas — these aren't protein side notes, they're the main event. A cup of lentils has 18 grams. A cup of edamame has 17. I'm not worried about protein, and neither are the plant-based athletes competing at the highest levels.

The better question is why this myth has more staying power than the actual research. A balanced vegan diet isn't a protein puzzle to solve — it's just food. The confusion comes from decades of marketing, not science.`,
          },
        ],
      },
      {
        heading: "Write Down",
        description: "Your best prompt from today and what made it work.",
        qa: [
          {
            q: "Your best prompt from today — the one that got the best output",
            a: `"Write a 3-paragraph article about why golden retrievers are the most popular family dog in America. Include one statistic. Tone: informative but warm. Audience: someone deciding what breed to get."`,
          },
          {
            q: "What made it work? (What details did you include?)",
            a: `This is the prompt I'm most proud of from Day 2 because every detail in it was doing a job.

Giving it an audience — "someone deciding what breed to get" — changed the entire angle. AI wasn't writing for dog experts or kids, it was writing for someone at a real decision point. That shaped everything from the vocabulary to the tone.

Specifying three paragraphs meant no rambling, no bullet dumps, no filler. It knew exactly how much to write.

"Informative but warm" is specific enough to actually mean something. Without it I would've gotten the same neutral encyclopedic voice as the vague prompt.

Requiring a statistic forced it to go find a real data point instead of staying vague. That one word — "include" — added credibility to the whole piece.

And "why golden retrievers are the most popular family dog in America" gave AI a subject with a point of view, not just a topic to describe. It had something to argue.

The vague prompt gave AI permission to write anything. This one gave it a job.`,
          },
        ],
      },
    ],
  };
