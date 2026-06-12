/**promise.all():-> If even one promise rejects, Promise.all() rejects immediately.
 *  It does not wait for the remaining promises to finish,
 *  and it completely throws away any successful results injavascript */
// 1. Create an array of test promises
let test=[
Promise.resolve("UI Test pass"),
Promise.reject("API Test fail"),// This will cause Promise.all to reject
Promise.resolve("DB Test pass")];

// 2. Execute using Promise.all()
Promise.all(test).then((results)=>{
    console.log("All Test passed "+ results);
}).catch((error)=>{
    // Because API Test fails, the entire batch rejects immediately
    console.log("Test execution failed due to:", error); 
    });
//output of this code :-Test execution failed due to: API Test fail