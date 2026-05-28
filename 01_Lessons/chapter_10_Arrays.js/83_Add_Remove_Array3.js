//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//splice(start:index number, deleteCount?: number): number[]
//1)replace/remove elements value........
let score = [10, 15, 20, 30];
score.splice(1, 2);
//Here,1 is index number & 2 is element  number to be deleted;
console.log(score);//[ 10, 30 ]
score.splice(1, 1);
console.log(score);//[ 10 ]
//ex-02 :->>
let group = [7, 8, 9, 10];
console.log(group);//[ 7, 8, 9, 10 ]
group.splice(2, 1, 15);
console.log(group);//[ 7, 8, 15, 10 ]
//Ex-01 >>start index=2,replace item-2 & value added =20,25
group.splice(2, 2, 20, 25);
console.log(group);//[ 7, 8, 20, 25 ]
//Ex-02 >>start index=2,replace item-3(but 2 items is present in this Array) & value add =1,2,3
group.splice(2, 3, 1, 2, 3);
console.log(group);//[ 7, 8, 1, 2, 3 ]

//Remove elements from Array....
group.splice(0, 2);
console.log(group);//[ 1, 2, 3 ]
//2)Add items in Array....(added item before the index mentioned)
group.splice(1, 0, 25);
console.log(group);//[ 1, 25, 2, 3 ]
group.splice(1, 0, 55, 45);
console.log(group);//[ 1, 55, 45, 25, 2, 3 ]


