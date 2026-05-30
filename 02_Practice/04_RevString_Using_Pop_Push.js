let original = ['o', 'l', 'l', 'e', 'h'];
let reverse = [];

while (original.length > 0) {
    let letter = original.pop(); // takes 'h', then 'e', etc.
    reversed.push(letter);       // pushes them in order into the new array
}

console.log(reversed); // Output: ['h', 'e', 'l', 'l', 'o']
