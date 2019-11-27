// Create Element
const btn = document.createElement('Button')
btn.innerHTML = 'Click Me'



// Add Class
btn.className = 'myButton'

// Add Id
btn.id = 'new-item'

document.body.appendChild(btn);

const h2 = document.body.appendChild(document.createElement('h2'));


document.querySelector('.myButton').addEventListener('click',function(){
    if(h2.textContent){
        h2.firstChild.remove()}
        else{
    h2.appendChild(document.createTextNode('This is a Test'))
    
}
})