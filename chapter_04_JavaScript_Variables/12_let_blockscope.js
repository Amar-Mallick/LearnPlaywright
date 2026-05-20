let l = 120;
function printl() {
    l = 200;
    console.log("Functionscope >>" + l);
    if (true) {
        let l = 300;//new block scoped variable..
        console.log("BlockScope value of l:" + l);

    }
}
printl();
console.log("Gloabal scope value of l:" + l);