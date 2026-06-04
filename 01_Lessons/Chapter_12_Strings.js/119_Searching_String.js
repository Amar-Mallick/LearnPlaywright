let url = "https://www.amazon.com";
//Includes: Search an elements & return boolean values.
console.log(url.includes("com"));//true
console.log(url.includes("some"));//false
console.log(url.includes(".amazon"));//true


//startsWith()&endsWith:-
console.log(url.startsWith("https"));//true
console.log(url.startsWith("com"));//false
console.log(url.startsWith("amazon"));//false
console.log(url.endsWith("com"));//true
let s = "Testing Acedamy!";
//IndexOf()-Returns the index of the first occurrence of a value, or -1 if not found.
console.log(s.indexOf('e'));//1(Always return 1st occuerance)
console.log(s.indexOf("Ace"));//8
console.log(s.indexOf());//-1

//lastIndexOf():-Returns the last occurrence of a substring in the string, or -1 if it is not present. 
console.log(s.lastIndexOf());//-1
console.log(s.lastIndexOf("e"));//10
console.log(s.lastIndexOf("zx"));//-1
//search():-Finds the first substring match in a regular expression search.
console.log(url.search(/amazon/));//12

