/*let : We can re-assigned values but not re-declared in let.
it's block -scope .
*/
let l = 10;
console.log(l);
function printValue() {
    console.log("Welcome..")
    let l = 20;
    console.log(l);
}
printValue();
let l = 30;
console.log(l);//SyntaxError: Identifier 'l' has already been declared

