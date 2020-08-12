const Vehicle = require('./Vehicle');
const { formatDisplacement, formatPrice } = require('./utils');

class Motorcycle extends Vehicle {
  constructor({ brand, model, displacement, price }) {
    super({ brand, model, price });
    this.displacement = displacement;
  }
  get data() {
    const motorcycleData = `Marca: ${this.brand} // Modelo: ${
      this.model
    } // Cilindrada: ${formatDisplacement(
      this.displacement
    )} // Precio: ${formatPrice(this.price)}`;
    return motorcycleData;
  }
}

module.exports = Motorcycle;
