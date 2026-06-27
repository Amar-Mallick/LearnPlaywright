//Interface optional(?) properties :->you can add it or not ,It's ok.
interface TestCase {
    id: number,
    name: string,
    status: string,
    duration?: number//(?) use for mention it optional
}
let Test1: TestCase = {
    id: 10,
    name: "LogIn Test",
    status: "Pass"
}
console.log(Test1);//{ id: 10, name: 'LogIn Test', status: 'Pass' }
let Test2: TestCase = {
    id: 3,
    name: "Add To Cart Test",
    status: "Fail",
    duration: 2.53
}
console.log(Test2);//{ id: 3, name: 'Add To Cart Test', status: 'Fail', duration: 2.53 }