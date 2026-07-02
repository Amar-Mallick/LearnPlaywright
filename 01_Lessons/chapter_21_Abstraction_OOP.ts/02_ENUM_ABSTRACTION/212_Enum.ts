enum Browser {
    chrome = "Chrome browser",
    edge = "Edge browser",
}
function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.chrome:
            console.log("new Chrome browser");
            break;
        case Browser.edge:
            console.log("new Edge browser");
            break;
        default:
            console.log("Brwoser is not Available");
    }
}
launchBrowser(Browser.chrome);//new Chrome browser