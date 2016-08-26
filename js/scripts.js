function Pizza(toppings, size, delivery) {
  this.toppings = toppings;
  this.size = size;
  this.delivery = false;
  this.price = 0;
}

Pizza.prototype.sizeCost = function(){
  if (this.size === "Small"){
    this.price += 5;
  } else if (this.size === "Medium"){
    this.price += 8;
  } else if (this.size === "Large"){
    this.price += 11;
  } else if (this.size === "Extra Large"){
    this.price += 15;
  }
}

Pizza.prototype.toppingCost = function() {
  var multiplier = (((this.toppings).length) * 2);
  console.log("m " + multiplier);
  console.log(this.price);
  this.price += multiplier;
  console.log(this.price);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("input:radio[name=size-check]:checked").val();
    var toppingsArray = [];
    $("input:checkbox[name=topping-check]:checked").each(function(){
    toppingsArray.push($(this).val());
    var newPizza = new Pizza(toppingsArray, sizeInput, false);
    newPizza.sizeCost();
    newPizza.toppingCost();
    });
  });
});
