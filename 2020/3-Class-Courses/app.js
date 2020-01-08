// let A = {name: 'Andri', coursesPassed: 16};
// let L = {name: 'Lana', coursesPassed: 16};
// let D = {name: 'Daniel', coursesPassed: 10};
// let C = {name: 'Conrad', coursesPassed: 10};
// let M = {name: 'Michael', coursesPassed: 10};

let Class = [
    {name: 'Andri', HTML: 16, CSS: 20, JavaScript: 20},
    {name: 'Lana', HTML: 16, CSS: 16, JavaScript: 14},
    {name: 'Daniel', HTML: 16, CSS: 14, JavaScript: 14},
    {name: 'Conrad', HTML: 10, CSS: 10, JavaScript: 15},
    {name: 'Michael', HTML: 20, CSS: 16, JavaScript: 10},
    {name: 'John', HTML: 10, CSS: 10, JavaScript: 10}
]

function testResult(array){
    for(i=0; array.length; i++){
        let ul1 = document.getElementById('passed')
        let ul2 = document.getElementById('fail')
        if(array[i].HTML > 14 && array[i].CSS > 14 || array[i].HTML > 14 && array[i].JavaScript > 14 || array[i].CSS > 14 && array[i].JavaScript > 14){
            let li;
            li = document.createElement('li')
            li.textContent = `Congratulations ${array[i].name} you passed the Test!!!`
            ul1.appendChild(li)
            li.style.background = 'green'
            li.style.padding = '5px'
            li.style.listStyle = 'none'
            li.style.margin = '2px'
            li.style.color = 'white'
        }else{
            let li;
            li = document.createElement('li')
            if(array[i].HTML < 14 && array[i].CSS < 14 && array[i].JavaScript < 14){
                li.textContent = `Sorry ${array[i].name} you didn't pass all test` 
            }else if(array[i].HTML < 14 && array[i].JavaScript < 14){
                li.textContent = `Sorry ${array[i].name} you didn't pass HTML and JavaSript`
            }else if(array[i].HTML < 14 && array[i].CSS < 14){
                li.textContent = `Sorry ${array[i].name} you didn't pass HTML and CSS`
            }else{
                li.textContent = `Sorry ${array[i].name} you didn't pass CSS and JavaSript`
            }
            ul2.appendChild(li)
            li.style.background = 'red'
            li.style.padding = '5px'
            li.style.listStyle = 'none'
            li.style.margin = '2px'
            li.style.color = 'white'
        }
    }
}

testResult(Class)