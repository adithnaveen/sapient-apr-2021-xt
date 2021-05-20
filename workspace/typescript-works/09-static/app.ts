
// working with static 
class Account {
    private accountId:number; 
    private balance:number;
    private  customerName:string;
	constructor( accountId:number,  balance:number, customerName:string) {
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
	static counter: number = 100; 
	
	static getNumber() {
	  return Account.counter++; 
	}
}


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
