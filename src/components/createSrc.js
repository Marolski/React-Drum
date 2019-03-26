export function sound(e){
    const input = e.target;
    const dataKey = input.dataset.key;
    input.onchange = function(f){
    const sound = document.querySelector(`audio[data-key="${dataKey}"]`);
        sound.src = URL.createObjectURL(this.files[0]);
}

};
export default sound;