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