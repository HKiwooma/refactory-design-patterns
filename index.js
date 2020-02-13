const laptop = require('./models/laptops');
// const Cart = require('./models/cart');
const CartProxy = require('./models/cartProxy');
const LaptopAdapter = require('./models/laptopAdapter');
// const minimumPrice = 100

const laptop1 = new laptop('HP', 15.6, 8, 500, 2000);
const laptop2 = new laptop('Dell', 15.6, 8, 3000, 2019);

const cart = new CartProxy('David', 'Gayaza', 'visa', 'pending',100);

const cartitem1 = new LaptopAdapter(laptop1, 2);
const cartitem2 = new LaptopAdapter(laptop2, 3);

/* if(cartitem1.getUnitPrice()>=minimumPrice){
  cart.addcartItem(cartitem1);
}
if (cartitem2.getUnitPrice() >= minimumPrice) {
  cart.addcartItem(cartitem2);
} */

cart.addcartItem(cartitem1);
cart.addcartItem(cartitem2);
console.log(cart.printableString());

module.exports = laptop1;

