function Before(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any, ...args: any) {
        console.log("Execute it 1st");
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
function Before2(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any, ...args: any) {
        console.log("Execute it after before Function");
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class Student {
    @Before
    @Before2
    callStudent(sname: string) {
        return sname;
    }
}

const st = new Student().callStudent("Amar")
console.log(st);//output->
// Execute it 1st
// Execute it after before Function
// Amar