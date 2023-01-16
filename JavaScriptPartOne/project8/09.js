const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  }
  return false;
};

console.log(truthyOrFalsy(0));
console.log(truthyOrFalsy(1));
console.log(truthyOrFalsy(""));
console.log(truthyOrFalsy(" "));
console.log(truthyOrFalsy("Hello "));
