import { Client } from "./Client.js"

export class Account{

    constructor(balance, agency, client){
        this._balance = balance
        this._agency = agency
        this._client = client
       
    }
    
    get client(){
        return this._client
    }
    set client(newValue){
        if(newValue instanceof Client)
        this._client = newValue
    }

    get balance(){
        return this._balance
    }

    get agency(){
        return this._agency
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