// let x = JSON.parse(`{"id":true, "name":"Mostafa"}`);
// console.log(x.name)

// let y = {
//     name: "object",
//     age: 21
// }

// let z = JSON.stringify(y)
// console.log(z)

window.onload = function(){
    let xhr = new XMLHttpRequest();
    // console.log(Object.keys(xhr))
    xhr.open("GET", "users.json", true)
    xhr.send();
    xhr.onprogress = function(){
        let p = document.createElement("p")
        p.innerHTML = 'Processing...'
        document.body.appendChild(p)
    }
    xhr.onreadystatechange = function(){
        switch (this.readyState){
            case 0:
                p.innerHTML = "Request not initialized"
                break;
            case 1:
                p.innerHTML = "Connection established"
                break;  
            case 2:
                p.innerHTML = "Request recieved"
                break;  
            case 3:
                p.innerHTML = "Processing request"
                break;
            case 4:
                let response = this.responseText
                response.forEach(function(item){
                    let p = document.createElement('p')
                    p.innerHTML = `Name: ${item.name} Phone: ${item.phone} Email: ${item.email}`
                    div.appendChild(p)
                })
                console.log(response)
                break;
        }
    }
}