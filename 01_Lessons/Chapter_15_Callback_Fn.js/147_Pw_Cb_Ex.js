function test(testName, testResultFunction) {
    console.log(testName);
    testResultFunction();
}
function testResultFunction() {
    console.log("Test is Passed");
}
//1st way call using Fn name:->
test("Login", testResultFunction);
//Output line1->Login
//Output line2->Test is Passed

//2nd way call using Asynonimus Fn:->
test("LogOut", function () {
    console.log("Test is Failed");
});
//Output line1->LogOut
//Output line2->Test is Failed

//3rd way call using Arrow Fn:->
test("CheckOut", () => {
    console.log("Test is Running");
});
//Output line1->CheckOut
//Output line2->Test is Running