//Pre Increment : First Increment then Assigned the value .
let a = 10;
console.log(a);//10
++a;
console.log(a);//11
let b = ++a;
console.log(b);//12
let c = a + ++a + (++a)//12+13+14
console.log(c);//39
console.log(a);//14
//Post Increment : First Assigned value then Increment happen.
let d = 15;
console.log(d);//15
e = d++;
console.log(e);//15
console.log(d);//16




