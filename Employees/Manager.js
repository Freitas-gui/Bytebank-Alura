import {Employee} from "./Employees.js"

export class Manager extends Employee{
    constructor(name, salary, cpf){
        super(name, salary, cpf)
        this.bonus = 1.1

    }
}