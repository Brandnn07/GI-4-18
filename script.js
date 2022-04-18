// VERY EASY
var num1 = 6
var num2 = 2

console.log(`the difference between ${num1} and ${num2} is ${num1 - num2}`);

// EASY
var name1 = "Chris";
var name2 = "John";

if (name1.length > name2.length) {
    console.log(`The name ${name1} is longer than ${name2} by 1 letter. ${name1.length - name2.length}`);
} else {
    console.log(`The name ${name2} is longer than ${name1} by 1 letter. ${name2.length - name1.length}`);
    
}


// MEDIUM
const input = prompt("Please type in a sentence!");

if (input === input.toLowerCase()) {
    alert("You're whispering... Speak up!")
} else if (input === input.toUpperCase()) {
    alert("You're shouting, keep it down!")
} else {
    alert("You're speaking proper, thank you!")
}

// HARD 
function addition(n1, n2) {
   return n1 + n2
};

function subtraction(n1, n2) {
    return n1 - n2
};

function multiplication(n1, n2) {
    return n1 * n2
};

function division(n1, n2) {
    return n1 / n2
};

// VERY HARD
var n1 = prompt("Welcome to my calculator! To start off, please choose a number.");
var calcO = prompt("Choose an operator please");
var n2 = prompt("Choose that final number!");

if (calcO == "+") {
    let result = addition(n1, n2);
    alert(`Your result of ${n1} ${calcO} ${n2} is ${result}`)
} else if (calcO == "-") {
    let result = subtraction(n1, n2);
    alert(`Your result of ${n1} ${calcO} ${n2} is ${result}`)
} else if (calcO == "/") {
    let result = division(n1, n2);
    alert(`Your result of ${n1} ${calcO} ${n2} is ${result}`)
} else if (calcO == "*") {
    let result = multiplication(n1, n2);
    alert(`Your result of ${n1} ${calcO} ${n2} is ${result}`)
}