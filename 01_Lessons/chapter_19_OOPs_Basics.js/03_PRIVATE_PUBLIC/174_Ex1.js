/**1)In Js only 2 types of access modifier -> private,public.
2)use # for declaring private. */
class student {
    #id=3;
    
    constructor(name) {
        this.name=name;
    }
    callStudent(){
        console.log(this.name);
        
         };
}


const s1=new student("Amar");
s1.callStudent();
