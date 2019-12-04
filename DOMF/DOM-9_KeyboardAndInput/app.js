const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// CLEAR  INPUT
taskInput.value = '';
//SUBMIT
//form.addEventListener('submit', runEvent)
//KEYDOWN
//taskInput.addEventListener('keydown', runEvent)
//KEYPRESS
//taskInput.addEventListener('keypress', runEvent)
//FOCUS
//taskInput.addEventListener('focus', runEvent);
//BLUR
//taskInput.addEventListener('blur', runEvent);
//CHANGE
select.addEventListener('change', runEvent);
//Preparing the EVENT HANDLER (FUNCTION);
//we have the EVENT TARGET (Property); every event has an event handler;
//Event Handler
function runEvent(e){
    //e.preventDefault()
    console.log(`Event Type: ${e.type} Value: ${e.target.value}`);
    heading.innerText = e.target.value;
}

select.addEventListener('change', function (e) {
    document.querySelector('#task-title').innerHTML = select.value
    const li = document.querySelectorAll('li');
    console.log(li[select.value-1]);
    li[select.value-1].style.backgroundColor = 'red';
    //if (select.value == 1)
     //   document.querySelector('#task-title').style.backgroundColor = 'red'
   // else if (select.value == 2) document.querySelector('#task-title').style.backgroundColor = 'green'
    //else(document.querySelector('#task-title').style.backgroundColor = 'blue')
})
