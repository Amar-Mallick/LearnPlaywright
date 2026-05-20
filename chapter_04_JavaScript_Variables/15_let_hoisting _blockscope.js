let l = 10;//Global Scope
if (true) {
    //TDZ starts here for block scope
    //console.log(l);//Reference error
    let l = 15;//TDZ ends
    console.log(l);//15
}
