function descendingOrder(n) {
  const numbers = String(n)
    .split("")
    .map((num) => +num);
  const descNums = [];
  for (let i = numbers.length; i >= numbers.length; i--) {
    let biggestNum = takeBiggestNum(numbers);
    const index = numbers.indexOf(biggestNum);
    const [newNum] = numbers.length === 1 ? numbers : numbers.splice(index, 1);
    descNums.push(newNum);
  }
  console.log(descNums);
}

function takeBiggestNum(n) {
  return n.reduce((prevVal, curVal) => {
    if (prevVal > curVal) return prevVal;
    if (prevVal < curVal) return curVal;
    return curVal;
  }, 0);
}

const n = 0;
descendingOrder(n);

const descendingOrder2 = String(n)
  .split("")
  .map((num) => +num)
  .sort((a, b) => b - a)
  .join("");
console.log(descendingOrder2);

const num = String(n)
  .split("")
  .map((num) => +num)
  .sort((a, b) => b - a)
  .join("");
console.log(num);
