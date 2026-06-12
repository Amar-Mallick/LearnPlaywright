console.log("Start"); // 1st: Prints "Start"

const myPromise = new Promise((resolve) => {
    console.log("Inside Promise"); // 2nd: prints "Inside Promise"
    resolve("Promise Resolved");
});

myPromise.then((res) => console.log(res));//4th:prints "Promise Resolved"

console.log("End");//3rd: prints "End"