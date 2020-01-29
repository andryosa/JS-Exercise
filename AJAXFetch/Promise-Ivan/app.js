// let ran = Math.floor((Math.random()*50)+1)
// console.log(ran)
// let promise = new Promise(function(resolve,reject){
//     if(ran < 35){
//         resolve('Stuff worked!')
//     }else{
//         reject(Error('It broke!'))
//     }
// });
// promise.then(function(result){
//     console.log(result)
//     document.write(result)
// },
// function(err){
//     console.log(err)
//     document.write(err)
// }
// )

function promi(){
    this.http = new XMLHttpRequest()
}

promi.prototype.get = function(url){
    this.http.open('GET', url, true)
    let self = this
    this.http.onload = () => {
        if(this.http.status === 200) {
            resolve(this.responseText)
        }else{
            PromiseRejectionEvent(Error('Rejected!!'))
        }
    }
    this.http.send()
}               