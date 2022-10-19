var levelNumber;

function startGame(level) {
    levelNumber = level;
    localStorage.setItem("levelNumber", levelNumber);
    open("game.html", "_self")
}