function bankAccount(accountNumber, accountHolderName,balance){
let  _accountNumber = accountNumber;
let _accountHolderName = accountHolderName;
let _balance = balance;

function showAccountDetail(){
    console.log(`Account Number : ${_accountNumber}`);
    console.log((`Account Holder Name ${_accountHolderName}`));

    console.log((`Balance: ${_balance}`));
    
}
function deposit(amount){
    _balance += amount;
    showAccountDetail();
    }
    function withdraw(amount){
        if(_balance >= amount){
            _balance -= amount;
            showAccountDetail();
        }else{
            console.log("insuffient balance");
            
        }
    }
    return{
        deposit :deposit,
        withdraw: withdraw
    };
}
let myBankAccount = bankAccount("0270100","hari", 12035)
myBankAccount.deposit(6551);
myBankAccount.withdraw(1500);