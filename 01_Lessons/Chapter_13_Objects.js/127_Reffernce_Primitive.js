//Primitive type(Both are refer different location)
let a = 10;
console.log(a);//10
let b = a;
console.log(b);//10
b = 20;
console.log(b);//20
console.log(a);//10

//Reference Type(objects,Array,Functions)->>
let a1 = { id: 2, name: "suresh" };
let a2 = a1;
console.log(a1.name);//suresh
console.log(a2.name);//suresh
a2.name = "Alok";
console.log(a2.name);//Alok
console.log(a1.name);//Alok


