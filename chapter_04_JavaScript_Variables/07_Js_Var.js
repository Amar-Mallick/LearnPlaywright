/* Var :- 1)It's a reserve  keyword in Js
2)It's Function-scoped.
3)It can be Re-declared,Re-assigned & get hoisted to the top of its scope with an initial value undefined.
4)In modern automation code we avoid use var beacuse,It leaks out of if & for blocks which cause confusing bugs in test loops.
*/

var v = 20;
var v = 30;//Re-declaration
v = 40; //Re-assignment
console.log(v);
//Example of Function Scope...
function callname() {
    console.log("Hello,Amar");
    var v = 50;
    console.log("Re-declared value of v in Function :" + v);
    if (true) {
        var v = 100;
        console.log("Once again value of v change :" + v);
    }
}
callname();