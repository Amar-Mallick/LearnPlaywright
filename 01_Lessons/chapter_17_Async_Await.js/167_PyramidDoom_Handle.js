//Scenario:end to end product ordered flow....
async function openBrowser()  {
    const msg1= await Promise.resolve("Open the browser ");
    console.log("Step-01: "+ msg1);
    };
async function goToLoginPage()  {
   const msg2=await Promise.resolve("LogIn page opened ");
    console.log("Step-02: "+ msg2); 
};
async function enterCredentials()  {
    const msg3=await Promise.resolve("Enter valid user name and password ");
    console.log("Step-03: "+ msg3); 
    };
async function clickLogInBtn()  {
     const msg4=await Promise.resolve("Click LogIn button ");
    console.log("Step-04: "+ msg4);
};
async function goToProductPage()  {
     const msg5=await Promise.resolve("Product page is displayed ");
    console.log("Step-05: "+ msg5);
};
async function orderProduct()  {
     const msg6=await Promise.resolve("Product  order is Successfull ");
    console.log("Step-06: "+ msg6);
};

//calling the fn....using Async/Await
async function orderWorkflow(){
    await openBrowser();
    await goToLoginPage();
    await enterCredentials();
    await clickLogInBtn();
    await goToProductPage();
    await orderProduct();
};
orderWorkflow();//Output:->>>>
// Step-01: Open the browser 
// Step-02: LogIn page opened 
// Step-03: Enter valid user name and password 
// Step-04: Click LogIn button 
// Step-05: Product page is displayed 
// Step-06: Product  order is Successfull 
