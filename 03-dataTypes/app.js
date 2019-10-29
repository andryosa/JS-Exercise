// PRIMITIVE

// STRING
const name = 'Andri';
console.log(typeof name)

// NUMBER
const age = 45;
console.log(typeof age)

// Boolean
const hasChild = false;
console.log(typeof hasChild)

// NULL
const car = null;
console.log(typeof car)

// UNDEFINED
let test = undefined;
console.log(typeof undefined)

// SYMBOL
// const sym = Symbool()
// console.log(typeof sym)


// REFERENCE TYPES - Object
// Array
const hobbies = ['coding' , 'cooking'];
console.log(typeof hobbies)

// OBJECT literal
const address = {
    city : 'Dubai',
    Country : 'UAE',
}
console.log(typeof address)

// DATE
const today = new Date();
console.log(typeof today)


// REFERENCE vs PRIMITIVE TYPE
let x = {name: 'Andri', age :32}
let y = 1200
let a, b;
a = x;
console.log(a)

x.name = 'And'
console.log(a)

a.name = 'Andryosa'
console.log(a)

// primitive type =
// the "b" keep the same value, doesn't matter if "y" change it value

b = y;
console.log(b)

y = 1000;
console.log(b)