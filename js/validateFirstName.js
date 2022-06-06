export function validateFirstName(e){
    if(fname.value == ""){
        fnameError.innerHTML = "Please enter your first name!";
        e.preventDefault();
    }else{
        fnameError.innerHTML = "";
    }
}