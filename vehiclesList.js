const Car = require('./Car');
const Motorcycle = require('./Motorcycle');

const bd = [
  { brand: 'Peugeot', model: '206', doors: 4, price: 200000 },
  { brand: 'Honda', model: 'Titan', displacement: 125, price: 60000 },
  { brand: 'Peugeot', model: '208', doors: 5, price: 250000 },
  { brand: 'Yamaha', model: 'YBR', displacement: 160, price: 80500.5 },
];

function createVehicle(vehicle) {
  return vehicle.doors ? new Car(vehicle) : new Motorcycle(vehicle);
}

const vehiclesLits = bd.map(createVehicle);

module.exports = vehiclesLits;
