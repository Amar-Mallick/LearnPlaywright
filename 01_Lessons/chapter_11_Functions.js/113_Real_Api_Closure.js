function reTryCheker(max) {
    let attempts = 0;
    function tryAgain(testname) {
        attempts++;
        if (attempts > max) {
            return ` ${testname}exceeded max retries ${max}`;
        }
        return ` ${testname}Attempt ${attempts} of ${max}`;
    }
    return tryAgain;
}
let retry = reTryCheker(2);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
