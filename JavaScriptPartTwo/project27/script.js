const isVegan = (food) => {
  if (food.source === "plant") {
    return true;
  }
  return false;
};

const isTheDinnerVegan = (array) => array.every(isVegan);

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false
