function tipCalculator(quality, total) {
  let tip = 0;

  switch (quality) {
    case "bad":
      tip = total * 0.05;
      return tip;
    case "ok":
      tip = total * 0.15;
      return tip;
    case "good":
      tip = total * 0.2;
      return tip;
    case "excellent":
      tip = total * 0.3;
      return tip;
    default:
      tip = total * 0.18;
      return tip;
  }
}

console.log(tipCalculator("excellent", 100));
console.log(tipCalculator("good", 100));
console.log(tipCalculator("ok", 100));
console.log(tipCalculator("bad", 100));
