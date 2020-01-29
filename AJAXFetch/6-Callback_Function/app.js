
const posts = [{
    title : 'Post One',
    body : 'This is Amazing post one'
},
{
    title : 'Post Two',
    body : 'This is amazing post two'
}
];
// Sychronized Callback function
function createPost(post, callback){

    setTimeout(function(){
        posts.push(post);
        callback();
    }, 1000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(item){
            output += `<li>${item.body}</li>`
        });
        document.body.innerHTML = output;
    }, 3000)
};
let p1 = {title : 'Post three', body: 'This is amazing post three'}
createPost(p1, getPosts);
// getPosts();