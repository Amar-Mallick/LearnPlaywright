//pop:- removes from the end (and returns that removed element)....
let l = [3, 2, 5, 7, 4, 1];
console.log(l.pop());//1
let le = [];
console.log(le.pop());//undefined
let lm = ['abc', 'def', 'xyz'];
console.log(lm.pop());//xyz
//Ex:->>
let histroy = ["Type 'Hello'", "Type 'World'", "Bold text"];
let undoneAction = histroy.pop();
console.log(undoneAction);//Bold text
console.log(histroy);//[ "Type 'Hello'", "Type 'World'" ]
