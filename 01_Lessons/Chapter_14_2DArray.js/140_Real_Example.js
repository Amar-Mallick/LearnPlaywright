let testMatrix = [["Login", "pass", 200],
["CheckOut", "fail", 404],
["Search", "pass", 180]];
for (let i = 0; i < testMatrix.length; i++) {
    let ele = "";
    for (let j = 0; j < testMatrix[i].length; j++) {

        ele += testMatrix[i][j] + " ";
    }
    console.log(ele);
}
//verify Login test available or not....
let LoginFound = false;
for (const ro of testMatrix) {
    for (const clmn of ro) {
        if (clmn === "Login") {
            LoginFound = true;
            break; // Stop looking in this row, we found it!
        }
    }
}
if (LoginFound) {
    console.log("Login available");
} else {
    console.log("Login not available");
}