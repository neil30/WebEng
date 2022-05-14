// Get DOM Elements
const modal1 = document.querySelector('#my-modal1');
const modal2 = document.querySelector("#my-modal2");
const modal3 = document.querySelector("#my-modal3");
const modalBtn = document.querySelectorAll('#modal-btn');
const closeBtn = document.querySelectorAll('.close');
const confirmBtn = document.querySelectorAll(".confirm");

// Events
modalBtn[0].addEventListener('click', openModal1);
modalBtn[1].addEventListener("click", openModal2);
modalBtn[2].addEventListener("click", openModal3);
closeBtn[0].addEventListener('click', closeModal1);
closeBtn[1].addEventListener("click", closeModal2);
closeBtn[2].addEventListener("click", closeModal3);
confirmBtn[0].addEventListener("click", confirmModal1);
confirmBtn[1].addEventListener("click", confirmModal2);
confirmBtn[2].addEventListener("click", confirmModal3);
window.addEventListener('click', outsideClick);

// Open
function openModal1() {
  modal1.style.display = 'block';
}

function openModal2() {
	modal2.style.display = "block";
}

function openModal3() {
	modal3.style.display = "block";
}

// Close
function closeModal1() {
  modal1.style.display = 'none';
}

function closeModal2() {
	modal2.style.display = "none";
}

function closeModal3() {
	modal3.style.display = "none";
}

// Confirm
function confirmModal1() {
  modal1.style.display = 'none';
  window.open("https://www.facebook.com/neil.james.tamao", "_blank");
}

function confirmModal2() {
	modal2.style.display = "none";
  window.open("https://www.instagram.com/neil.jemss/?hl=en", "_blank");
}

function confirmModal3() {
	modal3.style.display = "none";
  window.open("https://www.linkedin.com/in/neil-james-946294159/", "_blank");
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal1) {
		modal1.style.display = "none";
  } else if (e.target == modal2) {
		modal2.style.display = "none";
  } else if (e.target == modal3) {
		modal3.style.display = "none";
  }
}