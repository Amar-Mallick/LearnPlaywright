interface Calculator {
    add(a: number, b: number): number;
    substract(a: number, b: number): number;
    multiply(a: number, b: number): number;
}
const calc: Calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b
}
console.log(calc.add(5, 7));//12
console.log(calc.substract(10, 5));//5
console.log(calc.multiply(10, 5));//50


