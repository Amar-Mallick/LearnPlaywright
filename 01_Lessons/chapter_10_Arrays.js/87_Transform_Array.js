/*map():-> Transform every element of Array &
 return new array.but, according to condition value will be changed.
*/
let marks = [50, 65, 77, 85];
let result = marks.map(x => x > 60 ? 'pass' : 'fail');
console.log(result);//['fail','pass','pass','pass' ]
//filter(return all elements after the condition checked)...
console.log(marks.filter(x => x > 60));//[ 65, 77, 85 ]

/*reduce():- method executes a callback function on each element of the array, resulting in a single output value. 
 It takes two main arguments.
 The Callback Function: (a, b) => a + b
 The Initial Value: 0 (passed as the second argument to reduce)*/
console.log(marks.reduce((a, b) => a + b, 0));//277

//flat():- combine  multiple Array..
let x = [[12, 13], [14, 15, 16], [17]];
console.log(x.flat());//[ 12, 13, 14, 15, 16, 17 ]