/*In normal function we can call function before declaration/defination but,
in Function as expression & Arrow functions it's throw ReferenceError */
verifyGrade(88);//A Grade
function verifyGrade(mark) {
    if (mark >= 80 && mark <= 90) {
        console.log("A Grade");
    }
}
//Arrow Function().........
const CheckGrade = (mark) => {
    if (mark >= 80 && mark <= 90) {
        console.log("A Grade");
    }
}
CheckGrade(84);//A Grade
//Function use as Expression...
const grade = function (m) {
    if (m >= 80 && m <= 90) {
        console.log("A");
    }
}
grade(86);//A