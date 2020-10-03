import { Client } from "./Client.js"

export class CurrentAccount{
    static count = 0
    agency

    _client
    get client(){
        return this._client
    }
    set client(newValue){
        if(newValue instanceof Client)
        this._client = newValue
    }

    _balance = 0
    get balance(){
        return this._balance
    }

    constructor(agency, client){
        this.agency = agency
        this._client = client
        CurrentAccount.count++
    }

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