/*In JS, this keyword does not point to the blueprints (the class).
  Instead, it points to the specific object instance created by that class.*/
  
//Set and Get values of Attributes and methods without using parametrs...
class Car{
    setDataOfCar(){
       this. brand="TATA";
       this. model="Tiago";
       this. cost="5Lakhs";
    };
    getDataOfCar(){
        console.log(this.brand,this.model,this.cost);
        
    };
}
let car1=new Car();
car1.setDataOfCar();
car1.getDataOfCar();//TATA Tiago 5Lakhs

//Set and Get values of Attributes and methods with using parametrs...
class Student{
    setDataOfStudent(course,batch,id){
        //Ex:-> class properties is (this. course) and parameter name (course) both same name have no issues.
       this. course=course;//use same variable name as class and local variable
       this. batch=batch;
       this. sid=id;//Also use different variable name as class and local variable
    };
    getDataOfStudent(){
        console.log(this.course,this.batch,this.sid);
        
    };
}
let stu1=new Student();
stu1.setDataOfStudent("Playwright","Playwright2X",5);
stu1.getDataOfStudent();//Playwright Playwright2X 5
