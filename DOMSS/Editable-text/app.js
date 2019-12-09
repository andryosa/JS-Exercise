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
        if (event.key == 'Enter') {
          this.blur();
        }
      };

      };

    function editEnd() {
      view.innerHTML = area.value;
      area.replaceWith(view);
    }