/*isArray():- return boolean values,verify is it Arry or not.
isArray():- It's a static method ,Array should be wriiten before it in use.
*/
let x = ['12', '24', '48'];
console.log(Array.isArray(x));//true
let z = 10;
console.log(Array.isArray(z));//false
//some():- at least one element is greater than the condition
let xx = x.some(s => s >= 40);
console.log(xx);//true
//every():-All element is greater than the condition
let x2 = [20, 30, 40].every(n => n >= 15);
console.log(x2);//true
let x3 = [20, 30, 40].every(n => n >= 25);
console.log(x3);//false