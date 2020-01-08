let terminList = [ {day : 'Monday', Termin1 : '10.00', Termin2 : '13.00'},
                {day : 'Tuesday', Termin1 : '10.00', Termin2 : '13.00'},
                {day : 'Wednesday', Termin1 : '10.00', Termin2 : '13.00'},
                {day : 'Thursday', Termin1 : '10.00', Termin2 : '13.00'},
                {day : 'Friday', Termin1 : '10.00', Termin2 : '13.00'},
            ]

// let cust1 = {name: 'Willy', day : 'Monday', time : '10.00' }
// let cust2 = {name: 'Johnny', day : 'Friday', time : '13.00' }
// let cust3 = {name: 'Tommy', day : 'Wednesday', time : '10.00' }
// let cust4 = {name: 'Christian', day : 'Monday', time : '13.00' }
// let cust5 = {name: 'Felix', day : 'Tuesday', time : '10.00' }

let customer = [
                {name: 'Willy', day : 'Monday', time : '10.00' },
                {name: 'Johnny', day : 'Friday', time : '13.00' },
                {name: 'Tommy', day : 'Wednesday', time : '10.00' },
                {name: 'Christian', day : 'Monday', time : '13.00' },
                {name: 'Felix', day : 'Tuesday', time : '10.00' }
]
// console.log(customer)
function add(array, cust){
    let table = document.getElementById('table2')
    let tablerow = table.appendChild(document.createElement('tr'))
    let tablerow2 = table.appendChild(document.createElement('tr'))
    let tablerow3 = table.appendChild(document.createElement('tr'))
for(i=0; i<array.length; i++){
    
    let th = document.createElement('th')
    console.log(array[i].day)
    th.appendChild(document.createTextNode(array[i].day))
    tablerow.appendChild(th)
    th.style.background='yellow';
    th.style.border='solid 1px black';
    th.style.padding='10px'
    th.style.width='100px'

    let td1 = document.createElement('td')
    console.log(array[i].Termin1)
    // td1.appendChild(document.createTextNode(array[i].Termin1))
    tablerow2.appendChild(td1)
    td1.style.background='lightyellow';
    td1.style.border='solid 1px black';
    td1.style.padding='10px'
    td1.style.width='100px'

    let td2 = document.createElement('td')
    console.log(array[i].Termin2)
    // td2.appendChild(document.createTextNode(array[i].Termin2))
    tablerow3.appendChild(td2)
    td2.style.background='lightyellow';
    td2.style.border='solid 1px black';
    td2.style.padding='10px'
    td2.style.width='100px'

    if(array[i].day == cust[i].day && array[i].Termin1 == cust[i].time){
        td1.appendChild(document.createTextNode(cust[i].name))
    }else{
        td1.appendChild(document.createTextNode(array[i].Termin1))
    }

    if(array[i].Termin2 == cust[i].time){
        td2.appendChild(document.createTextNode(cust[i].name))
    }else{
        td2.appendChild(document.createTextNode(array[i].Termin2))
    }
}
}


add(terminList, customer)