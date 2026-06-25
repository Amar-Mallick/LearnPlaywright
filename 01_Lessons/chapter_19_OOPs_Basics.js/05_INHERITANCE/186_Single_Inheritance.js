//Single Inheritance:-> One child class inherits from exactly one parent class.
class Parent{
 pname="Rohit";
 callParentFn(){
    console.log("It's a Parent  class method");
    };
}
class Child extends Parent{
    childname="Trisha";
callChildFn(){
    console.log("It's a child  class method");
    };
}
/*extend keyword is use to Inheritance.
Using extend we can access parent class data creating child class object.*/

const ch1=new Child();
console.log(ch1.childname);//Trisha
ch1.callChildFn();//It's a child  class method
ch1.callParentFn();//It's a Parent  class method
console.log(ch1.pname);//Rohit

