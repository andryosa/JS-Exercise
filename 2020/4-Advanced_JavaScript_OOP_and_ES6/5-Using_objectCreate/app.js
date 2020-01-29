let animal = {
    eats : true,
    doesEat: function (){
        return this.eats
    }
}
//Create a new object using Object.create
let rabbit =  Object.create(animal)
// let rabbit =  Object.create(animal, {
//     longEars:{value:2},
//     jumps:{value: true}
// })
//SAME BUT EASY WAY IN FOLLOWING SECTION:
rabbit.longEars = 2;
rabbit.jumps = true
console.log(animal.doesEat());
console.log(rabbit.doesEat());
console.log(rabbit);
const persoProtos= {
    greetings : function () {
        return `Hello Mrs ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName
    }
}
const person = Object.create(persoProtos)
person.firstName = 'Farah'
person.lastName = 'Quinn'
personçage = 28
person.martialStatus = 'single'
console.log(person);
console.log(person.greetings());
console.log(person.getsMarried());
const users = {
    greetings : function () {
        return `Hello ${userName}. Your password is ${password}. Your role is ${role}`
    }
}
const guest = Object.create(users)
guest.userName = 'Hercule'
guest.password = 12345
guest.role = 'guest'
console.log(guest);