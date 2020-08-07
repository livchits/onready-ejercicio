const Vehicle = require('./Vehicle');

class Car extends Vehicle {
  constructor({ brand, model, doors, price }) {
    super({ brand, model, price });
    this.doors = doors;
  }
}

module.exports = Car;
