userName = "";

if (userName) {
  console.log(`Hello ${userName}!`);
} else console.log("Hello Anon!");

userQuestion = "Do you like Peas";

console.log(`${userQuestion}? Hmm... Lets see..`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall;

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    console.log(eightBall);
    break;
  case 1:
    eightBall = "It is decidedly so";
    console.log(eightBall);
    break;
  case 2:
    eightBall = "Reply hazy try again";
    console.log(eightBall);
    break;
  case 3:
    eightBall = "Cannot predict now";
    console.log(eightBall);
    break;
  case 4:
    eightBall = "Do not count on it";
    console.log(eightBall);
    break;
  case 5:
    eightBall = "My sources say no";
    console.log(eightBall);
    break;
  case 6:
    eightBall = "Outlook not so good";
    console.log(eightBall);
    break;
  case 7:
    eightBall = "Signs point to yes";
    console.log(eightBall);
    break;
  case 8:
    eightBall = "It is certain";
    console.log(eightBall);
    break;

  default:
    console.log("An error has occured. Please try again.");
}

/*

if (randomNumber === 0) {
  eightBall = 'It is certain';
}
else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
}
else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
}
else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
}
else if (randomNumber === 5) {
  eightBall = 'My sources say no';
}
else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
}
else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}
else if (randomNumber === 8) {
  eightBall = 'It is certain';
}
else console.log("An error has occured. Please try again.")

console.log(eightBall)
*/
