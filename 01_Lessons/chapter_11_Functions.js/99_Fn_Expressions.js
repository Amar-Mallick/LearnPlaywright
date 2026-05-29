//Normal Functions.....
function greet(name) {
    return `Hello,${name}`;
};
console.log(greet('Amar'));//Hello,Amar
//(Function as Expression) Store a function in variable...
const greet1 = function (name) {
    return `Welcome,${name}`;
};
console.log(greet1('Deepak'));//Welcome,Deepak