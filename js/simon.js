'use strict';

var sequence = [];
var colors = ['green', 'red', 'yellow', 'blue'];
var sequencePlayer = [];
var playerName = '';
var level = 0;
var indexValidate = 0;
var score = 0;
var finalScore = 0;
var cents = 0;
var seconds = 0;
var minutes = 0;
var controlChronometer = null;
var penalty = 0;
var players = [];
var playersJSON;
var orderBy = 'score';

var handlePlayBtn = function() {
    modalNewGame.classList.add('show_modal');
}

var handleCloseModal = function() {
    modalNewGame.classList.remove('show_modal');
    modalGameOver.classList.remove('show_modal');
    modalScoreboard.classList.remove('show_modal');
    playerNameInput.value = '';
    playBtn.disabled = false;
    scoreboardBtn.disabled = false;
}

var handleAcceptPlayerName = function() {
    playerName = playerNameInput.value;
    playerNameInput.value = '';
    modalNewGame.classList.remove('show_modal');
    newGame();
}

var clickOnGreenBtn = function() {
    greenBtn.classList.add('highlight');
    setTimeout(function(){
        greenBtn.classList.remove('highlight')
    },100);
    sequencePlayer.push('green');
    validateColor();
}

var clickOnRedBtn = function() {
    redBtn.classList.add('highlight');
    setTimeout(function(){
        redBtn.classList.remove('highlight')
    },100);
    sequencePlayer.push('red');
    validateColor();
}

var clickOnBlueBtn = function() {
    blueBtn.classList.add('highlight');
    setTimeout(function(){
        blueBtn.classList.remove('highlight')
    },100);
    sequencePlayer.push('blue');
    validateColor();
}

var clickOnYellowBtn = function() {
    yellowBtn.classList.add('highlight');
    setTimeout(function(){
        yellowBtn.classList.remove('highlight')
    },100);
    sequencePlayer.push('yellow');
    validateColor();
}

var restartGame = function() {
    modalGameOver.classList.remove('show_modal');
    newGame();
}

var changeName = function() {
    modalGameOver.classList.remove('show_modal');
    handlePlayBtn();
}

var handleScoreboardBtn = function(orderBy) {
    playersTable.innerHTML = '';
    modalScoreboard.classList.add('show_modal');
    getPlayers(orderBy);
    players.forEach(insertPlayer);
}

var orderByDate = function() {
    orderBy = 'date';
    handleScoreboardBtn(orderBy);
}

var orderByScore = function() {
    orderBy = 'score';
    handleScoreboardBtn(orderBy);
}