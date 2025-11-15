/**
 * The function defines a bank account object with methods to show account details, deposit funds, and
 * withdraw funds.
 * @param accountNumber - The `accountNumber` parameter is a unique identifier assigned to a bank
 * account. In the provided code snippet, it is used to store the account number of the bank account
 * being created.
 * @param accountHolderName - The `accountHolderName` parameter is the name of the account holder
 * associated with the bank account. In the provided code snippet, the `accountHolderName` parameter is
 * set to "hari".
 * @param balance - The `balance` parameter in the `bankAccount` function represents the initial
 * balance of the bank account. It is the amount of money currently available in the account. In the
 * example you provided, the initial balance for the bank account created is 12035.
 * @returns An object with `deposit` and `withdraw` methods is being returned from the `bankAccount`
 * function.
 */
// function bankAccount(accountNumber, accountHolderName,balance){
// let  _accountNumber = accountNumber;
// let _accountHolderName = accountHolderName;
// let _balance = balance;

// function showAccountDetail(){
//     console.log(`Account Number : ${_accountNumber}`);
//     console.log((`Account Holder Name ${_accountHolderName}`));

//     console.log((`Balance: ${_balance}`));
    
// }
// function deposit(amount){
//     _balance += amount;
//     showAccountDetail();
//     }
//     function withdraw(amount){
//         if(_balance >= amount){
//             _balance -= amount;
//             showAccountDetail();
//         }else{
//             console.log("insuffient balance");
            
//         }
//     }
//     return{
//         deposit :deposit,
//         withdraw: withdraw
//     };
// }
// let myBankAccount = bankAccount("0270100","hari", 12035)
// myBankAccount.deposit(6551);
// myBankAccount.withdraw(1500);

//  js enscapulation using class
    class BankAccount {
        constructor(accountNumber, accountHolderName, balance) {
            this._accountNumber = accountNumber;
            this._accountHolderName = accountHolderName;
            this._balance = balance;
        }

        getAccountNumber() {
            return this._accountNumber;
        }

        getAccountHolderName() {
            return this._accountHolderName;
        }

        getBalance() {
            return this._balance;
        }

        deposit(amount) {
            if (amount > 0) {
                this._balance += amount;
                console.log(`Deposited ${amount}. New balance: ${this._balance}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        }

        withdraw(amount) {
            if (amount > 0 && amount <= this._balance) {
                this._balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
            } else {
                console.log("Invalid withdrawal amount or insufficient funds.");
            }
        }
    }
let myBankAccount = new BankAccount("0270100","hari", 12035)
myBankAccount.deposit(6551);
myBankAccount.withdraw(1500);
