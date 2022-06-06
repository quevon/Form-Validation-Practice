export function validateEmail(e){
    if(email.value == ""){
        emailError.innerHTML = "Please enter your email!";
        e.preventDefault();
    }else if(!email.value.match(validRegex)){
        emailError.innerHTML = "Invalid email!";
    }else{
        emailError.innerHTML = "";
    }
}