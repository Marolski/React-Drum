//playing sounds and adding css class
export const playSound = (e) =>{
    //catching event target
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio==null) return;
    //playing sound
    audio.play();
    audio.currentTime=0;
    //adding css class to div
    keys.classList.add('playing');
    setTimeout(function(){keys.classList.remove('playing');},70);
}