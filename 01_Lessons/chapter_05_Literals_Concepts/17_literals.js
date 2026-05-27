// ============================================================
// JAVASCRIPT LITERALS — A Comprehensive SDET Guide
// ============================================================
// A literal is a fixed value written directly in source code.
// It is NOT a variable — it IS the value itself.
// ============================================================

// -----------------------------------------------------------
// 1. NUMERIC LITERALS
// -----------------------------------------------------------

// Integer (decimal)
const age = 30;
console.log('Integer (decimal):', age);

// Floating-point
const price = 19.99;
console.log('Floating-point:', price);

// Scientific (exponential) notation
const avogadro = 6.022e23;
console.log('Exponential:', avogadro);

// Binary (0b / 0B) — ES6+
const flags = 0b1010; // 10 in decimal
console.log('Binary 0b1010:', flags);

// Octal (0o / 0O) — ES6+
const permissions = 0o755; // 493 in decimal
console.log('Octal 0o755:', permissions);

// Hexadecimal (0x / 0X)
const color = 0xff5733; // 16737843 in decimal
console.log('Hex 0xff5733:', color);

// BigInt (n suffix) — ES2020+
const big = 9007199254740991n;
console.log('BigInt:', big);

// Numeric separators (_) — ES2021+
const billion = 1_000_000_000;
console.log('With separator:', billion);

// -----------------------------------------------------------
// 2. STRING LITERALS
// -----------------------------------------------------------

// Single quotes
const single = 'Hello, World!';
console.log('Single-quoted:', single);

// Double quotes
const double = "Hello, World!";
console.log('Double-quoted:', double);

// Template literal (backtick) — ES6+
const name = 'Alice';
const template = `Hello, ${name}!`;
console.log('Template literal:', template);//Template literal: Hello, Alice!

// Multi-line string (template literal)
const multi = `Line 1
Line 2
Line 3`;
console.log('Multi-line:', multi);

// Escape sequences
const escaped = 'She said, \"JavaScript is fun!\"';
console.log('Escaped:', escaped);

const unicode = '\u00A9'; // ©
console.log('Unicode escape:', unicode);

// -----------------------------------------------------------
// 3. BOOLEAN LITERALS
// -----------------------------------------------------------

const isEnabled = true;
const isDisabled = false;

console.log('Boolean true:', isEnabled);
console.log('Boolean false:', isDisabled);

// -----------------------------------------------------------
// 4. OBJECT LITERALS
// -----------------------------------------------------------

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet() {
        return `Hi, I'm ${this.firstName}`;
    }
};

console.log('Object literal:', person);
console.log('Object method call:', person.greet());

// Computed property keys (ES6+)
const dynamicKey = 'score';
const player = {
    name: 'Alice',
    [dynamicKey]: 100
};
console.log('Computed property key:', player);

// Shorthand property names (ES6+)
const x = 10, y = 20;
const point = { x, y };
console.log('Shorthand properties:', point);

// -----------------------------------------------------------
// 5. ARRAY LITERALS
// -----------------------------------------------------------

const fruits = ['apple', 'banana', 'cherry'];
console.log('Array literal:', fruits);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Nested array:', matrix);

// Sparse array (holes — avoid these)
const sparse = [1, , 3];
console.log('Sparse array:', sparse); // [ 1, <1 empty item>, 3 ]

// -----------------------------------------------------------
// 6. REGEXP LITERALS
// -----------------------------------------------------------

const regex = /hello/i; // case-insensitive
console.log('RegExp test:', regex.test('Hello World'));

const digits = /\d+/g;
const result = 'Order 42 items for $99'.match(digits);
console.log('RegExp match:', result);

// -----------------------------------------------------------
// 7. FUNCTION LITERALS
// -----------------------------------------------------------

// Function declaration (hoisted)
function add(a, b) {
    return a + b;
}
console.log('Function declaration:', add(2, 3));

// Function expression (not hoisted)
const multiply = function (a, b) {
    return a * b;
};
console.log('Function expression:', multiply(4, 5));

// Arrow function (ES6+)
const subtract = (a, b) => a - b;
console.log('Arrow function:', subtract(10, 3));

// -----------------------------------------------------------
// 8. null LITERAL
// -----------------------------------------------------------

const empty = null;
console.log('null:', empty);
console.log('typeof null:', typeof null); // 'object' (legacy bug!)

// -----------------------------------------------------------
// 9. undefined (global value, NOT a literal)
// -----------------------------------------------------------

let undeclared;
console.log('undefined:', undeclared);

// -----------------------------------------------------------
// 10. BIGINT LITERALS (ES2020+)
// -----------------------------------------------------------

const big1 = 123456789012345678901234567890n;
const big2 = BigInt('9999999999999999');
console.log('BigInt arithmetic:', big1 + big2);

// -----------------------------------------------------------
// COMMON MISTAKES BEGINNERS MAKE
// -----------------------------------------------------------

// MISTAKE #1: Floating-point precision
console.log('\n--- MISTAKE #1: Floating-point precision ---');
console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3); // false!
console.log('Actual sum:', 0.1 + 0.2);
// FIX: Use a tolerance
const epsilon = 0.0001;
console.log('Fixed:', Math.abs(0.1 + 0.2 - 0.3) < epsilon);

// MISTAKE #2: Object literal reference vs value
console.log('\n--- MISTAKE #2: Object reference equality ---');
const a = { value: 1 };
const b = { value: 1 };
console.log('a === b:', a === b); // false (different references)
console.log('a.value === b.value:', a.value === b.value); // true

// MISTAKE #3: Using == instead of ===
console.log('\n--- MISTAKE #3: Loose equality (==) ---');
console.log("'' == false:", '' == false);   // true — coercion!
console.log("'' === false:", '' === false); // false — correct
console.log("0 == '0':", 0 == '0');         // true
console.log("0 === '0':", 0 === '0');       // false

// MISTAKE #4: Confusing null and undefined
console.log('\n--- MISTAKE #4: null vs undefined ---');
console.log('null == undefined:', null == undefined);   // true (loose)
console.log('null === undefined:', null === undefined); // false (strict)

// MISTAKE #5: Trailing commas in objects/arrays
console.log('\n--- MISTAKE #5: Trailing commas ---');
// Valid in ES5+ for arrays, ES2017+ for objects
const arr = [1, 2, 3,];  // fine, length is 3
console.log('Trailing comma array length:', arr.length); // 3
// DANGER: old IE throws errors

// MISTAKE #6: Not understanding octal literals
console.log('\n--- MISTAKE #6: Octal confusion ---');
// Legacy octal (strict mode forbids this)
// const legacy = 010; // SyntaxError in strict mode!
// ES6+ octal:
console.log('0o10:', 0o10); // 8
console.log('Number("0o10"):', Number('0o10')); // NaN

// MISTAKE #7: Semicolons & object literals
console.log('\n--- MISTAKE #7: Object literal in return ---');
function broken() {
    return        // ASI inserts ; here — oops!
    {
        value: 42
    };
}
console.log('Broken return:', broken()); // undefined

function fixed() {
    return {
        value: 42
    };
}
console.log('Fixed return:', fixed()); // { value: 42 }

// MISTAKE #8: new String() vs string literal
console.log('\n--- MISTAKE #8: String object vs literal ---');
const literal = 'hello';
const obj = new String('hello');
console.log('typeof literal:', typeof literal); // 'string'
console.log('typeof obj:', typeof obj);         // 'object'
console.log('literal === obj:', literal === obj);   // false
console.log('literal == obj:', literal == obj);     // true (coercion)

// MISTAKE #9: Template literal confusion
console.log('\n--- MISTAKE #9: Template literal gotchas ---');
const val = 42;
console.log('Works:', `Value is ${val}`);
// Forget backticks:
// console.log('Value is ${val}');  // prints literally — not interpolation!

// MISTAKE #10: BigInt cannot mix with Number
console.log('\n--- MISTAKE #10: BigInt + Number ---');
const bn = 10n;
// console.log(bn + 5);  // TypeError: Cannot mix BigInt and other types
console.log('bn + BigInt(5):', bn + BigInt(5)); // 15n

// ============================================================
// INTERVIEW-RELEVANT QUICK REFERENCE
// ============================================================
//
//  Literal Type         | Example(s)
//  ---------------------|--------------------------------------
//  Integer              | 42, -7, 0
//  Floating-point       | 3.14, .5, 1e3
//  Binary               | 0b1010
//  Octal                | 0o755
//  Hex                  | 0xFF
//  BigInt               | 9007199254740991n
//  String (single)      | 'hello'
//  String (double)      | "hello"
//  Template literal     | `hello ${name}`
//  Boolean              | true, false
//  Object               | { key: 'value' }
//  Array                | [1, 2, 3]
//  RegExp               | /pattern/flags
//  Function             | function(){} / () => {}
//  null                 | null
//  undefined            | undefined (not a literal, global value)
// ============================================================
