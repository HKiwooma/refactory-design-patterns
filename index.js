const laptop = require('./models/laptop');
const Cart = require('./models/cart');
//const Cartitem = require('./models/cartItem');
const LaptopAdapter = require('./models/laptopAdapter');

const laptop1 = new laptop('HP', 15.6, 8, 2500, 2000);
const laptop2 = new laptop('Dell', 15.6, 8, 3000, 2019);

//console.log(laptop1.printableString());

const cart = new Cart('David', 'Gayaza', 'visa', 'pending');

// const cartitem1 = new Cartitem(laptop1.getDescription(), 1, laptop1.adjPrice());
// const cartitem2 = new Cartitem(laptop2.getDescription(), 3, laptop2.adjPrice());

const cartitem1 = new LaptopAdapter(laptop1, 2);
const cartitem2 = new LaptopAdapter(laptop2, 3);

cart.addcartItem(cartitem1);
cart.addcartItem(cartitem2);
console.log(cart.printableString());

module.exports = laptop1;

/*
const Laptop = require('./models/laptops');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');

const dell = new Laptop(
  '320GB',
  4,
  '2.4Ghz',
  '4hrs',
  '15px',
  '7 Generation',
  'Dell',
  1200,
  'debian 10',
  80293845480,
  1989
);
const hp = new Laptop(
  '320GB',
  4,
  '2.4Ghz',
  '4hrs',
  '15px',
  '7 Generation',
  'Dell',
  1200,
  'debian 10',
  80293845480,
  1989
);
const hp = new Laptop(
  '320GB',
  4,
  '2.4Ghz',
  '4hrs',
  '15px',
  '7 Generation',
  'Dell',
  1200,
  'debian 10',
  80293845480,
  1989
);
// console.log(dell.printableString());


const cart1 = new Cart('David', 'Gayaza', 'visa', 'pending');
const cartItem1 = new CartItem('Dell Laptop', 1, 300, 'pending');
const cartItem2 = new CartItem('HP Laptop', 1, 450, 'pending');
cart1.addCartItem(cartItem1);
cart1.addCartItem(cartItem2);
console.log(cart1.printableString());


var arr = [2, 5, 6, 3, 8, 9];

var newArr = arr.map(function (val, index) {
  return { key: index, value: val * val };
})

console.log(newArr) */
