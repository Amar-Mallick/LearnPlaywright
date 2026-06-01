/*Slice():->It changes the contents of an array by removing/replacing existing elements 
&/or adding new elements in place. 
syntax-array.splice(start index,deletecount)*/
let s = [10, 12, 15, 35];
let se = s.splice(1, 0, 25);
console.log(se);//[]
console.log(s);//[ 10, 25, 12, 15, 35 ](Add new element)
let see = s.splice(2, 1, 300);//(replace 1 elements)
console.log(see);//[ 12 ]
console.log(s);//[ 10, 25, 300, 15, 35 ]
let st = s.splice(1, 2, 70, 75);//(replace 1 elements)
console.log(st);//[ 25, 300 ]
console.log(s);//[ 10, 70, 75, 15, 35 ]
//In Js 0 or negative , not remove elemnts in Array 
let str = s.splice(0, -1, 50);
console.log(s);//[ 50, 10, 70, 75, 15, 35 ]