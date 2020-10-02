import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"

const client1 = new Client()
const client2 = new Client()

client1.name = "Ricardo"
client1.cpf = 92381239
client1.rg = 533

client2.name = "Alice"
client2.cpf = 234234
client2.rg = 122


const currentAccount1 = new CurrentAccount()
currentAccount1.client = client1

const currentAccount2 = new CurrentAccount()
currentAccount2.client = client2


currentAccount1.agency = 323
currentAccount1._balance = 200

currentAccount2.agency = 323
currentAccount2._balance = 0


currentAccount1.withdraw(100)
currentAccount1.transfer(125,currentAccount2)


console.log(currentAccount1)

console.log(currentAccount2)