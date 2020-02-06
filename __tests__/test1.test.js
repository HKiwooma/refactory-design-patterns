const Laptop = require('../models/laptops');

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
  1989,
);

 test('Test laptop age: ', () => {
   expect(hp.laptopAge()).toBe(31);
 });
 test('Test that checks and adjust laptop price: ', () => {
   expect(hp.adjustPrice()).not.toBe(1200);
 });
