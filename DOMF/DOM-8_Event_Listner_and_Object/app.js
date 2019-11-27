// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('Hello guys! How are you?')

//     e.preventDefault();
// })


// function myFunc(e){
//     // console.log('Clicked!!')
//     let val;
//     val = e

//     val = e.target
//     val = e.target.id
//     val = e.target.className
//     val = e.target.classList


//     console.log(val)

// }

// console.log(document.querySelector('.clear-tasks'))

document.querySelector('.clear-tasks').addEventListener('click',function(e){
    e.preventDefault()
    e.target.classList.remove('black')
    e.target.style.backgroundColor = 'red'
    console.log(e.target)
})