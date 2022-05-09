function returnResult(inputNumber) {
  if (inputNumber % 2 !== 0) {
    return inputNumber * 2;
  } else {
    return inputNumber - 2;
  }
}

console.log(returnResult(6));
console.log(returnResult(5));
