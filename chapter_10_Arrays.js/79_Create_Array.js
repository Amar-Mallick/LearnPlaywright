//Array : In javascript we can store multiple datatypes in array.
//1)syntax of Array (using Array Literal ) (prefered):
let items = ['Tea', true, 'Milk', 'Curd', 15];
console.log(items);//[ 'Tea', true, 'Milk', 'Curd', 15 ]
//2)syntax of Array (using a function constructor).......
let t = new Array('abc', 10, 'bca');
console.log(t);//[ 'abc', 10, 'bca' ]
//using Array() constructor to pre-allocate space for 3 elements..
let e = new Array(3);
console.log(e);//[ <3 empty items> ]
//Adding values in empty Array...
e[0] = 10;
e[1] = 20;
e[2] = 30;
console.log(e);//[ 10, 20, 30 ]
//crating an array containg the number 3..
let x = [3];
console.log(x);//[ 3 ]
//3) using Array.of() method...........
//single number argument..
let r1 = Array.of(2);
console.log(r1);//[ 2 ]
let r2 = Array.of('ert');
console.log(r2);//[ 'ert' ]
//Multiple arguments.......
let r3 = Array.of('Apple', 'Mango');
console.log(r3);//[ 'Apple', 'Mango' ]

//4)Array.form():->>create a brand new array from an array..
//createing an array from a String..
let l1 = Array.from('Hello');
console.log(l1);//[ 'H', 'e', 'l', 'l', 'o' ]
//5) Using the spread operator..........
let orginal = [1, 2, 3];
let combined = [...orginal, 4, 5, 6];
console.log(combined);//[ 1, 2, 3, 4, 5, 6 ]

