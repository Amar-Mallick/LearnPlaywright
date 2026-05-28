/*Slice():-Returns a section copy of Array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.*/
//output will be come like(starting index,end index-1)
let child = ['Biki', 'Lilan', 'Miki', 'Chiki'];
console.log(child.slice(0, 2));//[ 'Biki', 'Lilan' ]
console.log(child.slice(2));//[ 'Miki', 'Chiki' ]
console.log(child.slice(-1, -3));// [](always it check lefts to right)
console.log(child.slice(-3));//[ 'Lilan', 'Miki', 'Chiki' ]
console.log(child.slice());//[ 'Biki', 'Lilan', 'Miki', 'Chiki' ]
console.log(child.slice(undefined, 2));//[ 'Biki', 'Lilan' ]
console.log(child.slice(undefined));//[ 'Biki', 'Lilan', 'Miki', 'Chiki' ]