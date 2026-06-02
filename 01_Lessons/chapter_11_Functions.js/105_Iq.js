function runTest(test, status, duration) {
    return `${test} and ${status} and ${duration}`;
}
const testResult = runTest;
console.log(testResult("LogIn Test", "Pass", "2000"));
//output:-LogIn Test and Pass and 2000