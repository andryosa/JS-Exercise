const btnTry = document.getElementById('try')
btnTry.addEventListener('click', myFunction)

function myFunction(){
    let myNode = document.getElementById('myP').nodeName
    document.getElementById('demo').innerHTML = myNode;
}