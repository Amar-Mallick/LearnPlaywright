/**
 * Hoisting : Without creating a variable and assigned value want to get the value of varible.
 * Internally jS engine in JS create a variable.
 * After we create variable & add value it should be show 1st line as undefined .
 * 
 */
console.log(name);//undefined
var name = "Amar";
console.log(name);//Amar