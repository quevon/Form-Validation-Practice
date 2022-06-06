export function validatePassword(e){
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
