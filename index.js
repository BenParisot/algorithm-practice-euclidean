console.log('hello ben');


const arr1 = [28, 16, 44, 124, 100];
const arr2 = [4, 3, 19, 33, 26];
const arr3 = [55, 235, 21, 8, 43, 88];

function findGcdArray(num, array) {
    function findGcdPair(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            const t = y;
            y = x % y;
            x = t;
        } 
        return x;
    }
    let a;
    let b;
    if(num === 0 || !num) return null;
    console.log(array);
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
