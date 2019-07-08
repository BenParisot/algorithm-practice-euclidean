//practicing Euclidean Algorithm to find the GCD in an array of numbers

const arr1 = [28, 16, 44, 124, 100];
const arr2 = [4, 3, 19, 33, 26];
const arr3 = [55, 235, 21, 8, 43, 88];
const arr4 = [1, 2, 3];
const arr5 = [2, 4, 6, 8];

function findGcdArray(num, array) {
    function findGcdPair(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        if(x === 0) return y;
        return findGcdPair(y % x, x);
    }
    let a;
    let b;
    if(num === 0 || !num) return null;
    a = array[0];
    for(let i = 1; i < num; i++) {
        b = array[i];
        a = findGcdPair(a, b);
    }
    return a;
}

console.log(findGcdArray(5, arr1));
console.log(findGcdArray(5, arr2));
console.log(findGcdArray(6, arr3));
console.log(findGcdArray(3, arr4));
console.log(findGcdArray(4, arr5));
