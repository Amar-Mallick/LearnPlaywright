//Promise fn to handle a pyramid doom ....
// function chekLogin(){
//      return Promise.resolve("LogIn is passed");
// };
// function checkProduct(){
//       return    Promise.resolve("Product is available");
// };
// // Chaining the promises....
// chekLogin().then( (loginresult) =>{
//     console.log(loginresult);
//     return checkProduct();
// }).then((productresult)=>{
//     console.log(productresult);
    
// });


//Handle this using Async/Await concepts....
 async  function orderFood(product) {
    let status= await Promise.resolve( product+" is ordered using App");
    console.log("Step-01: "+ status);
    
}
async function makeFood(product) {
    let foodstatus=await Promise.resolve(product+" is  made ");
    console.log("Step-02: "+ foodstatus);
}
async function orderDeliver() {
    let result= await Promise.resolve("Order is delivered");
    console.log("Step-03: "+ result);
}

//1)calling the fn dirctly using Top-Level Await....
    await   orderFood("pizza");
    await makeFood("pizza");
    await orderDeliver();

    //output->>>
// Step-01: pizza is ordered using App
// Step-02: pizza is  made 
// Step-03: Order is delivered