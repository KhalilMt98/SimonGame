let buttons = [
document.getElementById("green"),
document.getElementById("red"),
document.getElementById("yellow"),
document.getElementById("blue")
];

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener('keypress', function() {
if (!started) {
    document.querySelector("#level-title").textContent = "Level " + level;
    nextSequence();
    started = true;
}
});

buttons.forEach(function(button) {
button.addEventListener("click", function() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    
    animatePress(userChosenColor);
    answer(userClickedPattern.length - 1);
});
});

function nextSequence() {
}

function playSound() {

}

function animatePress() {
}

function answer(currentLevel) {
}


