const Laptop = require('./models/laptops');

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
  1989,
);
console.log(dell.printableString());

