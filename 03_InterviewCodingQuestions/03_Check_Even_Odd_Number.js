//Method 01: Using if-else condtions and modulos operator..
let number = 24;
if (number % 2 === 0) {
    console.log(number, " : is Even Number");
} else {
    console.log(number, ": is Odd Number");
}

//Method 02 : Using Ternary Operator...
console.log(`${number}: is ${number % 2 === 0 ? "Even" : "Odd"} Number`);//24: is Even Number
