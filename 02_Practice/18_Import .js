import verifyCourse, { checkCourse } from "./17_Export_Import_Concepts.js";
// Call the function and pass the parameter
verifyCourse("Python");//Course is : Python
import { courseName as c } from "./17_Export_Import_Concepts.js";
console.log(c);//Playwright
//call both normal and default functions....
import verifyedCourse, {checkCourse as availableCourse} from"./17_Export_Import_Concepts.js";
verifyCourse("Java") ;//Course is : Java
availableCourse("Javascript");//Course is : Javascript