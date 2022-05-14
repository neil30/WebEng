// Get DOM Elements
const stats = document.querySelector("#my-stats");
const statsBtn = document.querySelector("#stats-btn");
const closeStats = document.querySelector(".close-stats");

// Events
statsBtn.addEventListener("click", openStats);
closeStats.addEventListener("click", closeStat);
window.addEventListener("click", outsideStats);

// Open
function openStats() {
	stats.style.display = "block";
}

// Close
function closeStat() {
	stats.style.display = "none";
}

// Close If Outside Click
function outsideStats(e) {
	if (e.target == stats) {
		stats.style.display = "none";
	}
}
