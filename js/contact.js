'use strict';

var fullNameInput = document.querySelector('#full-name');
var emailInput = document.querySelector('#email');
var messageImput = document.querySelector('#message');
var anchorMailto = document.querySelector('#anchor-mailto');
var btnSendMessage = document.querySelector('#btn-send-message');

var errorFullName = document.querySelector('#error-full-name');
var errorEmail = document.querySelector('#error-email');
var errorMessage = document.querySelector('#error-message');

var regexFullName = /^[\w\s]{3,}$/;
var regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var regexMessage = /^[\w\s]{4,}$/;

var fullName = false;
var email = false;
var message = false;

fullNameInput.addEventListener('keypress', function validateFullName() {
    if(regexFullName.test(fullNameInput.value)){
        fullName = true;
        errorFullName.classList.remove('show_error_p');
    }
    else{
        fullName = false;
        errorFullName.classList.add('show_error_p');
        anchorMailto.classList.add('disabled_link');
    }
});

emailInput.addEventListener('keypress', function validateEmail() {
    if(regexEmail.test(emailInput.value)){
        email = true;
        errorEmail.classList.remove('show_error_p');
    }
    else{
        email = false;
        errorEmail.classList.add('show_error_p');
        anchorMailto.classList.add('disabled_link');
    }
});

messageImput.addEventListener('keypress', function validateMessage() {
    if(regexMessage.test(messageImput.value)){
        message = true;
        errorMessage.classList.remove('show_error_p');
        validateAll();
    }
    else{
        message = false;
        errorMessage.classList.add('show_error_p');
        anchorMailto.classList.add('disabled_link');
    }
});

var validateAll = function() {
    if (fullName == true && email == true && message && true){
        console.log('hola');
        anchorMailto.classList.remove('disabled_link');
    }
}
