let x = 1;
do {
    if (x === 3) {
        x++;
        continue;
    }
    console.log(x);
    x++;
} while (x <= 5);//1 2 4 5