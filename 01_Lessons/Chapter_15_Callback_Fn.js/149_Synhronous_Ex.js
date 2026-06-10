/**Synchronous Callbacks(Immediate Type):- A callback function that runs right away, one line after another, without waiting. The main function will not finish until this callback is done. */
let testResults = ["Pass", "Fail", "Skip", "Pass"];
testResults.forEach((result, index) => {
    console.log("Test " + index + " =>> " + result);
});
// Test 0 =>> Pass
// Test 1 =>> Fail
// Test 2 =>> Skip
// Test 3 =>> Pass
