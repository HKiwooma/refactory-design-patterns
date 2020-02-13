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
    return `${this.getDescription()} ${
      this.quantity
    } ${this.getUnitPrice()} ${this.total()}`;
  }
  getUnitPrice() {
    return this.unitPrice;
  }
  getDescription() {
    return this.description;
  }
}

module.exports = Cartitem;

/*
class CartItem {
  constructor(gDescription, gQuantity, gUnitPrice) {
    this.description = gDescription;
    this.quantity = gQuantity;
    this.unitPrice = gUnitPrice;
  }
  total() {
    return this.quantity * this.unitPrice;
  }
  listOfItem() {
    return `Description: ${this.description} \n Quantity: ${this.quantity} \n Unit Price: ${this.unitPrice} \n Total: ${this.total}`;
  }
}
module.exports = CartItem;*/
