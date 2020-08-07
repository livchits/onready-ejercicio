const vehiclesList = require('./vehiclesList');
const Inventory = require('./Inventory');
const Logger = require('./Logger');

const vehiclesInventory = new Inventory(vehiclesList);

const vehiclesLogger = new Logger(vehiclesInventory);

vehiclesLogger.logAllProducts();

vehiclesLogger.logProductsWithHighestPrice();

vehiclesLogger.logProductsWithLowestPrice();

vehiclesLogger.logProductsWithLetterInModel('Y');

vehiclesLogger.logProductsSortedByDescendingPrice();
