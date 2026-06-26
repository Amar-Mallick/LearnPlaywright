let price: unknown = 450;

// Type Guard: checking if 'price' is a number
if (typeof price === "number") {
    console.log("The price is: ₹" + price);
} else {
    console.log("Error: Price is not a valid number.");
}
//output:-The price is: ₹450