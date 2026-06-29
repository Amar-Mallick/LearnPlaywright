const assert = require('assert');


// 1. THE ENCAPSULATED CLASS

class Login {
    // Private class fields (accessible only inside this class)
    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    // Public method to handle authentication safely
    authenticate(inputUsername, inputPassword) {
        if (inputUsername === this.#username && inputPassword === this.#password) {
            return { success: true, message: "Login successful" };
        }
        return { success: false, message: "Invalid credentials" };
    }

    // Public method to update data following validation rules
    updatePassword(oldPassword, newPassword) {
        if (oldPassword === this.#password) {
            this.#password = newPassword;
            return true;
        }
        return false;
    }
}


// 2. THE TEST RUNNER FUNCTION

function runTests() {
    console.log(" Starting Login Tests...");

    const loginSystem = new Login('adminUser', 'Secret123!');

    // Test 1: Successful login
    const test1 = loginSystem.authenticate('adminUser', 'Secret123!');
    assert.strictEqual(test1.success, true);
    console.log("✅ Test 1 Passed: Allowed access with correct credentials.");

    // Test 2: Failed login
    const test2 = loginSystem.authenticate('adminUser', 'WrongPassword');
    assert.strictEqual(test2.success, false);
    console.log("✅ Test 2 Passed: Denied access with incorrect password.");

    // Test 3: Data Encapsulation check
    // Direct access returns undefined because the property is private
    assert.strictEqual(loginSystem.username, undefined);
    console.log("✅ Test 3 Passed: Private variables cannot be accessed directly.");

    // Test 4: Controlled updates
    const updateSuccess = loginSystem.updatePassword('Secret123!', 'NewPassword456!');
    assert.strictEqual(updateSuccess, true);

    // Verify new password works
    const test4 = loginSystem.authenticate('adminUser', 'NewPassword456!');
    assert.strictEqual(test4.success, true);
    console.log("✅ Test 4 Passed: Password updated securely through public method.");

    console.log(" All tests passed successfully!");
}

// Execute the tests
runTests();
