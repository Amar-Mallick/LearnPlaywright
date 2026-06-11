function calculate(a, b, nextValue) {
    return nextValue(a + b);// Returns whatever the callback produces
}
// Capture the final output into a variable named 'finalMessage'
let finalMessage = calculate(30, 20, (sum) => {
    console.log(sum);
    return "Calculation is successful!";
});
console.log(finalMessage);
