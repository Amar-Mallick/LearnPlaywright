//In JavaScript, aliasing allows you to rename an imported variable, function, or path to make your code cleaner or avoid naming conflicts.
import { callStudent as studentCallingFunction,studentName as student } from "./utils.js";
console.log(studentCallingFunction("rohit"));//ROHIT
console.log(student);//Alok

