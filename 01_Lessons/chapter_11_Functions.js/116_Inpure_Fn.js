//Impure: Unpredictable. Interactive. Can change its answer based on the outside world, or can change the outside world itself.
//Example 1: The "Side Effect" (Modifying a Global Variable)
// 1. A variable living in the outside world
let totalCartPrice = 0;

// 2. The Impure Function
function addToCartImpure(itemPrice) {
    // ⚠️ SIDE EFFECT: It modifies the global variable directly
    totalCartPrice = totalCartPrice + itemPrice;
    return `Item added! Total is now $${totalCartPrice}`;
}

// 3. Testing the function
console.log(addToCartImpure(10)); // Output: "Item added! Total is now $10"
console.log(addToCartImpure(5));  // Output: "Item added! Total is now $15"

// The outside world has been permanently altered:
console.log(totalCartPrice);      // Output: 15
//Ex-02=>The "Unpredictable Output" (Using Math.random())
// The Impure Function
function generateId(username) {
    // ⚠️ IMPURE: Math.random() looks at an unpredictable external system clock
    let randomNum = Math.floor(Math.random() * 1000);
    return `${username}_${randomNum}`;
}

// Testing with the EXACT SAME input:
console.log(generateId("Alex")); // Output: Alex_482
console.log(generateId("Alex")); // Output: Alex_12
console.log(generateId("Alex")); // Output: Alex_895