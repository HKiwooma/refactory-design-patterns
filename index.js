const laptop = require('./models/laptop');
const Cart = require('./models/cart');
const LaptopAdapter = require('./models/laptopAdapter');

const laptop1 = new laptop('HP', 15.6, 8, 2500, 2000);
const laptop2 = new laptop('Dell', 15.6, 8, 3000, 2019);

const cart = new Cart('David', 'Gayaza', 'visa', 'pending');

const cartitem1 = new LaptopAdapter(laptop1, 2);
const cartitem2 = new LaptopAdapter(laptop2, 3);

cart.addcartItem(cartitem1);
cart.addcartItem(cartitem2);
console.log(cart.printableString());

module.exports = laptop1;

