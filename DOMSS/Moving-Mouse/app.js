let mousy = document.getElementById('mousy')

mousy.tabIndex = 0;
mousy.onclick = function(){
    this.style.left = this.getBoundingClientRect().left+'px';
    this.style.top = this.getBoundingClientRect().top+'px';

    this.style.position = 'fixed'
}

mousy.onkeydown = function(e){
    switch(e.key){
        case 'ArrowLeft':
            this.style.left = parseInt(this.style.left) - this.offsetWidth+'px';
            return false

        case 'ArrowRight':
            this.style.left = parseInt(this.style.left) + this.offsetWidth+'px';
            return false

        case 'ArrowUp':
            this.style.top = parseInt(this.style.top) - this.offsetHeight+'px';
            return false

        case 'ArrowDown':
            this.style.top = parseInt(this.style.top) + this.offsetHeight+'px';
            return false
    }
}

console.log(mousy.clientHeight)
console.log(mousy.clientWidth)

// mousy.addEventListener('keydown', move)

// console.log(mousy.clientTop + 175 +'px')


// function move(){
//     if(mousy.key == 'ArrowUp'){
//         mousy.clientTop =  '175' + "px";
//     }else if(mousy.key == 'ArrowDown'){
//         mousy.style.top = this.getBoundingClientRect().top+'px';
//     }else if(mousy.key == 'ArrowRight'){

//     }else if(mousy.key == 'ArrowLeft'){

//     }
// }

