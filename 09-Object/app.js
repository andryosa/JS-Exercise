const person = {
    firstName : 'Andryosa',
    lastName : 'Czaya',
    age : 28,
    email : 'andry@gmail.com',
    hobbies : ['sleeping', 'eating', 'shooping'],
    address : {
        city : 'Hamburg',
        country : 'Germany'
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}

const person2 = {
    firstName : 'Charlotta',
    lastName : 'Czaya',
    age : 28,
    email : 'lotta@gmail.com',
    hobbies : ['sleeping', 'eating', 'shooping'],
    address : {
        city : 'Hamburg',
        country : 'Germany'
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}

let people = [person,person2]

let val;
val = person;

//Access on property
val = person.firstName;
val = person['lastName'];
val = person.hobbies[1];
val = person.address.country;
val = person.address['city'];
val = person.getBirthYear();
console.log(val)

// function lookingForMe(arr){
//     for(i=0; i<arr.length; i++){
//         if(arr[i].includes('Andryosa')){
//             return arr[i];
//         }
//     }
// }

// console.log(lookingForMe(people))

function hire(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i].skils.includes('JavaScript'&&'HTML'&&'CSS')){
            // return `${arr[i].name} is hired!`
        }return `${arr[i].name} is hired!`
    }
}


let employee1 = {
    name : 'Andri',
    skils : ['JavaScript','CSS', 'JavaScript'],
}

let employee2 = {
    name : 'Andre',
    skils : ['CSS','HTML', 'JavaScript', 'Phyton']
}

let employee3 = {
    name : 'Lotta',
    skils : ['JavaScript','HTML'],
}

let search = [employee1, employee2, employee3]

console.log(hire(search))