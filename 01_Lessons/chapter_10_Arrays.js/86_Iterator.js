//1)for loop:
let mark = [1, 2, 3, 4, 5];
for (let i = 0; i < mark.length; i++) {
    console.log(mark[i]);//1 2 3 4 5
}
//2)for...of(cleanest for value)
for (txt of mark) {
    console.log(txt);//1 2 3 4 5
}
//3)forEach ()....
mark.forEach((txt, index) => {
    console.log(txt, index)//value & index will return inconsole
});
//4)forIn().........
let students = ['amar', 'ashok', 'amit'];
for (let student in students) {
    console.log(student, "->>", students[student]);
}/*output : 0 ->> amar
            1 ->> ashok
            2 ->> amit*/