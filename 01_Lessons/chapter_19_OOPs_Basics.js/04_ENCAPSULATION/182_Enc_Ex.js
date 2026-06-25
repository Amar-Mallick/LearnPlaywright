class User {
    username;//Directly access using oblect
    #message;//Access only through  getGreetMessage() methods.
    constructor(name,msg) {
        this.username=name;
        this.#message=msg;
    }
    
    getGreetMessage(){
        return this.#message;
    };
}
const user1= new User("Amar","Welcome");
console.log(user1.username);//Amar
//console.log(user1.#message);//Not Accessable
console.log(user1.getGreetMessage());//Welcome

