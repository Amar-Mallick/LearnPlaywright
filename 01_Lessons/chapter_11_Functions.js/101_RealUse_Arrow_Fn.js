//1)normal functions.......
function ValidateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is ok");
    }
}
ValidateStatusCode(260);//Request is ok
//using Function as Expression....
const status = function (code) {
    if (code >= 200 && code <= 300) {
        console.log("Fine");
    }
}
status(230);//Fine
//Arrow Function...............
const verifyStatus = (code) => {
    if (code >= 200 && code <= 300) {
        console.log("Worked Perfectly");
    }
}
verifyStatus(285);//Worked Perfectly
/*If use single line Arrow function no need mention retuen ,but
more than one line need to write */ 