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
}
