const arr = [1,4,2,6,23,'str',7,5,55]
let max;
max = arr[0];
for(i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}


// Spread operator ...someting using spread in array

console.log(Math.max(...arr))
console.log(...arr)


// usimng spread in function

function avrage(...numbers){
    let sum = 0
    for(i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return numbers.length
}

let x = avrage(1,2,3,10,5,6);
console.log(x)

// using spread in object

let obj0= {
    name : 'Jay',
    age : 28
}

let obj1= {
    secondName : 'second name',
    gender : 'male'
}

let obj2 = {...obj0, ...obj1, nationality:'German'}
console.log(obj2)

// Destructuring:
let ar = [10, "first String", 'second String']
// let firstString = ar[1]
// let secondString = ar[2]
let [,firstString, secondString] = ar;
console.log(firstString)
console.log(secondString)

 
const ob = {firstName: 'Mostafa', lastName: 'Othman', age: 50}
const {firstName, age} = ob;
console.log(firstName);
console.log(age)


// Rest operators
const numbers = [1,2,3] // 1 [2,3]
const [fnumber, ...rNumbers] = numbers
console.log(fnumber) // => 1
console.log(rNumbers) // => [2,1]
const [...allElement] = document.querySelectorAll('.bla')
