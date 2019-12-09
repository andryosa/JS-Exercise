// onEvent = some javaScript code

const Bulb = document.getElementById('myImage')

Bulb.onmousedown = lighton
Bulb.onmouseup = lightoff
Bulb.onmouseover = lighton
Bulb.onmouseout = lightoff

function lighton(){
    Bulb.setAttribute('src', './bulbon.gif')
}

function lightoff(){
    Bulb.setAttribute('src', './bulboff.gif')
}


const Bulb2 = document.getElementById('myImage2')

Bulb2.onmousedown = lightOnOff
Bulb2.onmouseup = lightOnOff
Bulb2.onmouseover = lightOnOff
Bulb2.onmouseout = lightOnOff


function lightOnOff(e){
    if(e.type== 'mousedown' || e.type == 'mouseover'){
        e.target.src = 'bulbon.gif'
    }else{
        e.target.src = 'bulboff.gif'
    }
}

const textArea = document.getElementById('textArea')

textArea.onmousedown = background
textArea.onmouseup = background
textArea.focus = background
textArea.blur = background

function background(e){
    if(e.type== 'mousedown' || e.type == 'focus'){
        e.target.style.background = 'yellow'
    }else{
        e.target.style.background = ''
    }
}

let area = null;
    let view = document.getElementById('view');
    view.addEventListener('click', editStart)

    function editStart() {
      area = document.createElement('textarea');
      area.className = 'edit';
      area.value = view.innerHTML;
      area.addEventListener('blur', function(){editEnd()});
      view.replaceWith(area);
      area.focus();

      area.onkeydown = function(event) {
        if (event.key == 'Shift') {
          this.blur();
        }
      };

      };

    function editEnd() {
      view.innerHTML = area.value;
      area.replaceWith(view);
    }


console.log(view)
