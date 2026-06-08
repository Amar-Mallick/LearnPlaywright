let scores = [[10, 20, 30],
[40, 50, 60],
[70, 80, 90]];
let scoreRow = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(scoreRow);//[ 60, 150, 240 ]

