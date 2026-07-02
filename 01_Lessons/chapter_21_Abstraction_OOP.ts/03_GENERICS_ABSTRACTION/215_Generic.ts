function getStringValue(name: string): string {
    return name;
}
console.log(getStringValue("Ram"));//Ram
//console.log(getStringValue(5)); //can't enter other datatype .It's only take string.

//Generic Example:->>>>>
// T is the generic type variable. data takes an array of that type.
function getValue<T>(data: T[]): void {
    console.log("Parameters value :" + data);
}
// 1. Works with strings
getValue<string>(["Ram", "Shyam"]); // Output: Parameters value: Ram,Shyam
// 2. Works with numbers
getValue<number>([5, 10, 15]);       // Output: Parameters value: 5,10,15