//Write a small script that takes the last element of an array and moves it to the front. This is called rotating an array.
let courses = ["Selenium", "Playwright", "Cypress"];
let c = courses.pop();
courses.unshift(c);
console.log(courses);//[ 'Cypress', 'Selenium', 'Playwright' ]
