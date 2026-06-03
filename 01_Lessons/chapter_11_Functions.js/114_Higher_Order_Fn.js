/**Higher -Order -Function:- A function take another  function as a arguments or return a function*/
function runWithLogin(testFn, testname) {
    console.log(`Starting ${testname}`);
    let result = testFn();
    console.log(`Finished ${testname}->${result}`);

    return result;

}
function logInTest() {
    return "Pass";
}
function failedLoginTest() {
    return "Failed";
}
runWithLogin(logInTest, "Login Test");
runWithLogin(failedLoginTest, "Dashboard Fail Test");
