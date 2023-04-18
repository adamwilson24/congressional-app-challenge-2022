var levelsUnlocked = localStorage.getItem("levelsUnlocked");

if(levelsUnlocked == undefined) {
    levelsUnlocked = 1;
}

localStorage.setItem("levelsUnlocked", levelsUnlocked);

console.log(levelsUnlocked);

const footer = document.getElementById("footer");

const levelOne = document.getElementById("level-one");
const levelTwo = document.getElementById("level-two");
const levelThree = document.getElementById("level-three");
const levelFour = document.getElementById("level-four");
const levelFive = document.getElementById("level-five");
const levelSix = document.getElementById("level-six");
const levelSeven = document.getElementById("level-seven");
const levelEight = document.getElementById("level-eight");
const levelNine = document.getElementById("level-nine");
const levelTen = document.getElementById("level-ten");

const mainMenu = document.getElementById("main-menu");

const levels = [levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight, levelNine, levelTen, mainMenu];

const tl = new TimelineMax();

if(localStorage.getItem("screen") == "levels") {
    setStyles();
}

async function setStyles() {
    footer.style.opacity = 0;

    for(var i = 0; i < levels.length; i ++) {
        levels[i].classList.remove("level-button-unclickable");
        levels[i].classList.add("level-button");
        levels[i].addEventListener('click', 
            addClick, true
        );
        levels[i].style.opacity = 0;
    }

    for(var i = levelsUnlocked; i < levels.length-1; i ++) {
        levels[i].classList.add("level-button-unclickable");
        levels[i].removeEventListener('click',
            addClick, true
        );
    }

    tl.fromTo(levels[i], 0.5, { opacity: 0 }, {ease: Power2.easeOut, opacity: 0 });

    for(var i = 0; i < levels.length; i ++) {
        tl.fromTo(levels[i], 0.5, { scale: "0.5", opacity: 0 }, { scale:1, ease: Power2.easeOut, opacity: 1 }, "-= 0.4");
    }

    tl.fromTo(footer, 1, { y: "5vh", opacity: 0 }, { y: 0, ease: Power2.easeOut, opacity: 1 });
}

function startGame(level) {
    levelNumberSelect = level;
    localStorage.setItem("levelNumber", levelNumberSelect);
    open("game.html", "_self");
}

function addClick(event) {
    startGame(levels.indexOf(event.target) + 1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}