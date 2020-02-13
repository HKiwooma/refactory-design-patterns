class Cartitem {
  constructor(gDescription, gQuantity, gUnitPrice) {
    this.description = gDescription;
    this.quantity = gQuantity;
    this.unitPrice = gUnitPrice;
  }

  total() {
    return this.quantity * this.getUnitPrice();
  }
  printableString() {
    return `Description: ${this.getDescription()} 
    Quantity: ${this.quantity}
    Unit Price: ${this.getUnitPrice()} 
    Total: ${this.total()} \n`;
  }
  getUnitPrice() {
    return this.unitPrice;
  }
  getDescription() {
    return this.description;
  }
}

module.exports = Cartitem;
