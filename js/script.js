const statusButton = document.querySelector("button");
// target the unordered list
const pets = document.querySelector(".all-pets");

// create a factory function with a pet object
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    // create a method for sleep
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz…`);
      this.isTired = 1;
    },
    // create a method for playtime
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};
