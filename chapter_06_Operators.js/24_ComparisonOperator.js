/*Comparisonal Operator :==(equal),===(strict equal),!=,!==,<,>,<=,>= 
In JavaScript always prefer to use === operator for comparisions.
== operators always check value only.
=== operators always check values with datatype also*/
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 5);     //false
console.log(5 !== 5);    //false
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 5);     // true
console.log(10 <= 5);     // false
console.log(10 >= 10);     // true