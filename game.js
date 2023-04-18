var levelNumber = localStorage.getItem("levelNumber");
var question, num1, num2;

const volumeButton = document.getElementById("volume");
var correctSound = new Audio("Sounds/soundCorrect.wav");
var incorrectSound = new Audio("Sounds/soundIncorrect.wav");
var volume = true;

const questionText = document.getElementById("question-text");
const overlay = document.getElementById("overlay-game");
const nextLevel = document.getElementById("next-level");

const choiceButtonA = document.getElementById("optionA");
const choiceButtonB = document.getElementById("optionB");
const choiceButtonC = document.getElementById("optionC");
const choiceButtonD = document.getElementById("optionD");

const choices = [choiceButtonA, choiceButtonB, choiceButtonC, choiceButtonD];

//Animations
const levelText = document.querySelector("#level-title");
const header = document.querySelector("#header");

//const tl = new TimelineMax();

var value = 0;

var unlockedLevelsGame = localStorage.getItem("levelsUnlocked");

console.log(unlockedLevelsGame);

if(unlockedLevelsGame == undefined) {
    open("level.html", "_self");
}

//Progress Bar
const pBar = document.querySelector(".progress");

refreshPage();

function updateProgressBar(progressBar, num) {
    if(value + num < 0) {
        value = 0;
    } else {
        value += num;
    }
    if(value > 90) {
        getNextLevel();
    } else {
        newQuestion();
    }
    var r, g;
    if(value > 50)
    {
        r = ((100-value) * (225/50));
        g = 225;
    } else {
        r = 225;
        g = value*2 * (225/100);
    }
    progressBar.querySelector(".progress__fill").style.backgroundColor = `rgb(${r}, ${g}, 0)`;
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent= `${value}%`;
}

function refreshPage() {
    for(var i = 0; i < choices.length; i ++) {
        choices[i].style.opacity = 0;
    }

    volumeButton.style.display = "none";
    volumeButton.style.opacity = 0;

    document.getElementById("level-title").innerHTML = "Level " + levelNumber;

tl.fromTo(levelText, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
tl.fromTo(levelText, 1.5, { fontSize: "30vh", marginTop: "25vh" }, { fontSize: "8vh", marginTop: 0, ease: Power2.easeOut}, "+= 0.5");

tl.fromTo(header, 1, { y: "-5vh", opacity: 0 }, { y: 0, ease: Power2.easeOut, opacity: 1 }, "-=.75");

volumeButton.style.display = "block";
tl.fromTo(volumeButton, 0.25, {transform: `rotate(60deg)`, opacity: 0 }, { transform: `rotate(0deg)`, ease: Power2.easeOut, opacity: 1 }, "-=1");

tl.fromTo(questionText, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });

tl.fromTo(choiceButtonA, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 });
tl.fromTo(choiceButtonB, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 }, "-=0.5");
tl.fromTo(choiceButtonC, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 }, "-=0.5");
tl.fromTo(choiceButtonD, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 }, "-=0.5");

newQuestion();
}

//Sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Math


function newQuestion() {
    //Get certain question depending on level
    switch(parseInt(levelNumber)) {
        case 1:
            getAddition(0, 10);
            break;
        case 2:
            getAddition(0, 20);
            break;
        case 3:
            getSubtraction(1, 10);
            break;
        case 4:
            getSubtraction(1,20);
            break;
        case 5:
            getMultiplication(2,10);
            break;
        case 6:
            getMultiplication(5,20);
            break;
        case 7:
            getDivision(2,8);
            break;
        case 8:
            getDivision(2,15);
            break;
        case 9:
            getMod(2,10);
            break;
        case 10:
            getMod(2,50);
            break;
        default: break;
    }
}

function getAddition(lower, upper) {
    num1 = randomNumber(lower, upper);
    num2 = randomNumber(lower, upper);
    question = `What is ${num1} + ${num2}?`;
    questionText.innerHTML = question;
    answerIndex = randomNumber(0, 4);
    nextNum = randomNumber(6, 20);

    for(var i = 0; i < 4; i ++) {
        while(nextNum == num1 + num2) {
            nextNum = randomNumber(lower + 6, upper * 2);
        }
        choices[i].innerHTML = nextNum;
        nextNum = randomNumber(lower + 6, upper * 2);
    }
    choices[answerIndex].innerHTML = num1 + num2;
}

function getMultiplication(lower, upper) {
    num1 = randomNumber(lower, upper);
    num2 = randomNumber(lower, upper);
    question = `What is ${num1} x ${num2}?`;
    questionText.innerHTML = question;
    answerIndex = randomNumber(0, 4);
    nextNum = randomNumber(3, ((upper - 3) * upper));

    for(var i = 0; i < 4; i ++) {
        while(nextNum == num1 * num2) {
            nextNum = randomNumber(3, ((upper - 3) * upper));
        }
        choices[i].innerHTML = nextNum;
        nextNum = randomNumber(3, ((upper - 3) * upper));
    }
    choices[answerIndex].innerHTML = num1 * num2;
}

function getSubtraction(lower, upper) {
    num1 = randomNumber(lower, upper);
    num2 = randomNumber(lower, upper);
    if(num2>num1){
        [num1, num2] = [num2, num1];
    }
    question = `What is ${num1} - ${num2}?`;
    questionText.innerHTML = question;
    answerIndex = randomNumber(0, 4);
    nextNum = randomNumber(6, 20);

    for(var i = 0; i < 4; i ++) {
        while(nextNum == num1 - num2) {
            nextNum = randomNumber(lower, upper);
        }
        choices[i].innerHTML = nextNum;
        nextNum = randomNumber(lower, upper);
    }
    choices[answerIndex].innerHTML = num1 - num2;
}

function getDivision(lower, upper) {
    num2 = randomNumber(lower, upper);
    num1 = randomNumber(lower, upper) * num2;
    question = `What is ${num1} / ${num2}?`;
    questionText.innerHTML = question;
    answerIndex = randomNumber(0, 4);
    nextNum = randomNumber(3, upper);

    for(var i = 0; i < 4; i ++) {
        while(nextNum == (num1 / num2)) {
            nextNum = randomNumber(3, upper);
        }
        choices[i].innerHTML = nextNum;
        nextNum = randomNumber(3, upper);
    }
    choices[answerIndex].innerHTML = num1 / num2;
}

function getMod(lower, upper) {
    num2 = randomNumber(lower, upper);
    num1 = randomNumber(lower, upper);
    question = `What is ${num1} % ${num2}?`;
    questionText.innerHTML = question;
    answerIndex = randomNumber(0, 4);
    nextNum = randomNumber(3, upper);

    for(var i = 0; i < 4; i ++) {
        while(nextNum == (num1 % num2)) {
            nextNum = randomNumber(3, upper);
        }
        choices[i].innerHTML = nextNum;
        nextNum = randomNumber(3, upper);
    }
    choices[answerIndex].innerHTML = num1 % num2;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function checkAnswer(num) {
    var increase;
    for(var i = 0; i < 4; i ++) {
        choices[i].style.pointerEvents = "none";
        choices[i].style.color = "#1D3557";
    }
    overlay.style.display = "block";
    overlay.style.color = "#fff";
    if(num == answerIndex) {
        overlay.style.backgroundColor = "#6ae639";
        overlay.innerHTML = "Correct!";
        increase = 10;
        if(volume) {
            correctSound.play();
        }
    } else {
        overlay.style.backgroundColor = "#E63946";
        overlay.innerHTML = "Incorrect!";
        increase = -10;
        if(volume) {
            incorrectSound.play();
        }
    }
    tl.fromTo(overlay, 1, { x: "-100vw", opacity: 0, fontSize: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1, fontSize: "12em" });
    tl.fromTo(overlay, 1, { y:0, opacity: 1}, { y: "-100vh", ease: Power2.easeOut, opacity: 0}, "+=1");
    await sleep(1000)
    questionText.style.opacity = 0;
    await sleep(2000);
    updateProgressBar(pBar, increase);
    overlay.style.display = "none";
    tl.fromTo(questionText, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
    for(var i = 0; i < 4; i ++) {
        choices[i].style.pointerEvents = "all";
        choices[i].style.color = "#fff";
    }
    await sleep(1000);
}

function getNextLevel() {
    nextLevel.style.display = "block";
    tl.fromTo(nextLevel, 1, { x: "-100vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
    if(levelNumber == unlockedLevelsGame) {
        unlockedLevelsGame ++;
        localStorage.setItem("levelsUnlocked", unlockedLevelsGame);
    }
}

function startNextLevel() {
    levelNumber ++;
    if(levelNumber > 10) {
        open("level.html", "_self");
    }
    questionText.style.display = "none";
    localStorage.setItem("levelNumber", levelNumber);
    tl.fromTo(questionText, 0.1, {opacity: 1}, {opacity: 0});
    tl.fromTo(nextLevel, 1, { x: 0, opacity: 1 }, { x: "100vw", ease: Power2.easeOut, opacity: 0 });
    questionText.style.display = "block";
    updateProgressBar(pBar, -100);
    refreshPage();
}

function toggleVolume() {
    volume = !volume;

    if(volume) {
        volumeButton.style.backgroundImage = `url("Img/volume.png")`;
    } else {
        volumeButton.style.backgroundImage = `url("Img/mute.png")`;
    }
}