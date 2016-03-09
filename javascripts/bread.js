var SandwichMaker = (function(sammich) {

  var breads = {
    "wheat": 5,
    "white": 5,
    "noBread": 0
  }

  sammich.addBread = function(type) {
    if (sammich.getSammich().bread !== "") {
      sammich.delBread(sammich.getSammich().bread)
    };
    sammich.addTopping(breads[type])
    sammich.addSammich("bread", type)
  };
  sammich.delBread = function(bread) {
    sammich.addTopping(-breads[bread])
    sammich.getSammich().bread = ""
  }

  return sammich

})(SandwichMaker || {});