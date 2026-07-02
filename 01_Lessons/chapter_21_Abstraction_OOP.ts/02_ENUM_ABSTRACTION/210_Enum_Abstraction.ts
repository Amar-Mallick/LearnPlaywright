//Enum:->Collections/sets of  named constants.
//Values should be constant ,keys can be anythings in Enum.
enum HttpMethod {
    GET = "Retrive data",
    DELETE = "Delete data",
    POST = "Create data"
}
console.log(HttpMethod.POST);//Create data
console.log(HttpMethod.DELETE);//Delete data
console.log(HttpMethod.GET);//Retrive data
//Ex-02:->>>>
enum HttpMethods {
    GET = "GET",
    DELETE = "DELETE",
    POST = "POST"
}
console.log(HttpMethods.DELETE);//DELETE
console.log(HttpMethods.POST);//POST

