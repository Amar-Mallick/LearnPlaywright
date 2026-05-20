//console.log(score);//ReferenceError: Cannot access 'score' before initialization
let score = 50;
/*TDZ : (Temporary Dead Zone)- In let/const variable enter TDZ, without intialize value
 in to  the variable, TDZ  not finished It throws ReferenceError*/
console.log(score);