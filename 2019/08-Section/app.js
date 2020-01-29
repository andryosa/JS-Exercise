// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(100, 143,156,133,123,144,136,-5);
const fruits = ['Apple',22, 'Banana',68, 'Orange', 4, 'Melon', 'almond'];
const mixed = [20, 'Hello', true, undefined, null, {a:1,b:2}, new Date()]

const nonArray = {x:5,y:6}
let val;

// Get Array Length
val = numbers.length;

// Check if is Array
val = Array.isArray(mixed)

// Access the Array Elements
val = numbers[2]
val = mixed[4]

// Edit into the Array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(33);
console.log(val);
console.log(typeof val);

// Mutating Arrays

// Add on the end
numbers.push(250);

// Add on the front
numbers.unshift(4);

// remove item from the end
numbers.pop();

// remove item from the start
numbers.shift();

// Splice values
const numbers1 =[43,56,33,23,44,36,5]
// val = numbers1.splice(2,3)

// Slice
val = numbers1.slice(1,2)

// Reverse
// numbers1.reverse();

val = numbers.concat(numbers2)

// Sorting Arrays
val = fruits.sort()
// use 'compare function'
val = numbers.sort(
    function(x,y){
        return x-y
    }
)
// console.log(numbers)
console.log(val)

function avResults(arr){
    let count =0
    for(i=0; i<arr.length; i++){
        if(arr[i]<50){
            count ++
        }
    }return `there are ${count/arr.length*100}% of students didn't pass the test.`
}
let result = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60]
console.log(avResults(result))

// Join
let str1 = 'Andri am I there Hi';
console.log(str1);
let arr = str1.split(' ');
arr.reverse();
str = arr.join(' ');
console.log(arr);
console.log(str);

function firstOver50(arr){
     return arr.find(function(num){
         return num > 50;
     })

}

let ages = [23,54,78,41,51,45,25]
console.log(firstOver50(ages))