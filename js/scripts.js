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
    if (this.toppingsSelected[i].checked) {
      this.availableToppings += 1;
    }
  }
}

pizza.prototype.pizzaTotal = function (size, toppings) {
  var price = this.selectSize + this.availableTopppings;
  return price;
}

function resetSelections() {
  $("select.pizza-size").val("");
  $('input:checkbox').removeAttr('checked');
}

// Front End

$(document).ready(function() {

  $("#add-more-pizza").click(function() {
    $("#pizza-order").append('<p>___________________________________</p>' +
                              '<h2>Sizes</h2>' +
                              '<div id="orderForm">' +
                              '<select class="form-control pizza-size">' +
                               '<option value="6">Small</option>' +
                               '<option value="8">Medium</option>' +
                               '<option value="10">Large</option>' +
                               '</select>' +
                               '<h2>Toppings</h2>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">pepperoni</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">sausage</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">garlic crust</label>' +
                               '</div>' +
                               '</div>'
    );
  });

  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var zaaOrder = new order ();
    var overallTotal = zaaOrder.cost;

    $("#pizza-order").each(function() {
      var inputtedPizzaSize = parseInt( $(this).find( $("select.pizza-size")).val());

      var inputtedPizzaToppings = 0;

      var checkedBoxes = $(this).find( document.getElementsByName("toppings"));

      var newPizza = new pizza(inputtedPizzaToppings, inputtedPizzaSize, checkedBoxes);

      zaaOrder.total.push(newPizza);

      newPizza.toppingsTotal();

      var pizzaNumber = zaaOrder.total.indexOf(newPizza);


      $("#show-pizza-results").show();
      $("#pizza-price").append("<li> Pizza " + (pizzaNumber + 1) + ": $" + newPizza.pizzaTotal() + "</li>");
      overallTotal = overallTotal + newPizza.pizzaTotal();
    });

    $("#final-total").text("Your Total Order is $" + overallTotal);
    resetSelections();

  });
});
