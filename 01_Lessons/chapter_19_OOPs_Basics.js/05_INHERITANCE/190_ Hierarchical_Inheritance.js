class  Father{
  aceessFHome(){
    console.log("it's Father's home");
    };  
}
class child1 extends Father{
aceessCh1Home(){
    console.log("it's Child-1's home");}
}

class child2 extends Father{
aceessCh2Home(){
    console.log("it's Child-2's home");}
}

//both child 1 & 2 can directly access their methods with fateher class methods . 
const c1= new child1();
c1.aceessFHome();//it's Father's home
c1.aceessCh1Home();//it's Child-1's home
//c1.aceessCh2Home();//can not acess child1 of child2 home 

const c2= new child2();
c2.aceessFHome();//it's Father's home
c2.aceessCh2Home();//it's Child-2's home