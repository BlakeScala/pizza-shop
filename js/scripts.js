//Back End
function Pizza(toppings, size, delivery) {
  this.toppings = toppings;
  this.size = size;
  this.delivery = false;
  this.price = 0;
}

Pizza.prototype.pizzaCost = function(){
  if (this.size === "Small"){
    this.price += 5;
  } else if (this.size === "Medium"){
    this.price += 8;
  } else if (this.size === "Large"){
    this.price += 11;
  } else if (this.size === "Extra Large"){
    this.price += 15;
  }
  var addToppings = (((this.toppings).length) * 2);
  this.price += addToppings;
}

//Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("input:radio[name=size-check]:checked").val();
    var toppingsArray = [];
    $("input:checkbox[name=topping-check]:checked").each(function() {
    toppingsArray.push($(this).val());
    });
    var newPizza = new Pizza(toppingsArray, sizeInput, false);
    newPizza.pizzaCost();
    toppingOutput = newPizza.toppings;
    $("#output").append("<li>" + newPizza.size + " pizza with " + toppingOutput + ": $" + newPizza.price + "</li>");
  });

  $("#addpizza").click(function(event){
    $("input:radio[name='size-check']").each(function(i) {
       this.checked = false;
    });
    $("input:checkbox[name='topping-check']").each(function(i) {
       this.checked = false;
    });
  });


});
