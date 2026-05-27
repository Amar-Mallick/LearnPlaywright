/**To check if a year is a leap year in JavaScript, the year must meet one of the following conditions based on the Gregorian calendar:

It must be perfectly divisible by 400.

It must be divisible by 4 but NOT divisible by 100. */
let year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + ' Yes It is');
} else {
    console.log(year + ' No It is not');
}