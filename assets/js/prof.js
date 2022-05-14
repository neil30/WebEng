// Get DOM Elements
const prof = document.querySelector("#my-prof");
const profBtn = document.querySelector("#prof-btn");
const closeProf = document.querySelector(".close-prof");

// Events
profBtn.addEventListener("click", openProf);
closeProf.addEventListener("click", closeProfile);
window.addEventListener("click", outsideProfile);

// Open
function openProf() {
	prof.style.display = "block";
}

// Close
function closeProfile() {
	prof.style.display = "none";
}

// Close If Outside Click
function outsideProfile(e) {
	if (e.target == prof) {
		prof.style.display = "none";
	}
}
