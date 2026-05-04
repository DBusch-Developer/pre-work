export const week2day1 = {
  number: 10,
  label: "Day 1",
  title: "Week 2, Day 1 — HTML Foundations",
  subtitle: "Read it. Build it. Style it. Explain it.",
  color: "#22d3ee",
  sections: [
    {
      heading: "Exercise 1 — Read AI-Generated HTML",
      description: "Read every line. Name every tag. Before you write a single character.",
      qa: [
        {
          q: "The HTML ChatGPT generated for the community center prompt",
          a: `<!DOCTYPE html>
<!-- Document type declaration — tells the browser this is HTML5 -->
<html>
  <!-- Root element that wraps the entire page -->
  <head>
    <!-- Contains metadata about the page — not visible to the user -->
    <title>Riverside Community Center</title>
    <!-- Text that appears in the browser tab -->
  </head>
  <body>
    <!-- Everything the user actually sees lives here -->

    <!-- Main heading section -->
    <h1>Riverside Community Center</h1>

    <!-- Description paragraph -->
    <p>Welcome to the Riverside Community Center — a welcoming space where neighbors of all ages come together to learn, connect, and grow.</p>

    <!-- Programs offered -->
    <ul>
      <!-- Each program is its own list item -->
      <li>Youth After-School Program</li>
      <li>Senior Fitness & Wellness Classes</li>
      <li>Adult Continuing Education</li>
      <li>Community Garden Workshop</li>
    </ul>

    <!-- Signup link -->
    <a href="#">Sign Up for Programs</a>

    <!-- Image placeholder -->
    <img src="community.jpg" alt="Riverside Community Center">

  </body>
</html>`,
        },
        {
          q: "Tag Reference Table — tag, purpose, what it looks like in the browser (DOCTYPE, html, head, title, body, h1, p, ul, li, a, img)",
          a: `Tag              | Purpose                                          | Browser Appearance
-----------------+--------------------------------------------------+------------------------------------------
<!DOCTYPE html>  | Tells the browser this is an HTML5 document     | Nothing — not rendered on the page
<html>           | Root container that wraps the entire page        | Nothing — purely structural
<head>           | Holds metadata: title, links, scripts            | Nothing visible on the page
<title>          | Sets the text shown in the browser tab           | Shows in the tab — not on the page itself
<body>           | Contains all visible content                     | The entire visible page
<h1>             | Primary heading — the top-level title            | Large bold text (~2x normal size by default)
<p>              | A paragraph of text                              | Block of text with top and bottom spacing
<ul>             | Unordered list — container for bullet points     | Indented list with bullet markers
<li>             | A single item inside a list                      | One bullet point line
<a>              | Anchor — creates a clickable hyperlink           | Blue underlined text (default browser style)
<img>            | Embeds an image from a file path or URL          | The image itself, or a broken icon if missing`,
        },
        {
          q: "Which tag doesn't have a closing tag? Why not?",
          a: `<img> — and technically <!DOCTYPE html> as well, though that's not really a tag in the usual sense.

<img> is what's called a void element. It doesn't wrap any content — it doesn't contain text or other tags. It just points to a source file and says "put the image here." Since there's nothing to open and close around, there's no closing tag. The same rule applies to <br>, <hr>, <input>, and <meta>. They all work by themselves because they have nothing to contain.`,
        },
        {
          q: "What would happen if you deleted the <body> tag but kept everything inside it?",
          a: `The page would probably still look fine. Chrome and Firefox are extremely forgiving — they'll infer where the body content starts and render it anyway. Most browsers auto-correct broken structure before they show you anything.

But technically the document is invalid HTML. You'd lose the ability to target body { } in CSS cleanly, tools that parse the DOM strictly (accessibility software, some search engine crawlers) might trip on it, and other developers reading your code would be confused. Visually identical, structurally broken. The browser fixed your mistake and didn't tell you.`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Build a Basic Page from Scratch",
      description: "No AI. No copy-paste. You and a blank file.",
      qa: [
        {
          q: "What I built — describe the page and what you added step by step",
          a: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
</head>
<body>
    <h1>Diana Busch</h1>
    <p>I am a full-time student at Yavapai College pursuing my Bachelor's Degree in Computer Science.</p>
    <img src="https://amsterdamduckstore.com/wp-content/uploads/2022/08/Lucky-Cat-Rubber-Duck-front.jpg" alt="Lucky Cat Rubber Duck" width="200">
    <br/>
    <a href="https://prompt-forge-woad-one.vercel.app/" target="_blank">PromptForge</a>
    <ul>
        <li>Python</li>
        <li>Rust</li>
        <li>Prompt Engineering</li>
    </ul>
</body>
</html>`,
        },
        {
          q: "What felt natural to type? What felt confusing?",
          a: `Natural: the nesting logic clicked pretty fast. html wraps everything, head sits above body, all the visible stuff goes inside body. Once I saw it as a set of containers inside containers, typing the structure felt mechanical in a good way.

Confusing: finding a copy-able image address on the internet that actually worked. Right-clicking and copying an image URL sounds simple until the image just doesn't render — some sites block hotlinking so you get a broken icon instead. Had to try a few before one actually loaded on the page.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Add CSS Using an External Stylesheet",
      description: "Same HTML. One new file. Now it actually looks like something.",
      qa: [
        {
          q: "Box model check — what DevTools showed when I changed body padding from 40px 24px to 80px 24px",
          a: `In the Computed tab, the box model diagram shows four layers: margin, border, padding, content. When I changed the top/bottom padding from 40px to 80px, the green padding section in the diagram visibly grew — the top and bottom slices got taller. The content area didn't change size at all.

That's the thing that clicked: padding doesn't move the border outward — it pushes the content inward. The box stays where it is; the content just has more breathing room inside it. The page got taller because there was more space inside the body before the content started, not because the body itself expanded outward.`,
        },
        {
          q: "CSS changes I made beyond the starter styles to make it mine",
          a: `Changed background-color to #0f0f1a — slightly darker than the starter's #1a1a2e, more contrast.

Changed h1 color to #60a5fa — the amber felt warm in a way that didn't match the cooler dark background I was going for. Blue felt more cohesive.

Added to p: background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; — turns the paragraph into something that reads like a card floating on the dark background. Subtle but makes the text feel intentional instead of just dropped on the page.

Changed ul { list-style-type: square; } — small, but square bullets feel more deliberate than the default circle.

Added img { max-width: 100%; border-radius: 6px; margin: 16px 0; } — the image was overflowing the 800px container without max-width. Border-radius softens the edges.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Flexbox Header",
      description: "Logo left. Nav right. Two lines of CSS made it happen.",
      qa: [
        {
          q: "What happened when I changed justify-content: space-between to center? To flex-start?",
          a: `center — the logo and nav grouped together in the middle of the header. All the space that was pushing them apart collapsed; they sat side by side at the center instead of at opposite ends. The space-between logic was completely gone.

flex-start — both elements snapped to the left edge. Same result as center in terms of them grouping together, but pinned to the left instead of the middle. The right side of the header was completely empty. It looked broken rather than intentional.

space-between is the one that actually does the work — it distributes all the leftover space between the children, which in this case means pushing them as far apart as possible.`,
        },
        {
          q: "What happened when I removed align-items: center?",
          a: `The logo and nav links lost their vertical alignment. The logo text snapped to the top of the header container, and the nav links defaulted to stretching full height (the default align-items value is stretch). They were no longer sitting on the same invisible horizontal midpoint.

It was subtle on this page because the header doesn't have a lot of height, but you could see the logo and nav were no longer sitting at the same level. In a taller header it would have looked completely broken. align-items: center is what keeps both children lined up on that shared middle axis regardless of how tall each one is.`,
        },
        {
          q: "In my own words: what flexbox actually does to create this layout",
          a: `display: flex turns the header into a flex container, which means its direct children — the logo div and the nav — automatically line up in a row instead of stacking on top of each other like block elements normally would.

justify-content: space-between controls how that row distributes leftover horizontal space. "Space between" means all the extra space goes in the gap between the children — first child to the far left, last child to the far right, everything in between gets the remaining space. With two children, that puts one on each end.

align-items: center handles the vertical axis. It says: no matter how tall each child is, center them all on the same horizontal midline inside the container.

Take away any one of those three and the layout falls apart. flex gives you the row. justify-content decides where along the row things go. align-items decides where vertically they sit. All three together is what makes "logo left, nav right, vertically centered" happen in five lines of CSS.`,
        },
      ],
    },
    {
      heading: "Exercise 5 — AI, Improve My Page",
      description: "AI suggests. You decide. That's the whole workflow.",
      qa: [
        {
          q: "The CSS I sent to ChatGPT for improvement suggestions",
          a: `body {
  font-family: Arial, sans-serif;
  background-color: #0f0f1a;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px;
}

h1 {
  color: #60a5fa;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.6;
  background: rgba(255,255,255,0.03);
  padding: 20px;
  border-radius: 8px;
}

a {
  color: #60a5fa;
}

li {
  margin-bottom: 8px;
}

ul {
  list-style-type: square;
}

img {
  max-width: 100%;
  border-radius: 6px;
  margin: 16px 0;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #2d2d44;
  border-radius: 8px;
  margin-bottom: 32px;
}

.site-header .logo {
  color: #60a5fa;
  font-weight: bold;
  font-size: 20px;
}

.site-header nav a {
  color: #e0e0e0;
  margin-left: 16px;
  text-decoration: none;
}

.site-header nav a:hover {
  color: #60a5fa;
}`,
        },
        {
          q: "Suggestion table — AI's change, what it does, my decision (Accept / Reject / Modify), why",
          a: `AI's Change                                    | What It Does                                  | Decision | Why
-----------------------------------------------+-----------------------------------------------+----------+------------------------------------------------
Add 'Segoe UI', system-ui to font-family       | Better default font on Windows, clean fallback | Accept   | No downside — Arial stays as the fallback anyway
Add letter-spacing: -0.02em to h1             | Tightens heading — feels more intentional      | Accept   | The heading was slightly loose, this is a real improvement
Add transition: color 0.2s to a and nav a     | Hover color animates instead of snapping       | Accept   | Small but makes the page feel less static
Increase body line-height to 1.8              | More breathing room between lines              | Modify   | 1.8 felt too open — kept it at 1.6
Add border-bottom: 1px solid to nav links     | Replaces default underline with a styled one   | Reject   | Adds complexity I don't need at this stage
Add box-shadow to .site-header                | Depth / separation from the background         | Reject   | The flat look is intentional — not adding weight here`,
        },
        {
          q: "The difference between my original, AI's full suggestion, and what I actually kept",
          a: `My original CSS was functional but bare — it looked like dark mode defaults, not a considered design. It worked, but nothing felt deliberate.

AI's full suggestion would have touched almost every rule. Better font stacks, letter-spacing on headings, transitions everywhere, box shadows, refined hover states, a few layout tweaks. Some of it was genuinely good. Some of it felt like AI polishing for the sake of polishing — adding box shadows and underline styles that would have added visual noise without adding clarity.

What I actually kept: the font stack update (real improvement, zero cost), the letter-spacing on h1 (subtle but noticeable), and the link hover transition (one line, worth it). Rejected anything decorative that didn't make the content easier to read.

The curated version ended up with three changes instead of twelve. That's the workflow — AI finds the easy wins and the overcomplications at the same time. Your job is to tell them apart.`,
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description: "Say it out loud. If you can't explain it, you don't own it yet.",
      qa: [
        {
          q: "The specific question my partner asked me",
          a: "",
        },
        {
          q: "The part I struggled to explain — and what I now know I need to revisit",
          a: "",
        },
      ],
    },
    {
      heading: "Going Deeper (Optional)",
      description: "Not required. Pick one if you have time and want to push further.",
      qa: [
        {
          q: "Which challenge I tried and what happened",
          a: "",
        },
      ],
    },
  ],
};
