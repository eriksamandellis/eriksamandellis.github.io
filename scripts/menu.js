let overlay = document.getElementById("overlay");
let sidebar = document.getElementById("sidebar");
let body = document.body;
function openMenu() {
	body.style.overflowY = "hidden";
	overlay.classList.add("overlay-visible");
	sidebar.style.left = "0";
}
function closeMenu() {
	body.style.overflowY = "auto";
	overlay.classList.remove("overlay-visible");
	sidebar.classList.remove("transitionless");
	sidebar.style.left = "-90%";
	window.scroll({
		top: 0,
		left: 0
	});
}
//Swiping!
let maximumX;
let maximumY;
let previousX;
let goingLeft;
sidebar.addEventListener("touchstart", e => {
	sidebar.classList.add("transitionless");
	maximumX = e.changedTouches[0].screenX;
	maximumY = e.changedTouches[0].screenY;
	previousX = maximumX;
});
sidebar.addEventListener("touchmove", e => {
	let currentX = e.changedTouches[0].screenX;
	let currentY = e.changedTouches[0].screenY;
	let distance = currentX - maximumX;
	if(distance < 0) {
		sidebar.style.left = distance + "px";
	}
	//Find direction
	if(currentX - previousX < 0) {
		goingLeft = true;
	} else {
		goingLeft = false;
	}
	//Update maximums
	if(currentX > maximumX) {
		maximumX = currentX;
	}
	if(currentY > maximumY) {
		maximumY = currentY;
	}
	//Set previousX
	previousX = currentX;
});
sidebar.addEventListener("touchend", e => {	
	let distanceX = e.changedTouches[0].screenX - maximumX;
	let distanceY = e.changedTouches[0].screenY - maximumY;
	if(goingLeft === true && distanceX < -50 && Math.abs(distanceX) > Math.abs(distanceY)) {
		closeMenu();
	} else {
		sidebar.classList.remove("transitionless");
		sidebar.style.left = "0";
	}
});
