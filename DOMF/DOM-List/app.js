const items = document.getElementsByClassName('collection-item')
console.log(items)
console.log(items[0])
items[0].style.color = 'red';
items[2].textContent = 'Hello Jay'


// document.getElementsByTagName('li')

let lis = document.getElementsByTagName('li');
let color = ['red', 'orange', 'yellow', 'yellowgreen', 'blue']
let colorName = ['red', 'orange', 'yellow', 'green', 'blue']

    for(i=0; i<items.length; i++){
    items[i].textContent = `${colorName[i]}`;
    items[i].style.color = `${color[i]}`;
    items[i].style.fontSize = `x-large`;
    
    }


lis = Array.from(lis)

lis.forEach(function(item, index){
    console.log(item)
    item.textContent=`${index}: Hellow World`
    item.innerHTML = `<span>Spaan</span>`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')

liOdd.forEach(function(li,index){
    li.style.background = '#f4f4f4'
})

const liEven = document.querySelectorAll('li:nth-child(even)')

liEven.forEach(function(li,index){
    li.style.background = 'lightgrey'
})

// const even = document.getElementById('listt')


// for(i=0; i<items.length; i++){
//     items[i].textContent = `${i*2}`;}

// const li = document.createElement('li');
// li.className = 'collection-item';
// document.querySelector('ul.collection').appendChild(li)

function printEven(num){
    for(let i=0; i<num.length; i++){
        if(i%2 ===  0){
            num[i].textContent= `${num[i]}`
        }
    }
}

printEven(items)