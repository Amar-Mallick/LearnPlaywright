/*map():->> It creates a new array by applying a function to every element of the original array. It returns a new value for every single item,
 keeping the array the exact same length.*/
let t = [10, 12, 14, 15];
let tx = t.map(x => x >= 12);
console.log(tx);//[ false, true, true, true ]