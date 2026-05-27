//Triangle Classifier :
function checkTriangleClassifier(l1, l2, l3) {
    if (l1 === l2 && l1 === l3) {
        return ' The triangle is equilateral (all sides are equal)'
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return 'The triangle is isosceles (exactly two sides are equal)';
    } else {
        return 'The triangle is scalene (no sides are equal)'
    }
}
console.log(checkTriangleClassifier(13, 15, 10));//scalene (no sides are equal)
console.log(checkTriangleClassifier(13, 10, 10));//isosceles (exactly two sides are equal)
console.log(checkTriangleClassifier(15, 15, 10));//isosceles (exactly two sides are equal)
console.log(checkTriangleClassifier(13, 13, 13));//equilateral (all sides are equal)