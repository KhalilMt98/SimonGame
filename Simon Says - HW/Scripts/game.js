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
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = "Level " + level;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    setTimeout(function() {
        document.getElementById(randomChosenColor).classList.add("pressed");
        setTimeout(function() {
        document.getElementById(randomChosenColor).classList.remove("pressed");
        }, 100);
        playSound(randomChosenColor);
    }, 500);
    }
    
    function playSound(name) {
    let audio = document.getElementById(name + "Sound");
    if (audio) {
        audio.play();
    }
    }
    
    function animatePress(currentColor) {
    let button = document.getElementById(currentColor);
    if (button) {
        button.classList.add("pressed");
        setTimeout(function() {
        button.classList.remove("pressed");
        }, 100);
    }
    }
    
    function answer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000);
        }
    } else {
        playSound("wrong");
        document.body.classList.add("game-over");
        document.querySelector("#level-title").textContent = "Game Over, Press Any Key to Restart";
    
        setTimeout(function() {
        document.body.classList.remove("game-over");
        }, 200);
    
        level = 0;
        gamePattern = [];
        started = false;
    }
    }
    
    
    