// Exercise 14: Write a closure function `createCart` that returns an object with two methods: 
// `addItem(item)` to add an item to the cart, and `getItems()` to retrieve the list of added items.
// Example: const cart = createCart(); cart.addItem("apple"); cart.getItems(); // ["apple"]



function createCart(){
    let items =[]; //Here I will store my items

    return {
        //method addItem
        addItem: function(item) {
            items.push(item);
        },

        //method getItem
        getItems: function() {
            return items;
        },

        //method showCart
        showCart: function(){
            console.log(`The items in my cart: ${items}`);
        }
    };
}

const cart = createCart();
cart.addItem("apple");
cart.addItem("banana");
console.log(cart.getItems()); // Expected output: ["apple", "banana"]
cart.showCart();