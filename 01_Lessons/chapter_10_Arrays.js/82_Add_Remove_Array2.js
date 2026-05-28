//Add and remove elements from beginning of Array...
//Added element in  beginning of Array & increase index of other elements............
let l = [3, 4];
console.log(l[0]);//3
l.unshift(2);
console.log(l[1]);//3
console.log(l);//[ 2, 3, 4 ]
l.unshift(1, 0);
console.log(l);//[ 1, 0, 2, 3, 4 ]

//Remove element from beginning & increse index of other elements ............
l.shift(1);
console.log(l);//[ 0, 2, 3, 4 ]
//multiple element remove is not allowed in shift()..
l.shift(0, 2);
console.log(l);//[ 2, 3, 4 ]
