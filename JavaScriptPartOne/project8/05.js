function finalGrade(a, b, c) {
  if (a < 0 || a > 100 || b < 0 || b > 100 || c < 0 || c > 100) {
    return "You have entered an invalid grade.";
  }
  let totalGrade = a + b + c;
  let averageNumber = totalGrade / arguments.length;
  if (averageNumber < 60) {
    return "F";
  } else if (averageNumber < 70) {
    return "D";
  } else if (averageNumber < 80) {
    return "C";
  } else if (averageNumber < 90) {
    return "B";
  } else return "A";
}

console.log(finalGrade(99, 92, 95));
console.log(finalGrade(89, 74, 81));
console.log(finalGrade(69, 72, 65));
console.log(finalGrade(69, 52, 55));
