import { Account } from "./Account.js"

export class CurrentAccount extends Account{
    static count = 0

    constructor(agency, client){
       super(0, agency, client)
        CurrentAccount.count++
    }

    withdraw(value){
        let rate = 1.1
        this._withdraw(value,rate)
    }
    

}