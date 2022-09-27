function validationAccount(inputaccount) {
    let regAccount = /^[_a-z0-9]{6,}$/
    if (inputaccount.value.match(regAccount)) {
        alert('ok');
        document.form1.account.focus();
        return true;
    }
    alert("vui long nhap lai");
    document.form1.account.focus();
    return false;

}