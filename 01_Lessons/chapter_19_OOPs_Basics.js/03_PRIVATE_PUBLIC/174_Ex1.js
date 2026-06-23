/**1)In Js only 2 types of access modifier -> private,public.
2)use # for declaring private. */
class student {
    #id=3;
    
    constructor(name,idnumber) {
        this.name=name;
        this.#id=idnumber
    }
    callStudent(){
        console.log(this.name);
        console.log(this.#id);
        };
}


const s1=new student("Amar",5);
s1.callStudent();
