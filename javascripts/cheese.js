var SandwichMaker = (function(sammich) {

  var cheeses = {
    "swiss": 5,
    "american": 5,
    "provolone": 5,
    "parmesan": 5,
    "noCheese": 0
  }

  sammich.addCheese = function(type) {
    sammich.addTopping(cheeses[type])
    sammich.addSammich("cheese", type)
  };
  sammich.delAllCheese = function() {
    for (i=sammich.getSammich().cheese.length - 1; i > -1; i--) {
      sammich.addTopping(-cheeses[sammich.getSammich().cheese[i]])
      sammich.getSammich().cheese.pop()
    }
  }
  sammich.delOneCheese = function(type) {
    sammich.addTopping(-cheeses[type])
    sammich.delSammich("cheese", type)
  }
  return sammich

})(SandwichMaker || {});