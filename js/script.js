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

// create new objects
const poppy = createPet("Poppy", "pekingese");

const charlie = createPet("Charlie", "himalayan cat");

const ruby = createPet("Ruby", "rex rabbit");

const milo = createPet("Milo", "affenpinscher");

const theo = createPet("Theo", "american shorthair");

const nala = createPet("Nala", "british shorthair");

const penny = createPet("Penny", "golden hamster");

const kiwi = createPet("Kiwi", "lionhead rabbit");

const olive = createPet("Olive", "alaskan malamute");

const winston = createPet("Winston", "brussels griffon");

// verify objects and methods

// console.log(poppy, charlie, ruby, milo, theo, nala, penny, kiwi, olive, winston);

// call each method to make sure they both work
/*
poppy.sleep();
charlie.play(); 
*/

// console.log(poppy, charlie);

// isTired value for Poppy has changed from 5 to 1 because calling sleep() changes the isTired value to 1
// isTired value for Charlie has increased from 5 to 6 because play() adds 1 to the isTired value when run

// change the value of the isTired property for certain pet objects
ruby.isTired = 8;
theo.isTired = 9;
penny.isTired = 10;
