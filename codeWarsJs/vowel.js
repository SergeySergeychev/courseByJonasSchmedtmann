/*
assert.strictEqual(
    disemvowel("This website is for losers LOL!"),
    "Ths wbst s fr lsrs LL!"
    );
    
    */

function disemvowel(str) {
  const noVowelStr = str
    .split("")
    .filter(
      (letter) => !["a", "e", "i", "o", "u"].includes(letter.toLowerCase())
    )
    .join("");

  return noVowelStr;
}
const newStr = disemvowel("This website is for losers LOL!");
console.log(newStr);
