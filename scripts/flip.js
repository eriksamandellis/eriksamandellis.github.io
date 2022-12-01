let container = document.getElementById("name-container");
let letters = document.getElementsByClassName("letter");
let subtitle  = document.getElementById("name-subtitle");
function eraseName() {
	for(let i = 0; i < letters.length; i++) {
		container.style.transition = "none";
		container.style.backgroundColor = "rgba(0, 0, 0, 0)";
		letters[i].style.transition = "none";
		letters[i].style.paddingTop = "10px";
		letters[i].style.paddingBottom = "0";
		letters[i].style.opacity = "0";
		letters[i].style.transform = "rotateY(270deg)";
	}
}
function animateName() {
	setTimeout(() => {
		for(let i = 0; i < letters.length; i++) {
			setTimeout(() => {
				container.style.transition = "background-color 1s";
				container.style.backgroundColor = "rgba(0, 0, 0, .35)";
				letters[i].style.transition = "padding-top .5s, padding-bottom .5s, opacity .5s, transform .5s";
				letters[i].style.paddingTop = "0";
				letters[i].style.paddingBottom = "10px";
				letters[i].style.opacity = "1";
				letters[i].style.transform = "rotateY(360deg)";
			}, 50*i); 
		}
		setTimeout(() => {
			subtitle.style.opacity = "100%";
		}, 700);
	}, 300);
}

function flip(letter) {
	if(letter.style.transform === "rotateY(180deg)") {
		letter.style.transform = "rotateY(360deg)"
	} else {
		letter.style.transform = "rotateY(180deg)";
	}
}
