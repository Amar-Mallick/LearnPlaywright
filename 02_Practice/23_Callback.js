/**
 * Simulates a kitchen preparing an order.
 * Returning a Promise acts as our "buzzer/token".
 */
function cookOrder(orderName) {
    return new Promise((resolve, reject) => {
        console.log(`Kitchen: Starting ${orderName}...`);

        setTimeout(() => {
            const isAvailable = true; // Simulation check

            if (isAvailable) {
                resolve(`Hot ${orderName} is ready!`);
            } else {
                reject(`Sorry, we're out of ${orderName}.`);
            }
        }, 2000);
    });
}

// How we handle the "buzzer"
async function placeOrder() {
    try {
        console.log("Customer: Ordering pizza...");

        // The "await" pauses this function until the buzzer goes off
        const result = await cookOrder("Pizza");
        console.log("Customer:", result);
    } catch (error) {
        // This runs if the buzzer alerts us of an error (rejection)
        console.error("Customer:", error);
    }
}

placeOrder();