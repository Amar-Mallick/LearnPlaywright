//Method 01-> using if-else conditions 
let mark = 77.5;
if (typeof mark !== "number" || mark < 0 || mark > 100) {
    console.log(`mark : ${mark} is invalid. Marks must be between 0 and 100.`);
} else if (mark >= 90) {
    console.log(`mark : ${mark} and Grade is "A"`);
} else if (mark >= 80) {
    console.log(`mark : ${mark} and Grade is "B"`);
} else if (mark >= 70) {
    console.log(`mark : ${mark} and Grade is "C"`);
} else if (mark >= 60) {
    console.log(`mark : ${mark} and Grade is "D"`);
} else {
    console.log(`mark : ${mark} and you are fail, Grade is not required`);
}