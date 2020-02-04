const Laptop = require('../models/laptops');

const hp = new Laptop(
  '320GB',
  4,
  '4hrs',
  '15px',
  '7 Generation',
  'Dell',
  '$1200',
  'debian 10',
  80293845480
);

test('Test that a string version of object returned: \n', () => {
  expect(hp.printableString()).tobedefined();
});
test('Test that a string version of object returned: \n', () => {
  expect(typeof hp.operatingSystem).tobe(String);
});
test('Test that a string version of object returned: \n', () => {
  expect(hp.operatingSystem).tobe('debian 10');
});
