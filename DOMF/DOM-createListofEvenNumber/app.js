function listEven(arr){
    const body = document.querySelector('body');
    const ul = document.createElement('ul')
    body.appendChild(ul);
    ul.className= 'list-group';
    arr.forEach(function(item){
        if(item % 2 == 0){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(item))
        ul.appendChild(li);
        li.style.border = '1px solid';
        li.style.backgroundColor = 'yellowgreen';
        li.style.paddingLeft = '20px';
        li.style.padding = '5px'
        }
    });
}

let arrayNumb = [1,2,3,4,5,6,7,8,9,10,11,12]
listEven(arrayNumb)
