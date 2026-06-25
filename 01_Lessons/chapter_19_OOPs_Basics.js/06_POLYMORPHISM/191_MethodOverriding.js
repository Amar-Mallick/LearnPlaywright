/**Polymorphism:-> 1)in JavaScript is an Object-Oriented Programming (OOP) concept .
 * that allows different classes or objects to share the same method name but execute different behaviors. 
 * 2)Types of polymorphism->01. Runtime Polymorphism (Method Overriding):->> 
 * In JavaScript, achieved through the Prototype Chain. A child class provides a specific implementation of a method that is already defined in its parent class, overriding it at runtime.
 * 
 * 02. Compile-Time Polymorphism (Method Overloading)->>JavaScript does NOT natively support Method Overloading*/


class BasePage{
    setUp(){
        console.log("Open the browser,Base Page Method");
         };
}
class LoginPage extends BasePage{
    setUp(){
        console.log("Open the browser,LogIn Page Method"); 
    };
}
const obj=new LoginPage();

obj.setUp();//Open the browser,LogIn Page Method
// When you call obj.setUp(),
//  the JavaScript engine uses the Prototype Chain to look for the method in a specific order:It looks inside the LoginPage class instance first.
// It finds a setUp() method right there.
// It immediately executes it and stops looking further.
//  The setUp() method inside BasePage is bypassed or "shadowed".