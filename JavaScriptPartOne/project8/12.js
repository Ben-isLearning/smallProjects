// Write your function here:

function howOld(age, year) {
  let currYear = 2022;
  let calcAge = year - currYear + age;

  if (year > currYear) {
    return `You will be ${calcAge} in the year ${year}`;
  } else if (year < currYear - age) {
    return `The year ${year} was ${Math.abs(
      calcAge
    )} years before you were born. `;
  } else return `You were ${calcAge} in the year ${year}`;
}

console.log(howOld(18, 2030));
