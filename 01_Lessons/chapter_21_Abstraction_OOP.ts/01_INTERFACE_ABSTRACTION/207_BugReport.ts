interface BugReport {
    id: number;
    testcaseName: string;
    severity: string;
    testResult: string;
    stepToReProduce: string[]
}
const BugReport1: BugReport = {
    id: 10,
    testcaseName: "Add To Cart",
    severity: "High",
    testResult: "Fail",
    stepToReProduce: ["Step-01->Open the browser ", "Step-02->Enter url"]
}
const BugReport2: BugReport = {
    id: 15,
    testcaseName: "Check Out",
    severity: "Medium",
    testResult: "Fail",
    stepToReProduce: ["Step-01->Open the browser ", "Step-02->Enter url"]
}
console.log(BugReport2);
//output-> {
//   id: 15,
//   testcaseName: 'Check Out',
//   severity: 'Medium',
//   testResult: 'Fail',
//   stepToReProduce: [ 'Step-01->Open the browser ', 'Step-02->Enter url' ]
// }

