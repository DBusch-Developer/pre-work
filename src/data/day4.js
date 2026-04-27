export const day4 = {
    number: 4,
    label: "Pre-Work 4",
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
            a: "The background is now the darker charcoal #2d3436",
          },
          {
            q: "What changed when I swapped heading color from #f59e0b to #e74c3c?",
            a: "The heading is now a bold red #e74c3c",
          },
          
        ],
      },
      {
        heading: "AI Tool Comparison",
        description:
          "Same question, two different models. Comparing outputs side by side.",
        qa: [
          {
            q: "Question I asked both tools",
            a: "Imagine a world where the internet never existed. Describe what a typical Monday morning looks like for a 25-year-old office worker.",
          },
          {
            q: "ChatGPT's response",
           a: `The alarm goes off at 6:30 a.m. — a physical clock on the nightstand, its red digits glowing in the dim light. There's no scrolling in bed, no overnight notifications to check, just the quiet decision to get up or hit snooze. By 7:00, they're in the kitchen flipping through a small stack of mail and yesterday's newspaper while coffee brews. The headlines are already a day old, but that's normal — news moves at the pace of print. A quick glance at a paper planner on the counter outlines the day: a 9:00 meeting, a call to return, a reminder to stop by the bank after work.

The commute is filled with small, disconnected moments. On the bus or train, people read books, stare out the window, or make brief small talk. No headphones streaming playlists — just a Walkman or the ambient hum of the city. Arriving at the office, the day begins with sorting through physical memos and typed documents left in an inbox tray. Communication is slower, more deliberate. If something is urgent, it's a phone call; otherwise, it can wait for an interoffice envelope or a scheduled meeting.

Work itself is focused but sometimes inefficient. Research means digging through filing cabinets, reference books, or making calls to other departments. Mistakes require retyping entire pages. Collaboration happens face-to-face or not at all. There are fewer distractions, but also fewer shortcuts. Lunch might be spent actually talking to coworkers rather than glancing at screens, conversations lingering a little longer because there's nowhere else to be digitally.

By late afternoon, tasks wind down without the pressure of a constantly updating inbox. Once they leave the office, work mostly stays behind — there's no remote access waiting at home. Evenings are quieter, shaped by physical presence: stopping at a store, calling a friend on a landline, maybe watching whatever happens to be on TV at that hour. The day feels more contained, a little slower, and oddly more final — when Monday ends, it really ends.`,
          },
          {
            q: "Claude response",
           a: `Monday Morning, Circa Never-Online

The alarm clock — a real one, with a bell on top — rattles Marcus awake at 6:45. He rolls over and hits it with his palm.

He shuffles to the kitchen and clicks on the radio while the percolator does its thing. The morning news anchor reads headlines at a measured pace. If Marcus misses something, it's gone — no rewinding, no podcasts, no "listen later." He either caught it or he didn't.

He unfolds the newspaper on the table, the ink still faintly sharp-smelling. He reads the sports section while eating toast. If he wants to know what's on TV tonight, he checks the printed listings in the back. If he wants a movie time, he'll call the theater's recorded hotline later.

Getting dressed, he checks the physical bus schedule tacked to his fridge — a laminated card the transit authority mailed out in September. He's memorized it mostly, but still checks out of habit.

On the bus, he reads a paperback. Everyone on the bus is either reading, staring out the window, or talking to the person next to them. It's quieter than you'd think, but more human somehow.

At the office by 8:30, he hangs his coat and sits down at his desk. His inbox is a physical tray — interoffice memos, a few letters from clients, a routing slip someone attached to a report. He works through them with a pen, making notes in the margins.

Need to reach a client? He picks up the telephone and dials. If they're not in, he leaves a message with their secretary, or she leaves one with his. Pink "While You Were Out" slips accumulate like small paper promises throughout the day.

Researching something? He walks to the filing room, pulls a drawer, flips through folders. For deeper research, he'll put in a request at the public library's reference desk after work — the librarian there knows her card catalog like a surgeon knows anatomy.

Lunch is decided by word of mouth. A coworker leans over and says "there's a new deli on 5th," and that's the whole Yelp review. They go. It's either good or it isn't.

The afternoon is long and analog. Spreadsheets are actual spreadsheets — grid paper, pencil, eraser. Memos are typed on an electric typewriter and copied on a machine that smells like solvent. Mistakes cost time, not just a backspace.

By 5 o'clock, Marcus is genuinely tired in a way that feels complete. He hasn't been half-present all day. Every task demanded his full, physical attention.

On the bus home, he finishes three more chapters of his book.

The world moves slower — and demands more patience, more memory, more trust in other people. But there's also something unbroken about the attention. Nobody is somewhere else while being here. Presence isn't a wellness trend. It's just Tuesday.`,
          },  {
            q: "Compare the answers. Which one did you prefer? Why?",
            a: "Well, I'm kind of upset at both of them! I asked them to imagine a world WITHOUT the internet... yet they go on and actually say things, ChatGPT said, 'No scrolling, no overnight notifications to check' and then Claude said, 'no rewinding, no podcasts, no 'listen later'. Tehcnically, you could still rewind, I was always recording radio stations with a tape deck and rewinding to my hearts desire! Regardless, I was under the impression I was just going to get a story about someone in a world without internet. Not actually describing features of the thing that doesn't exist in the story setting of where it doesn't exist. You get my point? And a world without internet doesn't technically mean a world without personal computers instead of typewriters and filing cabinets, or also printers, scanners and copiers. If I had to choose, I like the tone from Claude overall better.",
          },
        ],
      },{
        heading: "Write Down",
        description: "Check off everything you set up.",
        qa: [
          {
            q: "Video call — Can you join a video call? Test your camera and microphone. (We'll share the meeting link before Day 1.)",
            a: `Video calling works great! My microphone and camera are from my Lenovo laptop and everything works flawlessly!`,
          },
          {
            q: " Screen sharing — Open a video call with a friend or family member and practice sharing your screen. If you don't have someone to test with, open your video call app and find where the 'Share Screen' button is. You'll use this in class.",
            a: `I know how to navigate the calling app in order to share a screen, which screen, multiples screens or even just a webpage tab. Got it covered!`,
          },{
            q: "Internet connection — Is your connection stable enough for video + screen sharing? If you have issues, identify a backup location (library, coffee shop, friend's house).",
            a: `My "office" I will be working out of is at my home, where we have Sparklight internet, and the bill is paid! Good to go with connection! If I have any emergencies, say a downed line that cuts off internet to the whole neighborhood, my dad or my grandpa are in two opposite separate locations where I can go to continue work peacefully! So grateful!`,
          },{
            q: "Quiet space — Can you find a space where you can talk, focus, and be on camera for 7+ hours? This matters.",
            a: `My room is my office, it is my sanctuary. I have a pretty nice set up, with a rounded corner desk, 3 screens and a comfy gaming chair!!! I love my setup! And it is completely quiet and cut off from any outside distractions.`,
          },{
            q: "Second screen (nice to have) — If you have a second monitor, tablet, or even a phone, having the video call on one screen and your code editor on another helps. Not required.",
            a: `I've got 3! Two additional 24" Onn monitors and then my laptop as the 3rd screen. All are funcitonal extensions, NOT mirrored.`,
          },
        ],
      },
    ],
  };
