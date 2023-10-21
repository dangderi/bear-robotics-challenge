export class ATM {
    constructor() {
        this.cardInserted = null;
        this.accountSelected = null;
    }

    insertCard(card) {
        this.cardInserted = card;
    }

    enterPin(pin) {
        if (this.cardInserted && this.cardInserted.pin === pin) {
            return true;
        } else {
            throw new Error('Invalid PIN');
        }
    }

    selectAccount(accountIndex) {
        if (this.cardInserted && accountIndex < this.cardInserted.accounts.length) {
            this.accountSelected = this.cardInserted.accounts[accountIndex];
            return true;
        } else {
            throw new Error('Invalid account selection');
        }
    }

    getBalance() {
        if (this.accountSelected) {
            return this.accountSelected.getBalance();
        } else {
            throw new Error('No account selected');
        }
    }

    deposit(amount) {
        if (this.accountSelected) {
            this.accountSelected.deposit(amount);
            return true;
        } else {
            throw new Error('No account selected');
        }
    }

    withdraw(amount) {
        if (this.accountSelected) {
            return this.accountSelected.withdraw(amount);
        } else {
            throw new Error('No account selected');
        }
    }
}
