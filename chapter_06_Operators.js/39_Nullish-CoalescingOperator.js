// 1. With Null or Undefined (Both operators act the same)
const userValue = null;
const defaultValue = "Guest";

const result1 = userValue ?? defaultValue;
console.log(result1); // "Guest"
const result2 = userValue || defaultValue;
console.log(result2); // "Guest"


// 2. With Falsy but Valid values (Where the Nullish operator shines)
const animationSpeed = 0; // 0 is a perfectly valid number/setting

const speedWithNullish = animationSpeed ?? 10;
console.log(speedWithNullish);
// Returns 0 (because 0 is neither null nor undefined)

const speedWithOR = animationSpeed || 10;
console.log(speedWithOR);
// Returns 10 (because 0 is "falsy" in JavaScript)


// 3. With Empty Strings
const customName = "";
const nameWithNullish = customName ?? "Anonymous";
console.log(nameWithNullish); // Returns ""
const nameWithOR = customName || "Anonymous";
console.log(nameWithOR);      // Returns "Anonymous"