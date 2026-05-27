//Access/Modify Arrays.........
let status = ['pass', 'fail', 'skip'];
console.log(status[0]);//pass
console.log(status[1]);//fail
console.log(status[2]);//skip
console.log(status[3]);//undefined
console.log(status[-1]);//undefined
//In Js not throw Index Out of bound exception,It's return undefined.

/*using at() also can access values of array.
It's starting index is -1 & It's follow right to left directions*/
console.log(status.at(-1));//skip
console.log(status.at(-2));//fail
console.log(status.at(-3));//pass
console.log(status.at(-4));//undefined

//Modfying Array...............
status[2] = 'hold';
console.log(status);//[ 'pass', 'fail', 'hold' ]