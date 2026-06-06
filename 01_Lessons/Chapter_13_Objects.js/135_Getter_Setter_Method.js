const user = {
    firstname: "Amar",
    lastname: "Mallick",
    get fullname() {
        return this.firstname + this.lastname
    },
    set fullname(value) {
        [this.firstname, this.lastname] = value.split(" ");
    }


}
console.log(user.fullname);//AmarMallick
user.fullname = "Ajoy Roy";
console.log(user.fullname);//AjoyRoy


