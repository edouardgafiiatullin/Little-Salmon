/* Salads */
const dish1 = {
    name: "Fish Soup",
    category: "Soup",
    price: 22.00,
    isVegetarian: false,
    description: "fresh sea grouper and vegetables",
}
const dish2 = {
    name: "Velouté soup of mushrooms",
    category: "Soup",
    price: 19.00,
    isVegetarian: true,
    description: "shitake, chestnut, sour apple, thyme",
}
/* Soups */
const dish3 = {
    name: "Greek Salad",
    category: "Salad",
    price: 19.00,
    isVegetarian: true,
    description: "cherry tomatoes, cucumber, feta cheese P.D.O., pepper, onion, caper, kalamon olives, mini carob rusks and extra virgin olive oil",
}
const dish4 = {
    name: "Chicken Salad",
    category: "Salad",
    price: 23.00,
    isVegetarian: false,
    description: "chinese and red cabbage, radicchio, coriander, fresh onion, roasted sesame, crispy pies, sesame-soya sauce",
}
const dish5 = {
    name: "Green Salad",
    category: "Salad",
    price: 22.00,
    isVegetarian: true,
    description: "baby lettuce, asparagus, vinaigrette of lemon and basil olive oil",
}
const dish6 = {
    name: "Lobster’s Ceasar’s",
    category: "Salad",
    price: 42.00,
    isVegetarian: false,
    description: "lettuce hearts, crispy bacon, celery, parmesan Caesar’s dressing",
}
const dish7 = {
    name: "Burrata",
    category: "Salad",
    price: 24.00,
    isVegetarian: true,
    description: "cherry tomatoes, basil olive oil, carob",
}



let basket = {
    list: [],
    totalCost: 0.00,
    
    addDish: function () {
        let firstDish = prompt ("What would you like to eat?: ");
        this.list.push (firstDish);
        
        let userInput = prompt ("Anything else?: ");
        while (userInput == "yes" || userInput == "Yes" || userInput == "YES") {
            let anotherDish = prompt ("Please enter another dish: ");
            this.list.push (anotherDish);
            userInput = prompt ("Anything else?: ");
            }
        console.log ("Your order has: ", basket.list);
        console.log ("The total cost is: ", basket.totalCost);
        console.log ("Thank you!");
        }
    }

basket.addDish ();