/**Generic:->1) powerful form of parameterised abstraction, allowing you to write code without tying it to a specific, concrete data type.
2)Hiding Specific Types: Abstraction is about hiding unnecessary details. Generics hide the specific data type (like string, number, or a custom interface) and focus purely on the logic or structure of the code
3)Separating Logic from Data: You write the structural blueprint once. The exact data type is abstracted away until the component is actually instantiated or called.
*/
//1. Low Abstraction (Hardcoded to Types):->

//Ex- Specific to numbers
interface NumberBox { value: number; }
//Ex- Specific to strings
interface StringBox { value: string; }

//2. High Abstraction (Using Generics):->
// 'T' stands for the dynamic Data Type
interface Box<T> { value: T; }
// Concrete instances defined later
let box1: Box<number> = { value: 12 };
let box2: Box<string> = { value: "LogInTest" };


