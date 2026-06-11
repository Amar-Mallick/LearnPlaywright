function orderFood(item, callback) {
    console.log("Notification Alert for: " + item);
    let driver = "Amar";
    //eta means Estimate time of Arrivals
    let eta = 10;
    // The system sends the real-time data back to your instruction
    callback(driver, eta);
}
orderFood("Pizza", (driver, eta) => {
    console.log(drivername + " is arriving in " + timeremaining + " minutes");
});
//Output line1->Notification Alert for: Pizza
//Output line2-> Amar is arriving in 10 minutes