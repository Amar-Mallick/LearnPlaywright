//filter():-Return all elements match..
let f = [40, 50, 70];
let fx = f.filter(x => x > 45);
console.log(fx);//[ 50, 70 ]
console.log(f);//[ 40, 50, 70 ]
let fxs = f.find(s => s > 45);
console.log(fxs);//50