// script.js

const list = document.getElementById("infi-list");
let counter = 1;

// Adds "count" new list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${counter++}`;
    list.appendChild(li);
  }
}

// Initial load of 10 items
addItems(10);

// Scroll listener for infinite scroll
window.addEventListener("scroll", () => {
  const scrolledTo = window.innerHeight + window.pageYOffset;
  const totalHeight = document.body.scrollHeight;

  // Trigger when user is at (or beyond) bottom of page
  if (scrolledTo >= totalHeight - 2) {
    addItems(2);
  }
});

