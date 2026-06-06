const user = { name: "Amar", age: 30, email: "amar@gmail.com" };
console.log(user);//{ name: 'Amar', age: 30, email: 'amar@gmail.com' }
console.log(user.name);//Amar
console.log(user["age"]);//30

//Dynamic property access............
const num = "age";
console.log(user[num]);//30
//Modify Values.......
user.city = "Hyderabad";
user.age = 40;
console.log(user);//{ name: 'Amar', age: 40, email: 'amar@gmail.com', city: 'Hyderabad' }
console.log(user.age);//40
console.log(user["city"]);//Hyderabad

let obj = { name: "LogIn" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*{
  value: 'LogIn',
   writable: true,
   enumerable: true,
   configurable: true
 }*/





