function buildEndPoint(base: string, path: string): string {
    return base + path;
}
console.log(buildEndPoint("https://www.vwo.com", "/users"));
//output:https://www.vwo.com/users

function logInTest(LogIn: string): void {
    console.log("LogInTest", LogIn);
}
logInTest("pass");//LogInTest pass