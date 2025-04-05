//your code here!
const list = document.getElementById('infinite-list');
let itemCount = 0;

// Function to create list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial items
addItems(10);

// Infinite scroll logic
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // If user has scrolled to the bottom
  if (scrollTop + windowHeight >= fullHeight - 10) {
    addItems(2);
  }
});


