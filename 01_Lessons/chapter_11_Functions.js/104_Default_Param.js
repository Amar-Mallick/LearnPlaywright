/*Default parameter :If paramater is available in default no need to add arguments .
Add arguments if default value is not same as your arguments */
function retry(testname, maxRetries = 2, delay = 1000) {
    console.log(`retry ${testname} up to ${maxRetries}times,${delay}`);
}
retry("RegistrationTest");//retry RegistrationTest up to 2times,1000
retry("LoginTest", 4, 2000);//retry LoginTest up to 4times,2000