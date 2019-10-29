const firstName = 'Andri';
const lastName = 'Czaya';
const age = 28;
const string = 'Hello my name is Andri'
const tags = 'Web Design, Web Developer, Graphic Designer, Illustrator';

let val;
val = firstName+lastName;


// Concatination
val = firstName+' '+lastName;






// Escaping
val = 'Thats\'s awesome, I can\'t wait';

// Length
val =firstName.length;

// Concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toLowerCase();
val = lastName.toUpperCase();

val = lastName[2];

// indexof()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// Charart
val = firstName.charAt(4).toLowerCase();
val = firstName[4];
console.log(val);