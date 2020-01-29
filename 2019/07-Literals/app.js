const name = 'Andryosa';
const age = 28;
const job = 'Web Developer';
const city =  'Hamburg'
let html;

// Without Template Strings (es5)
html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';


function getCity(){
    return 'New York'
}

// With Template Literals (es6)
html =`
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${getCity()}</li>
    <li>${1+14}</li>
    <li>${age>30? 'Over 30' : 'Under 30'}</li>
    </ul>`;

// Implementation
document.body.innerHTML = html;