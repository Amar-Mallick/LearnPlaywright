// ============================================================
// ALL NUMBER TYPES & LITERALS IN JAVASCRIPT
// ============================================================
// JavaScript has ONE number type for everything (IEEE 754
// double-precision 64-bit floating point) + BigInt for
// arbitrarily large integers.
// ============================================================

// -----------------------------------------------------------
// 1. INTEGER LITERALS (Decimal)
// -----------------------------------------------------------

const positive = 42;
const negative = -7;
const zero = 0;

console.log('=== Integer (Decimal) ===');
console.log('positive:', positive);
console.log('negative:', negative);
console.log('zero:', zero);

// -----------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// -----------------------------------------------------------

const standard = 3.14;
const leadingDot = .5;        // same as 0.5
const trailingDot = 5.;       // same as 5 — avoid, confusing
const negativeFloat = -0.001;

console.log('\n=== Floating-Point ===');
console.log('standard:', standard);
console.log('.5:', leadingDot);
console.log('5.:', trailingDot);
console.log('negative float:', negativeFloat);

// -----------------------------------------------------------
// 3. SCIENTIFIC / EXPONENTIAL NOTATION  (e / E)
// -----------------------------------------------------------

const massOfElectron = 9.109e-31;   // 9.109 × 10⁻³¹
const speedOfLight = 3e8;           // 300,000,000
const bigNumber = 1.5E10;           // 15,000,000,000

console.log('\n=== Exponential (Scientific) Notation ===');
console.log('9.109e-31:', massOfElectron);
console.log('3e8:', speedOfLight);
console.log('1.5E10:', bigNumber);

// -----------------------------------------------------------
// 4. BINARY LITERALS  (0b / 0B) — ES6+
// -----------------------------------------------------------

const bin1 = 0b1010;        // 10
const bin2 = 0b11111111;    // 255
const bin3 = 0B0010;        // 2  (0B works too)

console.log('\n=== Binary (0b / 0B) ===');
console.log('0b1010:', bin1);
console.log('0b11111111:', bin2);
console.log('0B0010:', bin3);

// -----------------------------------------------------------
// 5. OCTAL LITERALS  (0o / 0O) — ES6+
// -----------------------------------------------------------

const oct1 = 0o10;       // 8
const oct2 = 0o755;      // 493
const oct3 = 0O77;       // 63 (0O works too)

console.log('\n=== Octal (0o / 0O) ===');
console.log('0o10:', oct1);
console.log('0o755:', oct2);
console.log('0O77:', oct3);

// -----------------------------------------------------------
// 6. HEXADECIMAL LITERALS  (0x / 0X)
// -----------------------------------------------------------

const hex1 = 0xFF;        // 255
const hex2 = 0x1A3;       // 419
const hex3 = 0XCAFE;      // 51966 (0X works too)
const hex4 = 0xDEAD_BEEF; // 3735928559 (numeric separator)

console.log('\n=== Hexadecimal (0x / 0X) ===');
console.log('0xFF:', hex1);
console.log('0x1A3:', hex2);
console.log('0XCAFE:', hex3);
console.log('0xDEAD_BEEF:', hex4);

// -----------------------------------------------------------
// 7. BigInt LITERALS  (n suffix) — ES2020+
// -----------------------------------------------------------

const bigInt1 = 9007199254740991n;       // beyond Number.MAX_SAFE_INTEGER
const bigInt2 = 0xFFn;                   // 255n
const bigInt3 = 0b1010n;                // 10n
const bigInt4 = 0o77n;                  // 63n
const bigInt5 = 1_000_000_000_000_000n; // separators work too

console.log('\n=== BigInt (n suffix) ===');
console.log('9007199254740991n:', bigInt1);
console.log('0xFFn:', bigInt2);
console.log('0b1010n:', bigInt3);
console.log('0o77n:', bigInt4);
console.log('1_000_000_000_000_000n:', bigInt5);

// -----------------------------------------------------------
// 8. NUMERIC SEPARATORS  (_) — ES2021+
// -----------------------------------------------------------

const readableMillion = 1_000_000;
const readableBinary = 0b1111_0000;
const readableHex = 0xFF_EC_DE_5E;
const readableBigInt = 9_007_199_254_740_991n;
const readableScientific = 1_234.567_89;

console.log('\n=== Numeric Separators (_) for Readability ===');
console.log('1_000_000:', readableMillion);
console.log('0b1111_0000:', readableBinary);
console.log('0xFF_EC_DE_5E:', readableHex);
console.log('9_007_199_254_740_991n:', readableBigInt);
console.log('1_234.567_89:', readableScientific);

// -----------------------------------------------------------
// 9. SPECIAL NUMBER "LITERALS" (Global Properties)
// -----------------------------------------------------------

console.log('\n=== Special Number Values ===');

// Infinity
const inf = Infinity;
const negInf = -Infinity;

// NaN (Not a Number) — typeof is 'number'!
const notANumber = NaN;

console.log('Infinity:', inf);
console.log('-Infinity:', negInf);
console.log('NaN:', notANumber);

// How they arise:
console.log('1/0:', 1 / 0);           // Infinity
console.log('-1/0:', -1 / 0);         // -Infinity
console.log('0/0:', 0 / 0);           // NaN
console.log('Math.sqrt(-1):', Math.sqrt(-1)); // NaN
console.log('parseInt("abc"):', parseInt('abc')); // NaN

// -----------------------------------------------------------
// 10. Number SAFE INTEGER BOUNDARIES
// -----------------------------------------------------------

console.log('\n=== Number Boundaries ===');
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER); // 2⁵³ - 1
console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER); // -(2⁵³ - 1)
console.log('Number.MAX_VALUE:', Number.MAX_VALUE);
console.log('Number.MIN_VALUE:', Number.MIN_VALUE);  // smallest positive
console.log('Number.EPSILON:', Number.EPSILON);      // 2⁻⁵²

// -----------------------------------------------------------
// DEMONSTRATING NUMBER TYPE BEHAVIORS
// -----------------------------------------------------------

console.log('\n=== Type Checks ===');
console.log('typeof 42:', typeof 42);             // 'number'
console.log('typeof 3.14:', typeof 3.14);         // 'number'
console.log('typeof NaN:', typeof NaN);           // 'number' 😱
console.log('typeof Infinity:', typeof Infinity); // 'number'
console.log('typeof 42n:', typeof 42n);           // 'bigint'
console.log('typeof 0xFF:', typeof 0xFF);         // 'number'

// -----------------------------------------------------------
// CONVERTING BETWEEN STRING AND NUMBER LITERALS
// -----------------------------------------------------------

console.log('\n=== Conversions ===');

// String → Number
console.log('Number("42"):', Number('42'));         // 42
console.log('+"3.14":', +'3.14');                   // 3.14
console.log('parseInt("0xFF"):', parseInt('0xFF')); // 255
console.log('parseFloat("3.14"):', parseFloat('3.14')); // 3.14

// Number → String
console.log('(42).toString():', (42).toString());   // '42'
console.log('String(0xFF):', String(0xFF));         // '255'
console.log('(255).toString(16):', (255).toString(16)); // 'ff'

// -----------------------------------------------------------
// COMMON MISTAKES WITH NUMBER LITERALS
// -----------------------------------------------------------

console.log('\n=== COMMON MISTAKES ===');

// MISTAKE #1: Octal legacy (strict mode forbids it)
console.log('\n--- Mistake #1: Legacy octal (010) ---');
// "use strict";
// const legacy = 010;  // SyntaxError in strict mode!
// In non-strict: 010 === 8 (legacy octal)
// FIX: Always use 0o prefix
const safeOctal = 0o10; // 8
console.log('0o10 (correct):', safeOctal);

// MISTAKE #2: Floating-point is NOT exact
console.log('\n--- Mistake #2: Floating-point precision ---');
console.log('0.1 + 0.2:', 0.1 + 0.2); // 0.30000000000000004
console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3); // false
// FIX: use toFixed or epsilon comparison
const sum = (0.1 + 0.2).toFixed(1);
console.log('toFixed(1):', sum); // '0.3'

// MISTAKE #3: NaN is NOT equal to itself
console.log('\n--- Mistake #3: NaN !== NaN ---');
console.log('NaN === NaN:', NaN === NaN); // false!
console.log('NaN == NaN:', NaN == NaN);   // false
// FIX: use Number.isNaN()
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // true
console.log('Number.isNaN("abc"):', Number.isNaN('abc')); // true (coercion)
console.log('Number.isNaN("abc"):', Number.isNaN('abc')); // true
// But:
console.log('isNaN("abc"):', isNaN('abc'));      // true — coerces first
console.log('Number.isNaN("abc"):', Number.isNaN('abc')); // false — no coercion

// MISTAKE #4: parseInt without radix
console.log('\n--- Mistake #4: parseInt radix ---');
console.log('parseInt("010"):', parseInt('010'));   // 10 (ES5+) or 8 (older)
console.log('parseInt("0xFF"):', parseInt('0xFF')); // 255 (hex detection)
// FIX: always pass the radix
console.log('parseInt("010", 10):', parseInt('010', 10)); // 10
console.log('parseInt("010", 8):', parseInt('010', 8));   // 8

// MISTAKE #5: Bitwise ops truncate to 32-bit
console.log('\n--- Mistake #5: Bitwise truncation ---');
const large = 0xFFFFFFFFF; // 68719476735 (36 bits)
console.log('large | 0:', large | 0);  // -1 (truncated to 32 bits!)
console.log('large:', large);           // no truncation

// MISTAKE #6: Too many decimals / invalid positions
console.log('\n--- Mistake #6: Misplaced dot ---');
// Valid confusion:
console.log('1.toString():', 1..toString()); // need TWO dots
// 1.toString()  → SyntaxError!
// (1).toString() → '1' (works)

// MISTAKE #7: BigInt + Number type mixing
console.log('\n--- Mistake #7: BigInt + Number ---');
const b1 = 10n;
const b2 = 20n;
console.log('b1 + b2:', b1 + b2); // 30n
// console.log(b1 + 5); // TypeError!
console.log('b1 + BigInt(5):', b1 + BigInt(5)); // 15n

// MISTAKE #8: Separator placement rules
console.log('\n--- Mistake #8: Separator rules ---');
// Valid:
console.log('1_000:', 1_000);
// Invalid (will cause SyntaxError):
// console.log(1_);     // can't end with _
// console.log(_1);     // can't start with _
// console.log(1__0);   // no consecutive _
// console.log(0x_FF);  // not after 0x
// console.log(1_.0);   // not before decimal point

// -----------------------------------------------------------
// MINI QUICK REFERENCE TABLE
// -----------------------------------------------------------
//
//  Notation       | Prefix    | Digits       | Example
//  ---------------|-----------|--------------|---------
//  Decimal        | (none)    | 0-9          | 42
//  Binary         | 0b / 0B   | 0-1          | 0b1010
//  Octal          | 0o / 0O   | 0-7          | 0o755
//  Hexadecimal    | 0x / 0X   | 0-F          | 0xFF
//  BigInt         | (any) + n | any          | 42n
//  Exponential    | e / E     | 0-9 + sign   | 3e8
//  Separators     | _ inside  | N/A          | 1_000
//  Floating-point | .         | 0-9          | 3.14
// -----------------------------------------------------------
