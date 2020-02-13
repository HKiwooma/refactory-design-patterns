class Cart {
  constructor(name, address, paymentMethod, status) {
    this.name = name;
    this.address = address;
    this.paymentMethod = paymentMethod;
    this.status = status;
    this.items = [];
  }
  addcartItem(item) {
    this.items.push(item);
  }
  printableString() {
    return this.items.map(item => item.printableString()).join('\n');
  }
}

module.exports = Cart;

/*
class Cart {
  constructor(gName, gAddress, gPaymentMethod, gDate, gStatus) {
    this.name = gName;
    this.address = gAddress;
    this.paymentMethod = gPaymentMethod;
    this.date = gDate;
    this.status = gStatus;
    this.items = [];
  }
  addCartItem(item) {
    this.items.push(item);
  }
  printableString() {
      return this.items.map(this.itemPrintableString).join('\n');
  }
    itemPrintableString(item) {
      return item.printableString();
  }
}
module.exports = Cart;*/
