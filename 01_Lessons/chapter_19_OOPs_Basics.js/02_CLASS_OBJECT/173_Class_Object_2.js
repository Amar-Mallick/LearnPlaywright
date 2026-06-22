class test{
     
    constructor(testname){
       this.name=testname;
    }
    checkTest(){
        console.log(this.name);
         };
}
const TC_01=new test("Login Test");
TC_01.checkTest();