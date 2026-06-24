//Encapsulation :-> Means binding data (variables) and actions (methods) together into a single box (a class),
//  while hiding the sensitive details from the outside world.
   class BankAccount {
  // Hidden private balance
  #balance = 1000; 

  // Public method to check money safely
  getBalance() {
    return `Your balance is: ₹${this.#balance}`;
  }

  // Public method to add money safely
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Successfully deposited ₹${amount}`);
    } else {
      console.log("❌ Invalid deposit amount!");
    }
  }
}

// --- TESTING THE BANK ---
const account = new BankAccount();

account.deposit(500);         // Output: Successfully deposited ₹500
console.log(account.getBalance()); // Output: Your balance is: ₹1500

// ❌ Hacking attempts will fail:
// account.#balance = 999999;  // SyntaxError (Blocked by JavaScript)
// account.deposit(-200);      // Output: ❌ Invalid deposit amount!
