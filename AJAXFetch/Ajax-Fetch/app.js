document.getElementById('button').addEventListener('click', loadData)

// Event Handler
function loadData(){
    // Create XHR Request Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);
    // console.log(this.responseText)
    // onload method
    xhr.onload = function(){
        console.log(this.responseText)
    }
    xhr.send();
}