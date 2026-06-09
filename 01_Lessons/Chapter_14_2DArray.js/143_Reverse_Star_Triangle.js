let row = 5;
for (let i = row; i > 0; i--) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += "*";
    }
    console.log(pattern);

}
//using built-in Method.....
for (let i = 5; i > 0; i--) {
    console.log("*".repeat(i));
}