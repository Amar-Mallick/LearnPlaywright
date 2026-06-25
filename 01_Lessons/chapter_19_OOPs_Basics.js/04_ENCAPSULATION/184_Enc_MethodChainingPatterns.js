class  Counter{
    constructor(){
        this.count=0;
    };
    increment(){
       this.count++;
       return this;
    };
    display(){
console.log("Count : ", this.count);
return this;

    };
}
const c1=new Counter();
c1.increment().increment().display();//Count :  2