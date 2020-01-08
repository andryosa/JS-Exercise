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
    //Store to LS
    storeTaskInLocalStorage(taskInput.value)
    // clean task input
    taskInput.value=''    

    e.preventDefault()
    // console.log(taskList)

}


// Clean Task
function clearr(e){
    while(taskList.firstChild){
        taskList.firstChild.remove()
        
    }
    e.preventDefault()
    localStorage.clear('tasks')
    }


// Store Task
function storeTaskInLocalStorage(task){
    // Initialize the Tasks Array
    let tasks;
    // Getting the Task Array from LS
    if(localStorage.getItem('tasks')=== null){
        // Check if there is no Tasks yet, Define it as Empty Array
        tasks = []
    }else{ // Else take it ready and assign it to tasks array
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    // Push the task to it
    tasks.push(task)
    // Save it back to the LS
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
}


function removing(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove()
            // remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

// remove from LS
function removeTaskFromLocalStorage(taskItem){
    // Initialize the tasks Array
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        // Check if there is no Tasks yet, Define it as Empty Array
        tasks = []
    }else{ // Else take it ready and assign it to tasks array
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        
    // loop inside the tasks array
    for(i=0; i<tasks.length; i++){
        // if the task in the tasks item matches with other task: remove it from the tasks array
        if(tasks[i] == taskItem.textContent){
            tasks.splice(i,1)
        }
    }
    // afer the loop finish re set the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


// Filter Tasks
function filterTasks(e){
    Array.from(taskList.children).forEach(function(item){
        item.style.display = (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())? 'block': 'none')
    })
}

// gte Tasks from LS
function getTasks(){
    let tasks;
   
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(item){
        let li = document.createElement('li')
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(item))
        let a = document.createElement('a')
        a.className = 'delete-item secondary-content'
        let i = document.createElement('i')
        i.className = ' fa fa-remove'
        a.appendChild(i)
        li.appendChild(a)
        taskList.appendChild(li)
    })
}