export function letterReader(){
    let letters = [];
    for(let i=0; i<9; i++){
        let char = prompt('Podaj klawisz!');
        letters.push(char);
    }
    console.log(letters);
    return letters;
};
export default letterReader;