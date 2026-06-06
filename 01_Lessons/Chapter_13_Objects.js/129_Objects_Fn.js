const calculator = {
    value: 0,
    add(n) {
        this.value += n; // Adds n to the current value
        return this.value;
    },
    substract(n) {
        this.value -= n; // Subtracts n from the current value
        return this.value;
    }

};
console.log(calculator.add(10));//10
console.log(calculator.substract(5));//5
console.log(calculator.value);//5


