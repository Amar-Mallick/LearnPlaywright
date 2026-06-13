let checkproduct =Promise.resolve("item checked available");
    let cart = Promise.resolve("item add to cart");
    let order = Promise.resolve("item orderd");
    let cancel = Promise.reject("order not deliverd cancelled automatically");
    Promise.all([checkproduct,cart,order,cancel])
    .then((msg)=>{ console.log(msg);} )
    .catch((error)=>{console.log(error);
    });
    
 // If any one is failed/reject it will be automatically return failed.
//output ->  order not deliverd cancelled automatically.