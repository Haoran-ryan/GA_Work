let factor = prompt("Please enter a number")
let result =""


if (factor % 3 !==0 && factor % 5!==0 && factor % 7!==0){
    result += factor
}else{
    if(factor %3 === 0){
        result += "Pling"
}  if(factor %5 === 0){
    result+="Plang"
}  if (factor %7 === 0){
    result += "Plong"
    }
}
console.log(result)