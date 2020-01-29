// String

const name1 = 'Lana'
const name2 = new String('Lana')

if(name2 === 'Lana'){
    console.log('Yes')
}else{
    console.log('No')
}


console.log(name1)
console.log(name2)
console.log(typeof name2)

// Number
const num1 = 5
const num2 = new Number('55')
console.log(num2)

// Boolean
const bool1 = true
const bool2 = new Boolean('')
console.log(bool2)

// Object
const person1 = {name: 'Kinan'}
const person2 = new Object({name:'Kinan'})
console.log(person2)

//Arrays
const arr1 = [1, 2, 3, 4]
const arr2 = new Array(1,2,3,4)
console.log(arr1);
console.log(arr2);
console.log(typeof arr1);
console.log(typeof arr2);

//Regular Expression
const re1 = /\w+/
const re2 
= new RegExp ("\\w+")
console.log(re1);
console.log(re2);
console.log(typeof re1);
console.log(typeof re2); 
Collapse



