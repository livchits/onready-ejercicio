function formatDisplacement(displacement) {
  return `${displacement}c`;
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
  minimumFractionDigits: 2,
});

//No es la forma más elegante, pero es una alternativa dado que la internacionalización no se comporta del mismo modo en Node que en el browser. Otras posibles soluciones son las mencionadas aquí (https://stackoverflow.com/a/55183777/11660703), pero no se ajustan a los requerimientos del ejercicio
function formatPrice(price) {
  const priceInCurencyFormat = formatter.format(price);
  const priceChars = priceInCurencyFormat.split(',').join('.').split('');
  priceChars.splice(-3, 1, ',');
  const priceFromated = priceChars.join('');
  return priceFromated;
}

function reduceProductsDataForPrice(productsData, { brand, model }) {
  return (productsData += `${brand} ${model} \n`);
}

module.exports = {
  formatDisplacement,
  formatPrice,
  reduceProductsDataForPrice,
};
