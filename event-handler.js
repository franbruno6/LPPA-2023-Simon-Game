'use strict';

var sequence = [];
var colors = ['green', 'red', 'yellow', 'blue'];

var highlightColor = function(color,i){
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
}

var handlePlayBtn = function() {
    var colorPos = Math.floor(Math.random() * 4);
    var newColor = colors[colorPos];
    sequence.push(newColor);
    showSequence();
    console.log(sequence);
}

var handleResetBtn = function() {
    sequence = [];
    console.log('reset btn');
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