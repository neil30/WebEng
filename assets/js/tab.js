var checker = 1;
window.addEventListener("load", function () {
	var tabss = document.getElementById("tabCont");
	tabss.classList.add("none");
});

function tabs() {
	try {
		var tabs = document.getElementById("tabCont");
		var profile = document.getElementById("profile");
		var content = document.getElementById("content");
		var box = document.getElementById("box");
		var photo = document.getElementById("photo");

		if (checker == 1) {
			content.style.display = "none";
			box.style.display = "none";
			photo.style.marginLeft = "0px";
			profile.style.width = "fit-content";
			profile.style.backgroundColor = "transparent";
			profile.style.boxShadow = "0 0 0 #babbbc";
			setTimeout(() => {
				profile.style.top = "15%";
			}, 500);
			setTimeout(() => {
				tabs.classList.remove("none");
			}, 1300);
			checker = 0;
		} else {
			tabs.classList.add("none");
			content.style.display = "block";
			box.style.display = "block";
			profile.style.top = "50%";
			profile.style.backgroundColor = "#fafafa";
			profile.style.boxShadow = "0 0 2rem #babbbc";
			setTimeout(() => {
				photo.style.marginLeft = "-50px";
				profile.style.width = "330px";
			}, 500);
			checker = 1;
		}
	} catch (error) {
		alert(error);
	}
	return true;
}
