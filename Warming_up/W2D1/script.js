const pigLatin = function (string){
    let arr = string.split(" ");
    let pigWords = "";
    for (let i = 0; i < arr.length; i++) {
        let temp = mover(string[i]);
        pigWords += temp;
    }
    console.log(pigWords);
}

const mover = function(word) {
    if(word.toLowerCase().charCodeAt(0) >= 97 && word.toLowerCase().charCodeAt(0) <= 122){
        let newWord = "";
        newWord = newWord.concat(word.slice(1),word[0],"ay") ;
        word = newWord;
    } return word;
}

