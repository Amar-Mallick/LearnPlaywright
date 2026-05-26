//Add and remove elements from beginning of Array...
//Add from beginning............
let l = [3, 4];
l.unshift(2);
console.log(l);//[ 2, 3, 4 ]
l.unshift(1, 0);
console.log(l);//[ 1, 0, 2, 3, 4 ]

//Remove from beginning............
l.shift(1);
console.log(l);//[ 0, 2, 3, 4 ]
//multiple element remove is not allowed in shift()..
l.shift(0, 2);
console.log(l);//[ 2, 3, 4 ]
