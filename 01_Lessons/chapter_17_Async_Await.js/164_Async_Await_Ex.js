/**Async/Await:->It makes asynchronous code look and behave like synchronous code.
 * Async:->Async Keyword Placed before a function to make it automatically return a Promise.
 * Await:->Await keyword Placed inside an async function to pause execution until a Promise resolves(reaches a settled state).
 * Error handling: Uses standard try...catch blocks instead of .catch() methods.
 */
function testAPI(){
   return  Promise.resolve("200 Ok");
};
async function runApI () {
    let status=await testAPI();
    console.log(status);
    
}
runApI();