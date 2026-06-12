let card=new Promise(function(resolve,reject){
    reject ("pin is not valid");
});
card.then(function(response){
console.log(response);
}).catch(function(error){
    console.log(error+" Try with valid pin ");
    }).finally(function(){
        console.log("Keep your card secure");
        });//finally :It will be run by default ,promise return  resolve or reject.