let val;
let par;

// Number to String
val = 555
par = String(val)
par = String(val + 4)

// Boolean to String
val = true;
par = String(val)

// Date to String
val = new Date();
par = String(val);

// Array to String
val = [1,2,3,4,5];
par = String(val);

// to String
val = [1,2,3,4,5];
par = val.toString();

// String to Number
val = '555'
par = Number(val)

// Boolean to Number
val = true;
par = Number(val);

// Null to Number
val = null;
par = Number(val);

// Special String to Number
val = 'hello';
par = Number(val);

// Array to Number
val = [1,2,3,4,5];
par = Number(val);

// parseInt & parseFloat
val = '555.529';
par = parseInt(val);
par = parseFloat(val);


// Output

// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(par);
// console.log(typeof par);
// console.log(par.length);
// console.log(par.toFixed(2));
// console.log(par == val);


// Nan concept :
function checkNan(x){
     
}                                    