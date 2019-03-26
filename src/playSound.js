export function playSound(e){
    console.log(e.target.dataset.key);
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    console.log(audio);
    const keys = document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
    console.log(keys);
    if(audio==null) return;
    audio.play();
    audio.currentTime=0;
    keys.classList.add('playing');
    setTimeout(function(){keys.classList.remove('playing');},70);
}
export default playSound;