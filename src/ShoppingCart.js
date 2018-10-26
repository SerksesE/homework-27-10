class ShoppingCart {
  constructor(name, quantity, pricePerUnit) {

    this.items = []
    this.name = name
    this.quantity = quantity
    this.pricePerUnit = pricePerUnit
  }
  getItems() {
    return this.items;
  }
  addItem() {
    return this.items.push({
      name: this.name,
      quantity: this.quantity,
      pricePerUnit: this.pricePerUnit
    });

  }
  clear() {
    this.items = [];
  }
  total(items) {
    return items
      .map(item => item.pricePerUnit * item.quantity)
      .reduce((acc, item) => acc + item)
  }
}



module.exports = ShoppingCart

