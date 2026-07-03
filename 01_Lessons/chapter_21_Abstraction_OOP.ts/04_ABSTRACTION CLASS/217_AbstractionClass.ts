/**
 * ABSTRACTION CLASS:->a blueprint class that cannot be directly instantiated and exists solely to define common properties and methods for other classes to inherit and implement.
 */
abstract class BaseTest {
    protected testName: string;
    constructor(tname: string) {
        this.testName = tname;
    }
    abstract setUp(): void;//Abstract method
    abstract tearDown(): void;//Abstract method
    //run()->normal method 
    run(): void {
        console.log(`Starting execution for: ${this.testName}`);
    };
}
class uiTest extends BaseTest {
    setUp(): void {
        console.log("open the  browser and Url");
    }
    tearDown(): void {
        console.log("Close the browser");
    }

    get testNameValue(): string {
        return this.testName;
    }


}
const test1 = new uiTest("LogIn Test");
console.log(test1.testNameValue);//LogIn Test
test1.run();//Starting execution for: LogIn Test
test1.setUp();//open the  browser and Url
test1.tearDown();//Close the browser
