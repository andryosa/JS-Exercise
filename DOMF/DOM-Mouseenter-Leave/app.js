const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
// Click
//clearBtn.addEventListener('click', runEvent);
// Doubleclick
//clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
//clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);
// EventHandler // - a technical term reffers to the function I am passing to the event listener
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
  }


//   card.addEventListener('mousemove', runEvent);


lis = document.querySelectorAll('li');

Array.from(lis).forEach(function(item){
    item.addEventListener('click', colorChange)
    item.addEventListener('dblclick', clearColor)
    }
)

function colorChange(e)
{Array.from(lis).forEach(function(item){
    item.style.backgroundColor = '';
        
    }
)
    e.target.style.backgroundColor = 'yellowgreen'}

function clearColor(e){
    e.target.style.backgroundColor = '';
}