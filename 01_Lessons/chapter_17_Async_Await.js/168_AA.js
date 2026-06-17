function enterLogInCredentials(){
    return Promise.resolve("Enter username and Password Sucessfully");
};
function enterLogInBtn(){
return  Promise.resolve("Enter LogIn Btn Sucessed");
};
function goToDashboard(){
    return Promise.resolve("Opened Dashboard Page");
};
 async function checkLogIn(){
  const msg1= await enterLogInCredentials();
  console.log(msg1);
  const msg2= await enterLogInBtn();
  console.log(msg2);
   const msg3=await goToDashboard();
   console.log(msg3);
 };
 checkLogIn();
