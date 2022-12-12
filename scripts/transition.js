let navbar = document.getElementById("navbar");
let navbarLinks = document.getElementsByClassName("navbar-link");
let sidebarLinks = document.getElementsByClassName("sidebar-link");
let pages = document.getElementsByClassName("page");
let semaphore = false;
let current = 0;
function transition(index) {
	if(current === index || semaphore === true) {
		return;
	}
	for(let i = 0; i < pages.length; i++) {
		if(i === index) {
			navbarLinks[i].classList.add("navbar-link-active");
			sidebarLinks[i].classList.add("sidebar-link-active");
		} else {
			navbarLinks[i].classList.remove("navbar-link-active");
			sidebarLinks[i].classList.remove("sidebar-link-active");
		}
		if(index === 0 || index === 2) {
			navbar.classList.add("navbar-banner");
		} else {
			navbar.classList.remove("navbar-banner");
		}
	}
	pages[index].classList.add("page-active");
	pages[index].classList.remove("page-slide-from-left");
	pages[index].classList.remove("page-slide-from-right");
	for(let i = 0; i < index; i++) {
		pages[i].classList.remove("page-active");
		pages[i].classList.remove("page-slide-from-right");
		pages[i].classList.add("page-slide-from-left");
	}
	for(let i = index + 1; i < pages.length; i++) {
		pages[i].classList.remove("page-active");
		pages[i].classList.remove("page-slide-from-left");
		pages[i].classList.add("page-slide-from-right");
	}
	semaphore = true;
	setTimeout(() => {
		current = index;
		semaphore = false;
	}, 600); //400
}
