let txtAr = document.getElementById('txt');

let btnFocus = document.getElementById('focuss')
let btnBlur = document.getElementById('blurr')
let status = document.getElementById('sts')

btnFocus.addEventListener('click', focusing)
let focusss = document.createTextNode('Focus')

function focusing(){
    txtAr.focus()
    status.textContent = 'on Focus'
}



btnBlur.addEventListener('click', bluring)
let blurrr = document.createTextNode('Focus')

function bluring(){
    txtAr.blur()
    status.textContent = 'on Blur'
}


function logf(){
    div.inner
}

let area = null;
    let view = document.getElementById('view');

    view.onclick = function() {
      editStart();
    };

    function editStart() {
      area = document.createElement('textarea');
      area.className = 'edit';
      area.value = view.innerHTML;

      area.onkeydown = function(event) {
        if (event.key == 'Enter') {
          this.blur();
        }
      };

      area.onblur = function() {
        editEnd();
      };

      view.replaceWith(area);
      area.focus();
    }

    function editEnd() {
      view.innerHTML = area.value;
      area.replaceWith(view);
    }