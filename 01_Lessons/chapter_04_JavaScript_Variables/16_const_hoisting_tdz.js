/*If you use var variable intialize value in it aftr doing some operations,
it throws undefined.but,In let/const need to enter value before operations 
oterwise,it throws ReferenceError,because it not exit from TDZ.
*/
//console.log(x);//Enter in to tdz
console.log("Hello");
console.log("Hello");
console.log("Hello");
const x = "Hi";//finished tdz
