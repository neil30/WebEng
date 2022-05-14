// Get DOM Elements
const inventory = document.querySelector('#my-inventory');
const inventBtn = document.querySelector('#invent-btn');
const closeInv = document.querySelector('.close-inv');

// Events
inventBtn.addEventListener("click", openInvent);
closeInv.addEventListener("click", closeInvent);
window.addEventListener("click", outsideInvent);

// Open
function openInvent() {
  inventory.style.display = "block";
}

// Close
function closeInvent() {
  inventory.style.display = "none";
}

// Close If Outside Click
function outsideInvent(e) {
  if (e.target == inventory) {
	inventory.style.display = "none";
  }
}