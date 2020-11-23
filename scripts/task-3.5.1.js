let shoppingCart = [
    {
        name: "loaf of bread",
        type:"food",
        quantity:1,
        Price:.85
    },
    {
        name: "multipack beans",
        type:"food",
        quantity:1,
        Price:1
    },
    {
        name: "mushrooms",
        type:"food",
        quantity:10,
        Price:1
    },
    {
        name: "can of beer",
        type:"alcohol",
        quantity:4,
        Price:1.1
    },
    {
        name: "prosecco",
        type:"alcohol",
        quantity:1,
        Price:8.99
    },
    {
        name: "blue cheese",
        type:"food",
        quantity:1,
        Price:1.99
    },
    {
        name: "candles",
        type:"home",
        quantity:3,
        Price:1.99
    },
    {
        name:"steak",
        type:"food",
        quantity:2,
        Price:3.99
    },
    {
        name:"cheesecake",
        type:"food",
        quantity:1,
        Price:4.99
    },
    {
        name:"Onions",
        type:"food",
        quantity:3,
        Price:.4
    }];

    function shoppingCartTotalPrice( arr ) { // 1. create a function that takes 1 arguent (the array)

        var totalPrice = 0; // 2. Create a variable inside the function called "totalPrice"

        // 3. Lop through each item in teh array and add the calue of the item to the total price - remember to account for the quantity
        for( var index = 0; index < arr.length; index++ ) {

            totalPrice = totalPrice + ( arr[index].Price * arr[index].quantity);

        }

        // 4. Return the totalPrice ariable
        return totalPrice.toFixed(2);

    }

    console.log(shoppingCartTotalPrice ( shoppingCart) );
