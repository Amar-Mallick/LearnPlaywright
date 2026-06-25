class Parent{
 pname="Rohit";
 callFn(){
    console.log("It's a Parent  class method");
    };
}
class Child extends Parent{
    childname="Trisha";
callFn(){
    console.log("It's a child  class method");
    };
}
const ch=new Child();
//If both methods of (parent & child) are same which class objec we create it will be return be we call that methods.
ch.callFn();//It's a child  class method