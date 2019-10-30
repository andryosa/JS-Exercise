const firstName = 'Andryosa';
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

val = firstName.charAt(firstName.length-1);
val = firstName[firstName.length-1]

// Substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);0

// Split
val = firstName.split(' ');
console.log(val);

function countMyName(bla){
    let temp = []
    bla = bla.split(' ')
    for(i=0; i<bla.length; i++){
        if(bla[i].includes('Andri')){
            temp.push(bla[i])
    } 
}return temp.length
}

let texte = 'Hi Andri, how are you doing Andri?'

console.log(countMyName(texte))

// replace()
val = firstName.replace('Andryosa', 'Andri');
console.log(val);


function countMyName2(bla2){
    let count = 0
    bla2 = bla2.split(' ')
    for(i=0; i<bla2.length; i++){
        if(bla2[i].includes('Andri')){
            count ++
    } 
}return count
}

console.log(countMyName2(texte));

