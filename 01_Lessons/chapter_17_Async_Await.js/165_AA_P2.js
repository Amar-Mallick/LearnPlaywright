/**Async/Await:->It makes asynchronous code look and behave like synchronous code.
 * Async:->Async Keyword Placed before a function to make it automatically return a Promise.
 * Await:->Await keyword Placed inside an async function to pause execution until a Promise resolves(reaches a settled state).
 * Error handling: Uses standard try...catch blocks instead of .catch() methods.
 */
// Fetching data using async/await
  async function getUserData(){
    try {
        let data= await  Promise.reject("Not Available data");
    } catch (error) {
        console.error(error);
    }finally{
        console.log("Checking data available or not completed");
        };
    };
    getUserData();
    //Output:->Not Available data
    //Checking data available or not completed