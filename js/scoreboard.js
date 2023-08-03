'use strict';

var savePlayer = function(playerName, finalScore, level) {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var day = currentDate.toLocaleDateString();

    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }

    var newPlayer = {
        name: playerName,
        score: finalScore,
        level: level,
        date: day,
        hour: hours + ':' + minutes
    };
    players.push(newPlayer);  
    playersJSON = JSON.stringify(players);
    localStorage.setItem('playersData', playersJSON);
}

var getPlayers = function(orderBy) {
    if (localStorage.getItem('playersData') != null){
        playersJSON = localStorage.getItem('playersData');
        players = JSON.parse(playersJSON);
        console.log('papitas');
    }
    if(orderBy == 'score'){
        players.sort(function(a, b) {
            return b.score - a.score;
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

var parseDateTime = function(dateTimeString) {
    var [date, time] = (dateTimeString || '').split(' ');
    var [day, month, year] = (date || '').split('/');
    var [hour, minute] = (time || '').split(':');
    hour = hour.padStart(2, '0');
    return new Date(year, month -1, day, hour, minute);
}