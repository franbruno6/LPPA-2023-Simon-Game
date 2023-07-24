'use strict';

var sequence = [];
var colors = ['green', 'red', 'yellow', 'blue'];
var gameOn = false;
var sequencePlayer = [];
var playerName = '';
var level = 0;

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
    console.log(playerName);
    newGame();
}

var newGame = function() {
    var colorPos = Math.floor(Math.random() * 4);
    var newColor = colors[colorPos];
    sequence.push(newColor);
    setTimeout(showSequence, 2000);
    //console.log(sequence);
}

var showSequence = function() {
    sequence.forEach(function(color,i){
        setTimeout(function(){
            switch(color) {
                case 'green':
                    greenBtn.classList.toggle('highlight');
                    setTimeout(function(){ greenBtn.classList.toggle('highlight');}, 1000)
                    break;
                case 'red':
                    redBtn.classList.toggle('highlight');
                    setTimeout(function(){ redBtn.classList.toggle('highlight');}, 1000)
                    break;
                case 'yellow':
                    yellowBtn.classList.toggle('highlight');
                    setTimeout(function(){ yellowBtn.classList.toggle('highlight');}, 1000)
                    break;
                case 'blue':
                    blueBtn.classList.toggle('highlight');
                    setTimeout(function(){ blueBtn.classList.toggle('highlight');}, 1000)
                    break;
            }
        }, i*2000)
    })
    newLevel();
    console.log(sequence);
    console.log(level);
    playerTurn();
}

var playerTurn = function() {
    if(sequence.length > sequencePlayer.length){
        greenBtn.disabled = false;
        redBtn.disabled = false;
        yellowBtn.disabled = false;
        blueBtn.disabled = false;
    }
    else{
        greenBtn.disabled = true;
        redBtn.disabled = true;
        yellowBtn.disabled = true;
        blueBtn.disabled = true;
    }
}

var clickOnGreenBtn = function() {
    sequencePlayer.push('green');
    console.log(sequencePlayer);
    playerTurn();
}

var clickOnRedBtn = function() {
    sequencePlayer.push('red');
    console.log(sequencePlayer);
    playerTurn();
}

var clickOnBlueBtn = function() {
    sequencePlayer.push('blue');
    console.log(sequencePlayer);
    playerTurn();
}

var clickOnYellowBtn = function() {
    sequencePlayer.push('yellow');
    console.log(sequencePlayer);
    playerTurn();
}

var newLevel = function() {
    level++;
    levelContent.innerHTML = 'Level ' + level;
}