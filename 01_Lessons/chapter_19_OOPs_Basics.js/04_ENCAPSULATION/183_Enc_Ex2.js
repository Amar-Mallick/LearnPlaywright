class LoginTest{
    #username;
    #userpassword;
     url;
    constructor(url){
        this.url=url;
    };
    setValue(username,userpwd){
        this.#username=username;
        this.#userpassword=userpwd;
    };
    getvalue(){
        return `Username :${this.#username} and User Password : ${this.#userpassword}`;
         };
}
const test=new LoginTest("https://www.amarqa.com");
console.log(test.url);//https://www.amarqa.com
test.setValue("Amar","12345");
console.log(test.getvalue());//Username :Amar and User Password : 12345
test.url="https://www.sdetqa.com";
console.log(test.url);//https://www.sdetqa.com(Direct can change url value using object)
//console.log(test.#username="Santosh" );//Syntax error