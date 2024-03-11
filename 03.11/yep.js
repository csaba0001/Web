// 1. feladat: Get number from string - Szám kinyerése stringből
function getNumberFromString(s) {
        let result = 0;
        for (let i = 0; i < s.length; i++) {
          const digit = parseInt(s[i]);
          if (!isNaN(digit)) {
            result = result * 10 + digit;
          }
        }
        return result;
      }

console.log("----- 1. feladat -----");
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);


// 2. feladat: Find the Mine! - Találd meg az aknát!
function mineLocation(field) {
    const rows = field.length;
    const cols = field[0].length;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (field[i][j] === 1) {
          return [i, j];
        }
      }
    }
  
    return null;
  }

console.log("----- 2. feladat -----");
console.log(mineLocation([ [1, 0], [0, 0] ]), [0, 0]);
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]), [0, 0]);
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]), [2, 2]);


// 3. feladat: Simple consecutive pairs - Egyszerű egymást követő párok
function pairs(ar){
    let c = 0;
    for (let i = 0; i < ar.length - 1; i += 2) {
      if (Math.abs(ar[i] - ar[i + 1]) === 1) {
        c++;
      }
    }
    
    return c;
}

console.log("----- 3. feladat -----");
console.log(pairs([1,2,5,8,-4,-3,7,6,5]),3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
console.log(pairs([73, 72, 8, 9, 73, 72]),3);