//loading function keys
export function letterReader(){
    let letters = [];
    for(let i=0; i<9; i++){
        let char = prompt('Podaj klawisz!');
        letters.push(char);
    }
    //return array of chars
    return letters;
};
export default letterReader;