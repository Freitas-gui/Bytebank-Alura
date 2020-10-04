import { Account } from "./Account.js"

export class Savings extends Account{
    constructor(agency, client){
        super(0, agency, client)
    }

    withdraw(value){
        let rate = 1
        this._withdraw(value,rate)
    }
}