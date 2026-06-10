/**Asynchronous (Delayed):->>A callback function that is scheduled to run later after a specific event happens (like a timer finishing or a web page loading). The computer keeps running the rest of the code while waiting. */
console.log("Test1:Started");
setTimeout(() => {
    console.log("Test2: added 2seconds timeout");
}, 2000);
console.log("Test3: run it after Test1");

