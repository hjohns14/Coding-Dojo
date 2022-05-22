function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {}
    pizza.crustType = crustType
    pizza.cheese = cheese
    pizza.sauceType = sauceType
    pizza.toppings = toppings
    pizza.print = function(){
        console.log("Crust Type: " + this.crustType)
        console.log("Cheese: " + this.cheese)
        console.log("Sauce: " + this.sauceType)
        console.log("Toppings: " + this.toppings)
    }

    return pizza
}

var pizzaCrusts = ["Deep Dish", "Hand Tossed", "Sicilian", "Thin Crust", "Stuffed Crust"]
var cheeses = ["Mozarella", "Feta", "Gorgonzola", "Goat Cheese"]
var sauces = ["Maranara", "White", "Pesto", "BBQ"]
var toppings = ["mushroom", "onion", "bell pepper", "pepperoni", "sausage", "pineapple", "canadian bacon"]

function randomZa(toppingCount){
    var crust = pizzaCrusts[Math.floor(Math.random() * pizzaCrusts.length)]
    var cheese = cheeses[Math.floor(Math.random() * cheeses.length)]
    var sauce = sauces[Math.floor(Math.random() * sauces.length)]
    var topping = []
    if (toppingCount < toppings.length){
        for (var i = 0; i < toppingCount; i++){
            var potentialTopping = toppings[Math.floor(Math.random() * toppings.length)]
            if (topping.includes(potentialTopping)){
                i--
                continue
            }
            topping.push(potentialTopping)
        }
    }
    else{console.log("We aint got that many toppings sir")}

    return pizzaOven(crust, sauce, cheese, topping)

}   

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "saussage"])


var p2 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "feta"], ["mushrooms", "olives", "onions"])


var p3 = randomZa(2)
var p4 = randomZa(4)
p3.print()
