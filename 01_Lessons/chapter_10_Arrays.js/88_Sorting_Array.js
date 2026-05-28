//Normal Sorting...........
let a = [5, 3, 8, 1, 2];
a.sort();
console.log(a);//[ 1, 2, 3, 5, 8 ]
let fruits = ['Orange', 'Mango', 'Apple'];
console.log(fruits.sort());//[ 'Apple', 'Mango', 'Orange' ]
/**By default Arrays are sorted by Lexigrophica order.
 * Means,They will be sorted like String compare 1st character of elements.
  */
//Natural sorting(Lexigrophical sorting)....
let num = [1, 20, 10, 2];
console.log(num.sort());//[ 1, 10, 2, 20 ]

//using Arrow functions make it normal sorting..
num.sort((a, b) => a - b);//Asscending order
console.log(num);//[ 1, 2, 10, 20 ]
num.sort((a, b) => b - a);//Descending order
console.log(num);//[ 20, 10, 2, 1 ]
