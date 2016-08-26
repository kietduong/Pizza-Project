//Back End
function order () {
  this.total = [];
  this.cost = 0;
}

function pizza (size, toppings, selectedToppings) {
  this.selectSize = size;
  this.availableToppings = toppings;
  this.toppingsSelected = selectedToppings;
}

pizza.prototype.toppingsTotal = function (availableToppings, selectedToppings) {
  for (i = 0; i < this.toppingsSelected.length; i +=1) {
    if (this.toppingSelected[i].checked) {
      this.availableToppings += 1;
    }
  }
}

pizza.prototype.pizzaTotal = function (size, toppings) {
  
}
