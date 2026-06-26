class ReserveBank{
createAc(){
    console.log(" your Ac in RBI opened Successfully");
    };
}
class SbiBank extends ReserveBank {
 createAc(){
    console.log(" your Ac in SBI opened Successfully");
    };
}
const bank= new SbiBank();
bank.createAc();//your Ac in SBI opened Successfully
// Polymorphism means "many forms". It allows different classes to respond to the same method call in their own unique way.
// The Override: SbiBank changes the behavior of createAc() to specific SBI logic.
// The Result: The parent's original message is ignored, and the child's new message runs.