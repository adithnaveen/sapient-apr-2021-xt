// working with static 
class Account {
    constructor(accountId, balance, customerName) {
        this.accountId = accountId;
        this.balance = balance;
        this.customerName = customerName;
    }
    get getCustomerName() {
        return this.customerName;
    }
    get getAccBalance() {
        return this.balance;
    }
    get getAccAccountId() {
        return this.accountId;
    }
    static getNumber() {
        return Account.counter++;
    }
}
Account.counter = 100;
let a1 = new Account(Account.getNumber(), 1000, "Harry");
let a2 = new Account(Account.getNumber(), 2000, "Barry");
let a3 = new Account(Account.getNumber(), 2000, "Barry");
let a4 = new Account(Account.getNumber(), 2000, "Barry");
let a5 = new Account(Account.getNumber(), 2000, "Barry");
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
