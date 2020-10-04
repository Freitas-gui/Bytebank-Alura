// Abstract class

import { Client } from "../Client.js"

export class Account{

    constructor(balance, agency, client){
        if(this.constructor == Account)
            throw new Error ("You shouldn't instance an object of kind account directly.")
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
        throw new Error("This method is abstract.")
    }

    _withdraw(value, rate){
        let value_with_rate = value * rate
        if(this._balance >= value_with_rate && value > 0)
            return this._balance -= value_with_rate
        return 0
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