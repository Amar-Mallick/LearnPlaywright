let a = 1205, b = 1200, c = 3201;
let largeNumber = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
console.log(largeNumber);//3201
