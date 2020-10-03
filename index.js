import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"
import {Savings} from "./Savings.js"

const client1 = new Client("Ricardo",92381239, 533)
const client2 = new Client("Alice",283473487,738)

const currentAccount1 = new CurrentAccount(321, client1)
const currentAccount2 = new CurrentAccount(571, client2)

const saving1 = new Savings(currentAccount1.agency, client1)

saving1.deposit(500)
saving1.withdraw(100)
saving1.transfer(125,currentAccount2)

currentAccount2.withdraw(10)


console.log(saving1)






