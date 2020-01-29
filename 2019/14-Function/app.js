// Function Declarations

function sayhello(firstName){
    console.log('Hello ' + firstName)
}

sayhello('Andri');

function sayhello2(firstName2 = 'No Name'){
    return 'Hello ' + firstName2
}

let val = sayhello2('Andryosa');
console.log(val)




// const square = function(x){
//     return x*x
// }

// console.log(square(4))


// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs
// (function(x){
//     console.log(x*x)
// })(4)

function sqwr(arr){
    let temp =[]
    arr.forEach(function(item) {
        temp.push(item*item)
    })
    return temp
}

numb = [2,5,7,9]
console.log(sqwr(numb))


// PROPERTY METHODS
const todo = {
    list: [],
    add: function(item){
        this.list.push(item)
    },
    edit: function(id,value){
        this.list[id]=value
    }
}

todo.add('Eat');
todo.edit(4, 'swim');
todo.delete = function(){
    console.log('Delete item...')
}
todo.mark = 55
console.log(todo)



// Containers Ship

function containerCalculate(maxWeight) {
    let containerCount = 0;
    let count10kg = 0;
    let count20kg = 0;
    let count50kg = 0;
    let count100kg = 0;
    let count200kg = 0;
    let count500kg = 0;
    let weight= 0;
    
    for (let i =0; i<500; i++) {
      if(i<100 && weight < maxWeight) {
        containerCount += 1
        count10kg += 1
        weight += 10
      }
      
      else if(i<200 && weight < maxWeight) {
        count20kg += 1
        containerCount += 1
        weight += 20
      }
      else if(i<250 && weight < maxWeight) {
        count50kg += 1
        containerCount += 1
        weight += 50
      }
      else if(i<300 && weight < maxWeight) {
        count100kg += 1
        containerCount += 1
        weight += 100
      }
    }
   
    let weight2 =0;
    for (let i =0; i<500; i++) {
      if(i<100 ) {
        weight2 += 10
      }
      else if(i<200 ) {  
          weight2 += 20
      }
      else if(i<250) {
          weight2 += 50
      }
      else if(i<300) {
          weight2 += 100
      }
      else if(i<400 ) {
          weight2 += 200
      }
      else if(i<500 ) {
          weight2 += 500
      }
    
    }
    return `I took ${containerCount} container to my ship. Here is list of containers: 10 kg: ${count10kg} container ----- 20 kg: ${count20kg} container ----- 50 kg: ${count50kg} container----- 100 kg: ${count100kg} container. The total weight is: ${weight}kg. I can not take other ${weight2-weight}kg`
  }

  console.log(containerCalculate(10000))
  
