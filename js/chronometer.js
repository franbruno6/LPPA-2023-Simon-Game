'use strict';

var setChronometer = function() {
    if (cents < 99){
        cents++;
        if (cents < 10){ 
            cents = '0' + cents;
        }
        centsContent.innerHTML = ': ' + cents;
    }
    if (cents == 99){
        cents = -1;
    }
    if (cents == 0){
        seconds ++;
        if (seconds < 10){ 
            seconds = '0' + seconds;
        }
        secondsContent.innerHTML = ': ' + seconds;
    }
    if (seconds == 59){
        seconds = -1;
    }
    if ((cents == 0) && (seconds == 0)){
       minutes++;
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        minutesContent.innerHTML = minutes;
    }
}