let year = 2024;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(`Year : ${year} is a Leap Year`);

} else {
    console.log(`Year : ${year} is  not a  Leap Year`);

}
//Output : 2024 is a Leap Year.