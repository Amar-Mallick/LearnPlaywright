let score = [[10, 20], [30, 40]];
console.log(score[0][0]);//10
console.log(score[0][1]);//20
console.log(score[1][0]);//30
console.log(score[1][1]);//40

let grid = [[100, 200, 110], [300, 400, 330], [500, 600, 550]];
console.log(grid[0][2]);//110
console.log(grid[2][2]);//550
//check length of 2D Array......
console.log(grid.length);//rows=3
console.log(grid[0].length);//columns=3

//Acess value using Forloop().........
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
    console.log();
}
//Acess value using Forofloop().........
for (const row of grid) {

    for (const column of row) {
        console.log(column);
    }
    console.log();

}