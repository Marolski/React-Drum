// showing and hiding input 
export function removeInput(e){
    console.log(e);
    //checking clicked key (if ESC)
    if(e.keyCode===27){
        const input = document.getElementsByClassName('upload');
        if(input[0].classList.contains("input")){
            //remove css class "input" from every inputs
            for(let i=0; i<input.length; i++){
                input[i].classList.remove('input');
            }
        }
    else{
        //add css class "input" to every inputs
        for(let i=0; i<input.length; i++){
                input[i].classList.add('input');
            }
        }
    }
}
export default removeInput;