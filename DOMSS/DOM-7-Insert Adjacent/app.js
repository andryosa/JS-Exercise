// const btnTry = document.querySelector('#try')
// console.log(btnTry)

// btnTry.addEventListener('click', myFunction)

// // Event Handler

// function myFunction(){
//     let heading = document.getElementById('myH2')
//     console.log(heading)
//     heading.insertAdjacentHTML("beforeend","<p>My New Paragrapf</p>")
// }



// Plus
const plus = document.querySelector('#plus')
plus.addEventListener('click', pluss)

function pluss(){
    const numb1 = document.querySelector('#numb1').value
// const num1 = numb1.value


const numb2 = document.querySelector('#numb2').value
// const num2 = numb2.value

    let heading2 = document.getElementById('try2')
            heading2.insertAdjacentHTML('afterend',eval(`${numb1}+${numb2}`))
    
}


// Minnus
const min = document.querySelector('#minnus')
min.addEventListener('click', minnus)

function minnus(){
    const numb1 = document.querySelector('#numb1').value
// const num1 = numb1.value


const numb2 = document.querySelector('#numb2').value
// const num2 = numb2.value

    let heading2 = document.getElementById('try2')
            heading2.insertAdjacentHTML('afterend',eval(`${numb1}-${numb2}`))
    
}
