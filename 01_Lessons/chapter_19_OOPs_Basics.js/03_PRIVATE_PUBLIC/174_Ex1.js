/**1)In Js only 2 types of access modifier -> private,public.
2)use # for declaring private.
Public Modifier: Anyone can see it. Properties and methods are accessible from anywhere—both inside and outside the class.
Private Modifier: Only the class itself can see it. Properties and methods are hidden and can only be accessed from inside that specific class */
class student {
    #sid;
    sname;
    constructor(name,id) {
        this.sname=name;
        this.#sid=id;
    }
    callStudent(){
        console.log(this.sname,this.#sid);
       
        };
}


const s1=new student("Amar",5);
s1.callStudent();//Amar 5
console.log(s1.sname);//Amar
//console.log(s1.#sid);Output:->SyntaxError: Private field '#sid' must be declared in an enclosing class


