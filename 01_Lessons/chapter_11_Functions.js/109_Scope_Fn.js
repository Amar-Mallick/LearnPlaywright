let env = "staging";//Global Scope
function setConfig() {
    let timeout = 3000;//Local Scope
    console.log(env);
    console.log(timeout);
}
setConfig();//staging //3000
console.log(env);//staging
//console.log(timeout);//ReferenceError: timeout is not defined(timeout is local scope)