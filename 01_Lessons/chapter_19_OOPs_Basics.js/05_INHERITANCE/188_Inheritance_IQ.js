class Parent{
 pname="Rohit";
 callFn(){
    console.log("It's a Parent  class method");
    };
}
class Child extends Parent{
    cname="Trisha";
callFn(){
    //super- Keyword used to always refer parent class.
    super. callFn();//call parent class method.
    console.log("It's a child  class method");
    };
}
const ch=new Child();
 ch.callFn();
// It's a Parent  class method
// It's a child  class method

