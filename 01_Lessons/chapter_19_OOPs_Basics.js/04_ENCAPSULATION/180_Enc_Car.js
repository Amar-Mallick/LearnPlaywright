class Car {
    #engine;
    constructor(carname,engine) {
        this.cname=carname;
        this.#engine=engine;
    }
    setEngine(enginename){
        this.#engine=enginename;
        
    };
    getEngine(){
        return    this.#engine;
    };
}
const car1=new Car("Tesla","V8");
console.log(car1.cname);//Tesla
//console.log(car1.#engine);//can not acess it outside the calss directly.
console.log(car1.getEngine());//V8

const car2=new Car();
car2.setEngine("V6");
console.log(car2.getEngine());//V6



