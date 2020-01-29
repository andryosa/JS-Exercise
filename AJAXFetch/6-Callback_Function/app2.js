//CREATING AN ARRAY WHICH TAKES TWO OBJECTS WITH TWO PROPERTIES
const posts = [{
    title: 'Post one',
    body: 'This is amazing post one'
},
{
    title: 'Post two',
    body: 'This is amazing post two'
}
];
//Assynchronized CALLBACK FUNCTION
function createPost(post){
                ///function() here local one
setTimeout(function(){
    posts.push(post);
}, 1000);
};
//Synchronized CALLBACK FUNCTION
function getPosts(){
setTimeout(function(){
    let output = ''; //it's only visible inside setTimeout, not in getPost()
    posts.forEach(function(item){
        output += `<li>${item.body}</li>`
    });
    document.body.innerHTML = output;
}, 3000)
};
let p1 = {title: 'Post three', body: 'This is amazing post three'};
createPost(p1);
getPosts(); //This functions worked here in a SYNCHRONIZED way