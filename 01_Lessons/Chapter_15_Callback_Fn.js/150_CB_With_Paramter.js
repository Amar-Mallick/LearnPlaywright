function test(testName, callback) {
    let status = "Pass";
    callback(testName, status);
};
test("LoginTest", function (name, result) {
    console.log(name + " -> " + result);
});//LoginTest -> Pass