//Back End
function Pizza(toppings, size, delivery) {
  this.toppings = toppings;
  this.size = size;
  this.delivery = delivery;
  this.price = 0;
}
Pizza.prototype.pizzaCost = function(){
  console.log(this.price);
  if (this.size === "small"){
    this.price += 5;
  } else if (this.size === "medium"){
    this.price += 8;
  } else if (this.size === "large"){
    this.price += 11;
  } else if (this.size === "extra large"){
    this.price += 15;
  }
  console.log(this.price);
  var addToppings = (((this.toppings).length) * 2);
  this.price += addToppings;
  console.log(this.price);
  if (this.delivery === "delivery"){
    this.price += 5;
  } else if (this.delivery === "pickup"){
    this.price += 0;
  }
}

//Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#inputname").val();
    var sizeInput = $("input:radio[name=size-check]:checked").val();
    var toppingsArray = [];
    $("input:checkbox[name=topping-check]:checked").each(function() {
    toppingsArray.push($(this).val());
    });
    var deliveryInput= $("input:radio[name=delivery-check]:checked").val();
    var newPizza = new Pizza(toppingsArray, sizeInput, deliveryInput);
    newPizza.pizzaCost();

    toppingOutput = newPizza.toppings;
    $("#output").text("Hello, " + nameInput + "! You ordered a " + newPizza.size + " pizza for " + newPizza.delivery + " with " + toppingOutput + ": $" + newPizza.price);
    $("#yourorder").show();

    if (deliveryInput === "delivery"){
      $("#address").show();
      $("#pickup").hide();
    }
  });

  $("#reset").click(function(){
    $("input:radio[name='size-check']").each(function(i) {
       this.checked = false;
    });
    $("input:checkbox[name='topping-check']").each(function(i) {
       this.checked = false;
    });
    $("#yourorder").hide();
    $("#address").hide();
  });

  $("#addressconfirm").submit(function(){
    $("#thanks").show();
  });

  $("#pickupconfirm").click(function(){
    $("#thanks").show();
  })
});
