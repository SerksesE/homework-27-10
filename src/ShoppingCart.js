//constructor class with an empty array
class ShoppingCart {
  constructor() {
    this.items = []
  };

//the get items method returns the items array
  getItems() {
    return this.items;
  }

//the add item method pushes new objects the the items array
  addItem(name, quantity, pricePerUnit) {
    return this.items.push({
      name, quantity, pricePerUnit
    });
  }

//the clear method returns an empty items array  
  clear() {
    return this.items = [];
  }

//the total method returns the total price of the items in the items array
//first it maps the price and multiplies it with the quantity
//then it reduces all values to a single one 
  total() {
    return this.items
      .map(item => item.pricePerUnit * item.quantity)
      .reduce((acc, item) => acc + item, 0)
  };
};

//exports the ShoppingCart class
module.exports = ShoppingCart






