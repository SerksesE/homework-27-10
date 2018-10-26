class ShoppingCart {
  constructor() {
    this.items = []

  }
  getItems() {
    return this.items;
  }

  addItem(name, quantity, pricePerUnit) {
    return this.items.push({
      name, quantity, pricePerUnit
    });
  }

  clear() {
    return this.items = [];
  }

  total() {
    return this.items
      .map(item => item.pricePerUnit * item.quantity)
      .reduce((acc, item) => acc + item, 0)
  };
};

module.exports = ShoppingCart

const cart = new ShoppingCart




