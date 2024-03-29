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
    }
    if (orderBy == 'score'){
        players.sort(function(a, b) {
            return b.score - a.score;
        })
    }
    if (orderBy == 'date'){
        players.sort(function(a, b) {
        var dateA = parseDateTime(a.date + ' ' + a.hour);
        var dateB = parseDateTime(b.date + ' ' + b.hour);
        if (dateA > dateB){
            return -1;
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

var insertPlayer = function(player) {
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
}