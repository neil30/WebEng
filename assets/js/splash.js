function savedata() {
    try {
        var disHide = document.getElementById("mainCon");
        var disShow = document.getElementById("secCon");
        var input = document.getElementById("input").value;
		sessionStorage.setItem("name", input);
        disHide.style.display = "none";
        disShow.style.display = "block";
        setTimeout(() => {
			window.location = "home.html";
		}, 5000);
    } catch (error) {
        alert(error);
    }
	return true;
}
