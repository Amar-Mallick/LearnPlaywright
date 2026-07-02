interface TestHook { (testname: string): void }
let beforeEachHook: TestHook = function (testName: string): void {
    console.log("Before Setting UP->  " + testName);
}
let afterEachHook: TestHook = function (testName: string): void {
    console.log("After Tearing Down-> " + testName);
}
beforeEachHook("Login Test");//Before Setting UP->  Login Test
interface Test {
    id: number;
    testName: string;
    status: string;
}
let test1: Test = {
    id: 12,
    testName: "LogIn With Valid Credentials",
    status: "Pass"
}
console.log("id-> " + test1.id, " testName-> " + test1.testName, "Status-> " + test1.status);
//output->id-> 12  testName-> LogIn With Valid Credentials Status-> Pass
afterEachHook("Login Test");//After Tearing Down-> Login Test