/*String :- Sequence of Characters..
can use "" & '' to create String*/
let s = "Testing Acedamy!";
//1)length():-Rturn the size of String.
console.log(s.length);//16

//2)at():-return characters,according to index.
console.log(s.at(-1));//!
console.log(s.at(1));//e
console.log(s.at(-5));//d
//3)charCodeAt():- Return Ascii code of letters.
console.log("D".charCodeAt(0));//68
console.log("d".charCodeAt(0));//100
console.log("T".charCodeAt(0));//84
console.log("t".charCodeAt(0));//116
console.log(s.charCodeAt(0));//84
console.log(s.charCodeAt(3));//116


//4)Bracket Notation:->>Access by index 
console.log(s[0]);//T
console.log(s[3]);//t
//5)charAt()-According to index ,return characters.
console.log(s.charAt(1));//e
console.log(s.charAt(0));//T








