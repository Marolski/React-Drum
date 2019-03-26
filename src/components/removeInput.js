export function removeInput(e){
    alert('ha');
    console.log(e);
    if(e.keyCode===27){
        const input = document.getElementsByClassName('upload');
        if(input[0].classList.contains("input")){
            for(let i=0; i<input.length; i++){
                input[i].classList.remove('input');
            }
        }
    else{
        for(let i=0; i<input.length; i++){
                input[i].classList.add('input');
            }
        }
    }
}
export default removeInput;