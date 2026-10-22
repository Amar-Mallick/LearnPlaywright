function reverseNumberMath(n) {
    //Math.abs() — Absolute Value : In mathematics, absolute value  measures distance from zero, effectively stripping away any negative sign.
    //Ex1:Math.abs(12345) -> 12345 , Ex2 :Math.abs(-12345) -> 12345
    let num = Math.abs(n);
    let reversed = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        //Math.floor() — Floor (Round Down to Nearest Integer)
        //Ex : Math.floor(1234.5)-> 1234
        num = Math.floor(num / 10);
    }
    //Math.sign() — Signum / Sign Function : It extracts the sign of a real number.
    //Ex-01 : Math.sign(12345)->1 and Ex-02 : Math.sign(-12345) -> -1
    return Math.sign(n) * reversed;
}
n = 12345;
console.log(reverseNumberMath(n));  // 54321
n = -321
console.log(reverseNumberMath(n));  // -123
