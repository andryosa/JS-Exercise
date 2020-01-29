const http = new easyHTTP;

// Get Posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(posts){
//         console.log(posts)
//     })

//     function errFunction(err){
//         console.log(err)
//     }

function callback(err,response){
    if(err){
        console.log(err)
        const div = document.createElement('div')
        div.appendChild(document.createTextNode(err))
        document.body.appendChild(div)
    }else{
        console.log(response)
        response = JSON.parse(response)
        const ul = document.createElement('ul')
        for(key in response){
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${x} : ${response[x]}`))
            ul.appendChild(li)
        }
    }
}
                                          

    // Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts', callback)

http.get('https://jsonplaceholder.typicode.com/posts/1', callback)
