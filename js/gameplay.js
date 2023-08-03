'use strict';

var newGame = function() {
    playBtn.disabled = true;
    scoreboardBtn.disabled = true;
    var colorPos = Math.floor(Math.random() * 4);
    var newColor = colors[colorPos];
    sequence.push(newColor);
    getPlayers();
    setTimeout(showSequence, 2000);
}

var showSequence = function() {
    newLevel();
    sequence.forEach(function(color,i){
        setTimeout(function(){
            switch(color) {
                case 'green':
                    greenBtn.classList.toggle('highlight');
                    setTimeout(function(){ 
                        greenBtn.classList.toggle('highlight');
                    }, 1000);
                    break;
                case 'red':
                    redBtn.classList.toggle('highlight');
                    setTimeout(function(){ 
                        redBtn.classList.toggle('highlight');
                    }, 1000);
                    break;
                case 'yellow':
                    yellowBtn.classList.toggle('highlight');
                    setTimeout(function(){ 
                        yellowBtn.classList.toggle('highlight');
                    }, 1000);
                    break;
                case 'blue':
                    blueBtn.classList.toggle('highlight');
                    setTimeout(function(){ 
                        blueBtn.classList.toggle('highlight');
                    }, 1000);
                    break;
            }
        }, i*2000)
    })
    setTimeout(playerTurn,sequence.length*1750); //Wait for the sequence to finish lighting up to enable the buttons
}

var playerTurn = function() {
    if(sequence.length > sequencePlayer.length){
        playerPlay();
    }
    else{
        simonPlay();
        setTimeout(function(){
            score = score + (level*10);
            scoreContent.innerHTML = 'Score ' + score;
        },300)
        newGame();
    }
}

var newLevel = function() {
    level++;
    levelContent.innerHTML = 'Level ' + level;
    indexValidate = 0;
    sequencePlayer = [];
}

var validateColor = function() {
    if(sequence[indexValidate] == sequencePlayer[indexValidate]){
        indexValidate++;
        score = score + 10;
        scoreContent.innerHTML = 'Score ' + score;
        playerTurn();
    }
    else{
        gameOver();
    }
}

var simonPlay = function() {
    greenBtn.disabled = true;
    redBtn.disabled = true;
    yellowBtn.disabled = true;
    blueBtn.disabled = true;
    clearInterval(controlChronometer);
    controlChronometer = null;
}

var playerPlay = function() {
    greenBtn.disabled = false;
    redBtn.disabled = false;
    yellowBtn.disabled = false;
    blueBtn.disabled = false;
    if (controlChronometer == null){
        controlChronometer = setInterval(setChronometer,10);
    }
}

var gameOver = function() {
    simonPlay();
    calculatePenalty();
    finalScore = score - penalty;
    if (finalScore < 0){
        finalScore = 0;
    }
    savePlayer(playerName,finalScore,level);
    gameOverContent.innerHTML = 'Hi ' + playerName + ', your final score is ' + finalScore;
    restartStats();
    modalGameOver.classList.add('show_modal');
}

var calculatePenalty = function() {
    var secondsPenalty = seconds * 1;
    var minutesPenalty = minutes * 60;
    penalty = secondsPenalty + minutesPenalty;
}

var restartStats = function() {
    sequence = [];
    sequencePlayer = [];
    level = 0;
    score = 0;
    greenBtn.classList.remove('highlight');
    redBtn.classList.remove('highlight');
    blueBtn.classList.remove('highlight');
    yellowBtn.classList.remove('highlight');
    levelContent.innerHTML = 'Level';
    scoreContent.innerHTML = 'Score';
    centsContent.innerHTML = ': 00';
    secondsContent.innerHTML = ': 00';
    minutesContent.innerHTML = ' 00';
    cents = 0;
    seconds = 0;
    minutes = 0;
}