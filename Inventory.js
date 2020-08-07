class Inventory {
  constructor(productsList) {
    this._products = productsList;
  }

  get prices() {
    const priceList = this._products.map((product) => product.price);
    return priceList;
  }
}
