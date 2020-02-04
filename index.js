const Laptop = require('./models/laptops');

const dell = new Laptop(
  '320GB',
  4,
  '4hrs',
  '15px',
  '7 Generation',
  'Dell',
  '$1200',
  'debian 10',
  80293845480,
);
console.log(dell.printableString());
console.log(dell.ram);

