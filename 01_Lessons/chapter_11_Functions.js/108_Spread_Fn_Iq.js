function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3];
const value = add(...num);
console.log(value);//6