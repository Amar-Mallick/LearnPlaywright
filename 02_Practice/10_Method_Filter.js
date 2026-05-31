//filter():->>returns all matching elements..
let grade = [2, 4, 6, 8];
//using arrow functions....
let gr = grade.filter(g => g > 5);
console.log(gr);//[ 6, 8 ]

//Ex-02:->> using name function key...
let prices = [100, 150, 200, 250, 300];
// 1. Define the named function
function lsExpensive(price) {
    return price > 190;
}
//2. Pass the function by name into filter
const luxuryprice = prices.filter(lsExpensive);
console.log(luxuryprice);//[ 200, 250, 300 ]
