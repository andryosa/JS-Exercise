// Local Storage vs Session Storage 
// They are exactly the same
// tho only difference :
// Local Storage keep the saved data even you close the browser and you need to clear it manually

// Session Storage doesn't keep the data when you close the browser and open it again


// set local storage item
//  the key and the value should be string
// localStorage.setItem('name', 'Andri')
// localStorage.setItem('age', '25')
// // set Session storage item
// sessionStorage.setItem('name', 'Mr.Harris)

// remove from local storage
// localStorage.removeItem('name')

// get property from local storage
// const x = 
// localStorage.getItem('name')
// console.log(x)

// const y = 
// localStorage.getItem('age')
// console.log(y)


// clear all from local storage
// localStorage.clear()
// console.log(x,y)


// function set(key, value){
//     localStorage.setItem(key, value)
// }

// function remove(key){
//     localStorage.removeItem(key)
// }

// function clear(){
    // localStorage.clear()
// }

// set('pet', 'dog')

// remove('pet')

 


// add multi properties with the same key but different values



document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    // console.log(task)
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }


    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    e.preventDefault()
    
    createLi()

    
})


  




function createLi(){
    let ul = document.querySelector('.collection').children
    //console.log(Array.from(ul.children))
    if(ul.length>0){
    Array.from(ul).forEach(function(item){
        item.remove()
    })
}
const tasks = JSON.parse(localStorage.getItem('tasks'));
if(tasks != null){
for(j=0; j<tasks.length; j++){
    console.log(tasks[j])
let li = document.createElement('li');
let a = document.createElement('a')
a.className='delete-item secondary-content'
let i = document.createElement('i')
i.className = 'fa fa-remove'
li.appendChild(a)
a.appendChild(i)
a.addEventListener('click', removing)
li.className = 'collection-item'
li.appendChild(document.createTextNode(tasks[j]))
document.querySelector('ul.collection').appendChild(li)
}
}}

function removing(e){
    const taskk = JSON.parse(localStorage.getItem('tasks')) 
    let ul = document.querySelector('.collection')
    console.log(Array.from(ul.children))
    Array.from(ul.children).forEach(function(item, i){
        if(e.target.closest('li')==item){
            taskk.splice(i,1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(taskk))
    createLi()
}

let clearLi = document.querySelector('.clear-tasks') 
clearLi.addEventListener('click', clearr)

function clearr(e){
    e.preventDefault()
localStorage.clear('tasks')
createLi()

}


// localStorage.clear()

// function addTasks(){
//     let h5 = document.createElement('h5');
//     // let keyy = storage.getItem(keyName)
//     // console.log(keyy)
//     h5.appendChild(document.createTextNode('Task'))
//     document.querySelector('div.card-action').appendChild(h5)
// }


// addTasks()