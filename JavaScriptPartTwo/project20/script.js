const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

const convertToBaby = (arr) => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
    babyArray.push("baby " + arr[i]);
  }
  return babyArray;
};

console.log(convertToBaby(animals));
