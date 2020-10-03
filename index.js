import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"

const client1 = new Client("Ricardo",92381239, 533)
const client2 = new Client("Alice",283473487,738)

const currentAccount1 = new CurrentAccount(321, client1)
const currentAccount2 = new CurrentAccount(571, client2)

currentAccount1.deposit(500)
currentAccount1.withdraw(100)
currentAccount1.transfer(125,currentAccount2)



console.log(currentAccount1)

console.log(currentAccount2)

console.log(CurrentAccount.count)
