/**Scenario :->Here is a simple example of Promise chaining.It takes a starting number, adds to it step-by-step, and prints the final result.
Start: Create a function called getStartingNumber() that returns a resolved Promise with the value 5.
Step 1: Create a .then() block that takes the starting number, logs it, adds 2 to it, and passes the result forward.
Step 2: Create a second .then() block that takes that new result, logs it, multiplies it by 10, and passes it forward.
Step 3: Create a final .then() block that logs the final answer to the console.
Error Handling: Add a .catch() block at the end to log any potential errors.*/
// A simple function that returns a Promise with the number 5
function getStartingNumber() {
  return Promise.resolve(5);
}

// The Chain
getStartingNumber()
  .then((number) => {
    console.log("Starting with:", number); // 5
    return number + 2;                     // Passes 7 to the next .then()
  })
  .then((result) => {
    console.log("Added 2, now:", result);  // 7
    return result * 10;                    // Passes 70 to the next .then()
  })
  .then((finalResult) => {
    console.log("Multiplied by 10, final answer:", finalResult); // 70
  })
  .catch((error) => {
    console.log("Something went wrong:", error);
  });
