function validationEmail(inputemail) {
    let regEmail = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/
    if (inputemail.value.match(regEmail)) {
        alert('Valid email address!');
        document.form1.email.focus();
        return true;
    }
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;

}