export const day3 = {
    number: 3,
    label: "Day 3",
    title: "Reading What AI Writes",
    subtitle: "Code is just text. Start there.",
    color: "#818cf8",
    sections: [
      {
        heading: "Exercise 1: First Code Read",
        description: "AI wrote it, I read it. Every line. No flinching.",
        qa: [
          {
            q: 'Prompt: "Write a simple JS program that asks for a name and says hello. Add a comment on every line."',
            a: `Here's a simple JavaScript program with a comment on every line:

// Ask the user to enter their name and store the result in a variable called "name"
let name = prompt("What is your name?");

// Create a greeting message by combining "Hello, " with the user's name
let greeting = "Hello, " + name + "!";

// Display the greeting message in a popup alert box
alert(greeting);`,
          },
          {
            q: "Can I understand the comment?",
            a: "Yeah — they're plain English. 'Ask the user to enter their name and store the result' is basically the whole line explained in words. No jargon",
          },
          {
            q: "Does the code match what the comment says?",
            a: "Yes, line for line. The comment says what's about to happen, then the code does exactly that. prompt() asks, let name stores it, 'Hello, ' + name + '!' builds the message, alert() shows it.",
          },
          {
            q: "What would change if I changed the name in the code?",
            a: "If you changed name to something else — say userName — everywhere name appears you'd have to change it too, or it breaks. The variable name itself doesn't matter, it's just a label. What matters is consistency.",
          },
          {
            q: 'Prompt: "Explain this code to me line by line like I have never seen code before."',
            a: `let name = prompt("What is your name?");

This creates a little box that asks the person, "What is your name?" Whatever they type gets saved in a container called name.

let greeting = "Hello, " + name + "!";

This makes a message by combining three pieces: the word "Hello, ", the person's name, and an exclamation point.

alert(greeting);

This shows the finished message in a popup box. For example, if they typed Diana, it would say:

Hello, Diana!`,
          },
        ],
      },
      {
        heading: "Exercise 2: Modifying the Code",
        description: "Read it, change it, break it, fix it. That's the loop.",
        qa: [
          {
            q: "Prompt: Change this program so it also asks for the person's favorite color and includes it in the greeting.",
            a: `// Ask the user to enter their name and store it in the variable "name"
let name = prompt("What is your name?");

// Ask the user to enter their favorite color and store it in "color"
let color = prompt("What is your favorite color?");

// Create a greeting that includes both their name and favorite color
let greeting = "Hello, " + name + "! Your favorite color is " + color + ".";

// Show the greeting in a popup box
alert(greeting);`,
          },
          {
            q: "What changed? Can you find exactly which lines are new?",
            a: `Two new lines and one changed line.

Line 4-5 are completely new — the prompt for favorite color and storing it in a variable called color. That whole exchange didn't exist in the original.

Line 8 is the changed line. The original greeting was just "Hello, " + name + "!". Now it's longer — it adds "! Your favorite color is " + color + "." at the end, pulling in that second variable.

Lines 1-2 and 11 stayed exactly the same. The name prompt and the alert didn't need to change at all.`,
          },
          {
            q: "Now try to make a change yourself - WITHOUT asking AI.",
            a: `// Ask the user to enter their name and store it in the variable "name"
let name = prompt("What is your name?");

// Ask the user to enter their favorite color and store it in "color"
let location = prompt("Where are you from?");

// Create a greeting that includes both their name and favorite color
let greeting = "Hello, " + name + " from " + location + ", welcome to Next Chapter!";

// Show the greeting in a popup box
alert(greeting);`,
          },
        ],
      },
      {
        heading: "Exercise 3: A Bigger Program",
        description:
          "A longer program with real moving parts. Can I navigate it?",
        qa: [
          {
            q: "Prompt: Write a JavaScript program that has a list of 5 grocery items with prices. Display each item and its price. At the end, display the total cost. Add comments explaining what each section does.",
            a: `// Create an array (list) of grocery items, where each item has a name and a price
let groceries = [
  { name: "Milk", price: 3.50 },
  { name: "Bread", price: 2.25 },
  { name: "Eggs", price: 4.00 },
  { name: "Apples", price: 3.75 },
  { name: "Rice", price: 5.00 }
];

// Create a variable to keep track of the total cost, starting at 0
let total = 0;

// Loop through each item in the groceries list
for (let i = 0; i < groceries.length; i++) {
  // Get the current item from the list
  let item = groceries[i];

  // Display the item's name and price in the console
  console.log(item.name + ": $" + item.price);

  // Add the item's price to the total cost
  total += item.price;
}

// After the loop is finished, display the total cost
console.log("Total cost: $" + total);`,
          },
          {
            q: "Can you find where the list of items is defined?",
            a: `let groceries = [
  { name: "Milk", price: 3.50 },
  { name: "Bread", price: 2.25 },
  { name: "Eggs", price: 4.00 },
  { name: "Apples", price: 3.75 },
  { name: "Rice", price: 5.00 }
];`,
          },
          {
            q: "Can you find where the total is calculated?",
            a: `The total is calculated inside the for loop, lines 16-23. It doesn't happen all at once — it builds up one item at a time. Each pass through the loop hits line 22: total += item.price, which adds that item's price to whatever total already is. By the time the loop finishes all 5 items, total holds the sum of everything. Then line 26 prints it.`,
          },
          {
            q: "If you wanted to add a 6th item, where would you add it?",
            a: `Inside the groceries array, right after the Rice line and before the closing bracket. It would look like: { name: "Butter", price: 2.50 }, — same format as the other five, comma at the end. The loop doesn't need to change at all because it uses groceries.length to know how many items to run through, so it automatically picks up the new one.`,
          },
          {
            q: "If you wanted to add a 10% discount to the total, where would that go?",
            a: `After the loop ends, before the console.log on the last line. You'd add one line: total = total * 0.90; — that knocks 10% off whatever the loop calculated. Then the console.log prints the discounted total instead of the original. The loop itself stays untouched.`,
          },
        ],
      },
      {
        heading: "Exercise 4: AI Isn't Always Right",
        description: "It looks right. But is it? That's the job.",
        qa: [
          {
            q: "Palindrome function AI wrote + 5 test cases",
            a: `// Define a function that checks if a word is a palindrome
function isPalindrome(word) {
  // Convert the word to lowercase so the check is case-insensitive
  let lowerWord = word.toLowerCase();

  // Reverse the word by splitting it into letters, reversing, and joining back together
  let reversed = lowerWord.split("").reverse().join("");

  // Compare the original word with the reversed version
  return lowerWord === reversed;
}

// ----- Test Cases -----

// Test 1: "racecar" (should be true)
console.log("racecar:", isPalindrome("racecar"));

// Test 2: "hello" (should be false)
console.log("hello:", isPalindrome("hello"));

// Test 3: "Madam" (should be true, case-insensitive)
console.log("Madam:", isPalindrome("Madam"));

// Test 4: "level" (should be true)
console.log("level:", isPalindrome("level"));

// Test 5: "JavaScript" (should be false)
console.log("JavaScript:", isPalindrome("JavaScript"));`,
          },
          {
            q: " Do all the test cases make sense? (Is 'racecar' a palindrome? What about 'hello'?)",
            a: `Yes, all five make sense. Racecar reads the same forwards and backwards — r-a-c-e-c-a-r — so true is correct. Hello backwards is o-l-l-e-h, which is not hello, so false is correct. Madam works too, and the lowercase conversion handles the capital M so it still returns true. Level is a classic palindrome, true. JavaScript backwards is tpircSavaJ, definitely not a match, false.`,
          },
          {
            q: "AI's response when I asked: 'Is this code correct? What edge cases might it miss?'",
            a: `Yes — the core logic is correct for simple cases. It lowercases the word and compares it to its reversed version, which works for basic inputs like "racecar" or "Madam".

That said, here are some edge cases it doesn't handle:

Spaces and punctuation: "race car" or "A man, a plan, a canal: Panama" should be true, but the function returns false because of the spaces and commas.

Non-letter characters: Numbers or symbols — "12321" works, but "12-321" won't unless cleaned first.

Empty string: "" returns true — technically correct, but worth deciding if that's what you want.

Unicode and accents: Words like "réer" or emojis may not behave as expected depending on normalization.

Input type issues: If someone passes null, undefined, or a number, the function will throw an error.

If you want it more robust, you'd typically remove non-alphanumeric characters and validate input before checking.`,
          },
          {
            q: "AI's response when I asked: What happens if you pass in a number instead of a word?",
            a: `If someone passes a number like 12321 into the function, it throws an error. Why? Because the code does word.toLowerCase() — and numbers don't have a toLowerCase method, that only exists for strings. JavaScript raises a TypeError: word.toLowerCase is not a function.

The fix is to convert the input to a string first:

function isPalindrome(word) {
  let lowerWord = String(word).toLowerCase();
  let reversed = lowerWord.split("").reverse().join("");
  return lowerWord === reversed;
}

Now 12321 gets treated as "12321" and correctly returns true.`,
          },
        ],
      }, {
        heading: "Write Down",
        description: "Your job is to understand what is generated.",
        qa: [
          {
            q: "What was the hardest part about reading code?",
            a: `Honestly, nothing except maybe just deciphering the differnt style between how ChatGPT gives its response compared to Claude and then compared to how it looks in my VS Code. The different fonts, colors, styles, layouts, that's the only thing that makes me slow down and pay attention. Other than that I am very comfortable reading code. It's one of my favorite parts about coding!`,
          },
          {
            q: "Did you successfully change something in the code? What?",
            a: `I was successful at my code change. I changed the second variable name and prompt to ask what city you were from. Then I rearranged the response "Hello, " + name + " from " + location +", welcome to Next Chapter!"`,
          },{
            q: "On a scale of 1-5, how comfortable do you feel reading code right now? (No wrong answer — this just helps us help you.)",
            a: `I'm at a 6!`,
          },
        ],
      },
    ],
  };
