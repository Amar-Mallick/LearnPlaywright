/**allSettled():->1)Promise.allSettled() is a built-in JavaScript method that takes an array of promises
 *  and waits for all of them to finish, 
 * regardless of whether they succeed or fail.
 * 2) It never rejects. It always succeeds and returns an array of objects describing the outcome of each individual promise */
let product=[Promise.resolve("item checked available"),
    Promise.resolve("item add to cart"),
    Promise.resolve("item orderd"),
    Promise.reject("order not deliverd cancelled automatically")];
    Promise.allSettled(product)
    .then((results)=>{
         results .forEach((r,i)=>{
            console.log(`Test ${i + 1}:`, r.status, "-", r.value || r.reason);})
    });
    
//output:->>
//Test 1: fulfilled - item checked available
// Test 2: fulfilled - item add to cart
// Test 3: fulfilled - item orderd
// Test 4: rejected - order not deliverd cancelled automatically

