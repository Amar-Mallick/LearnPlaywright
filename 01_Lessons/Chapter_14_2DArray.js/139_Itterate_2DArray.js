//grid:->same row and same columns in a Array.
let grid = [[10, 20, 30],
[40, 50, 60],
[70, 80, 90]];
//1)Access all elements using for loop........
for (let i = 0; i < grid.length; i++) {
    let rowString = "";
    for (let j = 0; j < grid[0].length; j++) {
        rowString += grid[i][j] + " ";
    }
    console.log(rowString);
}

//2)Access all elements using for of loop........
for (const row of grid) {
    for (const column of row) {
        // process.stdout.write()->nodejs.function
        process.stdout.write(column + " ");
    }
    console.log();
}
//3)Using For each loop.......
grid.forEach(row => {

    row.forEach(column =>
        // process.stdout.write()->nodejs.function
        process.stdout.write(column + " "));
    console.log();
});