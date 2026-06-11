//Callback Hell(Pyramid doom)->"Callback hell is when you nest too many functions inside each other to force slow tasks to run step-by-step, creating a messy, pyramid-shaped code that is hard to read and fix."
//RealScenario Ex->Want to login a web application page .
// step-1->open browser
// step-2->go to Login page
// step-3->enter valid credentials
// step-4->enter Login button
//step-5-> go to Dashborad
// Note-can't go forward step without complete previous one


//step-1->open browser
function openBrowser(Callback) {
    console.log("step-01-> open the chrome browser ");
    setTimeout(() => {
        Callback();
    }, 2000);
}
// step-2->go to Login page
 function loginPage(Callback) {
    console.log(" Step-02-> Open Login page");
    
    setTimeout(()=>{
        Callback();
    },1000);
 }
// step-3->enter valid credentials
function enterCredentials(Callback) {
    console.log("Step-03-> enter credentials");
    
    setTimeout(()=>{
        Callback();
    },3000);
 }
// step-4->enter Login button
function loginButton(Callback) {
    console.log("Step-04-> Click Login button");
    
    setTimeout(()=>{
        Callback();
    },800);
 }
 //step-5-> go to Dashborad
 function goToDashboard(callback) {
    console.log("step-05-> Enter in to dashborad");
    setTimeout(() => {
        callback();
    }, 1000);
 }
//Call back hell->>>
openBrowser(()=>{
    loginPage(()=>{
        enterCredentials(()=>{
            loginButton(()=>{
                goToDashboard(()=>{
                    console.log("All steps completed successfully");
                    
                });
            });
        });
    });
});
//How it work If you run this code, it will execute flawlessly .
//  print this to the console, step-by-step:
// step-01-> open the chrome browser  (waits 2 seconds)
//  Step-02-> Open Login page (waits 1 second)
// Step-03-> enter credentials (waits 3 seconds)
// Step-04-> Click Login button (waits 0.8 seconds)
// step-05-> Enter in to dashborad (waits 1 second)All steps completed successfully
    

