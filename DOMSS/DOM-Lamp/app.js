let lamp = document.getElementById('lamp')
lampOff.addEventListener('mousedown', turnOn)
lampOff.addEventListener('mouseup', turnOn)

function turnOn(e){
    if(e.type=='mousedown'){
        lamp.firstElementChild.setAttribute('src', './bulbon.gif')
}else{
    lamp.firstElementChild.setAttribute('src', './bulboff.gif')
}
}


let textName = document.getElementById('textName')
textName.addEventListener('focus', focuss)
textName.addEventListener('blur', focuss)

function focuss(e){
    if(e.type=='focus'){
        e.target.style.backgroundColor = 'yellow'
    }else if(e.type=='blur'){
        e.target.style.backgroundColor = '' 
    }
}