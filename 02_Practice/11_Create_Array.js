//1)Array Literal->(preferd):->>
let l = ["abc", "def", "ghi"];
let x = [2, 3, 5, 7,];
//2)Array Constructor():->>
let a = new Array(4);
console.log(a);//[ <4 empty items> ]
let ab = new Array(3, 6, 9);
console.log(ab);//[ 3, 6, 9 ]
let abc = new Array();
console.log(abc);//[]
abc[0] = 13;
abc[1] = 26;
console.log(abc);//[ 13, 26 ]
//3)Array.of():->>
let t = Array.of("esd", "afs", "zxy");
console.log(t);//[ 'esd', 'afs', 'zxy' ]
let n = Array.of(3, 5, 7, 9);
console.log(n);//[ 3, 5, 7, 9 ]
//4)Array.form():(Creates an array from an array-like object)->>
let ch = Array.from("Hello");
console.log(ch);//[ 'H', 'e', 'l', 'l', 'o' ]
let num = Array.from("5328");
console.log(num);//[ '5', '3', '2', '8' ]
