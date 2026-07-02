interface TestConfig {
    browser: string;
    headless: boolean;
    baseUrl: string;
    timeout?: number;
}
const remoteConfig: TestConfig = {
    browser: "Chrome",
    headless: false,
    baseUrl: "https://www.vwo.com"
}
const localConfig: TestConfig = {
    browser: "Edge",
    headless: true,
    baseUrl: "http://localhost:3000",
    timeout: 10000
}
console.log("Browser :" + remoteConfig.browser, "TimeOut :" + remoteConfig.timeout);
//Output-> Browser :Chrome TimeOut :undefined
console.log("Browser :" + localConfig.browser, "TimeOut :" + localConfig.timeout);
//Output->Browser :Edge TimeOut :10000