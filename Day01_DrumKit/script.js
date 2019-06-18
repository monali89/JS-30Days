function playsound(e){
    //console.log(e);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(audio == null) return;
    key.classList.add('playing');
    //console.log(key.classList);
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    //console.log(e.propertyName);
    //console.log(this.classList);
    this.classList.remove('playing');
}

window.addEventListener('keydown', playsound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
