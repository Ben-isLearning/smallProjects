let menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck == "string") {
      return (this._meal = mealToCheck);
    }
  },
  get meal() {
    if (this._meal) {
      return this._meal;
    } else {
      return "Meal was not set correctly!";
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck == "number") {
      return (this._price = priceToCheck);
    }
  },
  get price() {
    if (this._price) {
      return this._price;
    } else {
      return "Price was not set correctly!";
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Todays special is ${this._meal}, for only £${this._price}`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Pizza";
menu.price = 10;

console.log(menu);
console.log(menu.meal);
console.log(menu.price);
console.log(menu.todaysSpecial);
