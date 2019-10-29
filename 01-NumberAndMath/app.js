const num1 = 100;
const num2 = 50;
let val;

// Simple ,math with Numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;
console.log(val)

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.1);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random(2,33,4,1,55,6,3,-2);
console.log(val)



function lottery(userNumb){
    luckyNumb = Math.floor(Math.random() * 100 + 1)
    console.log(luckyNumb)
   if(userNumb == luckyNumb){
       return 'congrats!! you won 100$'
   }else if(Math.abs(luckyNumb - userNumb) <=10){
      val = Math.abs(luckyNumb - userNumb)
      return  100 - (val*10)
   }else{
       return 'Try Again!'
   }
}
console.log(lottery(45))