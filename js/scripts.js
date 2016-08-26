///Back End
function order () {
  this.pizza = [];
  this.cost = 0
}

function pizza (size, toppings, selected) {
  this.pSize = pizzaSize
  this.pTopping = pizzaToppings
  this.selectedToppings = selected
}

pizza.prototype.toppingsSelected = function (size, toppings) {
  for ( i = 0; i < this.selectedToppings.length; i =+ 1) {
    if (this.selected toppings[i].selected) {
      this.ptoppings += 1;
    }
  }
}

pizza.prototype.pizzaCost =  function(size, toppings) {
  var pizzaTotal = this.pSize + this.pToppings;
  return pizzaTotal
}

//Front End
$(document).ready(function() {
  $("#pizzaSubmit").click(function() {
    $("#size").append(
        '<h2>size</h2>'+ '<div class = "pizza-complete">' +
            '<div class="zaasize">' + '<select class="size">' + '<option id = "sm">small</option>' + '<option id = "md">medium</option>' + '<option id "lg">large</option>' + '</select>' + '<h2>toppings</h2>' + '<div class="zaatoppings">' +   '<select class="toppings">' + '<option id = "pepperoni">pepperoni</option>' + '<option id = "sausage">sausage</option>' + '</select>'
    );
  });

  $()
})



// var pigLatin = function(preSentence) {
//   if ((preSentence.charAt(0) === "a") || (preSentence.charAt(0) === "e") || (preSentence.charAt(0) === "i") || (preSentence.charAt(0) === "o") || (preSentence.charAt(0) ===  "u")) {
//     return preSentence + "ay";
//   } else if ((preSentence.charAt(0) === "A") || (preSentence.charAt(0) === "E") || (preSentence.charAt(0) === "I") || (preSentence.charAt(0) === "O") || (preSentence.charAt(0) === "U")) {
//     return preSentence + "ay";
//   } else if ((preSentence.charAt(0) !== "a") || (preSentence.charAt(0) !== "e") || (preSentence.charAt(0) !== "i") || (preSentence.charAt(0) !== "o") || (preSentence.charAt(0) !==  "u")) {
//     var preSentenceArray = preSentence.split("");
//     var preSentenceFirstLetter = preSentenceArray.shift();
//     preSentenceArray.push(preSentenceFirstLetter);
//     var postSentence = preSentenceArray.join("");
//     console.log(postSentence);
//     return postSentence + "ay";
//   } else {
//     console.log("not a character");
//     return preSentence;
//   }
// };
//
// $(function() {
//   $("form#pig-latin").submit(function(event) {
//     event.preventDefault();
//     var preSentence = $("input#pre-sentence").val();
//     var result = pigLatin(preSentence);
//
//     $(".post-sentence").text(result);
//   });
});
