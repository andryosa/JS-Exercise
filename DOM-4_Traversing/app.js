let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child');
//const listItem = document.querySelector('li.collection-item:last-child');
//const listItem = document.querySelector('collection-item');


val = list;
val = listItem;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

console.log(val);

let list2 = document.querySelectorAll('li.collection-item');
console.log(list2)

function colorrr(list2){
for(i=0; i<list2.length; i++){
    if(list2[i].innerText==`List Item`){
        list2[i].style.color = `red`;
    }else{
        list2[i].style.color = `green`;
    }
}

}

colorrr(list2)



// List children
// let list = ul


list.children[0].style.color = 'blue';

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// counting how many child
val = list.children.length;
val = list.childElementCount;

// Get parent node 
val = listItem.parentNode;
val = listItem.parentElement;

console.log(val)

console.log(listItem.parentNode)

function colors(list){
    for(i=0; i<list.children.length; i++){
    if (list.children[i].style.color == 'red'){
        list.children[i].innerText = 'Done';
    }

}
}

colors(list)




listItem.previousSibling