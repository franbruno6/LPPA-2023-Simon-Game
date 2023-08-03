'use strict';

//Controls
var playBtn;
var scoreboardBtn;

//Simon buttons
var greenBtn;
var redBtn;
var yellowBtn;
var blueBtn;

//Modal new game
var modalNewGame;
var playerNameInput;
var playerNameAccept;
var playerNameCancel;

//Modal Game Over
var modalGameOver;
var gameOverRestart;
var gameOverChangeName;
var gameOverContent;
var gameOverClose;

//Level
var levelContent;

//Score
var scoreContent;
var scoreboardScore;
var scoreboardDate;
var scoreboardClose;

//Chronometer
var centsContent;
var secondsContent;
var minutesContent;

//ScoreBoard
var playersTable;
var modalScoreboard;

var init = function () {
    //Controls
    playBtn = document.getElementById('playBtn');
    scoreboardBtn = document.getElementById('scoreboardBtn');

    //Simon buttons
    greenBtn = document.getElementById('greenBtn');
    redBtn = document.getElementById('redBtn');
    yellowBtn = document.getElementById('yellowBtn');
    blueBtn = document.getElementById('blueBtn');

    //Modal new game
    modalNewGame = document.querySelector('#modal-new-game');
    playerNameInput = document.querySelector('#player-name');
    playerNameAccept = document.querySelector('#player-name-accept');
    playerNameCancel = document.querySelector('#player-name-cancel');

    //Modal game over
    modalGameOver = document.querySelector('#modal-game-over');
    gameOverRestart = document.querySelector('#game-over-restart');
    gameOverContent = document.querySelector('#game-over-content');
    gameOverChangeName = document.querySelector('#game-over-change-name');
    gameOverClose = document.querySelector('#game-over-close');

    //Level
    levelContent = document.querySelector('#level');

    //Score
    scoreContent = document.querySelector('#score');
    scoreboardClose = document.querySelector('#scoreboard-close');
    scoreboardScore = document.querySelector('#scoreboard-score');
    scoreboardDate = document.querySelector('#scoreboard-date');

    //Timer
    centsContent = document.querySelector('#cents');
    secondsContent = document.querySelector('#seconds');
    minutesContent = document.querySelector('#minutes');

    //Scoreboard
    modalScoreboard = document.querySelector('#modal-scoreboard');
    playersTable = document.querySelector('#players-table-body');

    //Initialize buttons disable
    playerNameAccept.disabled = true;
    greenBtn.disabled = true;
    redBtn.disabled = true;
    yellowBtn.disabled = true;
    blueBtn.disabled = true;

    //Event Listener

    //Controls
    playBtn.addEventListener('click', handlePlayBtn);
    scoreboardBtn.addEventListener('click', orderByScore);

    //Simon buttons
    greenBtn.addEventListener('click', clickOnGreenBtn);
    redBtn.addEventListener('click', clickOnRedBtn);
    yellowBtn.addEventListener('click', clickOnYellowBtn);
    blueBtn.addEventListener('click', clickOnBlueBtn);

    //Modal new game
    playerNameCancel.addEventListener('click', handleCloseModal);
    playerNameInput.addEventListener('keyup', validateFormPlayerName);
    playerNameAccept.addEventListener('click', handleAcceptPlayerName);

    //Modal game over
    gameOverRestart.addEventListener('click', restartGame);
    gameOverChangeName.addEventListener('click', changeName);
    gameOverClose.addEventListener('click', handleCloseModal);

    //Modal scoreboard
    scoreboardDate.addEventListener('click', orderByDate);
    scoreboardScore.addEventListener('click', orderByScore);
    scoreboardClose.addEventListener('click', handleCloseModal);
}
