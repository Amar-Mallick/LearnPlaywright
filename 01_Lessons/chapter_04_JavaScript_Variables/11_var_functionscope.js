var v = 15;//Global Scope
function print() {
    var v = 20;
    console.log("Inside the function value of v:" + v);
    if (true) {
        var v = 50;
        console.log("If block value of v :" + v);
    }
}
print();
console.log("Global value of v :" + v);