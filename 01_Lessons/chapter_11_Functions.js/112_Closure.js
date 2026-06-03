function outer(num) {
    let a = num;
    console.log("It's outer Function call");
    function inner() {
        console.log(a);
    }
    return inner;
}
//outer(15)();//It's outer Function call //15
const out = outer(15);//It's outer Function call
out();//15
