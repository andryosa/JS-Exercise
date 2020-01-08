let P = {name : 'Peter', want : 'Salad', age : 16}
let E = {name : 'Eren', want : 'Kebab', age : 30}
let L = {name: 'Lana', want: 'Mojito', age : 28}
let A = {name: 'Andri', want: 'Mojito', age : 15}

let guess = [P, E, L, A]

function invitation(guess2){
    let ul2 = document.getElementById('invitation')
    let ul3 = document.getElementById('notinvited')
    for(i=0; guess2.length; i++){
        if(guess2[i].age>18){
        let li;
        li = document.createElement('li')
        li.textContent = `Hi ${guess2[i].name} you are invited to my party`
        ul2.appendChild(li)
        li.style.background = 'blue'
        li.style.padding = '5px'
        li.style.listStyle = 'none'
        li.style.margin = '2px'
        }else{
        let li;
        li = document.createElement('li')
        li.textContent = `Hi ${guess2[i].name} sorry you are under 18, so I can't invite you`
        ul3.appendChild(li)
        li.style.background = 'red'
        li.style.padding = '5px'
        li.style.listStyle = 'none'
        li.style.margin = '2px'
        li.style.color = 'white'
        }
}}

invitation(guess)