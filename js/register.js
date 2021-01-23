function submit(){

    var firstName = document.getElementById("firstNameID").value;
    var lastName = document.getElementById("lastNameID").value;
    var email = document.getElementById("emailID").value;
    var password = document.getElementById("passwordID").value;
    var confirmPassword = document.getElementById("confirmPasswordID").value;
    var address = document.getElementById("addressID").value;
    var male = document.getElementById("maleID").checked;
    var female = document.getElementById("femaleID").checked;
    var skin = document.getElementById("skinID").selectedIndex;
    var iAgree = document.getElementById("iagreeID").checked;

    var addressLength = address.split(" ").length;
    var addressCheck = address.toLowerCase();

    if(firstName.length == 0){
        alert("First name cannot be empty");
        resetPassword();
    }
    else if(lastName.length == 0){
        alert("Last name cannot be empty");
        resetPassword();
    }
    else if(email.length == 0){
        alert("Email cannot be empty");
        resetPassword();
    }
    else if(password.length == 0){
        alert("Password cannot be empty");
        resetPassword();
    }
    else if(address.length == 0){
        alert("Address cannot be empty");
        resetPassword();
    }
    else if(!isNaN(firstName)){
        alert("First name must be alphabetical");
        resetPassword();
    }
    else if(!isNaN(lastName)){
        alert("Last name must be alphabetical");
        resetPassword();
    }
    else if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address");
        resetPassword();
    }
    else if(password.length < 8){
        alert("Password must be at least 8 characters long");
        resetPassword();
    }
    else if(!isAlphanumeric(password)){
        alert("Password must be alphanumeric");
        resetPassword();
    }
    else if(!hasUpperCase(password)){
        alert("Password should be at least 1 uppercase character");
        resetPassword();
    }
    else if(!hasLowerCase(password)){
        alert("Password should be at least 1 lowercase character");
        resetPassword();
    }
    else if(confirmPassword != password){
        alert("Confirmation password should be exactly the same as the password");
        resetPassword();
    }
    else if(addressLength < 5){
        alert("Address must be at least 5 words");
        resetPassword();
    }
    else if(!addressCheck.includes("street") &&  !addressCheck.includes("st") && !addressCheck.includes("jalan") && !addressCheck.includes("jl") && !addressCheck.includes("jln")){
        alert("Enter a valid address");
        resetPassword();
    }
    else if(!male && !female){
        alert("Gender must be checked");
        resetPassword();
    }
    else if(!iAgree){
        alert("You must agree with the terms and conditions!");
        resetPassword();
    }
    else{
        alert("Registration success! Thank you for joining with us!");
        resetAll();
    }
    
}

function resetPassword(){
    document.getElementById("passwordID").value = "";
    document.getElementById("confirmPasswordID").value = "";
}

function resetAll(){
    document.getElementById("firstNameID").value = "";
    document.getElementById("lastNameID").value = "";
    document.getElementById("emailID").value = "";
    document.getElementById("passwordID").value = "";
    document.getElementById("confirmPasswordID").value = "";
    document.getElementById("addressID").value = "";
    document.getElementById("maleID").checked = false;
    document.getElementById("femaleID").checked = false;
    document.getElementById("skinID").selectedIndex = "0";
    document.getElementById("iagreeID").checked = false;
}

function isAlphanumeric(password){
    var code,len;
    var isNumeric = false;
    var isAlpha = false;

    for(var i=0, len = password.length; i < len; i++){
        code = password.charCodeAt(i);

        switch(true){
            case code > 47 && code < 58: //0-9
                isNumeric = true;
                break;
            case (code > 64 && code < 91) || (code > 96 && code < 123): //A-Z a-z
                isAlpha = true;
                break;
            default:
                return false;
        }
    }
    return isNumeric && isAlpha;
}

function hasUpperCase(password){
    var code,len;
    for(var i=0, len = password.length; i < len; i++){
        code = password.charCodeAt(i);
        if(code > 64 && code < 91){
            return true;
        }
    }
    return false;
} 

function hasLowerCase(password){
    var code,len;
    for(var i=0, len = password.length; i < len; i++){
        code = password.charCodeAt(i);
        if(code > 96 && code < 123){
            return true;
        }
    }
    return false;
} 