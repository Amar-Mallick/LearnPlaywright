const response: any = {
    statuscode: 300,
    body: { user: "Admin", role: "Tester" }
}
interface APIResponse {
    statuscode: number,
    body: { user: string, role: string }
}
const res = response as APIResponse;
console.log(res.statuscode);//300
console.log(res.body.user);//Admin
console.log(res.body.role);//Tester