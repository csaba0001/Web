console.log("swap the head and tail\n");
function swapHeadAndTail(arr) {
    if (arr.length % 2 != 0) 
    {
        let index = (arr.length + 1)/2 -1;
        let middle = arr.splice(index, 1)
        for (let i = 0; i < arr.length/2; i++) 
        {
          arr.push(arr.shift());
        }
        arr.splice(index, 0, ...middle);
    }
      else 
      {
        for (let i = 0; i < arr.length/2; i++) 
        {
          arr.push(arr.shift());
        }
      } 
    return arr;
}
console.log("tests");
console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);


console.log("\n");
console.log("\n");
console.log("Mean vs. median\n");
function meanVsMedian(numbers) {
    var mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    var sortedArr = numbers.slice().sort((a, b) => a - b);
    var median = sortedArr[Math.floor(sortedArr.length / 2)];

    if (mean > median) {
        return 'mean';
    } else if (median > mean) {
        return 'median';
    } else {
        return 'same';
    }
}
console.log("tests");
console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');

console.log("\n");
console.log("\n");
console.log("All or nothing\n");
function possiblyPerfect(key,answers) {
    let correct = 0;
    let incorrect = 0;
  
    for (let i = 0; i < key.length; i++) {
        if (key[i] === '_') continue;
        if (key[i] === answers[i]) correct++;
        else incorrect++
  }
  return correct === 0 || incorrect === 0 ;
}
console.log("tests");
console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");
