function Pizza(toppings, size, delivery, price) {
  this.toppings = toppings;
  this.size = size;
  this.delivery = false;
  this.price = price
}
function Topping(name, price){
  this.name = name;
  this.price = price;
}
function Size(Price,Slices){
  this.price = price;
  this.slices = slices;
}


$(document).ready(function() {
  $(".pizzabuilder").submit(function(event) {
    event.preventDefault();
  });
});
