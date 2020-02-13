class Cart {
  constructor(gName, gAddress, gPaymentMethod, gStatus) {
    this.name = gName;
    this.address = gAddress;
    this.paymentMethod = gPaymentMethod;
    this.status = gStatus;
    this.items = [];
  }
  addcartItem(item) {
    // if (item.getUnitPrice() >= 2000) { }
      this.items.push(item);
    
  }
  printableString() {
    return this.items.map(item => item.printableString()).join('\n');
  }
}

module.exports = Cart;
