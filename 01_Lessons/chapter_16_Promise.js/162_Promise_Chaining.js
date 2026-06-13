/** Promise Chaining — The Solution to Callback Hell
Running a sequence of asynchronous tasks one after another,
 where each step waits for the previous one to finish and uses its result. */
//promise chaining simulating a user logging into a web application.
function openBrowser() {
   return  new Promise((resolve)=>{
        resolve ("Open the browser");
         });
}
function gotoLogInPage() {
  return  new Promise((resolve)=>{
        resolve ("Enter in to LogIn Page");
    });
}
function enterValidCredentials(){
    return new Promise((resolve)=>{
        resolve ("Valid data enter");
    });
};
//Calling Promise Chain.........->>>
openBrowser()
    .then((msg1) => {
        console.log("step-01", msg1);
        return gotoLogInPage(); 
    }) 
    .then((msg2) => {
        console.log("Step-02", msg2);
        return enterValidCredentials(); 
    }) 
    .then((msg3) => {
        console.log("Step-03", msg3);
    }); 

