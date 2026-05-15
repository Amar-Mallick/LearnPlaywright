//Logical operator : && ,|| ,!
let age = 25;
let hasID = true;
// && operators : both should be true then output will return true
console.log(age > 18 && hasID);//true
console.log(age > 108 && hasID);//false
// || operators : one should be true then output will return true
console.log(age > 18 || hasID);//true
console.log(age > 108 || hasID);//true
// ! operators :  true then output will return true
console.log(!age == 18);//false
/**Here age=25 means true(Any non-zero number in JavaScript is treated as true)
 * Now our syntax say :!age (!true)=false
 * false==18; false
 */
let loggedIn = true;
console.log(!loggedIn);//false