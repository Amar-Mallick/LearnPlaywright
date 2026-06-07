//1)Creating Objects:->>
const user = { name: "Sonu", age: "23" };
//2)Accessing values using dot notation:->>
console.log(user.name);//Sonu
//3)Accessing values using bracket notation:->>
console.log(user["age"]);//23
//4)Add/Update new value:->>
user.id = 3;
console.log(user);//{ name: 'Sonu', age: '23', id: 3 }
user["status"] = "Active";
console.log(user);//{ name: 'Sonu', age: '23', id: 3, status: 'Active' }
//5)Delete data :->>>
delete user.id;
console.log(user);//{ name: 'Sonu', age: '23', status: 'Active' }
//6)Object.values():->>(Returns an array containing all property values.)
console.log(Object.values(user));//[ 'Sonu', '23', 'Active' ]
//7)Object.keys():->>(Returns an array containing all property names.)
console.log(Object.keys(user));//[ 'name', 'age', 'status' ]
//8)checking keys(Verifies if a specific property exists in the object.):->>
console.log("name" in user);//true
console.log("id" in user);//false
//9)Destructuring(Extracts properties directly into unique variables.) :-
const { name } = user;
console.log(name);//Sonu
//10)Change variable name:->>>
const { status: newstatus } = user;
console.log(newstatus);//Active










