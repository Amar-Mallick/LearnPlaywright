/**The "Grade to GPA" Converter (Medium)
Task: Create a function getGPA(letterGrade) that converts a letter grade to a 4.0 scale.
'A': 4.0
'B': 3.0
'C': 2.0
'D': 1.0
'F': 0.0
Logic: If the input is not one of these letters, return "Invalid grade". Use switch to perform the mapping. */
function getGPA(letterGrade) {
    switch (letterGrade.toUpperCase()) {
        case 'A': return 4.0;
        case 'B': return 3.0;
        case 'C': return 2.0;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return 'Invalid grade';

    }


}
console.log(getGPA('b'));