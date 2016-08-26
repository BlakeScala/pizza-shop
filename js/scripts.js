function Pizza(toppings, size, delivery, price) {
  this.toppings = toppings;
  this.size = size;
  this.delivery = false;
  this.price = price
}
Pizza.prototype.sizeCost = function(){
  var totalCost = 0;
  if (this.size = "Small"){
    totalCost += 5;
  } else if (this.size = "Medium"){
    totalCost += 8;
  } else if (this.size = "Large"){
    totalCost += 11;
  } else if (this.size = "Extra Large"){
    totalCost += 15;
  }
  for (var i = 0; i < this.toppings; i++) {
    totalCost += 3;
  }
  if (this.delivery === true) {
  totalCost += 5;}
}

$(document).ready(function() {
  $(".pizzabuilder").submit(function(event) {
    event.preventDefault();
  });
});
