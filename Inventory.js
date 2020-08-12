class Inventory {
  constructor(productsList) {
    this._products = productsList;
  }

  get prices() {
    const priceList = this._products.map((product) => product.price);
    return priceList;
  }

  getProductData(product) {
    return product.data;
  }

  //El método devuelve los productos más caros y no solo el más caro previendo la posibilidad de que varios productos tengan el precio más alto. Lo mismo sucede con los métodos que devuelven e imprimen los productos más baratos y los productos que contienen una determinada letra en el modelo.
  getProductsWithHighestPrice() {
    const highestPrice = Math.max(...this.prices);
    const productsWithHighestPrice = this._products.filter(
      (product) => product.price === highestPrice
    );
    return productsWithHighestPrice;
  }

  getProductsWithLowestPrice() {
    const lowestPrice = Math.min(...this.prices);
    const productsWithLowestPrice = this._products.filter(
      (product) => product.price === lowestPrice
    );
    return productsWithLowestPrice;
  }

  findProductsWithLetterInModel(letter) {
    const productsWithLetterInModel = this._products.filter(({ model }) =>
      model.includes(letter)
    );
    return productsWithLetterInModel;
  }

  sortProductsByDescendingPrice() {
    const productsSortedByDescendingPrice = [
      ...this._products.sort(
        (product, nextProduct) => nextProduct.price - product.price
      ),
    ];
    return productsSortedByDescendingPrice;
  }
}

module.exports = Inventory;
