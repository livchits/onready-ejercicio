const Vehicle = require('./Vehicle');

class Motorcycle extends Vehicle {
  constructor({ brand, model, displacement, price }) {
    super({ brand, model, price });
    this.displacement = displacement;
  }
}

module.exports = Motorcycle;
