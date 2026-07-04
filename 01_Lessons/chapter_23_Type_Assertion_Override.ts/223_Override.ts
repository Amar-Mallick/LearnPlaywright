class baseTest {
    setUP(): void {
        console.log("BaseTest Method-> Open the Browser ");
    }
    tearDown(): void {
        console.log("BaseTest Method-> Close the  Browser ");
    }
}
class loginTest extends baseTest {
    override setUP(): void {
        console.log("LogIn Test Method-> Open the Browser ");
    }
    override tearDown(): void {
        console.log("LogIn Test Method-> Close the  Browser ");
    }
}
const test = new loginTest();
test.setUP();//LogIn Test Method-> Open the Browser 
test.tearDown();//LogIn Test Method-> Close the  Browser 