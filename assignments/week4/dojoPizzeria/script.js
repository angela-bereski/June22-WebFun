function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType= crustType;
    pizza.sauceType= sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;
    return pizza;
}

var pizza1= pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2= pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3= pizzaOven("thin crust", "garlic cream", ["mozzarella"], ["spinach", "garlic", 'calabrian chiles'])
console.log(pizza3);

var pizza4= pizzaOven("wood fired", "olive oil", ["mozzarella", "fontina"], ["arugula", "mushrooms"]);
console.log(pizza4);

function randomPizza(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType= crustType;
    pizza.sauceType= sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;
    return pizza;
}
var crust= ["deep dish", "thin crust", "hand tossed"];
var sauce= ["marinara", "garlic cream", 'olive oil'];
var cheese= ["mozzarella", "feta", "fontina"];
var topping= ["pepperoni", "sausage", "mushrooms", "onion"];
var randomcrust = crust[Math.floor(Math.random()*crust.length)];
var randomsauce = sauce[Math.floor(Math.random()*sauce.length)];
var randomcheese = cheese[Math.floor(Math.random()*cheese.length)];
var randomtopping = topping[Math.floor(Math.random()*topping.length)];

var pizzaRando= randomPizza(randomcrust, randomsauce, randomcheese, randomtopping);
console.log(pizzaRando);