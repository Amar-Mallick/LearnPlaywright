/*In JS, this keyword does not point to the blueprints (the class).
  Instead, it points to the specific object instance created by that class.*/

  class Student{
    constructor(course,batch,id){
        //use same variable name as class and parameter of constructor
         this. course=course;
        this. batch=batch;
       this. sid=id;//Also can  use different variable name as class and parameter of constructor
    };
    getDataOfStudent(){
        console.log(this.course,this.batch,this.sid);
        
    };
}
//When create an object of class bydefault constuctor will be invoked.
//In JS only single constructor can be create.
let stu2=new Student("AI","AI2X",15);
stu2.getDataOfStudent();//AI AI2X 15

let stu3=new Student("Selenium","Batch3X",7);
stu3.getDataOfStudent();//Selenium Batch3X 7