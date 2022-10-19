var levelNumber = localStorage.getItem("levelNumber");
var question, num1, num2;

var correctSound = new Audio ("Sounds/mixkit-correct-positive-answer-949.mp3");

document.getElementById("level-title").innerHTML = "Level " + levelNumber;

const questionText = document.getElementById("question-text");
const overlay = document.getElementById("overlay-game");

const choiceButtonA = document.getElementById("optionA");
const choiceButtonB = document.getElementById("optionB");
const choiceButtonC = document.getElementById("optionC");
const choiceButtonD = document.getElementById("optionD");

const audioCorrect = document.getElementById("audioCorrect");

const choices = [choiceButtonA, choiceButtonB, choiceButtonC, choiceButtonD];

//Animations
const levelText = document.querySelector("#level-title");
const header = document.querySelector("#header");

const tl = new TimelineMax();

//Progress Bar
const pBar = document.querySelector(".progress")

function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__fill").textContent= `${value}%`;
}

tl.fromTo(levelText, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
tl.fromTo(levelText, 1.5, { fontSize: "12em", y: 0 }, { fontSize: "4em", y: "-9vh", ease: Power2.easeOut}, "+= 0.5");

tl.fromTo(header, 1, { y: "-5vh", opacity: 0 }, { y: 0, ease: Power2.easeOut, opacity: 1 }, "-=.75");

tl.fromTo(questionText, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });

tl.fromTo(choiceButtonA, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 });
tl.fromTo(choiceButtonB, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 }, "-=0.5");
tl.fromTo(choiceButtonC, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 }, "-=0.5");
tl.fromTo(choiceButtonD, 0.5, { scale: "0.5", opacity: 0 }, { scale: "1",  opacity: 1 }, "-=0.5");

//Sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Math

newQuestion();

function newQuestion() {
    switch(parseInt(levelNumber)) {
        case 1:
            getAddition(0, 10);
            break;
        case 2:
            getAddition(0, 20);
            break;
        case 3:
            getMultiplication(1, 10);
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
    nextNum = randomNumber(3, upper * upper);

    for(var i = 0; i < 4; i ++) {
        while(nextNum == num1 * num2) {
            nextNum = randomNumber(3, (upper * upper));
        }
        choices[i].innerHTML = nextNum;
        nextNum = randomNumber(3, (upper * upper));
    }
    choices[answerIndex].innerHTML = num1 * num2;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function checkAnswer(num) {
    for(var i = 0; i < 4; i ++) {
        choices[i].style.pointerEvents = "none";
    }
    overlay.style.display = "block";
    if(num == answerIndex) {
        overlay.style.backgroundColor = "#6ae639";
        overlay.style.color = "#fff";
        overlay.innerHTML = "Correct!";
        updateProgressBar(pBar, pBar + 10)
        //audioCorrect.play();
    } else {
        overlay.style.backgroundColor = "#E63946";
        overlay.innerHTML = "Incorrect!";
    }
    tl.fromTo(overlay, 1, { x: "-100vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
    tl.fromTo(overlay, 1, { y:0, opacity: 1 }, { y: "-100vh", ease: Power2.easeOut, opacity: 0 }, "+=1");
    await sleep(1000)
    newQuestion();
    questionText.style.opacity = 0;
    await sleep(2000);
    overlay.style.display = "none";
    for(var i = 0; i < 4; i ++) {
        choices[i].style.pointerEvents = "all";
    }
    tl.fromTo(questionText, 1, { x: "-25vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
}