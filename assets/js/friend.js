// Get DOM Elements
const friend = document.querySelector("#my-friend");
const friendBtn = document.querySelector("#friend-btn");
const closeFriend = document.querySelector(".close-friend");

// Events
friendBtn.addEventListener("click", openFriend);
closeFriend.addEventListener("click", closeFriends);
window.addEventListener("click", outsideFriend);

// Open
function openFriend() {
	friend.style.display = "block";
}

// Close
function closeFriends() {
	friend.style.display = "none";
}

// Close If Outside Click
function outsideFriend(e) {
	if (e.target == friend) {
		friend.style.display = "none";
	}
}
