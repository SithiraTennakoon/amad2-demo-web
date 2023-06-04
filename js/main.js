console.log("Hello Sithira's JS lesson");

var email = "sithira@gmail.com";
console.log(email)

var studentName = 90;

var mark = 45.56;

var grade = 'A';

var isMarried = true;

var x = 12;
var y = 13;

var answer = x + y;
console.log(answer);

//single line comment 

/* Hi this is a 
muktiline comment 
and you are a hero */

//function
function add() {
    var firstNumber = 10;
    var secondNumber = 8;

    alert("Answer is " + (firstNumber + secondNumber));
    console.log("Answer is " + (firstNumber + secondNumber));

}

/*function calling statement 
add();
add();
add();
add();
add();*/

function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email + " " + password);
}