// let input = document.querySelector('input')
// let textarea = document.getElementById('textarea')

// input.addEventListener('keyup', listen)
// input.addEventListener('keydown', listen)
// function listen(e){
//     if(e.type == 'keydown'){
//         textarea.innerHTML = e.key
//     }else if(e.type == 'keyup'){
//         textarea.innerHTML = e.key
//     }
// }
// console.log(input);
// console.log(view)


let input = document.querySelector(`input#one`)
console.log(input)
let textarea = document.querySelector(`textarea`)
input.onkeydown = edit
//input.onkeyup = edit
function edit(e){
    textarea.value= `${e.type} key=${e.key} code= ${e.code}`
}