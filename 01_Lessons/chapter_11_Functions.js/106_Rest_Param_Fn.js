//Rest of paramater or spread parameter(All parametrs)...
//spread parmeter(...) retuens as objects of an array.
function logResult(suitcase, ...results) {
    console.log(suitcase, results);

}
logResult("LogInTest", true, 10, 35, 'a');//LogInTest [ true, 10, 35, 'a' ]
logResult("Logout Test", false, 10);//Logout Test [ false, 10 ]
