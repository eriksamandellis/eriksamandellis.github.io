function load() {
	let loadingScreen = document.getElementById("loading-screen");
	loadingScreen.style.opacity = "0";
	setTimeout(() => {
		loadingScreen.style.display = "none";
	}, 400); 
}