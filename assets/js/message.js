// Get DOM Elements
const message = document.querySelector("#my-message");
const messageBtn = document.querySelector("#message-btn");
const closeMsg = document.querySelector(".close-message");

// Events
messageBtn.addEventListener("click", openMsg);
closeMsg.addEventListener("click", closeMsgs);
window.addEventListener("click", outsideMsg);

// Open
function openMsg() {
	message.style.display = "block";
}

// Close
function closeMsgs() {
	message.style.display = "none";
}

// Close If Outside Click
function outsideMsg(e) {
	if (e.target == message) {
		message.style.display = "none";
	}
}
