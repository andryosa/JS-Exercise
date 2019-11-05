/*
let exp = value;
switch (exp) {
    case value1:
        do statement 1
        break;
    case value2:
        do statement 2
        break;
    ....
    default
    do so,ething else
}
*/




function giveColor(){
    switch (days){
        case 'Sunday':
        console.log('Red')
        break;
      
        case 'Monday':
        console.log('Yellow')
        break;
      
        case 'Tuesday':
        console.log('Dark Blue')
        break;
      
        case 'Wednesday':
        console.log('Olive Green')
        break;
      
        case 'Thursday':
        console.log('Black')
        break;
      
        case 'Friday':
        console.log('White')
        break;
      
        case 'Saturday':
        console.log('Pink')
        break;
      
        default:
        console.log('rainbow')
      }
}

let days = 'Saturday';
console.log(giveColor(days))