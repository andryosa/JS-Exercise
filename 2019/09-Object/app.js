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
    let count =0;
    let temp=[]
    for(i=0; i<arr.length; i++){
        for(j=0; j<newArr.length; j++){
            if(arr[i]==newArr[j]){
                count = count +1;
                temp.push(newArr[j])
            }
        }
    
    } 
    if (count < 3) {
        console.log('This is not');
    }
    
    return temp 
}

let newArr=['Java','Ruby','PHP', 'JavaScript', 'Phyton']


let search = ['CSS','HTML', 'JavaScript', 'Phyton','Ruby','Java','PHP']

console.log(hire(search))

function findRoute(rou,te){
    let temp=[]
        if(rou.stop<te.stop){
             
            temp.push(rou)
        }else{temp.push(te)}
        return temp
}

let route1 = {
    km : 11,
    time : 30,
    stop : 2,
}

let route2 = {
    km : 13,
    time : 25,
    stop : 3,
}

console.log(findRoute(route1,route2))