//toString():-converts array elements into string format..
let veg = ['potato', 'carrot', 'beans'];
console.log(veg.toString());//potato,carrot,beans
//1)join():-Adds all the elements of an array into a string, separated by the specified separator string like(#,*,& etc).
console.log(veg.join());//potato,carrot,beans
console.log(veg.join('*'));//potato*carrot*beans
console.log(veg.join('|'));//potato|carrot|beans
//2)concat():-
let a = [10, 20], b = [30, 40];
let c = a.concat(b);
console.log(c);//[ 10, 20, 30, 40 ]
//3)Spread():-modern way use (...) to  concate
let d = [...a, ...b];
console.log(d);//[ 10, 20, 30, 40 ]
