function calculate(num1, operator, num2) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        //If,num2=0,It can not divide..
        case '/': return num2 === 0 ? 'can not divide with zero' : num1 / num2;
        default: return 'Invalid operator';

    }
}
console.log(calculate(10, '/', 0));
