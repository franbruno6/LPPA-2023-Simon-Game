'use strict';

var playBtn;
var resetBtn;
var greenBtn;
var redBtn;
var yellowBtn;
var blueBtn;
var cerrarBtn;
var modalNewGame;
var playerNameInput;
var playerNameAccept;
var playerNameCancel;

var init = function () {
    playBtn = document.getElementById('playBtn');
    resetBtn = document.getElementById('resetBtn');
    greenBtn = document.getElementById('greenBtn');
    redBtn = document.getElementById('redBtn');
    yellowBtn = document.getElementById('yellowBtn');
    blueBtn = document.getElementById('blueBtn');
    //cerrarBtn = document.querySelectorAll('.modal_close');
    modalNewGame = document.querySelector('#modal-new-game');
    playerNameInput = document.querySelector('#player-name');
    playerNameAccept = document.querySelector('#player-name-accept');
    playerNameCancel = document.querySelector('#player-name-cancel');

    playerNameAccept.disabled = true;

    playBtn.addEventListener('click', handlePlayBtn);
    resetBtn.addEventListener('click', handleResetBtn);
    greenBtn.addEventListener('mousedown', handleGreenBtn);
    redBtn.addEventListener('mousedown', handleRedBtn);
    yellowBtn.addEventListener('mousedown', handleYellowBtn);
    blueBtn.addEventListener('mousedown', handleBlueBtn);
    //cerrarBtn.addEventListener('click', handleCerrarBtn);
    playerNameCancel.addEventListener('click', handleCloseModal);
    playerNameInput.addEventListener('keyup', validateFormPlayerName);
    playerNameAccept.addEventListener('click', handleAcceptPlayerName);

    greenBtn.addEventListener('mouseup', handleGreenBtn);
    redBtn.addEventListener('mouseup', handleRedBtn);
    yellowBtn.addEventListener('mouseup', handleYellowBtn);
    blueBtn.addEventListener('mouseup', handleBlueBtn);
}
