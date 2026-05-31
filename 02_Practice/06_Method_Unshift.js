/*unshift():->># Add elements in starting of array.
# Retuns the new array length*/
let s = [];
console.log(s);//[]
console.log(s.unshift());//0
let n = [4, 6, 8];
console.log(n.unshift());//3
console.log(n.unshift(2, 1));//5
console.log(n);//[ 2, 1, 4, 6, 8 ]