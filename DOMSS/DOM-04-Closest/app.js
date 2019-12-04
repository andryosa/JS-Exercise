let fLi = document.querySelector('.chapter'); //First Li

let x,y,z;

x = fLi.closest('.book') //UL
y = fLi.closest('.contents') //DIV
z = fLi.closest('.heading') //null (because h2 is not an ancestor)

console.log(x)
console.log(y)
console.log(z)