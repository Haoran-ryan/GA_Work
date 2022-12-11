const printPattern = function (number){
    for (let i = 0; i< number; i++){
        let result = '';
        for (let j = 0; j < i; j++){
            result = result.concat(" ", (j+1)); 
        }console.log(result)
    }   
}

printPattern(8)