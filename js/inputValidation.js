
export function inputValidation(){
    fname.oninput = () =>{
        if(fname.value != ""){
            fnameError.innerHTML = "";
        }else{
            fnameError.innerHTML = "Please enter your first name!";
        }
    }
    lname.oninput = () =>{
        if(lname.value != ""){
            lnameError.innerHTML = "";
        }else{
            lnameError.innerHTML = "Please enter your last name!";
        }
    }
    email.oninput = () =>{
        if(email.value != ""){
            emailError.innerHTML = "";
        }else{
            emailError.innerHTML = "Please enter your email!";
        }
    }
    password.oninput = () =>{
        if(password.value != ""){
            passError.innerHTML = "";
        }else{
            passError.innerHTML = "Please enter your password!";
        }
    }
    confirmPassword.oninput = () =>{
        if(confirmPassword.value != ""){
            confirmError.innerHTML = "";
        }else{
            confirmError.innerHTML = "Please confirm your password!";
        }
    }
}

