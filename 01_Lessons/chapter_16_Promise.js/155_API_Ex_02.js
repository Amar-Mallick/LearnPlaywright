let apiCalling = new Promise(function (resolve,reject) {
    reject ("Error,Test is Failed");
});
apiCalling.then(function (result) {
    console.log(result+"Passed");
    
}).catch(function(error){
console.log(error);

});//output is:->Error,Test is Failed
//How it executes right now:->>
// The promise immediately runs reject("Test is Failed");.
// It completely skips the .then() block.
// It enters the .catch() block and prints:Test is Failed