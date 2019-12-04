let firstDiv = document.getElementById('firstDiv')


// make its background red
firstDiv.style.background = 'red'
firstDiv.style.color = 'white'

// Also there is a global variable named by id that references the element :

// sDiv is a reference to DOM-element with id='sDiv'

// sDiv.style.background = 'blue'
// sDiv.style.bcolor = 'white'

// That's unles we declare a JavaScript variable with the same name, then it takes precedence:

let sDiv = 5;
// Now sDiv is 5, not a reference to <div id='sDiv'>

console.log(sDiv)


let table = document.getElementById('firstTable')
let th = document.getElementById('th')
let tr1 = document.getElementById('tr1')
let tr2 = document.getElementById('tr2')
let tr3 = document.getElementById('tr3')


table.style.margin = '5px'
table.style.width = '50%'
// table.style.border ='1px grey solid'
// table.style.background ='lightgrey'

th.style.background= 'grey'
// th.style.margin= '2px'
tr1.style.background= 'lightgrey'
tr2.style.background= 'darkgrey'
tr3.style.background= 'lightgrey'

console.log(tr1)




let table2 = document.getElementById('secondTable')
const tr20 = document.createElement('tr')
const tr21 = document.createElement('tr')
const tr22 = document.createElement('tr')
const tr23 = document.createElement('tr')


document.querySelector('table#secondTable').appendChild(tr20)
document.querySelector('table#secondTable').appendChild(tr21)
document.querySelector('table#secondTable').appendChild(tr22)
document.querySelector('table#secondTable').appendChild(tr23)
console.log(table2)

for(i=0; i<3; i++){
    table2.firstElementChild.appendChild(document.createElement('th'))
}
for(i=0; i<3; i++){
    table2.children[1].appendChild(document.createElement('td'))
}
for(i=0; i<3; i++){
    table2.children[2].appendChild(document.createElement('td'))
}
for(i=0; i<3; i++){
    table2.children[3].appendChild(document.createElement('td'))
}

tr20.firstElementChild.appendChild(document.createTextNode('Number'))
tr20.children[1].appendChild(document.createTextNode('Name'))
tr20.children[2].appendChild(document.createTextNode('Etc'))

tr21.firstElementChild.appendChild(document.createTextNode('1'))
tr21.children[1].appendChild(document.createTextNode('Name1'))
tr21.children[2].appendChild(document.createTextNode('empty'))

tr22.firstElementChild.appendChild(document.createTextNode('2'))
tr22.children[1].appendChild(document.createTextNode('Name2'))
tr22.children[2].appendChild(document.createTextNode('empty'))

tr23.firstElementChild.appendChild(document.createTextNode('3'))
tr23.children[1].appendChild(document.createTextNode('Name3'))
tr23.children[2].appendChild(document.createTextNode('empty'))


table2.style.margin = '5px'
table2.style.width = '50%'
tr20.style.background= 'grey'
tr21.style.background= 'lightgrey'
tr22.style.background= 'darkgrey'
tr23.style.background= 'lightgrey'


function createTable(){
    // body reference
    const body = document.querySelector('body');
    // create elements <table> and <tbody>
    const tbl = document.createElement('table')
    const tblBody = document.createElement('tbody');

    // cells creation
    for(let i=0; i<=3; i++){
        // table row creation
        const row = document.createElement('tr');
        if(i%2==0){
            row.style.background='orange'
        }else{
            row.style.background='yellow'
        }
        for(let j=0; j<3; j++){
            // create Elemet <td> and text Node
            // Make text Node as content of <td>
            // put <td> at the end pof table row
            const cell = document.createElement('td');
            // cell.style.background = 'orange';
            cell.style.height = '50px'
            const cellText = document.createTextNode('cell is row'+i+' , and column'+j);
            cell.id=(j+""+i);
            cell.appendChild(cellText)
            row.appendChild(cell);
        }
        // row add to the end ot table body
        tblBody.appendChild(row);
    }
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put the <table> inside the <body>
    body.appendChild(tbl)
    // adding tbl border attribute
    tbl.setAttribute('border','4')

}

createTable()

// const td00 = document.getElementById('00')
// td00.style.background = 'orange';

const t10d = document.getElementById('10')
td10.style.background = 'yellow';

// const td20 = document.getElementById('20')
// td20.style.background = 'orange';


// const td01 = document.getElementById('01')
// td01.style.background = 'yellow';

const td11 = document.getElementById('11')
td11.style.background = 'orange';

// const td21 = document.getElementById('21')
// td21.style.background = 'yellow';


// const td02 = document.getElementById('02')
// td02.style.background = 'orange';

const td12 = document.getElementById('12')
td12.style.background = 'yellow';

// const td22 = document.getElementById('22')
// td22.style.background = 'orange';


// const td03 = document.getElementById('03')
// td03.style.background = 'yellow';

const td13 = document.getElementById('13')
td13.style.background = 'orange';


// const td23 = document.getElementById('23')
// td23.style.background = 'yellow';
