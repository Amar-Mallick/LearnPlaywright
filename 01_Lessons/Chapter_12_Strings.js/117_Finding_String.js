/*String :- Sequence of Characters..
can use "" & '' to create String*/
let s = "Testing Acedamy!";
//1)length():-Rturn the size of String.
console.log(s.length);//16
//2)IndexOf()-Returns the index of the first occurrence of a value, or -1 if not found.
console.log(s.indexOf('e'));//1(Always return 1st occuerance)
console.log(s.indexOf("Ace"));//8
console.log(s.indexOf());//-1

//3)lastIndexOf():- 
console.log(s.lastIndexOf());//-1
console.log(s.lastIndexOf("e"));//10
//4)at():-return characters,according to index.
console.log(s.at(-1));//!
console.log(s.at(1));//e
console.log(s.at(-5));//d
//5)Bracket Notation:->>
console.log(s[0]);//T
console.log(s[3]);//t
//6)charAt()-According to index ,return characters.
console.log(s.charAt(1));//e
console.log(s.charAt(0));//T








