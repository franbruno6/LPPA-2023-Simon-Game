//Permite letras y números como mínimo 3, máximo 20
var regexPlayerName = /^[\w\s]{3,20}$/;

var validateFormPlayerName = function (event) {
    var errorPlayerName = document.querySelector('#error-player-name');
    if(regexPlayerName.test(playerNameInput.value)){
        errorPlayerName.classList.remove('show_error');
        playerNameAccept.disabled = false;
    }
    else{
        errorPlayerName.classList.add('show_error');
        playerNameAccept.disabled = true;
    }
}