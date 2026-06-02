/** closure : It is a function that remembers and can access variables from its original birthplace, 
 * even after its parent function has stopped running. 
 *=>>Rule 1 (The Restriction): You can call outer() because it's out in the open. But you cannot call inner() directly from the outside because it is hidden inside outer(). Trying to do so throws that ReferenceError.
Rule 2 (The Solution): If you want to use inner outside, you must use return inner; inside the outer function to hand its blueprint to the outside world.
Rule 3 (The Memory): When the returned inner function runs outside later, it carries a permanent memory backpack (a closure) containing all the variables from its original birthplace.
Rule 4 (The Execution Shortcut): If you use double parentheses outer()(), the first () runs the outer function to get the inner blueprint, and the second () instantly executes that inner function without saving it to a variable.*/
//In one line we cansay,Closure is execute outer function code & return inner function.
function outer() {
    let message = "Hello";
    console.log("Outer Function is called");
    function inner() {
        console.log(message);
    }
    return inner;
}
let Fn_Inner = outer();//Outer Function is called
Fn_Inner();//Hello
//Inner();//It's return refference error (Inner is undefined)
