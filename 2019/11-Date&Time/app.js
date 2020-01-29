let val;
//Date Constructor
const today = new Date();
let birthday = new Date ('04-30-1991 01:45:00');


// Date Methods

val = today.getMonth();
// The getMonth return the month in the specified month
// according to local time, as a zero-based value
// (where zero indicates the first month of the year).


val = today.getDate(); 
// The getDate() method return the day of the month for specified dare according to local time.


val = today.getFullYear()
// The getFullYear()return the four digit of the year.


val = today.getHours()
// The getHour() method return the day of the hour for specified dare according to local time.


val = today.getMinutes()
// The getMinutes() method return the day of the minutes for specified dare according to local time.

val = today.getSeconds();
// The getSeconds() method return the day of the minutes for specified dare according to local time.

val = today.getMilliseconds();

val = today.getTime();


birthday.setMonth(3);
birthday.setDate(30);
birthday.setFullYear(1991);
birthday.setHours(1);
birthday.setMinutes(45);
birthday.setSeconds(00);



console.log(val)




function booking(dat1,dat2){
    if(dat1.getTime() < dat2.getTime()){
        return `your book for the event on ${eventDay} is already reserved`
    } else{ return `this event is already finish.`}
}

let thisDay = new Date();
let eventDay = new Date ('04-30-2020 01:45:00')

console.log(booking(thisDay,eventDay))


function checkHour(){
    let date = new Date();
    let hour = 19
    console.log(hour)
    return hour < 11 ? `Good Morning` :
    hour < 18 ? `Good Afternoon` :
    hour < 5 ? `Good Evening` : 'there is no time shown';
}

checkHour()