/*In programming, a ternary operator (also known as a conditional operator) is a compact way to write an if-else statement using a single line of code. It evaluates a condition and returns one of two values based on whether that condition is true or false.

The word "ternary" literally means composed of three parts. It is the only operator in JavaScript that takes three operands.
Ternary operator syntax : identifier=(condition)?result1:result2; */

let age = 15;
let x = (age >= 18) ? 'Eligible for vote' : 'Not eligible for votes';
console.log(x);//Not eligible for votes

let isRaining = true;
let action = (isRaining) ? 'Take an umbrella' : 'Leave umbrella at home';
console.log(action);

//Nested ternary Example-01 :-->
let a = -10;
let b = (a <= 0) ? 'Invalid age enter' : (a >= 18) ? 'Eligible' : 'NotEligible';
console.log(b);//Invalid age enter
//Nested ternary Example-02 :-->
//syntax following for this example :-->> Condition1 ? (Condition2 ? True : False) : False
let boy_Age = 35;
let s = (boy_Age >= 18) ? (boy_Age >= 21) ? 'Eligible for drive' : 'Not elgible for frive' : 'Not eligible for drinks';
console.log(s);//Eligible for drive