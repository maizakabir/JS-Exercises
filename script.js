/* JavaScript code here */
//Task 1

console.log("External JavaScript");

//Task 2
function sumArray (arr){
    var sum=0;
    arr.forEach (function (value, index){
        sum = sum + value;
    });
    return sum;
}

console.log (sumArray([2, 4, 5, 6, 7]));
console.log (sumArray([2, 43, 5, 6, 7]));

//Task 3
function checkEmail (emailString){
    var emailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match= emailFormat.test(emailString);
    return match;
}

console.log(checkEmail("john@smith.com"));
console.log(checkEmail("john6@sh.com"));
console.log(checkEmail("john@smith"));
console.log(checkEmail("johnsmith.com"));