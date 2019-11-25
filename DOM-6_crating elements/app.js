// Create Element
const li = document.createElement('li')

// Add Class
li.className = 'collection-item'

// Add Id
li.id = 'new-item'

// Add Attributs
li.setAttribute('title','New Item')

// Create text mode and append
li.appendChild(document.createTextNode('Hello FBw4'))

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li)
console.log(li)

// let guesss= prompt('Choose the number', '1-10');
// let correctNumb= 4
// let chances = 3

// function guess(numbss,guess,chance){
//     while(guess!==numbss){
//         // let user = parseInt(prompt(`choose a number! you have ${chance}`, '1-10'));
//         if(guess==numbss){
//             alert(`${numbss}!! you are right!`);
//             break;
//         }else if (guess==numbss){
//             chance--
//             if(guess==numbss){alert(`${numbss}!! you are right2!`);
//             break
//             }else{prompt(`Sorry you are wrong, you have ${chance} times to guess!`, '1-5');
//             break}
//     } else{alert('Sorry still wrong!');
//     break;
// }}}

// guess(correctNumb,guesss,chances)

/*let computerGuess = Math.round(Math.random() * 10 + 1);
let guessCount = 3;
console.log(computerGuess);
while (true) {
  let userGuess = parseInt(prompt("Choose a number!", "1-10"));
  if (userGuess < 1 || userGuess > 10) {
    alert("Please guess between 1 and 10");
  } else {
    if (guessCount > 1) {
      if (userGuess === computerGuess) {
        alert(`${userGuess}!!! `);
        break;
      } else if (userGuess > computerGuess) {
        guessCount--;
        alert("Please guess lower. You have " + guessCount + " guesses remaining.");
      } else {
        guessCount--;
        alert("Please guess higher. You have " + guessCount + " guesses remaining.");
    }
    } else {
      alert("Sorry, you failed to guess the number in three attempts. The number was 0!");
      break;
    }
  }
}*/


function guessNumber(){
    let randomNumber = Math.floor(Math.random() * 10)
    let number = ""
    let count = 1;
    while (number != randomNumber) {
        number = window.prompt("Enter guess number: ");
        if (number == randomNumber) {
            alert(`Success, the number was ${randomNumber}. Attempts: ${count}`);
        } else if(number != randomNumber && count < 3) {
            alert(`Nope, sorry! Try again!`);
            count++
        }
        else {return alert(`exercise is over`)}
    }
}
guessNumber()