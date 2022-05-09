const array = [1, 5, 10, "Hello", 100, true, null, "World"];

displayStringElements = () => {
  let stringArray = [];
  array.forEach((element) => {
    if (typeof element === "string") {
      stringArray.push(element);
    }
  });
  return stringArray;
};

console.log(displayStringElements(array));
