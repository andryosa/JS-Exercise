function Student () {
    this.name = 'Maria'
    this.gender = 'Female'
}
Student.prototype.age = 15;
Student.prototype.sayHi = function (){
   return `Hi ${this.name}`
}
let studOne = new Student ()

for (x in studOne){
   console.log(x, studOne[x]);
}
let studTwo = new Student ()
console.log(studOne);
console.log(studTwo);
console.log(studOne.sayHi());
//Protype is invisible propery of an object. 
//It returns prototype object of a function to which it links to.
//Person Constructor
function Person (f, l, dob) {
   this.firstName = f;
   this.lastName = l;
   this.birthdate = new Date (dob);
//    this.calculateAge = function () {
//         const diff = Date.now() - this.birthdate.getTime();
//         const ageDate = new Date(diff)
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//    }
}
//Calculate Age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
person1 = new Person ('Mustafa','Osman','08-09-1987')
console.log(person1.calculateAge());
//Gets Married
let person2 = new Person('Maria', 'Smith', '08-19-1996')
Person.prototype.getsMarried = function (newLastName){
    this.lastName = newLastName
}
person2.getsMarried(person1.lastName)
console.log(person2);
console.log(person2.lastName);
//Get Full Name
Person.prototype.getFullName = function (){
    return this.firstName +' '+ this.lastName
}
console.log(person1.getFullName());

function Animals (name, legs) {
    this.animalName = name;
    this.animalLegs = legs
}
animal1 = new Animals('Cat', 4)
Animals.prototype.calLegs = function () {
    return this.animalLegs
}
console.log(animal1.calLegs());
Collapse



