//1)Using Nested For loop.............
function printReversePyramidPatterns(row) {

    for (let i = row; i > 0; i--) {
        let p = "";
        // 1. Standard space loop: adds exactly 1 space per row drop
        for (let j = 0; j < row - i; j++) {
            p += " ";
        };
        // 2. Star loop: prints 5, then 3, then 1 star
        for (let k = 0; k < (2 * i) - 1; k++) {
            p += "*";
        };
        console.log(p);

    };
};
printReversePyramidPatterns(5);
//2)Using built-in method........
function revPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let space = " ".repeat(rows - i);
        let star = "*".repeat(2 * i - 1);
        console.log(space + star);

    };
}
revPyramid(3);