function togglePopup(id){
  document.getElementById(id).classList.toggle("active");
}
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
document.getElementById("popup-1").classList.toggle("active");
	}
});
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
document.getElementById("popup-2").classList.toggle("active");
	}
});

//Animations

const gameTitle = document.querySelector(".game-title");
const footer = document.querySelector("#footer");

const fader = document.getElementById("fader");
fader.style.display = "none";
fader.style.backgroundColor = "#1D3557";

const tl = new TimelineMax();

tl.fromTo(gameTitle, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
tl.fromTo(footer, 1, { y: "5vh", opacity: 0 }, { y: 0, ease: Power2.easeOut, opacity: 1 });

async function fade() {
	fader.style.display = "block";
	tl.fromTo(fader, 1, { x: "100vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
	tl.fromTo(fader, 0.5, { backgroundColor: "#1D3557"}, { backgroundColor: "white" }, "+=0.25");
	await sleep(1500);
	fader.style.opacity = 0;
	window.open("level.html", "_self")
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}