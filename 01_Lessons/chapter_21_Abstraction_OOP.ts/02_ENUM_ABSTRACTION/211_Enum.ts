enum HttpMethod1 {
    GET = "GET",
    DELETE = "DELETE"
}
function sendRequest(method: HttpMethod1, endpoint: string): void {
    console.log(method + " - And EndPoint-" + endpoint);
}
sendRequest(HttpMethod1.DELETE, "/vwo.com");//DELETE - And EndPoint-/vwo.com