var SandwichMaker = (function(sammich) {

  var veggies = {
    "lettuce": 5,
    "tomato": 5,
    "onion": 5,
    "noVeggies": 0
  }

  sammich.addVeggie = function(type) {
    sammich.addTopping(veggies[type])
    sammich.addSammich("veggie", type)
  };
  sammich.delAllVeggie = function() {
    for (i=sammich.getSammich().veggie.length - 1; i > -1; i--) {
      sammich.addTopping(-veggies[sammich.getSammich().veggie[i]])
      sammich.getSammich().veggie.pop()
    }
  }
  sammich.delOneVeggie = function(type) {
    sammich.addTopping(-veggies[type])
    sammich.delSammich("veggie", type)
  }
  return sammich

})(SandwichMaker || {});