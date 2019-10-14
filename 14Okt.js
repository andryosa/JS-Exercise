// function visittheCity(city){
//     if (city = 'Hamburg'){
// return `you have visited ${city}`;}
// } 
// let cities = 'Hamburg'

// document.write(visittheCity(cities))

let cities2 = ['Hamburg', 'Istanbul', 'Frankfurt']
let citytoSearch = 'Istanbul'

function cityIvevisited(x,arr1){
    for(i=0; i<arr1.length; i++)
    if (arr1[i] == x){
        return `I have visited ${x}`
    }return `I have not visited ${x}`
}

document.write(cityIvevisited( citytoSearch, cities2))