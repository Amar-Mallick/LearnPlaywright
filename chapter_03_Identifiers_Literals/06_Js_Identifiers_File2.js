// Different naming conventions (cases) for JavaScript identifiers

// | Case Name         | Example              | Valid? | Best Used For                     |
// |-------------------|----------------------|--------|-----------------------------------|
// | camelCase         | firstName            | Yes    | Variables, functions, parameters  |
// | PascalCase        | PersonInfo           | Yes    | Classes, constructors, components |
// | snake_case        | user_name            | Yes    | Python-style, config keys         |
// | UPPER_SNAKE_CASE  | MAX_RETRY_COUNT      | Yes    | Constants, env variables          |
// | lowercase         | temp                 | Yes    | Loop counters, temp values        |
// | _underscore prefix| _privateValue        | Yes    | Private/internal members          |
// | $dollar prefix    | $element             | Yes    | jQuery, special DOM objects       |
// | kebab-case        | user-name            | No     | — (hyphen = minus operator)       |
// | starting digit    | 2fast                | No     | — (starts with number)            |
// | dot in name       | my.var               | No     | — (dot = member access operator)  |

// 1. camelCase (most common for variables & functions)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("camelCase:", fullName);

// 2. PascalCase (commonly used for classes & constructors)
class PersonInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayDetails() {
        console.log(`PascalCase: ${this.name}, ${this.age}`);
    }
}
let personInfo = new PersonInfo("Alice", 25);
personInfo.displayDetails();

// 3. snake_case (less common in JS, used in some style guides)
let user_name = "bob_smith";
let user_age = 30;
console.log("snake_case:", user_name, user_age);

// 4. UPPER_SNAKE_CASE (constants / environment variables)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
console.log("UPPER_SNAKE_CASE:", MAX_RETRY_COUNT, API_BASE_URL);

// 5. lowercase (simple, short-lived variables)
let temp = 98.6;
let index = 0;
console.log("lowercase:", temp, index);

// 6. _underscore prefix (private / internal convention)
let _privateValue = 42;
let _internalId = "xyz";
console.log("_underscore prefix:", _privateValue, _internalId);

// 7. $dollar prefix (often used for jQuery / special objects)
let $element = "div.container";
let $ = 100;
console.log("$dollar prefix:", $element, $);

// Variables are case-sensitive
let myvar = 10;
let myVar = 20;
let MYVAR = 30;
console.log("Case-sensitive:", myvar, myVar, MYVAR);
