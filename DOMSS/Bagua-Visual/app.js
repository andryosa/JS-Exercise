
let table = document.getElementById('bagua-table')



let editingTd

table.addEventListener('click', makeTdEditable)

// 3possible targets
let target = event.target.closest('.edit-cancel, .edit-onkeydown,td')
if(target.className == '.edit-cancel'){
    finishTdEdit()
}else if(target.className == '.edit-ok'){
    finishTdEdit()
}else if(target.nodeName == 'TD'){
    makeTdEditable(target)
}


function finishTdEdit(td,isOk){
    console.log(td)
    if
    (isOk){
        td.innerHTML=textArea.value
    }
}
// Event Handler : currently the real event target is the td
function makeTdEditable(event){
    let td = event.target
    editingTd = {
        elem : td,
        data : td.innerHTML
    }
    // td is in edit state, CSS also styles the area inside
    td.classList.add('edit-td')

    // creating my text area
    let textArea = document.createElement('textarea')
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
    textArea.value = td.innerHTML;
    td.innerHTML= ''
    td.appendChild(textArea)
    textArea.focus();

    // td.insertAdjacentHTML("beforeend", '<button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button>')

}

