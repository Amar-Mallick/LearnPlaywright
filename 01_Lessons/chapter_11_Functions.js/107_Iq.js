function test(name) {
    console.log(`Running: ${name}`);
}
let t = test("LogIn");
console.log(t);//Running: LogIn//undefined
/*Due to value is not  return  from function .
If, assign the function in variable it return undefined*/