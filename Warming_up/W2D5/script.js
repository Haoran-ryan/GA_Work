
const sumArrays = function(array1, array2) {
    let sum1 = array1.reduce((acc, value) => acc + value, 0);
    let sum2 = array2.reduce((acc, value) => acc + value, 0);
    console.log(sum1+sum2);
}

const array1 = [2, 6.4, 3];
const array2 = [3, 3.6, 2];
const array3 = [3, 3.6, 2];
const array4 = [2, 6.4, 3];
sumArrays(array1, array2) // => 20

// bonus version
const sumArrs = function(...names){
    let result = 0;
    for (let i = 0; i < names.length; i++) {
        let sum = names[i].reduce((acc, value) => acc + value, 0);
        result += sum;
    }
    console.log(result);
}

sumArrs(array1, array2, array3, array4)