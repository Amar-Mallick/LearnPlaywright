//1)indexof():-if element is not present in array it give o/p as -1
let result = ['pass', 'fail', 'not attend'];
console.log(result.indexOf('not attend'));//2
console.log(result.indexOf('skip'));//-1
console.log(result.lastIndexOf('not attend'));//2
console.log(result.indexOf('pass'));//0


//2)includes(check element is present or not ,always return boolean value)
console.log(result.includes('skip'));//false
console.log(result.includes('fail'));//true

//3)find(return first matching element)
let rate = [10, 15, 20, 25, 35, 50];
console.log(rate.find(x => x > 23));//25
console.log(rate.find(x => x > 15));//20

//4)findIndex(Returns the index of the first element in the array where predicate is true, and -1 otherwise.)
console.log(rate.findIndex(x => x > 15));//2
console.log(rate.findIndex(x => x < 15));//0
console.log(rate.findIndex(x => x > 35));//5

//5)filter(return all matching element)
console.log(rate.filter(x => x > 20));//[ 25, 35, 50 ]
console.log(rate.filter(x => x < 20));//[ 10, 15 ]