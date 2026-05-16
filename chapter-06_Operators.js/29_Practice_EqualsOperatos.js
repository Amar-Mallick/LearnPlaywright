/*
= : Assignment operators
== : Loose equals operators
=== : Strict equals operators
*In JavaScript mostly used as strict(===)equals operators.
== : It's always considers only values after converting both side into same datatypes (type coercion) .
=== : It's always considers both values & datatypes(No Conversation ).*/
//Examples :-
console.log(0 == "");//true
console.log(0 === "");// false
console.log(null == "");// false
console.log(null === "");// false
console.log(0 == "0");//true
console.log(0 === "0");//false
console.log(true == 1);//true
console.log(true === 1);//false(boolean != number)
console.log(false == 1);//false
console.log(false == 0);//true
console.log("" == "0");//false (transitivity broken)
console.log(null == 0);//false
console.log(null == undefined);//true
console.log(null === 0);//false
console.log(null === undefined);//false


