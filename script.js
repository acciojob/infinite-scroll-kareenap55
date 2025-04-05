const list = document.getElementById('infinite-list');
let itemCount = 0;

// Function to create and add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Add more items on scroll to bottom
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 5) {
    addItems(2);
  }
});
