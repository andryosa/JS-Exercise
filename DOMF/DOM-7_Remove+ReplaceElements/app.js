// REPLACE ELEMENTS
// CREATE ELEMENT
const newHeading = document.createElement('h2')
// add id
newHeading.id = 'task-title';
// New Text Node
newHeading.appendChild(document.createTextNode('Easy Bitchy'))

// Get old Heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action') //same down
const parentElement = oldHeading.parentElement //Same Above

console.log(cardAction)
console.log(parentElement)

// REPLACE
// cardAction.replaceChild(newHeading, oldHeading);

// const link = document.getElementsByClassName('delete-item');

// const listText = document.querySelector('.collection-item').firstChild;
// console.log(listText)


// let newText = document.createTextNode('Something')

// let firstLi = document.querySelector('.collection-item')

// firstLi.replaceChild(newText,listText)



// Remove

// let lis = document.querySelectorAll('li');
// const list = document.querySelector('ul')

// Remove Child element
// const li2 = list.children[0]
// list.removeChild(li2)

let lis = document.querySelectorAll('li');

// lis.forEach(function(item){
//     if(item.innerText=='done'){
//         item.remove()
//     }
// })



// Classes & Attribute

const firstLi = document.querySelector('li:first-child')

const link = firstLi.children[0]

let val;

// Classes
val = link.className
val = link.classList
val = link.classList[0]
link.classList.add('test')
val = link


// Attribute

// val = link.getAttribute('href')
// link.setAttribute('href', 'http://google.com')
// val = link.getAttribute('title')
// val = link.hasAttribute('title')
// console.log(val)

// Array.from(lis).forEach(function(item){
//     if(item.innerText=='done'){
//         item.firstElementChild.setAttribute('href', 'https://digitalcareerinstitute.org/')
//     }
// })

// console.log(lis)
// document.querySelector('.delete-item').addEventListener('click',function(item){
//     lis[i].remove()
// })

Array.from(lis).forEach(function(item){
    item.firstElementChild.addEventListener('click', remove)
        
    }
)

function remove(e)
{e.target.parentElement.parentElement.remove()}