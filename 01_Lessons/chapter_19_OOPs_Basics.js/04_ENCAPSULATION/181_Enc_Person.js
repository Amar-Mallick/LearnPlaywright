class Person{
    // 1. Private fields hide the sensitive child data from unauthorized external access
    #childname1;
    #childname2;
constructor(pname,ch1,ch2){
this.pname=pname;// Publicly accessible parent name
this.#childname1=ch1;
this.#childname2=ch2;
};
 // 2. Controlled Modification: Only allow updates if the requester matches the parent name
    setAccess(requesterName, ch1, ch2) {
        if (requesterName === this.pname) {
            this.#childname1 = ch1;
            this.#childname2 = ch2;
            console.log(`Success: ${this.pname} updated their children's names.`);
        } else {
            console.log(`Access Denied: "${requesterName}" is not the parent (${this.pname}).`);
        }
    }

    // 3. Controlled Reading: Only reveal the private data if the requester matches the parent name
    getAccess(requesterName) {
        if (requesterName === this.pname) {
            return `${this.#childname1} & ${this.#childname2}`;
        } else {
            return `Access Denied: "${requesterName}" is not authorized to view this data.`;
        }
   
}
}
const P1=new Person("Ashok","Sita","Gita");
console.log(P1.pname);//Ashok
//console.log(P1.#childname1);//Private field '#childname1' must be declared in an enclosing class

console.log(P1.getAccess("Ashok"));//Sita & Gita(Ashok act as paent show he can acess childrens name)
console.log(P1.getAccess("Subrat"));//Access Denied: "Subrat" is not authorized to view this data.
 P1.setAccess("Ashok","Ram","Hari");//Success: Ashok updated their children's names.
 console.log(P1.getAccess("Ashok"));//Ram & Hari
 P1.setAccess("Ajay","Rita","Rohit");//Access Denied: "Ajay" is not the parent (Ashok).




