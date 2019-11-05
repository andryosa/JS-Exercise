/*
if(something){

}
else if{

}
else{
    //do something else
}
*/

const id = 100;


// EQUAL TO

    if (id == 100){
    console.log(true)
    }else{
        console.log(false)
    }
    
// NOT EQUAL
    if(id !=100){
        console.log(true)
    }else{
        console.log(false)
    }


// TEST IF UNDEFINED
/*if(id == undefined){
    console.log(`id is ${id}`)
} else{
    console.log(`it is defined and the value is ${id}`)
}
*/


// GREATER OR LESS THANN
// if(id < 101){
//     console.log(`${id} is less than 101`)
// } else if(id < 101){
//     console.log(`${id} is less than 101`)
// }else{ console.log(`${id} is equal to 101`)}


// LOGICAL OPERATOR
const name = 'Filiz';
const otherName = 'Ruth';
const age = 70;
const otherAge = 80;


// And &&
// if(name === 'Filiz' && otherName === 'Ruth' || age === 70 && otherAge === 80){
//     console.log('Successful')
// }else{ console.log('Not Successful')}


// TERNARY OPERATOR
// function payLess(isFriend){
//     if(isFriend){
//         return 'Pay Less'
//     }else{return 'Pay More!!!!!!!!'}
// }

// function payLess2(isFriend2){
//     return ( isFriend2 ? `pay for the shisha ${2}$` : `pay for the shisha ${10}$`)
// }

// let isFriend = true;
// console.log(payLess(isFriend))

// console.log(payLess2(false))

// function payLess3(arr,name1,name2){
//     return (arr.includes(name1) ? `pay for the shisha ${2}$` : arr.includes(name2) ? `pay for the shisha ${2}$` : `others should pay for the shisha ${10}$`)
// }

// arr = ['Safwan', 'Sascha', 'Ruth']


// function selling(smrt,hdst,cvr){
//     if(smrt){
//         return smrt
//     }else if(smrt&&hdst){
//         return smrt+hdst/10
//     }
// }

// let smartphone = 300$

function checkDay(){
let currentDate = new Date()
let specDay = currentDate.getDay()
return specDay == 0 ? 'its Sunday': specDay == 6 ? 'its Saturday' : 'its not weekend!'
}

console.log(checkDay())


function checkWeekend(){
    let currentDate1 = new Date()
    let specDay1 = currentDate1.getDay()
    return specDay1 == 0 || specDay1 == 6 ? 'its weekend' : 'its not weekend!'
    }
    
    console.log(checkWeekend())