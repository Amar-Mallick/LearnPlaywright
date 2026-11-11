//Approach 01 (Modern): using Set............
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

//Approach 2(classic)using filter and indexof()..........
const n = [1, 2, 2, 3, 4, 4, 5];
const uniqueN = n.filter((item, index) => {
    return n.indexOf(item) === index;
});

console.log(uniqueN); // [1, 2, 3, 4, 5]
