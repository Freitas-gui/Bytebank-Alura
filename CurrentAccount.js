export class CurrentAccount{
    agency
    client

    #balance

    withdraw(value){
        if(this._balance >= value && value > 0)
            this._balance -= value
    }

    deposit(value){
        if(value <= 0)
            return
        else
            this._balance += value
    }

    transfer(value, account){
        if(value > this._balance)
            return
        this.withdraw(value)
        account.deposit(value)
    }

}