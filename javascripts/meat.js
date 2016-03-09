var SandwichMaker = (function(sammich) {

  var meats = {
    "ham": 5,
    "bacon": 5,
    "turkey": 5,
    "chicken": 5,
    "noMeat": 0
  }

  sammich.addMeat = function(type) {
    sammich.addTopping(meats[type])
    sammich.addSammich("meat", type)
  };
  sammich.delAllMeat = function() {
    for (i=sammich.getSammich().meat.length - 1; i > -1; i--) {
      sammich.addTopping(-meats[sammich.getSammich().meat[i]])
      sammich.getSammich().meat.pop()
    }
  };
  sammich.delOneMeat = function(type) {
    sammich.addTopping(-meats[type])
    sammich.delSammich("meat", type)
  }
  return sammich

})(SandwichMaker || {});