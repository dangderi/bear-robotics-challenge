import {Account} from "./Account.js";
import {ATM} from "./ATM.js";
import {Card} from "./Card.js";

// Create an account and check the balance
let account = new Account(1000);
console.assert(account.getBalance() === 1000, 'Account balance should be 1000');

// Deposit money into the account and check the balance
account.deposit(500);
console.assert(account.getBalance() === 1500, 'Account balance should be 1500 after deposit');

// Withdraw money from the account and check the balance
account.withdraw(200);
console.assert(account.getBalance() === 1300, 'Account balance should be 1300 after withdrawal');

// Create a card with a PIN and two accounts
let card = new Card(1234, [new Account(1000), new Account(2000)]);
console.assert(card.pin === 1234, 'Card PIN should be 1234');
console.assert(card.accounts.length === 2, 'Card should have two accounts');

// Insert the card into the ATM, enter the correct PIN, and select an account
let atm = new ATM();
atm.insertCard(card);
console.assert(atm.enterPin(1234) === true, 'PIN entry should be successful');
console.assert(atm.selectAccount(0) === true, 'Account selection should be successful');

// Check the balance of the selected account
console.assert(atm.getBalance() === 1000, 'Balance of selected account should be 1000');

// Deposit money into the selected account and check the balance
atm.deposit(500);
console.assert(atm.getBalance() === 1500, 'Balance of selected account should be 1500 after deposit');

// Withdraw money from the selected account and check the balance
atm.withdraw(200);
console.assert(atm.getBalance() === 1300, 'Balance of selected account should be 1300 after withdrawal');
