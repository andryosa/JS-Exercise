// findingMissing()
// findMissing(10,0);
// findMissing(10,10);
// findMissing(10,100);
// findMissing(10,1000);
// TextDecoderStream.describe('findingMissing[1,3,4]'),
// (findingMissing([1,3,4]), 2);


// let numb = [1,4,7,13,16]
// function findTheNumb(arr){
//     temp =[]
//     for(i=0; i<arr.length; i++){
//         let bet = arr[0-1]
//         if(arr[i+bet]!==1){
//             temp.push(arr[i])
//         }return temp
//     }
// }

// console.log(findTheNumb(numb))

function findMissing(arr) {
    let dif1 = arr[1] - arr[0]
    let dif2 = arr[arr.length-1] - arr[arr.length-2]
    let dif3 = arr[2] - arr[1]
    let dif4 = arr[arr.length-2] - arr[arr.length-3]
    
   
   if (arr.length < 4) {
     if (dif1 < dif2) {
       return arr[1] + dif1
     }
     else{return arr[0] + dif2}
   }
   else {
      if (dif1 == dif2) {
        for (let i = 0; i <arr.length; i++) {
          if(arr[i+1] - arr[i] !== dif1 && arr[i+1] < arr[arr.length-1]) {
            return arr[i] + dif1
          } 
        }
      }
      else if (dif1 == dif3) {
        for (let i = 0; i <arr.length; i++) {
          if(arr[i+1] - arr[i] !== dif1) {
            return arr[i] + dif1
          }
        }
      }
      else if (dif2 == dif4) {
        for (let i = 0; i <arr.length; i++) {
          if(arr[i+1] - arr[i] !== dif2) {
            return arr[i] + dif2
          }
        }
      }
    }
  }
  findMissing([2,14,20])
  console.log(findMissing([1, 3, 5, 9, 11])) // Should return 7
  console.log(findMissing([-9, -13, -21])) // Should return -17
  console.log(findMissing([17, 24, 31, 45, 52, 59, 66, 73, 80, 87, 94, 101])) // Should return 38
  console.log(findMissing([12, 18, 24, 30, 42, 48, 54, 60, 66, 72, 78])) // Should return 36
  console.log(findMissing([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26])) // Should return 19
  


  let things = ["Telescopes", "Glasses", "Eyes", "Monocles"]

  function sorting(arr){
        arr= arr.sort(function(a, b){
            return a.length-b.length
        })
        return arr
  }

  console.log(sorting(things))


//   let word = 'Oksigen'
//   function weirdCase(string){
//       for(i=0; i<string.length; i++){
//           return string[i%2].toUppercase()
//       }
//   }

  let word = 'Oksigen'
let word2 = word.toUpperCase
console.log(word2)
  function weirdCase(str){
          str = str[].toUpperCase(function(a){
              return a.toUpperCase()
          })
          return str
  }

  console.log(weirdCase(word))