 /**Promise :->> is a placeholder object for the future result of an asynchronous operation.
  * A Promise always exists in one of three states:
  * 1)Pending: Initial state; the operation has not completed or failed yet.
  * 2)Fulfilled: The operation completed successfully, and resolve() was called.
  * 3)Rejected: The operation failed, and reject() was called.
  * 
  */
 let apiCall=new Promise(function (resolve,reject) {
    resolve({status :200,body:"ok"});
});
apiCall.then(function(response){
    console.log(response);//{ status: 200, body: 'ok' }
    console.log(response.status);//200
    
    });