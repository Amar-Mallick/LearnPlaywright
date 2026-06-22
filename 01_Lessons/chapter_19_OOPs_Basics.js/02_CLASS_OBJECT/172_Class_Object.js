/**Class:-> 1)It's a logical entity like blueprint of a building
 * 2)In a class we can keep CAB(Constructor,Attributes,Bheaviours).
 * 3)we can create one constructors for each class.
 * Object:-> It's a physical entity like physical building.
 * Method():-> A function inside a class is known as methods ,not required write function keyword.
 * Fuction():->outside the class and need to mention as Function.
 * Every method we can say a functions but every functions are not methods.
 */
class car {
    constructor(model,price,colour) {
        this.model=model;
        this.price=price;
        this.colour=colour;
    }
    checkCar(){
        console.log(this.model,"->",this.price,"->",this.colour);
        }
}
//Create objects for class.....
//Here car is class ,Honda is object reference & new honda is object.
const Honda= new car("i10","10Lakhs","Red");
Honda.checkCar();