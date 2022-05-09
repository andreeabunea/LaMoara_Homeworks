const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = function (number) {
  if (number < 2) return false;
  for (let i = 2; number > i; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(arr.filter(isPrime));
