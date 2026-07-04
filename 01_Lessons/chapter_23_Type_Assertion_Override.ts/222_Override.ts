//override keyword is explicitly marks that a child method is intentionally  override parent method.
class Parent {
    home(): void {
        console.log("2BHK Home");
    }
}
class Child extends Parent {
    override  home(): void {
        console.log("3BHK Home");
    }
}
const c = new Child();
c.home();//3BHK Home
// If we create object of child class without override keyword also we can access child class method.