const Car = require('./Car');
const Motorcycle = require('./Motorcycle');

class Inventory {
  constructor(productsList) {
    this._products = productsList;
  }

  get prices() {
    const priceList = this._products.map((product) => product.price);
    return priceList;
  }

  getProductData(product) {
    const { brand, model, doors, displacement, price } = product;
    let productData;

    if (product instanceof Car) {
      productData = `Marca: ${brand} // Modelo: ${model} // Puertas: ${doors} // Precio: ${formatPrice(
        price
      )}`;
    }
    if (product instanceof Motorcycle) {
      productData = `Marca: ${brand} // Modelo: ${model} // Cilindrada: ${formatDisplacement(
        displacement
      )} // Precio: ${formatPrice(price)}`;
    }

    return productData;
  }
}
