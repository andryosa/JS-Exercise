const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// console.log(form)

// Load all event listener
loadEventListener();

// Defining the function that Load all event listeners
function loadEventListener(){
    // Add Task event
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removing)
    clearBtn.addEventListener('click', clearr)
    // filter task event
    filter.addEventListener('keyup', filterTasks)
}

// Add task event Handler
function addTask(e){
    if(!taskInput.value){
        alert()
    }
    // Create li element
    const li = document.createElement('li')
    // style li with class
    li.className = 'collection-item'
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // create new link element
    let link = document.createElement('a')
    // give a style to the link using class
    link.className='delete-item secondary-content'
    // add icon html & class
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // append link to li
    li.appendChild(link)
    // append li tpo ul
    taskList.appendChild(li)
    // clean task input
    taskInput.value=''    

    e.preventDefault()
    // console.log(taskList)
    
}
// addTask()


function removing(e){
    // if(e.target.closest('a')){
    //     e.target.closest('li').remove()
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove()
        }
    }
}

function clearr(e){
while(taskList.firstChild){
    taskList.firstChild.remove()
}
}


// Filter Tasks
function filterTasks(e){
    Array.from(taskList.children).forEach(function(item){
        item.style.display = (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())? 'block': 'none')
    })
}
