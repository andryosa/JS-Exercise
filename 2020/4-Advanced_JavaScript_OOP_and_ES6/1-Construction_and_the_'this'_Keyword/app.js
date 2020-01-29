const animal = {
    kind: 'Cat',
    sounds: 'Miawch',
    legs: 4,
    tail: true,
    howManyLegs: function(){
        return `A ${this.kind} have ${this.legs} legs.`
    }
}
console.log(animal['howManyLegs']())

const person = {
    firstName: 'Jackson',
    lastName: 'Newton',
    birthDate: new Date('1-11-1987'),
    calculateAge : function(){
        const diff = Date.now()-this.birthDate.getTime()
        // now(in milisecond) and getTime() (in milisecond)
        // diff is the age in ms
        const ageDate = new Date(diff)
        // Date.now() return ms starting from 1970
        let now = new Date()
        // console.log(Math.abs(ageDate.getFullYear()-1970))
        return `${this.firstName} ${this.lastName} is ${Math.abs(ageDate.getFullYear()-1970)} years old.`
    }
}

console.log(person['calculateAge']())

function Person(name, dob){
    this.myName = name;
    this.birthdate = new Date(dob)
    this.calAge = function(){
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}
// the construction is a function used to build up and object
// a constructor function name must start with Capital letter
const trainer1 = new Person('Andri', '1991-04-30')
// to call a constructor we need new keyword
console.log(trainer1.calAge())
const trainer2 = trainer1
console.log(trainer2)