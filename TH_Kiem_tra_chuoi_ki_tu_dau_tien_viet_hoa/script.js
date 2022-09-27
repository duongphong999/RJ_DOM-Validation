

function isFirstLetterUpperCase(str){
    let reg = /^[A-Z]/;
    if(reg.test(str)){
        console.log("String's first character is uppercase");
    }else{
        console.log("String's first character is not uppercase");
    }
}
console.log(isFirstLetterUpperCase('Nguyen van Nam')); 
console.log(isFirstLetterUpperCase('NGUYEN VAN NAM'));
console.log(isFirstLetterUpperCase('nguyen van Nam'));
