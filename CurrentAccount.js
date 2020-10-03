import { Account } from "./Account.js"

export class CurrentAccount extends Account{
    static count = 0

    constructor(agency, client){
       super(0, agency, client)
        CurrentAccount.count++
    }

    withdraw(value){
        let rate = 1.1
        let value_with_rate = value * rate
        if(this._balance >= value_with_rate && value > 0)
            this._balance -= value_with_rate
    }
    

}