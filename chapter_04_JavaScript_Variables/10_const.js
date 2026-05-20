/*Const : Value is fixed ,value added in declaration time.
We cann't re-assigned &re-declared value.
It's block scoped.
*/
const name = "Amar";
//const name = "Alok";//SyntaxError: Identifier 'name' has already been declared
console.log(name);
if (true) {
    const name = "Prakash";
    console.log("Value inside the block of name :" + name);

}
console.log("Value of outside block of name :" + name);