const dogFactory = (name = "Steve", breed = "Mutt", weight = 20) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(input) {
      this._name = input;
    },
    set breed(input) {
      this._breed = input;
    },
    set weight(input) {
      this._weight = input;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};

let fido = dogFactory("fido", "Pooch", 25);

console.log(fido.bark());
console.log(fido.weight);
fido.eatTooManyTreats();
fido.eatTooManyTreats();
fido.eatTooManyTreats();
fido.eatTooManyTreats();
fido.eatTooManyTreats();
console.log(fido.weight);
