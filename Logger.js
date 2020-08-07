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

  logProductsWithLowestPrice() {
    let lowestPriceProductsData;
    const productsWithLowestPrice = this.inventory.getProductsWithLowestPrice();
    const quantityOfProductsWithLowestPrice = productsWithLowestPrice.length;

    if (quantityOfProductsWithLowestPrice === 1) {
      const [{ brand, model }] = productsWithLowestPrice;
      lowestPriceProductsData = `Vehículo más barato: ${brand} ${model}`;
    }
    if (quantityOfProductsWithLowestPrice > 1) {
      lowestPriceProductsData = productsWithLowestPrice.reduce(
        reduceProductsDataForPrice,
        'Los vehículos más baratos son:\n'
      );
    }
    console.log(lowestPriceProductsData);
  }
}
