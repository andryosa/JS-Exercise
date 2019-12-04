let tbl =  document.querySelector('#bagua-table');
let td = document.querySelectorAll('td');



tbl.addEventListener('click', add)
// tbl.addEventListener('dblclick', remove)
// let textArea = document.createElement('textarea');
//     textArea.style.width = td.clientWidth + 'px';
//     textArea.style.height = td.clientHeigth + 'px';
//     textArea.className= 'edit-area';
//     textArea.value = td.innerHtML;
//     td.innerHtML = '';
//     td.appendChild(textArea);
//     console.log(textArea)

function add(e){
    let btn = document.querySelectorAll('button');
    // let txtAr = document.querySelectorAll('button');
    if(btn.length>0){
    for(i=0; i<2; i++){
        btn = document.querySelectorAll('button')
        btn[0].remove()
    }}
    // e.target.insertAdjacentHTML('beforeend', '<textarea name="" id="textArea" cols="0" rows="0"></textarea>');
    e.target.insertAdjacentHTML('beforeend', '<button>OK</button>');
    e.target.insertAdjacentHTML('beforeend', '<button class="edit-cancel">CANCEL</button>');
    
}


// .insertAdjacentHTML('beforeEnd', '<div class="edit-controls"><buton class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>')


