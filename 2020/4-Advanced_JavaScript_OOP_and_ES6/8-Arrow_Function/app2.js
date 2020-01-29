let fruits = ['Apple', 'Orange', 'Banana']


fruits.map(item=> item == 'Banana'? item : " " )

console.log(fruits.map(item=> item == 'Banana'? item : " " ))

console.log(fruits.map(item => {if(item == 'Banana')return item;else return " "})) 

// function choose(n){
//     const frts = () => fruits[0] + n;
//     return frts()
// }

// console.log(choose(fruits))