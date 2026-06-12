let order=new Promise((resolve,reject)=>{
    let orderdone=false;
    if (orderdone) {
        resolve("Orderdone perfectly");
    } else {
        reject("Orderdone not happened ");
    }
});
order.then((status)=>{
    console.log(status);
}).catch((result)=>{console.log(result);
}).finally(()=>{
    console.log("This line be execute anyhow");
    
});