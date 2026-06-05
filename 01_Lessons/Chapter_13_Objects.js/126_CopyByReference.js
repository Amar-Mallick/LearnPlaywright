//Objects always follow copybyrefference  concepts.
let a = { status: "Fail" };
console.log(a["status"]);//Fail
let b = a;
console.log(b["status"]);//Fail
b.status = "Pass";
console.log(a["status"]);//pass
console.log(b.status);//pass
//Check both a & b  reffer same objects or not ..
if (a === b) {
    console.log(true);

} else {
    console.log(false);

}


