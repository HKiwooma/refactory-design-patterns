class Cartitem {
  constructor(description, quantity, unitPrice) {
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }

  total() {
    return this.quantity * this.getUnitPrice();
  }
  printableString() {
    return `Description: ${this.getDescription()} 
    \n Quantity: ${this.quantity}
    \n Unit Price: ${this.getUnitPrice()} 
    \n Total: ${this.total()}`;
  }
  getUnitPrice() {
    return this.unitPrice;
  }
  getDescription() {
    return this.description;
  }
}

module.exports = Cartitem;
