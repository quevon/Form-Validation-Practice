import {inputValidation} from './js/inputValidation.js';
import {validateFirstName} from './js/validateFirstName.js';
import { validateLastName } from './js/validateLastName.js';
import { validateEmail } from './js/validateEmail.js';
import { validatePassword } from './js/validatePassword.js';

// input field 
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');

//error messages
const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const confirmError = document.getElementById('confirmError');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//oninputs validations
inputValidation();

//form submit
form.onsubmit = (e) =>{
    validateFirstName(e);
    validateLastName(e);
    validateEmail(e);
    validatePassword(e);
}