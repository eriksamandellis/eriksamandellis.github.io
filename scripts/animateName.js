let names = document.getElementsByClassName("name");
function animateName() {
	setTimeout(() => {
		for(let i = 0; i < names.length; i++) {
			setTimeout(() => {
				names[i].classList.add("name-visible");
			}, 150*i); 
		}
	}, 200);
}