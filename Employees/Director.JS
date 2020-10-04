import {Employee} from "./Employees.js"

export class Director extends Employee{
    constructor(name, salary, cpf){
        super(name, salary, cpf)
        this.bonus = 2
    }
}