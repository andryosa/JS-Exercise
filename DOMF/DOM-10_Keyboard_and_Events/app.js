const btnTry = document.getElementById('try')
btnTry.addEventListener('click', focusMethod)


let inn = ['inpt1','inpt2','inpt3']
    let i = 0
    let item = document.getElementById(inn[0]);
function focusMethod(){
    item.classList.remove('bg-info')
    item = document.getElementById(inn[i])
    item.focus()
    // console.log(item)
    item.classList.add('bg-info')
    i++
    if(i>2){
        i=0
    }
}