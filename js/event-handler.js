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

var restartGame = function() {
    modalGameOver.classList.remove('show_modal');
    newGame();
}

var changeName = function() {
    modalGameOver.classList.remove('show_modal');
    handlePlayBtn();
}

var setChronometer = function() {
    if (cents < 99) {
		cents++;
		if (cents < 10) { cents = '0' + cents }
		centsContent.innerHTML = ': ' + cents;
	}
	if (cents == 99) {
		cents = -1;
	}
	if (cents == 0) {
		seconds ++;
		if (seconds < 10) { seconds = '0' + seconds }
		secondsContent.innerHTML = ': ' + seconds;
	}
	if (seconds == 59) {
        seconds = -1;
	}
	if ( (cents == 0) && (seconds == 0) ) {
		minutes++;
		if (minutes < 10) { minutes = '0' + minutes }
		minutesContent.innerHTML = minutes;
	}
}

var calculatePenalty = function() {
    var secondsPenalty = seconds * 1;
    var minutesPenalty = minutes * 60;
    penalty = secondsPenalty + minutesPenalty;
}

var savePlayer = function(playerName, finalScore, level) {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var day = currentDate.toLocaleDateString();

    if (hours < 10){
        hours = '0'+hours;
    }
    if (minutes < 10){
        minutes = '0'+minutes;
    }

    var newPlayer = {
        name: playerName,
        score: finalScore,
        level : level,
        date: day,
        hour : hours + ':' + minutes
    };

    players.push(newPlayer);
    
    playersJSON = JSON.stringify(players);
    localStorage.setItem('playersData', playersJSON);
}

var getPlayers = function(orderBy) {
    playersJSON = localStorage.getItem('playersData');
    players = JSON.parse(playersJSON);
    if(orderBy == 'score'){
        players.sort(function(a, b) {
            return b.score - a.score
        })
    }
    else if(orderBy == 'date'){
        players.sort(function(a, b) {
            var dateA = parseDateTime(a.date + ' ' + a.hour);
            var dateB = parseDateTime(b.date + ' ' + b.hour);
            
            if (dateA > dateB){
                return -1;
            }
            else if(dateA < dateB){
                return 1;
            }
            else {
                return parseDateTime(a.hour) - parseDateTime(b.hour);
            }
        })
    }
}

var handleScoreboardBtn = function(orderBy) {
    playersTable.innerHTML = '';
    modalScoreboard.classList.add('show_modal');
    getPlayers(orderBy);

    players.forEach(function(player) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var scoreCell = document.createElement('td');
        var levelCell = document.createElement('td');
        var dateCell = document.createElement('td');
        var hourCell = document.createElement('td');

        nameCell.textContent = player.name;
        scoreCell.textContent = player.score;
        levelCell.textContent = player.level;
        dateCell.textContent = player.date;
        hourCell.textContent = player.hour;

        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        row.appendChild(levelCell);
        row.appendChild(dateCell);
        row.appendChild(hourCell);
        
        playersTable.appendChild(row);
    })
}

var orderByDate = function() {
    orderBy = 'date';
    handleScoreboardBtn(orderBy);
}

var orderByScore = function() {
    orderBy = 'score';
    handleScoreboardBtn(orderBy);
}

var parseDateTime = function(dateTimeString) {
    var [date, time] = (dateTimeString || '').split(' ');
    var [day, month, year] = (date || '').split('/');
    var [hour, minute] = (time || '').split(':');
    hour = hour.padStart(2, '0');
    return new Date(year, month -1, day, hour, minute);
}

var restartStats = function() {
    //Reset sequence, level and score
    sequence = [];
    sequencePlayer = [];
    level = 0;
    score = 0;
    //Eliminates the highlight class from the buttons in case anyone stils higlighted
    greenBtn.classList.remove('highlight');
    redBtn.classList.remove('highlight');
    blueBtn.classList.remove('highlight');
    yellowBtn.classList.remove('highlight');
    //Restarts the html to its original text
    levelContent.innerHTML = 'Level';
    scoreContent.innerHTML = 'Score';
    centsContent.innerHTML = ': 00';
    secondsContent.innerHTML = ': 00';
    minutesContent.innerHTML = ' 00';
    //Restart chronometer
    cents = 0;
    seconds = 0;
    minutes = 0;
}