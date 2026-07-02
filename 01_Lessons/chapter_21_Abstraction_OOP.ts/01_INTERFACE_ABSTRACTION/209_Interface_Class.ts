interface Base {
    name: string;
    run(): void;
    getStatus(): string;
}
class LogInTest implements Base {
    name: string;
    constructor(tname: string) {
        this.name = tname;
    }
    run(): void {
        console.log("Run " + this.name);
    }
    getStatus(): string {
        return "Pass";
    }
}
const Test1: Base = new LogInTest("VerifyLogIn ");
Test1.run();//Run VerifyLogIn 
console.log(Test1.getStatus());//Pass

