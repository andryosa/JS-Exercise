// var, let, const00


/* JavaScript have 2 different level of Scope

1. Local Scoop
Old Generation - functiobn scope,
new Generation - function scope,
{block} scope

2. Global Scope
*/


// Examples:
// declare a variable with var
var name = 'John Doe';
console.log(name);


// declare a variable with let
let email = 'address@domain.suffix'
console.log(email)


// var G & L Scope
function show(){
    var num = 5;
    console.log(num);
}

var num = 9;
show();
console.log(num);
{
    var num = 7;
    console.log(num);
}
console.log(num);

// let & const G & L Scope
function print(){
    let number = 107;
    console.log(number)
}

{
    let number = 112;
    console.log(number)
}

let number = 109
console.log(number)
print();

// Init - Declaring a variables without giving it a value
// this is allowed only using var or let

var someThing
console.log(typeof someThing)


// Variable Name can consisit of numbers, , letters, _ , $
// Can not start with numbers

let Name1 = 'Olli';


// Recomended with camelCase

let firstName = 'Ali';
let secondName = 'Olli';
let fullName = firstName+secondName;
console.log(fullName);


// const

// const name = 'Joe';
// console.log(name);


// Cannot reAssign a new Value
// name = 'Steve';
// Can NOT init
// const someThing;
// exceptions to const
//Onjects & Arrays can be mutated
// Object Example:

const person = {
    name: 'Ray',
    age: 23,
}
person.name = 'Jay';
person.age = 25;
console.log(person);
/* But not li9ke bellow:
person = {
    name: 'Jay',
    age: 27
}*/


function greeting(greetWord, name){
    greetPhrase = `${greetWord} ${name}`
    return greetPhrase
}

const greetingMe = greeting('Hi', 'Me')
console.log(greetingMe)


// Second Exercise

function findPhrase(text, phrase){
    textArr = text.split(" ")
    newArr = []
    for(i=0; i<textArr.length; i++){
        if (textArr[i]==phrase){
            newArr.push(textArr[i])
        }
    }
    return newArr.length
}
let text1 = 'The rabbit was jumping all the time'
let phrase1 = 'rabbit'
const num1 = findPhrase(text1,phrase1)
console.log(num1)

