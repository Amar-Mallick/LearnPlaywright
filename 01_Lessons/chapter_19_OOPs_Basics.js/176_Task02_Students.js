class students {
    static batch= "playwright-2x";
    static mentor="Pramod Dutta";
    static c_duration="03 months";
    static c_mode="Online";
    constructor(s_name,s_age,s_location) {
        this.s_name=s_name;
        this.s_age=s_age;
        this.s_location=s_location;
    }
    static callAllStaticVarible(){
        console.log(this.batch+"-> "+this.mentor+"-> "+this.c_duration+"-> "+this.c_mode);
        };
    verifyStudent(){
        console.log(this.s_name,this.s_age,this.s_location);
        };
}
//calling static variables & methods usig only calss name .
console.log(students.mentor);//Pramod Dutta
console.log(students.batch);//playwright-2x

students.callAllStaticVarible();
//calling non- static variables & methods usig object name .
const s1=new students("Amrita",30,"Delhi");
console.log(s1.s_location);//Delhi
console.log(s1.s_name);//Amrita
s1.verifyStudent();
const s2=new students("Amar",31,"Hyderabad");
s2.verifyStudent();
const s3=new students("Archita",25,"Delhi");
s3.verifyStudent();
const s4=new students("Subrat",28,"Bhubaneswar");
s4.verifyStudent();
const s5=new students("Anshita",30,"Banglore");
s5.verifyStudent();
const s6=new students("Bikash",33,"Chennai");
s6.verifyStudent();
const s7=new students("Swaroop",36,"Pune");
s7.verifyStudent();
const s8=new students("Esha",30,"Delhi");
s8.verifyStudent();
const s9=new students("Pooja",28,"Mumbai");
s9.verifyStudent();
const s10=new students("Abhishek",32,"Bhopal");
s10.verifyStudent();
