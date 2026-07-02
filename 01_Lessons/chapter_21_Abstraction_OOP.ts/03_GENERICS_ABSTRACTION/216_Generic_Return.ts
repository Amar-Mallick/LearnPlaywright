//m its take generic type variable
function getValues<m>(...data: m[]): m {
    console.log("Parameters value :" + data);
    return data[0]!;
}

const item = getValues<number>(5, 10, 15);
console.log(item); // Output: 5

//Ts is the generic type variable. data takes an array of that type.
function getMultipleValues<Ts>(...data: Ts[]): Ts[] {
    console.log("Parameters value :" + data);
    return data;
}
// Pass as many individual arguments as you want
const items = getMultipleValues<string>("Ram", "Shyam", "Hari", "Gita");
console.log(items); // Output: ["Ram", "Shyam", "Hari", "Gita"]