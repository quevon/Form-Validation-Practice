const btnSubmit = document.getElementById('btnSubmit');
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

// fname.onkeyup = () =>{
//     fname.value = fname.value.charAt(0).toUpperCase() + fname.value.slice(1);
// }
// lname.onkeyup = () =>{
//     lname.value = lname.value.charAt(0).toUpperCase() + lname.value.slice(1);
// }


function validateFirstName(e){
    if(fname.value == ""){
        fnameError.innerHTML = "Please enter your first name!";
        e.preventDefault();
    }else{
        fnameError.innerHTML = "";
    }
}
function validateLastName(e){
    if(lname.value == ""){
        lnameError.innerHTML = "Please enter your last name!";
        e.preventDefault();
    }else{
        lnameError.innerHTML = "";
    }
}
function validateEmail(e){
    if(email.value == ""){
        emailError.innerHTML = "Please enter your email!";
        e.preventDefault();
    }else if(!email.value.match(validRegex)){
        emailError.innerHTML = "Invalid email!";
    }else{
        emailError.innerHTML = "";
    }
}
function validatePassword(e){
    if(password.value == ""){
        passError.innerHTML = "Please enter your password!";
        e.preventDefault();
    }else if(password.value.length != 8){
        passError.innerHTML = "Password is to short(atleast 8 characters)!";
        e.preventDefault();
    }else{
        passError.innerHTML = "";
    }if(confirmPassword.value == ""){
        confirmError.innerHTML = "Please enter your password again!";
        e.preventDefault();
    }else if(password.value != confirmPassword.value){
        confirmError.innerHTML = "Password does not match!";
        e.preventDefault();
    }else{
        confirmError.innerHTML = "";
    }    
}
form.onsubmit = (e) =>{
    validateFirstName(e);
    validateLastName(e);
    validateEmail(e);
    validatePassword(e);
}