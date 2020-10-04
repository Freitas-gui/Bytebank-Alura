export class Employee{
    constructor(name, salary, cpf){
        this._name = name
        this._salary = salary
        this._cpf = cpf
        this.bonus = 1

        this._password
    }

    sigin(password){
        this._password = password
    }

    authenticate(password){
        if(password == this._password)
            return true
        return false
    }

    get cpf(){
        return this._cpf
    }
}