export function validateLastName(e){
    if(lname.value == ""){
        lnameError.innerHTML = "Please enter your last name!";
        e.preventDefault();
    }else{
        lnameError.innerHTML = "";
    }
}