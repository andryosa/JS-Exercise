// function visittheCity(city){
//     if (city = 'Hamburg'){
// return `you have visited ${city}`;}
// } 
// let cities = 'Hamburg'

// document.write(visittheCity(cities))

let cities2 = ['Hamburg', 'Istanbul', 'Frankfurt']
let citytoSearch = 'Istanbul'
let check = ['Istanbul', 'Hamburg', 'Frankfurt1']

// function cityIvevisited(x,arr1){
//     for(i=0; i<arr1.length; i++){
//     if (arr1[i] == x){
//         return `I have visited ${x}`
//     }return `I have not visited ${x}`
// }}

// document.write(cityIvevisited( citytoSearch, cities2))

function cityMatch(arr1,arr2){
    let arr3 = "";
    for(i=0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){
            if (arr1[i] == arr2[j]){
                arr3+=" "+arr2[j] + ' and '
                }
        }
    }

    if (arr3 === ""){
        return "I havent visited any city"
    }else{
        var lastIndex = arr3.lastIndexOf("and");
        return "I have visited "+ arr3.substring(0, lastIndex);
    }
    // return `I have visited ${arr3}`
}

document.write(cityMatch(cities2, check))