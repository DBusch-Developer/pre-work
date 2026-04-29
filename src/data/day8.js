export const day8 = {
  number: 8,
  label: "Cohort 3",
  title: "Cohort Day 3 — Sequence, Selection, Iteration",
  subtitle: "The three building blocks of every program ever written.",
  color: "#34d399",
  sections: [
    {
      heading: "Exercise 1 — Build with Sequence",
      description:
        "Ask → process → display. Every line depends on the one before it.",
      qa: [
        {
          q: "The prompt I wrote",
          a: `Write a JavaScript program that asks the user for the original price of an item and what percentage discount is being applied. Calculate the discount amount and the final sale price. Display both the amount saved and what they'll pay.`,
        },
        {
          q: "The code AI generated",
          a: `// Ask for the original price
const originalPrice = parseFloat(prompt("What is the original price of the item? $"));

// Ask for the discount percentage
const discountPercent = parseFloat(prompt("What percentage discount is applied? (e.g. 20 for 20%)"));

// Calculate the discount amount
const discountAmount = originalPrice * (discountPercent / 100);

// Calculate the final price
const finalPrice = originalPrice - discountAmount;

// Display the results
document.write("<h2>Discount Summary</h2>");
document.write("<p>Original price: $" + originalPrice.toFixed(2) + "</p>");
document.write("<p>You save: $" + discountAmount.toFixed(2) + "</p>");
document.write("<p>You pay: $" + finalPrice.toFixed(2) + "</p>");`,
        },
        {
          q: "Tracing with sample inputs — $80 item, 25% discount",
          a: `originalPrice = 80
discountPercent = 25
discountAmount = 80 * (25 / 100) = 80 * 0.25 = 20
finalPrice = 80 - 20 = 60

Output:
Original price: $80.00
You save: $20.00
You pay: $60.00`,
        },
        {
          q: "Does the sequence make sense? Does each line depend on the one before it?",
          a: `Yes. You can't calculate discountAmount without both originalPrice and discountPercent. You can't calculate finalPrice without discountAmount. You can't display any of it until all three are computed. Each step is blocked until the previous one completes — that's sequence.`,
        },
        {
          q: "Modification — I added 8% sales tax applied after the discount. What did I change?",
          a: `// Add after finalPrice is calculated:
const tax = finalPrice * 0.08;
const totalWithTax = finalPrice + tax;

document.write("<p>Tax (8%): $" + tax.toFixed(2) + "</p>");
document.write("<p>Total with tax: $" + totalWithTax.toFixed(2) + "</p>");

// Sample trace on $80 item, 25% off:
// finalPrice = $60.00
// tax = 60 * 0.08 = $4.80
// totalWithTax = $64.80`,
        },
      ],
    },
    {
      heading: "Exercise 2 — Build with Selection",
      description: "If/else — different conditions, different outcomes.",
      qa: [
        {
          q: "The prompt I wrote",
          a: `Write a JavaScript program that asks the user to enter their credit score. Based on the score, display a different message:
- 800 and above: "Excellent credit! You qualify for the best rates."
- 740 to 799: "Very good credit. Most lenders will approve you."
- 670 to 739: "Good credit. You'll qualify for most loans."
- 580 to 669: "Fair credit. Some lenders may work with you."
- Below 580: "Poor credit. Focus on building your score before applying."`,
        },
        {
          q: "The code AI generated",
          a: `// Ask the user for their credit score
const score = parseInt(prompt("Enter your credit score (300-850):"));

// Display message based on score range
if (score >= 800) {
  document.write("<p>Excellent credit! You qualify for the best rates.</p>");
} else if (score >= 740) {
  document.write("<p>Very good credit. Most lenders will approve you.</p>");
} else if (score >= 670) {
  document.write("<p>Good credit. You'll qualify for most loans.</p>");
} else if (score >= 580) {
  document.write("<p>Fair credit. Some lenders may work with you.</p>");
} else {
  document.write("<p>Poor credit. Focus on building your score before applying.</p>");
}`,
        },
        {
          q: "Trace: score = 45. Which condition catches it? What message shows?",
          a: `score = 45
45 >= 800? No.
45 >= 740? No.
45 >= 670? No.
45 >= 580? No.
Falls to else → "Poor credit. Focus on building your score before applying."`,
        },
        {
          q: "Trace: score = 740. Which condition catches it?",
          a: `score = 740
740 >= 800? No.
740 >= 740? Yes → "Very good credit. Most lenders will approve you."

740 lands in the second condition because >= 740 includes 740 exactly. It never reaches the "Good credit" block.`,
        },
        {
          q: "Modification — added: if score is exactly 850 (perfect score), display a special message. What did I add?",
          a: `// Must go FIRST before the >= 800 check, or 850 will match that instead
if (score === 850) {
  document.write("<p>Perfect score! You have maximum creditworthiness. 🏆</p>");
} else if (score >= 800) {
  document.write("<p>Excellent credit! You qualify for the best rates.</p>");
} else if (score >= 740) {
  ...

// Order matters — if >= 800 came first, 850 would match it
// and the exact-850 check would never be reached.`,
        },
        {
          q: "What happens if I enter a negative number?",
          a: `A negative number is less than 580, so it falls to the else block and displays "Poor credit. Focus on building your score before applying." JavaScript evaluates the conditions mathematically — it doesn't know that -200 isn't a real credit score.`,
        },
        {
          q: "What happens if I enter a word instead of a number?",
          a: `parseInt("excellent") returns NaN. Every condition — NaN >= 800, NaN >= 740, etc. — evaluates to false. It falls all the way to the else block and displays the "Poor credit" message. The program doesn't crash but it gives a meaningless answer — a real app would need input validation.`,
        },
      ],
    },
    {
      heading: "Exercise 3 — Build with Iteration",
      description: "Loops — do something to every item in a list.",
      qa: [
        {
          q: "The prompt I wrote",
          a: `Write a JavaScript program that has a list of 5 streaming services with their monthly prices. Loop through the list and display each service and its price. At the end, show the total monthly cost and how much that is per year.`,
        },
        {
          q: "The code AI generated",
          a: `// List of streaming services with monthly prices
const services = [
  { name: "Netflix", price: 15.49 },
  { name: "Hulu", price: 7.99 },
  { name: "Disney+", price: 10.99 },
  { name: "HBO Max", price: 15.99 },
  { name: "Apple TV+", price: 9.99 }
];

let total = 0;

document.write("<h2>Monthly Streaming Costs</h2>");

// Loop through each service
for (let i = 0; i < services.length; i++) {
  total += services[i].price;
  document.write("<p>" + services[i].name + ": $" + services[i].price.toFixed(2) + "/mo</p>");
}

// Display totals
document.write("<hr>");
document.write("<p>Total per month: $" + total.toFixed(2) + "</p>");
document.write("<p>Total per year: $" + (total * 12).toFixed(2) + "</p>");`,
        },
        {
          q: "Where does the loop start? Where does it end? How many times does it run?",
          a: `Starts: i = 0 (Netflix, first item)
Ends: when i < services.length fails — i reaches 5 and 5 < 5 is false
Runs: 5 times (once per service, index 0 through 4)

Each pass: adds the price to total, displays the service name and price.`,
        },
        {
          q: "Modification — 10% discount on any service over $12.00. What did I add?",
          a: `for (let i = 0; i < services.length; i++) {
  let price = services[i].price;
  let note = "";

  if (price > 12.00) {
    const discounted = price * 0.90;
    note = " → $" + discounted.toFixed(2) + " after 10% discount";
    price = discounted;
  }

  total += price;
  document.write("<p>" + services[i].name + ": $" + services[i].price.toFixed(2) + note + "</p>");
}

// Output:
// Netflix: $15.49 → $13.94 after 10% discount
// Hulu: $7.99
// Disney+: $10.99
// HBO Max: $15.99 → $14.39 after 10% discount
// Apple TV+: $9.99
// Total per month: $56.30
// Total per year: $675.60`,
        },
      ],
    },
    {
      heading: "Pair Exercise — Prompt/Read Swap",
      description:
        "One person prompts, the other reads the code cold. Then swap.",
      qa: [
        {
          q: "Round 1 — the prompt that was used",
          a: `Write a JavaScript program that takes a list of student scores and prints the highest one

const scores = [78, 95, 62, 88, 100, 74];

let highest = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}

console.log("Highest score: " + highest);`,
        },
        {
          q: "Round 1 — what the Reader said the code did (in plain English)",
          a: "Cam and Phillip said that this was a program that takes test scores and finds the highest one and prints that.",
        },
        {
          q: "Round 1 — was the Reader right? What did the original prompt actually ask for?",
          a: "Yes, they were right. The original prompt asked for a JavaScript program that takes a list of student scores and prints the highest one. The code initializes the highest score to the first element, then loops through the rest of the scores, comparing each one to the current highest. If it finds a higher score, it updates the highest variable. Finally, it prints out the highest score.",
        },
        {
          q: "Round 2 — the prompt that was used",
          a: `Make a small program to call an async api in javascript

async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('User data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUser();`,
        },
        {
          q: "Round 2 — what the Reader said the code did",
          a: `I said that I thought this code was making an API call to fetch user data.`,
        },
        {
          q: "Debrief — what was harder: writing the prompt or reading the code?",
          a: "The harder part was just properly explaining what the code said. I said that it was calling an API to fetch user data, but I had to read through it a few times to understand the flow and what the output would be. The prompt was straightforward to write, but interpreting the code required more careful reading and tracing.",
        },
        {
          q: "Did the code do what the prompt asked? Was anything missing?",
          a: "Yes, the code did exactly what the prompt asked. It defines an asynchronous function getUser that makes a fetch call to a placeholder API to get user data. It checks if the response is okay, then parses the JSON and logs it. If there's an error at any point, it catches it and logs the error message. Finally, it calls the getUser function to execute the code. There doesn't seem to be anything missing — it fulfills the requirements of calling an async API and handling the response.",
        },
        {
          q: "Round 3 — the prompt that was used",
          a: `Write some code that calculates a user weight loss given the weight from last week and the new weight
      
function calculateWeightLoss(lastWeekWeight, currentWeight) {
  // Calculate the difference
  let difference = lastWeekWeight - currentWeight;

  // Round to two decimal places
  difference = Math.round(difference * 100) / 100;

  if (difference > 0) {
    return \`Congratulations! You lost \${difference} units.\`;
  } else if (difference < 0) {
    return \`You gained \${Math.abs(difference)} units.\`;
  } else {
    return "Your weight stayed exactly the same.";
  }
}

// Example usage:
const lastWeek = 180.5;
const thisWeek = 178.0;
console.log(calculateWeightLoss(lastWeek, thisWeek));`,
        },
        {
          q: "Round 3 — what the Reader said the code did",
          a: `I said that this code calculates the weight loss (or gain) by finding the difference between last week's weight and the current weight, rounds it to two decimal places, and returns a message indicating whether the user lost weight, gained weight, or stayed the same.`,
        },
        {
          q: "Debrief — what was harder: writing the prompt or reading the code?",
          a: "The code was extra clear because he left comments and used descriptive variable names. It was easy to follow the logic and understand what it was doing. The prompt was also straightforward, but I think reading the code was easier this time because of how well it was written.",
        },
        {
          q: "Did the code do what the prompt asked? Was anything missing?",
          a: "The code did exactly what the prompt asked. It calculates the weight loss (or gain) by finding the difference between last week's weight and the current weight, rounds it to two decimal places, and returns a message indicating whether the user lost weight, gained weight, or stayed the same. Nothing seems to be missing — it fulfills the requirements perfectly.",
        },
      ],
    },
    {
      heading: "Bug Hunt 1 — The Off-by-One",
      description:
        "Arrays start at 0, not 1. This one will get you if you're not paying attention.",
      qa: [
        {
          q: "The buggy code",
          a: `const numbers = [1, 2, 3, 4, 5];

for (let i = 1; i <= numbers.length; i++) {
  document.write("<p>Number: " + numbers[i] + "</p>");
}`,
        },
        {
          q: "What did I THINK it would display before running it?",
          a: `Looks like it should print numbers 1 through 5. i starts at 1, goes up to numbers.length (5), runs 5 times. Seems right — until you remember arrays are zero-indexed.`,
        },
        {
          q: "What ACTUALLY happened when I ran it?",
          a: `Number: 2
Number: 3
Number: 4
Number: 5
Number: undefined

It skipped 1 (index 0) and printed "undefined" at the end because numbers[5] doesn't exist — the array only goes up to index 4.`,
        },
        {
          q: "What's the bug and why does it happen?",
          a: `The loop starts at i = 1 instead of i = 0. Arrays are zero-indexed — numbers[0] is 1, numbers[1] is 2, etc. Starting at 1 skips the first element. And i <= numbers.length lets i reach 5, but numbers[5] doesn't exist, so it returns undefined.`,
        },
        {
          q: "The fix",
          a: `// Change i = 1 to i = 0, and <= to <
for (let i = 0; i < numbers.length; i++) {
  document.write("<p>Number: " + numbers[i] + "</p>");
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5`,
        },
      ],
    },
    {
      heading: "Bug Hunt 2 — The Logic Error",
      description:
        "A student scored 85 but the program says they failed. Or does it?",
      qa: [
        {
          q: "The code to trace",
          a: `const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

if (grade === "F") {
  document.write("You failed with a score of " + score);
} else {
  document.write("You passed! Grade: " + grade);
}`,
        },
        {
          q: "Trace — what grade does 85 actually get?",
          a: `85 >= 90? No.
85 >= 80? Yes → grade = "B"
grade === "F"? No → "You passed! Grade: B"

The bug doesn't exist. The description was a trap — the code works perfectly. The lesson: trust your own trace, not the claim.`,
        },
        {
          q: "Follow-up — I introduced a real bug so 85 incorrectly gets an A. What did I change?",
          a: `// Swapped the threshold values so A fires before it should:
if (score >= 80) {    // was >= 90 — now 85 matches this first
  grade = "A";
} else if (score >= 90) {  // was >= 80 — now unreachable for most scores
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
// 85 >= 80 → grade = "A" → "You passed! Grade: A" — wrong!`,
        },
        {
          q: "Did my partner find the bug?",
          a: `I put the bug in... here is the code...
const score = 85;
let grade;

if (score >= 85) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

if (grade === "F") {
  document.write("You failed with a score of " + score);
} else {
  document.write("You passed! Grade: " + grade);
}
  
Cam and Phillip found the bug right away. They said, "Wait, the A condition is wrong — it should be >= 90, not >= 85. That's why 85 is getting an A instead of a B. We all got 4.0 GPA's without needing to do all the work, sweet!" They were correct — the threshold for an A was set too low, causing the logic to assign an A to scores that should be Bs. Great catch!`,
        },
      ],
    },
    {
      heading: "Bug Hunt 3 — The Missing Piece",
      description: "The total always shows $0. Why?",
      qa: [
        {
          q: "The buggy code",
          a: `const items = [
  { name: "Apples", price: 3.99 },
  { name: "Bread", price: 2.49 },
  { name: "Milk", price: 4.29 },
  { name: "Eggs", price: 5.99 }
];

let total = 0;

for (let i = 0; i < items.length; i++) {
  document.write("<p>" + items[i].name + ": $" + items[i].price + "</p>");
}

document.write("<h3>Total: $" + total.toFixed(2) + "</h3>");`,
        },
        {
          q: "What's the bug?",
          a: `The loop displays each item but never adds anything to total. The line total += items[i].price is missing inside the loop. total gets set to 0 on initialization and nothing ever changes it — so it prints $0.00 every time.`,
        },
        {
          q: "The fix — what line did I add and where?",
          a: `// Add total += items[i].price inside the loop:
for (let i = 0; i < items.length; i++) {
  total += items[i].price;  // ← this line was missing
  document.write("<p>" + items[i].name + ": $" + items[i].price + "</p>");
}

// Output:
// Apples: $3.99
// Bread: $2.49
// Milk: $4.29
// Eggs: $5.99
// Total: $16.76`,
        },
        {
          q: "Extension — I added average price per item. What did I add?",
          a: `const average = total / items.length;
document.write("<p>Average price per item: $" + average.toFixed(2) + "</p>");

// $16.76 ÷ 4 items = $4.19 average`,
        },
      ],
    },
    {
      heading: "Extend Challenge — Combine Everything",
      description:
        "Sequence + selection + iteration in one program. All three at once.",
      qa: [
        {
          q: "The prompt I used",
          a: `Write a JavaScript program that has a list of 5 employees with their names and hours worked this week. Loop through the list. Pay each employee $18/hr for regular hours (up to 40). Any hours above 40 are overtime, paid at 1.5x ($27/hr). Display each employee's name and total pay. At the end, display the total payroll cost and how many employees worked overtime.`,
        },
        {
          q: "The code AI generated",
          a: `const employees = [
  { name: "Marcus", hours: 45 },
  { name: "Aaliyah", hours: 38 },
  { name: "Jordan", hours: 52 },
  { name: "Priya", hours: 40 },
  { name: "Devon", hours: 33 }
];

const regularRate = 18;
const overtimeRate = 18 * 1.5; // $27/hr

let totalPayroll = 0;
let overtimeCount = 0;

document.write("<h2>Weekly Payroll</h2>");

for (let i = 0; i < employees.length; i++) {
  const name = employees[i].name;
  const hours = employees[i].hours;
  let pay = 0;
  let note = "";

  if (hours > 40) {
    const regularPay = 40 * regularRate;
    const overtimePay = (hours - 40) * overtimeRate;
    pay = regularPay + overtimePay;
    note = " (includes overtime)";
    overtimeCount++;
  } else {
    pay = hours * regularRate;
  }

  totalPayroll += pay;
  document.write("<p>" + name + ": $" + pay.toFixed(2) + note + "</p>");
}

document.write("<hr>");
document.write("<p>Total payroll: $" + totalPayroll.toFixed(2) + "</p>");
document.write("<p>Employees who worked overtime: " + overtimeCount + "</p>");`,
        },
        {
          q: "Trace — I counted overtime employees myself. Does it match?",
          a: `Marcus: 45 hrs → overtime ✓  (40×$18 + 5×$27 = $720 + $135 = $855)
Aaliyah: 38 hrs → regular  ($38×$18 = $684)
Jordan: 52 hrs → overtime ✓  (40×$18 + 12×$27 = $720 + $324 = $1,044)
Priya: 40 hrs → regular  (40×$18 = $720)
Devon: 33 hrs → regular  (33×$18 = $594)

Manual count: 2 overtime employees
Program output: "Employees who worked overtime: 2" ✓ Matches.
Total payroll: $855 + $684 + $1,044 + $720 + $594 = $3,897.00`,
        },
        {
          q: "Modification — I added average pay per employee. What did I add?",
          a: `// After the loop, add:
const averagePay = totalPayroll / employees.length;
document.write("<p>Average pay per employee: $" + averagePay.toFixed(2) + "</p>");

// $3,897.00 ÷ 5 = $779.40 average`,
        },
      ],
    },
  ],
};
