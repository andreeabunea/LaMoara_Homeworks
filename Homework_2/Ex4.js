sumOddDigits = (numberAsString) => {
  let oddNumbersSum = 0;
  for (let i = 0; i < numberAsString.length; i++) {
    const element = +numberAsString[i];
    if (element % 2 !== 0) {
      oddNumbersSum += element;
      continue;
    }
  }
  return oddNumbersSum;
};

console.log(Number(sumOddDigits("123")));
console.log(Number(sumOddDigits("57924")));
