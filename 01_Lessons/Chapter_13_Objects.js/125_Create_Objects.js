/*Objects:- Collections of key & value pairsstored in heap memory .
varriables don't hold the  object itself,they hold a reference(memory address)to it.
Objects syntax:- datatype variable={key:"value"};*/
let studentData = { id: 1, name: "Amar", course: "Playwright" };
console.log(studentData);
//{ id: 1, name: 'Amar', course: 'Playwright' }
let ab = {};
ab.name = "Amir",
    ab.city = "Delhi";
console.log(ab);//{ name: 'Amir', city: 'Delhi' }


//Accessing Values from Objects.......
console.log(studentData.name);//Amar
console.log(studentData.id);//1
console.log(studentData.course);//Playwright
//Accessing Values from Objects.......
console.log(studentData["id"]);//1
console.log(studentData["name"]);//Amar


//JSON objects & JS objects are different.(syntax also different)
let json_Objeccts = { "name": "Amar", "Location": "Hyderabad" };
let js_Objects = { name: "Amar", location: "Hyderabad" };