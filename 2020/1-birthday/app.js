// const today = new Date();
// let bday = new Date ('04-30-1991 01:45:00');

// let guy1 = {name: 'Peter', age : today.getFullYear()- bday.getFullYear(), gender : 'male'}

// function bbday(nama, hari){
//     console.log(hari.getFullYear() - nama.birthday.getFullYear(1991))
// }

// bbday(guy1, today)

// function call(nama, hari){
//     if( nama.age > 14){
//         return 'Mr.'+ nama.name
//     }
// }

// console.log(call(guy1, today))

const today = new Date();
let bday = new Date ('04-30-1991 01:45:00');

let guy1 = {name: 'Peter', lastName: 'Smith', birthday : bday, gender : 'male'}

function bbday(nama, hari){
    console.log(hari.getFullYear() - nama.birthday.getFullYear(1991))
}

// bbday(guy1, today)

function call(nama, hari){
    if(hari.getFullYear() - nama.birthday.getFullYear(1991)>18 && nama.gender=='male'){
        return 'Mr.'+ nama.lastName
    }else if(hari.getFullYear() - nama.birthday.getFullYear(1991)>18 && nama.gender=='female'){
        return 'Mrs.'+ nama.lastName
    }
}

console.log(call(guy1, today))

let P = {name : 'Peter', want : 'Salad', age : 16}
let E = {name : 'Eren', want : 'Kebab', age : 30}
let L = {name: 'Lana', want: 'Mojito', age : 28}
let A = {name: 'Andri', want: 'Mojito', age : 15}

let guess = [P, E, L, A]
let food = ['Kebab','Mojito', 'Burger']

function serve(guess1, food1){
    let ul = document.getElementById('table')

    for(i=0; guess1.length; i++){

    if(food1.includes(guess1[i].want)){
        let li;
        li = document.createElement('li')
        li.textContent = `Hi ${guess1[i].name} there is your ${guess1[i].want}`
        ul.appendChild(li)
        // console.log('Hi ' + guess1[i].name + ' there is your ' + guess1[i].want)
    }else{
        let li;
        li = document.createElement('li')
        li.textContent = `Hi ${guess1[i].name} sorry we dont have ${guess1[i].want}`
        ul.appendChild(li)
        // console.log('Hi ' + guess1[i].name + ' sorry we dont have ' + guess1[i].want)
    }

}
}

serve(guess, food)

