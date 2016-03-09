var SandwichMaker = (function(sammich) {

  var condiments = {
    "ketchup": 5,
    "mustard": 5,
    "mayo": 5,
    "butter": 5,
    "noCondiment": 0
  }

  sammich.addCondiment = function(type) {
    sammich.addTopping(condiments[type])
    sammich.addSammich("condiment", type)
  };
  sammich.delAllCondiment = function() {
    for (i=sammich.getSammich().condiment.length - 1; i > -1; i--) {
      sammich.addTopping(-condiments[sammich.getSammich().condiment[i]])
      sammich.getSammich().condiment.pop()
    }
  }
  sammich.delOneCondiment = function(type) {
    sammich.addTopping(-condiments[type])
    sammich.delSammich("condiment", type)
  }
  return sammich

})(SandwichMaker || {});