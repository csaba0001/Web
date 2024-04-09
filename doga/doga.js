// 1. feladat Sum of array singles
const sumOfArraySingles = arr => {
    let egyszer = {};
    let ossz = 0;

    arr.forEach(num => {
        if (egyszer[num]) {
            delete egyszer[num];
            ossz -= num;
        } else {
            egyszer[num] = true;
            ossz += num;
        }
    });

    return ossz;
}

console.log('1. feladat\n')
console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15)
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19)
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24)


// 2. feladat Sort Arrays (Ignoring Case)
const sortArraysIgnoringCase = arr => {
    return arr.sort((a, b) => {
        const kiselso = a.toLowerCase();
        const kismasodik = b.toLowerCase();

        if (kiselso < kismasodik) {
            return -1;
        } else if (kiselso > kismasodik) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log('\n2. feladat\n')
console.log(sortArraysIgnoringCase(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortArraysIgnoringCase(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortArraysIgnoringCase(["CodeWars"]), ["CodeWars"])
console.log(sortArraysIgnoringCase([]), [])


// 3. feladat Insert dashes
const insertDash = num => {
    var strnum = num.toString();
    let result = strnum[0];

    for (let i = 1; i < strnum.length; i++) {
        var cur = Number(strnum[i]);
        var prev = Number(strnum[i - 1]);

        if (cur % 2 !== 0 && prev % 2 !== 0) {
            result += '-' + cur;
        } else {
            result += cur;
        }
    }

    return result;
}

console.log('\n3. feladat\n')
console.log(insertDash(454793), '4547-9-3')
console.log(insertDash(123456), '123456')
console.log(insertDash(1003567), '1003-567')
console.log(insertDash(13570), '1-3-5-70')
console.log(insertDash(0), '0')