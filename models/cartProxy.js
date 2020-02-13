const Cart = require('./cart');

class CartProxy extends Cart {
  constructor(gName, gAddress, gPaymentMethod, gStatus, gMinimumAmount) {
    super(gName, gAddress, gPaymentMethod, gStatus);
    this.minimumAmount = gMinimumAmount;
  }
  addcartItem(item) {
    if (item.getUnitPrice() >= this.minimumAmount) {
      super.addcartItem(item);
    }
  }
}
module.exports = CartProxy;
