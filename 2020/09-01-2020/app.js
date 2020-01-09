// let month = document.getElementById('month')
// let monthName = document.createElement('h2')
// monthName.textContent= 'January 2020'
// month.appendChild(monthName)

// let arrDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let arrDate = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

// let calDate = Date

// let calendar = document.getElementById('calendar') 
// month.appendChild(calendar)

// function putDays(array){
//     for(i=0; i<array.length; i++){
//        let days = document.createElement('th')
//        days.textContent = array[i]
//        calendar.appendChild(days)
//     }
// }
// putDays(arrDays)


// function putDate(array){
//     let dateRow = document.createElement('tr')
//     calendar.appendChild(dateRow)
//     for(i=0; i<array.length; i++){
//         let date = document.createElement('td')
//         date.textContent = array[i]
//         dateRow.appendChild(date)
//     }
// }

// putDate(arrDate)

// __________________________________________

// let today = new Date()
// let currentMonth = today.getMonth()
// let currentYear = today.getFullYear()

// let months = [
// 'Jan',
// 'Feb',
// 'Mar',
// 'Apr',
// 'May',
// 'Jun',
// 'Jul',
// 'Aug',
// 'Sep',
// 'Oct',
// 'Nov',
// 'Dec']

// let monthAndYear = document.getElementById('monthAndYear')

// showCalendar(currentMonth, currentYear)

// function showCalendar(month, year){
//     let firstDay = new Date(year,month).getDay()
//     let daysInMonth = 32 - new Date(year, month, 32).getDate()

//     let tbl = document.getElementById('calendar-body')
    
//     tbl.innerHTML = ''

//     monthAndYear.innerHTML = months[month] +' '+year

//     let date = 1

//     for(let i =0; i < 6; i++){
//         let row = document.createElement('tr')

//         for(let j = 0; j<7; j++ ){
            
//             if(i === 0 && j < firstDay){
//                 let cell = document.createElement('td')
//                 let cellText = document.createTextNode('');
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//             }else if(date > daysInMonth){
//                 break;
//             }else{
//                 let cell = document.createElement('td')
//                 let cellText = document.createTextNode(date)
//                 cell.appendChild(cellText)
//                 row.appendChild(cell)
//             }

//             date++
//         }

//         tbl.appendChild(row)
//     }
// }

// function previous(){
//     currentYear = currentMonth === 0? currentYear - 1: currentYear
//     currentMonth = currentMonth === 0? 11: currentMonth - 1
//     showCalendar(currentMonth, currentYear)
// }

// function next(){
//     currentYear = currentMonth === 11 ? currentYear + 1: currentYear
//     currentMonth = (currentMonth + 1) % 12
//     showCalendar(currentMonth, currentYear)

// }



// ____________________________

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}