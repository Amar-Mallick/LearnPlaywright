/*Interface:->1)An Interface is a 100% empty blueprint (it only has headlines, no code logic).
2)A pure compile-time contract. It defines the exact properties and methods a class or object must have,
 but contains no working code logic or values. 
It completely disappears when compiled to JS.
*/
interface APIresponse {
    statuscode: number;
    status: string;
    responsetime: number;
}
//create multiple objects but structure should be same can not miss any properties ..
let Test1: APIresponse = {
    statuscode: 200,
    status: "OK",
    responsetime: 0.45
};
console.log(Test1);//{ statuscode: 200, status: 'OK', responsetime: 0.45 }
let Test2: APIresponse = {
    statuscode: 201,
    status: "CREATE",
    responsetime: 0.50
};
console.log(Test2);//{ statuscode: 201, status: 'CREATE', responsetime: 0.5 }