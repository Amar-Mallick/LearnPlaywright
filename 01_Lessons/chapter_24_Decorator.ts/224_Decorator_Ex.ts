/** Decorators are a special syntax (using the @ symbol) placed right above a class, method, or property to modify or extend its behavior without changing the actual code inside it. */
// 1. This is the Decorator Factory function definition
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // We overwrite the method at runtime to inject our logs
    descriptor.value = function (...args: any[]) {
        console.log(`Call: ${methodName} with args:`, args); // Custom behavior injected
        return originalMethod.apply(this, args); // Run the actual original method
    };
}

// 2. Applying the decorator in your class Calculator...
class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(5, 7));//Call: add with args: [ 5, 7 ]
//12
