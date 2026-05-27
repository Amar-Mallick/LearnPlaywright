/**Task: Create a function vendingMachine(itemCode, money) that:
Checks the itemCode using a switch to find the price.
'A1': 50
'B2': 75
'C3': 100
If the code is invalid, return "Invalid item".
If the code is valid, compare the money to the price.
If money < price, return "Not enough money".
If money >= price, return "Here is your item and [change] change" (where change is money - price). */
function vendingMachine(itemcode, money) {
    let price;
    // Step 1: Use switch to determine the price
    switch (itemcode.toUpperCase()) {
        case 'A1': price = 50; break;
        case 'B2': price = 75; break;
        case 'C3': price = 100; break;
        default: return "Invalid item";
    }
    // Step 2: Use if/else to check the money
    if (money < price) {
        return "Not enough money";
    } else {
        let change = money - price;
        return "Here is your item and " + change + " change";
    }
}

console.log(vendingMachine('a1', 60));//Here is your item and 10 change
console.log(vendingMachine('d4', 60));//Invalid item
console.log(vendingMachine('b2', 60));//Not enough money