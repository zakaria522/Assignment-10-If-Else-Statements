
// Assignment # 10 - User Input & Conditional Statements

// Q12: Divisible by 3
var number = Number(prompt("Enter a number:"));

if (number % 3 === 0) {
    console.log("The number is divisible by 3");
}
else {
    console.log("The number is not divisible by 3");
}


// Q13: Team Scores
var teamA = prompt("Enter Team A name:");
var scoreA = Number(prompt("Enter Team A score:"));

var teamB = prompt("Enter Team B name:");
var scoreB = Number(prompt("Enter Team B score:"));

if (scoreA > scoreB) {
    console.log(teamA + " has won the game.");
}
else if (scoreB > scoreA) {
    console.log(teamB + " has won the game.");
}
else {
    console.log("The game is a tie.");
}


// Q14: Check Data Types
var stringValue = "Hello World";
var numberValue = 25;
var booleanValue = true;

console.log("Value: " + stringValue);
console.log("Type: " + typeof stringValue);

console.log("Value: " + numberValue);
console.log("Type: " + typeof numberValue);

console.log("Value: " + booleanValue);
console.log("Type: " + typeof booleanValue);


// Q15: Even or Odd
var evenOdd = Number(prompt("Enter a number:"));

if (evenOdd % 2 === 0) {
    console.log(evenOdd + " is an Even number");
}
else {
    console.log(evenOdd + " is an Odd number");
}


// Q16: Weather Checker
var temperature = Number(prompt("Enter temperature:"));

if (temperature > 40) {
    console.log("It is too hot outside.");
}
else if (temperature > 30) {
    console.log("The Weather today is Normal.");
}
else if (temperature > 20) {
    console.log("Today's Weather is cool.");
}
else if (temperature > 10) {
    console.log("OMG! Today's weather is so Cool.");
}
else {
    console.log("The weather is very cold.");
}


// Q17: Simple Calculator
var firstNumber = Number(prompt("Enter first number:"));
var secondNumber = Number(prompt("Enter second number:"));
var operator = prompt("Enter operator (+, -, *, /, %):");

var result;

if (operator === "+") {
    result = firstNumber + secondNumber;
    console.log("Result: " + result);
}
else if (operator === "-") {
    result = firstNumber - secondNumber;
    console.log("Result: " + result);
}
else if (operator === "*") {
    result = firstNumber * secondNumber;
    console.log("Result: " + result);
}
else if (operator === "/") {
    result = firstNumber / secondNumber;
    console.log("Result: " + result);
}
else if (operator === "%") {
    result = firstNumber % secondNumber;
    console.log("Result: " + result);
}
else {
    console.log("Invalid operator");
}
