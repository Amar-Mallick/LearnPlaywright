//If the key value is present it return it by default .if not it return new key value pair.

const student = { name: "Sonu", age: 25, city: "kochi" };
const { state = "kerala" } = student;
console.log(state);//kerala
const { city = "thrivandram" } = student
console.log(city);//kochi

