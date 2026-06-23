class calculator {
    constructor(value1,value2) {
        this.value1=value1;
        this.value2=value2;
    }
    add(value1,value2){
        return (this.value1+this.value2);
    }
     substract(value1,value2){
return (this.value1-this.value2);
    };
   
     multiple(value1,value2){
return (this.value1*this.value2);
    };
     div(value1,value2){
return (this.value1/this.value2);
    };
     modul(value1,value2){
return (this.value1%this.value2);
    };
}
const calc=new calculator(30,20);
console.log("After add value is :  "+calc.add());//50
console.log("After substraction value is :  "+calc.substract());//10
console.log("After multipication value is : "+calc.multiple());//600
console.log("After divison value is : "+ calc.div());//1.5
console.log("After modules value is : "+ calc.modul());//10


