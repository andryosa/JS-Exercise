// FOR LOOPS
for(i=10 ; i>0 ; i--){
    if(i ==4){
        console.log(`${i} is my lucky number`)
        break;
    }

}

// WHILE LOOP
let j = 10;
let k = true;
while(j > 5 && k == true){
    console.log(`${j} is cool`)
    j--;
}


// DO WHILE
let m = 0;
do{
        console.log(`${m} is cool`)
}while(m > 0)


// LOOP THROUGH ARRAY
const users = [
    {id:1, name: 'Andri'},
    {id:2, name: 'Ali'},
    {id:3, name: 'Sascha'},
    {id:4, name: 'Jay'},
];


const ids = users.map(function(u){
    return ((u.id%2==0) ? u : null) 
});
console.table(ids)


// FOR in LOOP
const user = {
    firstName: 'Sascha',
    lastName: 'Nelson',
    age: 30
}
let cars = ['BMW', 'VW', 'Ford', 'Mercedes', 'Ferrari']

for(key in user){
    // console.log(`${key} : ${cars[key]}`)
    console.log(key)
}


let totalMoney = 100000
let salWrkrs = 1000*50
let salFrntnd = 1500*4
let salBcknd = 2000*4
let salFllstk = 3000*2
let salPM = 4000*5
let salDevEn = 5000*5
let salDatAn = 7500
let salMacLE = 10000

let hvtoPay = salWrkrs+salFrntnd+salBcknd+salFllstk+salPM+salDevEn+salDatAn+salMacLE
console.log(hvtoPay)


let emplArr = [{
    jobdes: 'Worker',
    payment: 1000
  }];
  for (i = 1; i < 50; i++) {
    emplArr.push({
      jobdes: 'Worker',
      payment: 1000
    })
  }
  for (i = 0; i < 4; i++) {
    emplArr.push({
      jobdes: 'Frontend',
      payment: 1500
    })
  }
  for (i = 0; i < 4; i++) {
    emplArr.push({
      jobdes: 'Backend',
      payment: 2000
    })
  }
  for (i = 0; i < 2; i++) {
    emplArr.push({
      jobdes: 'Fullstack',
      payment: 3000
    })
  }
  for (i = 0; i < 5; i++) {
    emplArr.push({
      jobdes: 'ProjMan',
      payment: 4000
    })
  }
  for (i = 0; i < 5; i++) {
    emplArr.push({
      jobdes: 'DevOpsEng',
      payment: 5000
    })
  }
   
  emplArr.push({
      jobdes: 'DataAnalyst',
      payment: 7500
    })
    emplArr.push({
      jobdes: 'MachLrnEng',
      payment: 10000
    })
   
  for (i=0; i<emplArr.length;i++){emplArr[i].id=i+1}
   
  console.log(emplArr)
   
  