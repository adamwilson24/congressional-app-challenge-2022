var levelsUnlocked = localStorage.getItem("levelsUnlocked");

if(levelsUnlocked == undefined) {
    levelsUnlocked = 1;
}

localStorage.setItem("levelsUnlocked", levelsUnlocked);

console.log(levelsUnlocked);

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

const levels = [levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight, levelNine, levelTen];

if(localStorage.getItem("screen") == "levels") {
    setStyles();
}

function setStyles() {
    for(var i = 0; i < levels.length; i ++) {
        levels[i].classList.remove("level-button-unclickable");
        levels[i].classList.add("level-button");
        levels[i].addEventListener('click', 
            addClick, true
        );
    }

    for(var i = levelsUnlocked; i < levels.length; i ++) {
        levels[i].classList.add("level-button-unclickable");
        levels[i].removeEventListener('click',
            addClick, true
        );
    }
}

function startGame(level) {
    levelNumberSelect = level;
    localStorage.setItem("levelNumber", levelNumberSelect);
    open("game.html", "_self");
}

function addClick(event) {
    startGame(levels.indexOf(event.target) + 1);
}