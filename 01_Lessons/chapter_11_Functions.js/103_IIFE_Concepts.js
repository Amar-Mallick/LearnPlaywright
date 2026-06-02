/*IIFE:-#Immediately Invoke Function Expression.
#Generally avoid to use function name in IIFE*/
//Normal function Ex:-
//part-01(Defination/Declaretion)
function greet() {
    console.log("Hello");
}
//part-02 (call the Fn)
greet();//Hello

//IIFE  in normal function Ex:-
(function () {
    console.log("It's an IIFE Normal Function Example");
})();//It's an IIFE Normal Function Example

//IIFE  in Arrow function Ex:-
(() => {
    console.log("It's an IIFE Arrow Function Example");
})();//It's an IIFE Arrow Function Example