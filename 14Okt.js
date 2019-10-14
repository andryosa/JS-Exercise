// function visittheCity(city){
//     if (city = 'Hamburg'){
// return `you have visited ${city}`;}
// } 
// let cities = 'Hamburg'

// document.write(visittheCity(cities))

let cities2 = ['Hamburg', 'Istanbul', 'Frankfurt']
let citytoSearch = 'Istanbul'
let check = ['Istanbul', 'Hamburg']

// function cityIvevisited(x,arr1){
//     for(i=0; i<arr1.length; i++){
//     if (arr1[i] == x){
//         return `I have visited ${x}`
//     }return `I have not visited ${x}`
// }}

// document.write(cityIvevisited( citytoSearch, cities2))

function cityMatch(arr1,arr2){
    let arr3 = [];
    for(i=0; i<arr1.length; i++){
        for(j=0; j<arr1.length; j++){
            if (arr1[i] == arr2[j]){
                arr3.push(arr2[j])
                }
        }
    }return `I have visited ${arr3}`
}

document.write(cityMatch(cities2, check))