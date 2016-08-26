// Back End
function order () {
  this.pizzaTotal = [];
  this.costTotal = 0;
}

function Pizza (toppings, size, chosen) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.chosenToppings = chosen;
}

Pizza.prototype.costOfToppings = function (chosen, toppings) {
  for (i = 0; i < this.chosenToppings.length; i += 1) {
    if (this.chosenToppings[i].checked) {
      this.pizzaToppings += 1;
    }
  }
}

Pizza.prototype.costOfPizza = function (toppings, size) {
  var pizzaPrice = this.pizzaToppings + this.pizzaSize;
  return pizzaPrice;
}

function resetFields() {
  $("select.new-pizza-size").val("");
  $('input:checkbox').removeAttr('checked');
}

// Front End
$(document).ready(function(){

  $("#add-more-pizza").click(function(){
    $("#extra-pizzas").append('<p>___________________________________</p>' +
                              '<h2>Sizes</h2>' +
                              '<div class="another-pizza">' +
                              '<select class="form-control new-pizza-size">' +
                               '<option value="6">Small</option>' +
                               '<option value="8">Medium</option>' +
                               '<option value="10">Large</option>' +
                               '</select>' +
                               '<h2>Toppings</h2>' +
                               '<h3>Each topping is an extra $1.00</h3>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">pepperoni</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">sausage</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">garlic crust</label>' +
                               '</div>'  +
                               '</div>'
    );
  });

  $("#new-pizza-order").submit(function(event){
    event.preventDefault();

    var newOrder = new order ();
    var overallTotal = newOrder.costTotal;

    $(".another-pizza").each(function() {
      var inputtedPizzaSize = parseInt( $(this).find( $("select.new-pizza-size") ) .val());
      var inputtedPizzaToppings = 0;
      var checkedBoxes = $(this).find( document.getElementsByName("toppings") );

      var newPizza = new Pizza(inputtedPizzaToppings, inputtedPizzaSize, checkedBoxes);

      newOrder.pizzaTotal.push(newPizza);

      newPizza.costOfToppings();

      var pizzaNumber = newOrder.pizzaTotal.indexOf(newPizza);


      $("#show-pizza-results").show();
      $("#pizza-price").append("<li> Pizza " + (pizzaNumber + 1) + ": $" + newPizza.costOfPizza() + "</li>");
      overallTotal = overallTotal + newPizza.costOfPizza();
    });

    $("#complete-total").text("Your Total Order is $" + overallTotal);
    resetFields();

  });
});
