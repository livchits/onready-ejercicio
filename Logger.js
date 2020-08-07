const { reduceProductsDataForPrice } = require('./utils');

class Logger {
  constructor(inventory) {
    this.inventory = inventory;
  }

  logAllProducts() {
    const allProductsData = this.inventory._products.reduce(
      (dataToPrint, product) => {
        dataToPrint += this.inventory.getProductData(product) + '\n';
        return dataToPrint;
      },
      ''
    );
    console.log(`${allProductsData}=============================`);
  }

  logProductsWithHighestPrice() {
    let highestPriceProductsData;
    const productsWithHighestPrice = this.inventory.getProductsWithHighestPrice();
    const quantityOfProductsWithHighestPrice = productsWithHighestPrice.length;

    if (quantityOfProductsWithHighestPrice === 1) {
      const [{ brand, model }] = productsWithHighestPrice;
      highestPriceProductsData = `Vehículo más caro: ${brand} ${model}`;
    }
    if (quantityOfProductsWithHighestPrice > 1) {
      highestPriceProductsData = productsWithHighestPrice.reduce(
        reduceProductsDataForPrice,
        'Los vehículos más caros son:\n'
      );
    }
    console.log(highestPriceProductsData);
  }
}
