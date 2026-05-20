// ============================================================
// NULL, EMPTY & UNDEFINED in JavaScript
// ============================================================
// These three concepts are often confused by beginners.
// They mean very different things to the JS engine.
// ============================================================

// -----------------------------------------------------------
// 1. UNDEFINED
// -----------------------------------------------------------
// A variable that has been declared but NOT assigned a value.
// It is the default value of uninitialized variables, missing
// object properties, and function parameters not provided.
// NOTE: undefined is a global VALUE, NOT a literal.

let declaredButNotSet;
console.log('declaredButNotSet:', declaredButNotSet); // undefined

const obj = { name: 'Alice' };
console.log('Missing property:', obj.age); // undefined

function greet(name) {
  console.log('Parameter not passed:', name);
}
greet(); // undefined

// undefined is also returned when a function has no return
function noop() { }
console.log('No return value:', noop()); // undefined

// You can explicitly assign undefined (but usually avoid this)
let explicit = undefined;
console.log('Explicitly undefined:', explicit);

// -----------------------------------------------------------
// 2. NULL
// -----------------------------------------------------------
// null is an intentional absence of any object value.
// It is a literal. Use it when you want to explicitly say
// "this variable has no value" or "empty on purpose".

let selectedUser = null;   // nobody selected yet
console.log('selectedUser:', selectedUser);

function findUser(id) {
  // imagine a database lookup that finds nothing
  return null;
}
console.log('User not found:', findUser(42));

// Common use-case: resetting a reference
let cache = { data: 'cached' };
cache = null; // clear the cache
console.log('Cache cleared:', cache);

// -----------------------------------------------------------
// 3. EMPTY STRING ("")
// -----------------------------------------------------------
// An empty string is a valid string value with length 0.
// It is different from null and undefined — it IS a value.

const emptyStr = '';
console.log('Empty string:', emptyStr);
console.log('Length:', emptyStr.length); // 0
console.log('Type:', typeof emptyStr);   // 'string'
console.log('Is falsy:', !emptyStr);     // true

// Common real-world example
function validateInput(value) {
  if (value === '') {
    return 'Input cannot be empty';
  }
  return 'Valid';
}
console.log(validateInput(''));     // Input cannot be empty
console.log(validateInput('Hello')); // Valid

// -----------------------------------------------------------
// EMPTY ARRAY vs EMPTY OBJECT
// -----------------------------------------------------------

const emptyArr = [];
const emptyObj = {};

console.log('Empty array:', emptyArr);
console.log('Empty object:', emptyObj);
console.log('emptyArr.length:', emptyArr.length); // 0

// -----------------------------------------------------------
// CRITICAL DIFFERENCES
// -----------------------------------------------------------

console.log('\n--- Comparison Table ---');

const a = undefined;
const b = null;
const c = '';

console.log('typeof undefined:', typeof a); // 'undefined'
console.log('typeof null:', typeof b);      // 'object'  ← legacy bug!
console.log('typeof empty string:', typeof c); // 'string'

console.log('null == undefined:', null == undefined);   // true  (loose equality)
console.log('null === undefined:', null === undefined); // false (strict equality)
console.log("'' == undefined:", '' == undefined);       // false
console.log("'' === undefined:", '' === undefined);      // false
console.log("'' == null:", '' == null);                 // false
console.log("'' === null:", '' === null);               // false

// Boolean coercion
console.log('\n--- Falsy-ness ---');
console.log('!undefined:', !undefined); // true
console.log('!null:', !null);          // true
console.log("!'':", !'');             // true

// BUT they are NOT the same value
console.log('\n--- Strict equality ---');
console.log('undefined === null:', undefined === null); // false
console.log("undefined === '':", undefined === '');     // false
console.log("null === '':", null === '');              // false

// Number coercion (often surprises people)
console.log('\n--- Number coercion ---');
console.log('Number(undefined):', Number(undefined)); // NaN
console.log('Number(null):', Number(null));           // 0
console.log("Number(''):", Number(''));              // 0

// JSON serialization
console.log('\n--- JSON serialization ---');
const data = { a: undefined, b: null, c: '' };
console.log('JSON.stringify:', JSON.stringify(data)); // {"b":null,"c":""}
// undefined keys are OMITTED from JSON!

// -----------------------------------------------------------
// COMMON MISTAKES & BEST PRACTICES
// -----------------------------------------------------------

// MISTAKE #1: Checking for "nothing" incorrectly
console.log('\n--- Mistake #1: Wrong null/undefined check ---');
function badCheck(value) {
  if (value == null) {  // catches BOTH null AND undefined
    return 'nothing';
  }
  return value;
}
console.log(badCheck(undefined)); // 'nothing'
console.log(badCheck(null));      // 'nothing'
console.log(badCheck(0));         // 0 — correct, 0 is not nothing
// SAFER: use === for explicit intent

// MISTAKE #2: Confusing empty string with null
console.log('\n--- Mistake #2: Empty string vs null ---');
const formInput = '';  // user submitted empty field
if (formInput == null) {
  console.log('Won\'t reach here');
} else {
  console.log('Empty string is NOT null');
}

// MISTAKE #3: Setting variables to undefined explicitly
console.log('\n--- Mistake #3: Explicit undefined assignment ---');
// BAD: let x = undefined;
// BETTER: let x;  (implicitly undefined)
// Or use null if you mean "intentionally empty":
let intent = null;

// MISTAKE #4: default parameter pitfall
console.log('\n--- Mistake #4: Default params ---');
function connect(host, port) {
  port = port || 8080; // BAD: port = 0 would become 8080
  console.log(`Connecting to ${host}:${port}`);
}
connect('localhost', 0);  // Connects to localhost:8080 — WRONG!

function connectFixed(host, port = 8080) {
  console.log(`Connecting to ${host}:${port}`);
}
connectFixed('localhost', 0); // Connects to localhost:0 — correct

// MISTAKE #5: null shows typeof 'object'
console.log('\n--- Mistake #5: typeof null trap ---');
const maybeNull = null;
if (typeof maybeNull === 'object') {
  console.log('This runs — but maybeNull is null!');
}
// FIX: explicitly check for null
function isObject(val) {
  return val !== null && typeof val === 'object';
}
console.log('isObject(null):', isObject(null)); // false
console.log('isObject({}):', isObject({}));     // true

// -----------------------------------------------------------
// PRACTICAL SDET EXAMPLE: difference matters in assertions
// -----------------------------------------------------------

function getUser(id) {
  const users = { 1: 'Alice', 2: 'Bob' };
  return users[id] ?? 'NOT_FOUND'; // nullish coalescing
  // vs: return users[id] || 'NOT_FOUND';  // catches '' and 0 too
}

console.log('\n--- Practical: nullish coalescing (??) ---');
console.log('getUser(1):', getUser(1));   // Alice
console.log('getUser(99):', getUser(99)); // NOT_FOUND

// But if a value CAN legitimately be '' or 0:
function getConfig(key) {
  const config = { timeout: 0, label: '' };
  return config[key] ?? 'default'; // ?? only catches null/undefined
}
console.log('getConfig("timeout"):', getConfig('timeout')); // 0 (correct!)
console.log('getConfig("label"):', getConfig('label'));     // '' (correct!)
// With || it would have returned 'default' for both — BUG!

// -----------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------
// | Concept     | Meaning                         | typeof      | Falsy | JSON      |
// |-------------|---------------------------------|-------------|-------|-----------|
// | undefined   | declared, not assigned          | 'undefined' | yes   | omitted   |
// | null        | intentional absence of value    | 'object'    | yes   | null      |
// | '' (empty)  | valid string, length 0          | 'string'    | yes   | ""        |
// | [] (empty)  | valid array, length 0           | 'object'    | yes   | []        |
// | {} (empty)  | valid object, no properties     | 'object'    | yes   | {}        |
// -----------------------------------------------------------
