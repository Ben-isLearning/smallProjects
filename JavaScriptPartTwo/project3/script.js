let input = "I want a coffee and a you need a the shower";

const vowels = ["a", "e", "i", "o", "u"];

resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(`I is ${i}`);
  for (let j = 0; j < vowels.length; j++) {
    //console.log(`J is ${j}`);
    if (input[i] === vowels[j]) {
      //console.log(`I is ${i}, J is ${j}`);
      resultArray.push(input[i]);
      if (input[i] === "e") {
        resultArray.push(input[i]);
      } else if (input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray);

let resultString = resultArray.join(" ").toUpperCase();

console.log(resultString);
