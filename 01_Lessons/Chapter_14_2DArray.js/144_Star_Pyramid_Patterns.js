/**The Row and Column Grid (Size 3)Look at how the grid is set up:
 * Row 1: Column 1 (space) | Column 2 (space) | Column 3 (*)
 * Row 2: Column 1 (space) | Column 2 (*) | Column 3 (*) | Column 4 (*)
 * Row 3: Column 1 (*) | Column 2 (*) | Column 3 (*) | Column 4 (*) | Column 5 (*) */
//1) using forloop............
let rows = 3;
// The outer loop tracks our current ROW number..
for (let i = 1; i <= rows; i++) {
    let patern = "";//Clear the row string before adding columns
    // 1. Column loop to add the spaces...
    for (let j = 0; j < rows - i; j++) {
        patern += " ";
    }
    // 2. Column loop to add the stars
    for (let k = 0; k < (2 * i - 1); k++) {
        patern += "*";
    }
    // Print the finished row layout to the screen
    console.log(patern);

}
