'use strict';

var sequence = [];
var colors = ['green', 'red', 'yellow', 'blue'];
var gameOn = false;
var sequencePlayer = [];
var playerName = '';
var level = 0;
var indexValidate = 0;
var score = 0;

var handlePlayBtn = function() {
    modalNewGame.classList.toggle('show_modal');
}

var handleResetBtn = function() {
    sequence = [];
}

var handleGreenBtn = function() {
    greenBtn.classList.toggle('highlight');
}

var handleRedBtn = function() {
    redBtn.classList.toggle('highlight');
}

var handleBlueBtn = function() {
    blueBtn.classList.toggle('highlight');
}

var handleYellowBtn = function() {
    yellowBtn.classList.toggle('highlight');
}

var handleCloseModal = function() {
    modalNewGame.classList.toggle('show_modal');
    playerNameInput.value = '';
}

var handleAcceptPlayerName = function() {
    playerName = playerNameInput.value;
    playerNameInput.value = '';
    modalNewGame.classList.toggle('show_modal');
    console.log('Player Name ' + playerName);
    newGame();
}

var newGame = function() {
    var colorPos = Math.floor(Math.random() * 4);
    var newColor = colors[colorPos];
    sequence.push(newColor);
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
    console.log('Secuencia Simon ' + sequence);
    setTimeout(playerTurn,sequence.length*2000); //Wait for the sequence to finish lighting up to enable the buttons
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
        },400)
        newGame();
    }
}

var newLevel = function() {
    level++;
    levelContent.innerHTML = 'Level ' + level;
    indexValidate = 0;
    sequencePlayer = [];
}

var clickOnGreenBtn = function() {
    sequencePlayer.push('green');
    validateColor();
}

var clickOnRedBtn = function() {
    sequencePlayer.push('red');
    validateColor();
}

var clickOnBlueBtn = function() {
    sequencePlayer.push('blue');
    validateColor();
}

var clickOnYellowBtn = function() {
    sequencePlayer.push('yellow');
    validateColor();
}

var validateColor = function() {
    if(sequence[indexValidate] == sequencePlayer[indexValidate]){
        indexValidate++;
        score = score + 10;
        scoreContent.innerHTML = 'Score ' + score;
        playerTurn();
    }
    else{
        console.log('incorrecto');
    }
}

var simonPlay = function() {
    greenBtn.disabled = true;
    redBtn.disabled = true;
    yellowBtn.disabled = true;
    blueBtn.disabled = true;
}

var playerPlay = function() {
    greenBtn.disabled = false;
    redBtn.disabled = false;
    yellowBtn.disabled = false;
    blueBtn.disabled = false;
}