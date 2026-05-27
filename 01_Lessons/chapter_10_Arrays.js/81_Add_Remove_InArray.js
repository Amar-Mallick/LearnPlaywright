//Push() & pop()Method -->>>>
let item = [2, 3, 4];
console.log(item);//[ 2, 3, 4 ]
//Add item at the end of Array.....
item.push(5);
console.log(item);//[ 2, 3, 4, 5 ]
//Add  mulitiple item at the end of Array.....
item.push(6, 7);
console.log(item);//[ 2, 3, 4, 5, 6, 7 ]
//Remove item at the end of Array.....
item.pop(7);
console.log(item);//[ 2, 3, 4, 5, 6 ]
//Remove  mulitiple item at the end of Array is not possible by using pop method(only remove last one) ....
item.pop(5, 6);
console.log(item);//[ 2, 3, 4, 5 ]


