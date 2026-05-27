/*Confusing == vs === cases in JavaScript
== (loose equality) coerces types before comparing
=== (strict equality) checks value AND type without coercion*/
console.log('--- == vs === with different types ---');
console.log(0 == false);      // true  (false coerces to 0)
console.log(0 === false);     // false
console.log('' == false);     // true  (both coerce to 0)
console.log('' === false);    // false
console.log(null == undefined);  // true  (special rule)
console.log(null === undefined); // false
console.log('1' == true);     // true  (true coerces to 1)
console.log('1' === true);    // false
console.log([1, 2] == '1,2');   // true  (array toString)
console.log([1, 2] === '1,2');  // false
console.log('' == 0);         // true  (empty string -> 0)
console.log('' === 0);        // false
console.log(' ' == 0);        // true  (whitespace -> 0)
console.log(' ' === 0);       // false
console.log('\n' == 0);       // true  (newline -> 0)
console.log('\n' === 0);      // false
console.log('0' == false);    // true  ('0' -> 0, false -> 0)
console.log('0' === false);   // false

console.log('\n--- Edge cases with objects ---');
console.log([] == false);     // true  ([] -> '' -> 0, false -> 0)
console.log([] === false);    // false
console.log([] == ![]);       // true  ([] -> '' -> 0, ![] -> false -> 0)
console.log([] === ![]);      // false
console.log({} == '[object Object]');  // true
console.log({} === '[object Object]'); // false
console.log([null] == '');    // true  ([null].toString() -> '')
console.log([null] === '');   // false
console.log([undefined] == ''); // true
console.log([undefined] === ''); // false

console.log('\n--- NaN (never equal to itself) ---');
console.log(NaN == NaN);      // false
console.log(NaN === NaN);     // false
console.log(NaN == 0 / 0);      // false
console.log(NaN === 0 / 0);     // false

console.log('\n--- +0 === -0 ---');
console.log(+0 == -0);        // true
console.log(+0 === -0);       // true (only exception where === considers -0 equal)
console.log(Object.is(+0, -0)); // false (Object.is detects -0)
