/**Callback:->>> 1)A callback tells Playwright: "Do not run this code yet! Wait until the browser is completely ready, and then run it."
 * 2)In simple way we can say 
a function passed inside another function as a helper 
and saying, "Call me when you are done!"
3)callback is just variable we can use other name also  */

//   Create the helper function (The Callback)
function sayGoodBye() {
    console.log("Goodbye! Have a great day!");
}
// Create the main function that takes the helper inside it
function greetUser(name, Callback)//Callback is a variable here it can be anyname.
{
    console.log("Hello, " + name + "!");// Does this first
    Callback();//Does the helper function next
}


//The 1st Way (Named Function): "Class, this is like calling a specific classmate by name—like Amar—to come up and help."
greetUser("Amar", sayGoodBye);  //1st line o/p->Hello, Amar!
//2nd line o/p->Goodbye! Have a great day!

//The 2nd Way (Anonymous Function): "This is like creating a nameless helper right on the spot because we only need them once."
greetUser("Sandip", function () {
    console.log("It's a Anonnymus Function use to callback");
}); // Output Line 1 ->Hello, Sandip!
// Output Line 2 ->It's a Anonnymus Function use to callback 

//The 3rd Way (Arrow Function): "This is the modern, fast superhero version. We drop the word function completely and just use a cool arrow =>!"
greetUser("Pramod", () => {
    console.log("Good Morning,It's an Arrow(=>)function");
});// Output Line 1 ->Hello, Pramod!
// Output Line 2 ->Good Morning,It's an Arrow(=>)function 