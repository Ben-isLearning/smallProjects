const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);

  return Math.floor(die1 + die2);
};

console.log(rollTheDice());
