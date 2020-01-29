let animal = {
    eats : true
}

let rabbit = {
    jumbs: true
}

// console.log(animal)
// rabbit.__proto__= animal

// rabbit.__proto__.ears= 2


// console.log(rabbit.ears)

// function Animal(){
//     this.eats = iEats
// }

// let animal1 = new Animal(true)
// // console.log(animal1)

// let longerEars = {
//     earlength : 10,
//     __proto__: rabbit
// }

// let animal1 = new Animal(true)
// console.log(longEars.eats)

const user = { 
    name: 'username',
    pass: 'password',
    changePassword : function(newPass){
        this.pass = newPass
    }
}

const guest = {
    role: 'guest',
    authorities: ['read'],
    __proto__: user
}

guest.changePassword('myEasyPass')
console.log(guest.pass)

// write admin object
// admin inheirate guest
// admin has a function to add or delete authorities

let admin ={
    __proto__: guest,
    adduser: function(you){
        this.authorities.push(you)
    }
}
admin.adduser('edit')
console.log(admin)


function Product (iName, iPrice){
    this.name = iName
    this.price = iPrice
    this.getPrice= function(){
        return this.price
    }
}


const p1 = new Product('MyPhone', 250)
console.log(p1)

function Food(iName, iPrice, iVegan){
    Product.call(this, iName, iPrice)
    this.category = 'food';
    this.vegan = iVegan
}

const p2 = new Food('salad', 3, true)
console.log(p2.getPrice)


///////////////////////////////////////////


function Users2 (username, password)  {
    this.name = username
    this.pass = password
    changePassword = function (newPass) {
        this.pass = newPass
    }
}
const u1 = new Users2 ('sfks', 'realrealreal')
function Guest2 (username, password) {
    this.role = "bla bla bla"
    this.authorities = ['read']
    Users2.call(this, username, password)
}
const g1 = new Guest2('asdas', '12213213')
console.log(g1);




