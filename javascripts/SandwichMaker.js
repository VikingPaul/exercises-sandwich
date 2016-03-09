var SandwichMaker = (function() {
  // Private variable to store the price
  var totalPrice = 0;
  var sammich = {
    bread: "",
    meat: [],
    cheese: [],
    condiment: [],
    veggie: []
  }
  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    },
    getPrice: function() {
      return totalPrice
    },
    getSammich: function() {
      return sammich
    },
    addSammich: function(key, pair) {
      if (key === 'bread') {
        sammich[key] = pair
      } else {
        sammich[key].push(pair)
      }
    },
    delSammich: function(key, pair) {
      sammich[key].splice(sammich[key].indexOf(pair), 1)
    }
  };
})();