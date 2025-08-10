// ================================
// Part 1: Variables & Conditionals
// ================================

// Example: Ask for name and greet user
let userName = prompt("Enter your name:");
if (userName && userName.trim().length > 0) {
  console.log(`Welcome, ${userName}!`);
} else {
  console.log("Hello, guest!");
}

// Example: Check if today is weekend
let today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
if (today === 0 || today === 6) {
  console.log("Enjoy your weekend!");
} else {
  console.log("Have a productive weekday!");
}

// ================================
// Part 2: Functions (Reusable)
// ================================

// Function to change the page title text
function changeTitle(newTitle) {
  document.querySelector("header h1").textContent = newTitle;
}

// Function to highlight all table rows
function highlightAllRows(color) {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach(row => {
    row.style.backgroundColor = color;
  });
}

// Function to toggle captions in grid
function toggleCaptions() {
  document.querySelectorAll(".grid-container p").forEach(caption => {
    caption.style.display = caption.style.display === "none" ? "block" : "none";
  });
}

// ================================
// Part 3: Loops
// ================================

// Loop example 1: Add numbering to table rows
const tableRows = document.querySelectorAll("tbody tr");
for (let i = 0; i < tableRows.length; i++) {
  tableRows[i].firstElementChild.textContent = `${i + 1}. ${tableRows[i].firstElementChild.textContent}`;
}

// Loop example 2: Log all nav link texts
document.querySelectorAll(".nav a").forEach(link => {
  console.log(`Nav link: ${link.textContent}`);
});

// ================================
// Part 4: DOM Interactions
// ================================

// Change header title on click
document.querySelector("header h1").addEventListener("click", () => {
  changeTitle("🚀 Welcome to butterfly world!");
});

// Highlight table rows on hover
tableRows.forEach(row => {
  row.addEventListener("mouseenter", () => row.style.backgroundColor = "#f0f0f0");
  row.addEventListener("mouseleave", () => row.style.backgroundColor = "");
});

// Toggle captions button
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Captions";
toggleButton.classList.add("mt-20");
document.querySelector(".grid-container").before(toggleButton);
toggleButton.addEventListener("click", toggleCaptions);

// Form submission handler
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form submitted successfully!");
  event.target.reset();
});
