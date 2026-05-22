/**The Challenge: Season Finder
Input: A number (1–12) representing a month.
Rules:
12, 1, 2 → "Winter"
3, 4, 5 → "Summer"
6, 7, 8 → "Rainy"
9, 10, 11 → "Autumn"
Anything else → "Invalid month" */
let month = 8;
switch (month) {
    case 1: case 2: case 12:
        console.log('Winter Season'); break;
    case 3: case 4: case 5:
        console.log('Summer Season'); break;
    case 6: case 7: case 8:
        console.log('Rainy Season'); break;
    case 9: case 10: case 11:
        console.log('Autumn Season'); break;
    default: console.log('Season is not Available');

}
