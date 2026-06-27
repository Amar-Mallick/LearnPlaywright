//readonly :-> after once assign value in prop.Then Cannot assign new value, because it is a read-only property.
interface Test {
    id: number,
    name: string,
    readonly status: string,
    duration?: number//(?) use for mention it optional
}
let Test1: Test = {
    id: 10,
    name: "LogIn Test",
    status: "Pass"
}
console.log(Test1);//{ id: 10, name: 'LogIn Test', status: 'Pass' }
Test1.id = 7//change id value
console.log(Test1.id);//7

//Test1.status="Fail";//Cannot assign to 'status' because it is a read-only property.
