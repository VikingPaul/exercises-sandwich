var breads = document.getElementsByName('bread')
var meats = document.getElementsByName('meat')
var cheeses = document.getElementsByName('cheese')
var condiments = document.getElementsByName('condiment')
var veggies = document.getElementsByName('veggie')
document.addEventListener('click', function(e) {
  // Setting the bread in the sammich object
  if (e.target.name === "bread") {
    if (e.target.id === "noBread") {
      if (SandwichMaker.getSammich().bread !== "") {
        SandwichMaker.delBread(SandwichMaker.getSammich().bread)
      }
      document.getElementById('bread').innerHTML = "No Bread"
    } else {
      SandwichMaker.addBread(e.target.id)
      document.getElementById('bread').innerHTML = SandwichMaker.getSammich().bread.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
  }
  
  // Setting the meat in the sammich object
  eatMe = document.getElementsByName('meat')
  if (e.target.name === "meat") {
    if (e.target.id === "noMeat") {
      if (SandwichMaker.getSammich().meat !== []) {
        SandwichMaker.delAllMeat()
        document.getElementById('meat').innerHTML = "No Meat"
        for (var i = 0; i < eatMe.length - 1; i++) {
          eatMe[i].checked = false
        };
      }
    } else {

      if (e.target.checked === false) {
        SandwichMaker.delOneMeat(e.target.id)
      } else {
        SandwichMaker.addMeat(e.target.id)
        eatMe[eatMe.length-1].checked = false
      }
      document.getElementById('meat').innerHTML = ""
      for (var i = 0; i < SandwichMaker.getSammich().meat.length; i++) {
        document.getElementById('meat').innerHTML += SandwichMaker.getSammich().meat[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + ", "
      };
    }
  }

  // Setting the cheese in the sammich object
  eatMe = document.getElementsByName('cheese')
  if (e.target.name === "cheese") {
    if (e.target.id === "noCheese") {
      if (SandwichMaker.getSammich().cheese !== []) {
        SandwichMaker.delAllCheese()
        document.getElementById('cheese').innerHTML = "No Cheese"
        for (var i = 0; i < eatMe.length - 1; i++) {
          eatMe[i].checked = false
        };
      }
    } else {
      if (e.target.checked === false) {
        SandwichMaker.delOneCheese(e.target.id)
      } else {
        SandwichMaker.addCheese(e.target.id)
        eatMe[eatMe.length-1].checked = false
      }
      document.getElementById('cheese').innerHTML = ""
      for (var i = 0; i < SandwichMaker.getSammich().cheese.length; i++) {
        document.getElementById('cheese').innerHTML += SandwichMaker.getSammich().cheese[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + ", "
      };
    }
  }

  // Setting the condiment in the sammich object
  eatMe = document.getElementsByName('condiment')
  if (e.target.name === "condiment") {
    if (e.target.id === "noCondiment") {
      if (SandwichMaker.getSammich().condiment !== []) {
        SandwichMaker.delAllCondiment()
        document.getElementById('cond').innerHTML = "No Condiments"
        for (var i = 0; i < eatMe.length - 1; i++) {
          eatMe[i].checked = false
        };
      }
    } else {
      if (e.target.checked === false) {
        SandwichMaker.delOneCondiment(e.target.id)
      } else {
        SandwichMaker.addCondiment(e.target.id)
        eatMe[eatMe.length-1].checked = false
      }
      document.getElementById('cond').innerHTML = ""
      for (var i = 0; i < SandwichMaker.getSammich().condiment.length; i++) {
        document.getElementById('cond').innerHTML += SandwichMaker.getSammich().condiment[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + ", "
      };
    }
  }

  // Setting the meat in the sammich object
  eatMe = document.getElementsByName('veggie')
  if (e.target.name === "veggie") {
    if (e.target.id === "noVeggies") {
      if (SandwichMaker.getSammich().veggie !== []) {
        SandwichMaker.delAllVeggie()
        document.getElementById('veggie').innerHTML = "No Veggies"
        for (var i = 0; i < eatMe.length - 1; i++) {
          eatMe[i].checked = false
        };
      }
    } else {
      if (e.target.checked === false) {
        SandwichMaker.delOneVeggie(e.target.id)
      } else {
        SandwichMaker.addVeggie(e.target.id)
        eatMe[eatMe.length-1].checked = false
      }
      document.getElementById('veggie').innerHTML = ""
      for (var i = 0; i < SandwichMaker.getSammich().veggie.length; i++) {
        document.getElementById('veggie').innerHTML += SandwichMaker.getSammich().veggie[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + ", "
      };
    }
  }
  document.getElementById('price').innerHTML = "$" +SandwichMaker.getPrice()
})