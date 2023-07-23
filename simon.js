'use strict';

var playBtn;
var resetBtn;
var greenBtn;
var redBtn;
var yellowBtn;
var blueBtn;
var cerrarBtn;
var modal;

var init = function () {
    playBtn = document.getElementById('playBtn');
    resetBtn = document.getElementById('resetBtn');
    greenBtn = document.getElementById('greenBtn');
    redBtn = document.getElementById('redBtn');
    yellowBtn = document.getElementById('yellowBtn');
    blueBtn = document.getElementById('blueBtn');
    cerrarBtn = document.querySelector('.modal_close');
    modal = document.querySelector('.modal');

    playBtn.addEventListener('click', handlePlayBtn);
    resetBtn.addEventListener('click', handleResetBtn);
    greenBtn.addEventListener('mousedown', handleGreenBtn);
    redBtn.addEventListener('mousedown', handleRedBtn);
    yellowBtn.addEventListener('mousedown', handleYellowBtn);
    blueBtn.addEventListener('mousedown', handleBlueBtn);
    cerrarBtn.addEventListener('click', handleCerrarBtn);

    greenBtn.addEventListener('mouseup', handleGreenBtn);
    redBtn.addEventListener('mouseup', handleRedBtn);
    yellowBtn.addEventListener('mouseup', handleYellowBtn);
    blueBtn.addEventListener('mouseup', handleBlueBtn);
}
