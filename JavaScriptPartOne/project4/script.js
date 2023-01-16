let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 19;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`Your race will begin at 9:30 am! Your number is ${raceNumber}`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race will begin at 11:00 am! Your number is ${raceNumber}`);
} else if (runnerAge <= 18) {
  console.log(
    `Youth registrants run at 12:30pm (regardless of registration). Your number is ${raceNumber}`
  );
} else
  console.log(`Something has gone wrong. Please see the registration desk.`);
