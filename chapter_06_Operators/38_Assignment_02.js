//1. Finding Maximum number between two numbers,  by using the ternary operator
let a = 200, b = 200, c = 100;
let d = (a > b) ? a + ' a is big' :
    (b > a) ? b + ' b is big' : 'Both a and b are equal';

console.log(d);

//2.find maximum between the three numbers also by using turnery operator..
let e = (a > b && a > c) ? ' a is big' :
    (b > a && b > c) ? ' b is big' :
        (c > a && c > b) ? 'c is big' :
            (a === b && a === c) ? 'all are equal' :
                (a === b) ? 'a and b are tied for biggest' :
                    (a === c) ? 'a and c are tied for biggest' :
                        'b and c are tied for biggest';

console.log(e);
