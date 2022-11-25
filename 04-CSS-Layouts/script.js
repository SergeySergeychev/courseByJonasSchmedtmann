////////////IS PRIME//////////////////////
/*
function isPrime(num) {
  const absNum = Math.abs(num);
  if (num < 2) return false;
  let j = 0;
  for (let i = 2; i * i <= num && j != 1; i++) {
    if (num % i === 0) j = 1;
  }
  if (j === 0) return true;
  return false;
}

*/
////////////High and Low//////////////////////
/*
function highAndLow(num) {
  const arr = num.split(" ");

  return arr
    .sort((a, b) => b - a)
    .slice(0, 1)
    .concat(arr.slice(-1))
    .join(" ");
}
*/
////////////COMPLEMENTARY DNA//////////////////////
/*
function DNASTRand(data) {
  if (data.length === 0) return data;
  const complData = data.map((letter) => {
    const upLetter = letter.toUpperCase();
    switch (upLetter) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
      default:
        return upLetter;
    }
  });
  return complData.join("");
}

const data = ["A", "T", "T", "G", "c"];

const compliment = DNASTRand(data);
*/
/*
function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    console.log(c);
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
const data = "ATCG";
DNAStrand(data);
*/
// Weight for Weight
/*
function orderWeight(strng) {
  return strng
    .split(" ")
    .sort((a, b) => {
      if (makeSum(a) < makeSum(b)) return -1;
      if (makeSum(a) > makeSum(b)) return 1;
      if (makeSum(a) === makeSum(b)) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }
      return 0;
    })
    .join(" ");
}

function makeSum(num) {
  return num
    .split("")
    .reduce((prevVal, currVal) => +prevVal + +currVal, (initVal = 0));
}
const data = "2000 10003 1234000 44444444 9999 11 11 22 123";
const alphOrd = orderWeight(data);
*/
/*
function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    console.log(a, b, a.localeCompare(b), sumA - sumB);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }

  return strng.split(" ").sort(comp).join(" ");
}
const data = "2000 10003 1234000 44444444 9999 11 11 22 123";
const alphOrd = orderWeight(data);
*/
/*
function sumDigPow(a, b) {
  eureka = [];
  for (i = a; i <= b; i++) {
    digits = String(i).split("");
    if (
      i ==
      digits.reduce(function (accumulator, currentValue, currentIndex) {
        const num = accumulator + currentValue ** (currentIndex + 1);
        console.log(digits);
        console.log(num, accumulator, currentValue, currentIndex);
        return num;
      }, 0)
    ) {
      eureka.push(i);
    }
  }
  console.log(eureka);
  return eureka;
}
sumDigPow(1, 100);
*/

// Roman Numerlas Decoder
/*
function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer

  return roman
    .split("")
    .map((rNum, i, arr) => {
      const dec = romToDecNum(rNum);
      if (i === arr.length - 1) return dec;
      const nextDec = romToDecNum(arr[i + 1]);
      console.log(dec, nextDec);
      if (+dec < +nextDec) return -dec;
      return dec;
    })
    .reduce((year, timePeriod) => year + +timePeriod, 0);
}

function romToDecNum(num) {
  return parseInt(num.replace(/./g, (num) => +romNums[num]));
}


const romNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
*/
/*
function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split("");
  var sum = 0,
    i;

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++; // !!! NEXT value!!!
    } else {
      sum += data[numbers[i]];
    }
  }

  return sum;
}
*/
/*
Simple Pig Latin
function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((word, i) => {
      if (
        !word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, (match) => {
          return "";
        })
      ) {
        return word;
      }

      return word.slice(1).concat(word[0] + "ay");
    })
    .join(" ");
}

*/
// const pigSay = pigIt("O tempora o mores !");
/*
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}
const pigSay = pigIt("O tempora,... o mores !");
*/
/*
function arrayDiff(a, b) {
  const modArr = a;
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      console.log(a.length);
      console.log(j);
      if (a[j] === b[i]) {
        modArr.splice(j, 1);
        j--;
      }
    }
  }
  return modArr;
}

function array_diff(a, b) {
  return a.filter((el) => !b.includes(el));
}

function array_diff1(a, b) {
  return a.filter((el) => b.indexOf(el) === -1);
}

function array_diff2(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}
*/

//////////////////// COUNT CHARACTERS IN YOUR STRING /////////////////////////////
/*
function count(string) {
  const newObj = {};
  string.split("").forEach((value) => {
    !newObj[value] ? (newObj[value] = 1) : newObj[value]++;
    console.log(newObj[value]);
  });
  return newObj;
}

function count1(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    console.log(counts);
    return counts;
  }, {});
}
*/
/*
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];
const arr4 = [1, 2, 3, 4];
const arr5 = [1, 2, 3, 4];
const arr = [arr1, arr2, arr3, arr4, arr5];

const arr6 = [
  [1],
  [6],
  [11],
  [16],
  [21],
  [22],
  [23],
  [24],
  [25],
  [20],
  [15],
  [10],
  [5],
  [4],
  [3],
  [2],
  [7],
  [12],
  [17],
  [18],
  [19],
  [14],
  [9],
  [8],
  [13],
];

let DIRECTION = "DOWN";
snail = function (array) {
  const firstEl = 0;
  const lastEl = array.length - 1;
  const appleArr = array;
  const snailArr = [];
  let isEating = true;
  // If field is asymmetric or element length is 1
  if (
    appleArr.length * appleArr[firstEl].length !==
    [].concat(...appleArr).length
  ) {
    return [].concat(...appleArr);
  }

  // If field is symmetric
  while (isEating) {
    // if no elements left
    if (appleArr.length * appleArr[firstEl].length === 0) {
      break;
    }

    // If left less or equal one line
    if (appleArr.length <= 1) {
      snailArr.push(appleArr[firstEl]);
      break;
    }
    // If two lines left
    if (appleArr.length === 2) {
      snailArr.push(appleArr[firstEl].concat(appleArr[lastEl].reverse()));
      break;
    }
    // if more than two lines
    if (DIRECTION === "UP") moveUp(appleArr, snailArr);
    else moveDown(appleArr, snailArr);
    // Change dir
    appleArr.reverse();
  }
  return [].concat(...snailArr);
};

function moveDown(appleArr, snailArr) {
  for (let index = 0; index < appleArr.length; index++) {
    const element = appleArr[index];
    const firstEl = 0;
    const lastArrEl = appleArr.length - 1;

    //Move right
    if (index === firstEl) {
      snailArr.push(element);
    }
    // Move Down
    if (index > 0 && index !== lastArrEl) {
      // Eat last value of the element
      snailArr.push([element.pop()]);
    }
    // Move left
    if (index === lastArrEl) {
      // Make last line reverse and eat it
      snailArr.push(appleArr.pop().reverse());
      // Eat first line
      appleArr.shift();
    }
  }
  // Switch direction
  DIRECTION = "UP";
}

function moveUp(appleArr, snailArr) {
  // Move Up
  for (let index = 0; index < appleArr.length; index++) {
    const element = appleArr[index];
    snailArr.push([element.shift()]);
  }
  // Switch direction
  DIRECTION = "DOWN";
}
*/
