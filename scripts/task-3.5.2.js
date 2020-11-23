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

    // 1. Create a function that takes 1 argument (the array)

    function discoutForFood( arr ) {

        var totalPrice = 0; // 2. Create a variabel inside the function called "totalPrice"

        //3. loop through the array of objects
        for( var index =0; index < arr.length; index++ ) {

            // 4. if item is type food add 20%discount
           if( arr[index].type === "food" ) {

            var discount = ( arr[index].price * 20) /100;

            totalPrice = totalPrice + ( arr[index].price - discount ) * arr[index].quantity;


           } 
           else {

            totalPrice= totalPrice + ( arr[index].price * arr[index].quantity);
           }


        }
        // 5. Return the total price variable
        return totalPrice.toFixed(2);

    }

    console.log (discoutForFood ( shoppingCart) );