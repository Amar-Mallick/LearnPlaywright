//Example of function scoped vs Block scpoed ->>>>>>>>>>
var a = 10;//Global Scoped
console.log('Initial value of a is :', a);//10
function call() {
    console.log('var is a function Scoped');//var is a function Scope
    var a = 15;//Function Scoped
    console.log('Function call value of a is : ', a);//Function call value of a is :  15

}
call();
console.log(a);//10

function example() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a); // 10

    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
}

example();
