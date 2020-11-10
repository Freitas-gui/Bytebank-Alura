// Testes Employees
import {Client} from "./Client.js"
import {Director} from "./Employees/Director.js"
import {Manager} from "./Employees/Manager.js"
import {AuthenticationSystem} from "./Employees/AuthenticationSystem.js"

const client1 = new Client("Guilherme", 2000, 283478247)
const manager2 = new Manager("Joana", 1000, 902384093)

client1.sigin(12345)

console.log(AuthenticationSystem.verifyPassword(12345, client1))

//Testes Accounts

/*import {Client} from "./Client.js"
import {CurrentAccount} from "./Accounts/CurrentAccount.js"
import {Savings} from "./Accounts/Savings.js"

const client1 = new Client("Ricardo",92381239, 533)
const client2 = new Client("Alice",283473487,738)

const currentAccount1 = new CurrentAccount(321, client1)
const currentAccount2 = new CurrentAccount(571, client2)

//const conta = new Account(0, 571, client2)


const saving1 = new Savings(currentAccount1.agency, client1)

saving1.deposit(500)
saving1.withdraw(100)
saving1.transfer(125,currentAccount2)

currentAccount2.withdraw(10)


console.log(saving1)
*/





