/*Pure Function:-Predictable. Safe. Same inputs always equal the same outputs. No surprises/No side effects.
It only looks at what you give it, and it never makes a mess outside.
Ex->A pure function is like a calculator.
If you type 2 + 2 into a calculator, it will give you 4.
 It doesn’t matter if you do it at midnight, on a plane, or 10 years from now—2 + 2 is always 4.
Furthermore, pressing 2 + 2 doesn't suddenly change the brightness of your phone screen or delete a photo from your gallery.
 It does its math, gives you the answer, and stays completely out of everything else.*/
// Pure Function
function add(a, b) {
    return a + b;
}

console.log(add(3, 5)); // Always 8
console.log(add(3, 5)); // Still 8