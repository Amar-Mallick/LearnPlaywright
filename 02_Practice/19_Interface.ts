interface test {
    name: string,
    status: number,
    statusmsg?: string,
    readonly id: number,
}
let test1: test = {
    name: "Login",
    status: 200,
    statusmsg: "ok",
    id: 10
};
console.log(test1);//{ name: 'Login', status: 200, statusmsg: 'ok', id: 10 }
//console.log(test1.id=12);//(readonly canot change values)
let test2: test = {
    name: "Login",
    status: 200,
    id: 13
};
console.log(test2);//{ name: 'Login', status: 200, id: 13 }
