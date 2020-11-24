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

    function discountAmount( arr, discountAmount, type ) {

        var totalPrice = 0;

        for( var index = 0; index < arr.length; index++ ) {

            if( arr[index]. type === type ) {

                var discount = ( arr[index].price * discountAmount ) / 100;

                totalPrice = totalPrice +  ( arr[index].price - discount) * arr[index].quantity; 

            } else if (type === "any") {

                var discount = ( arr[index].price * discountAmount) / 100;

                totalPrice = totalPrice +  ( arr[index].price - discount) * arr[index].quantity; 
            } else {

                totalPrice = totalPrice + ( arr[index].price * arr[index].quantity);
            }

        }

        return totalPrice.toFixed(2);


    }

    console.log( discountAmount( shoppingCart, 20, 'any') ); 