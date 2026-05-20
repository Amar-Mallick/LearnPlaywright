//Increment operators further divided two types: pre increment & post  increment.
//pre-increment : 1st increment happen then assign value.
let l = 10;
let m = ++l;
console.log(m); //11
console.log(l);//11
let n = 15;
let p = ++n + (++l);
console.log(p);//(15+1)+(1+11)==28

//post-increment : 1st assignment happen then  increment values.
let e = 15;
e = e++;
let f = e++;
console.log(e);//16
console.log(f);//15

//Annother example :->
let x = ++f + f;//16+16=32
console.log(x);

//Example :->
//value of e =16
console.log(e++ + ++e); //17+17=34