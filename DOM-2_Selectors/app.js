// document.getElementById()
// console.log(document.getElementById('task-title'))

// Get things from the element

// console.log(document.getElementById('task-title').id)



// ----------------------------------------------------
// #CHANGING THE STYLE#

// document.getElementById('task-title').style.background = '#333'

// document.getElementById('task-title').style.color = '#fff'

// document.getElementById('task-title').style.padding = '6px'

// #or#

const tasksTitle = document.getElementById('task-title');

tasksTitle.style.background = 'greenyellow'

tasksTitle.style.color = '#fff'

tasksTitle.style.padding = '6px'


// Change the Content
tasksTitle.textContent = 'Task List'

tasksTitle.innerText = 'Task List (innerText)'

tasksTitle.innerHTML = '<span style="color:white">Task List</span>';

document.querySelector('li').style.color = 'orange'

document.querySelector('li:last-child').style.color = 'green'

document.querySelector('li:nth-child(3)').style.color = 'purple'

document.querySelector('li:nth-child(4)').textContent = 'List Number 4'

document.querySelector('li:nth-child(odd)').style.background = 'purple'

document.querySelector('li:nth-child(odd)').style.color = '#fff'

document.querySelector('li:nth-child(even)').style.background = 'turquoise'


// ----------------------------------------------------



