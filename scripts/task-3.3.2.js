function drinkOrder( drink, size ) {

    var drinkToLowerCase = drink.toLowerCase();
    //this converts to lowercase if input in different manner, this needs to be inthe other references below


    switch( drinkToLowerCase ) {
        case 'cola' :
            console.log('you have ordered a ' + size + ' ' + drinkToLowerCase );
            break; 
        
        case 'lemonade' :
            console.log('you have ordered a ' + size + ' ' + drinkToLowerCase );
            break; 

        case 'orangeade' :
            console.log('you have ordered a ' + size + ' ' + drinkToLowerCase );
            break; 
    

        default:
            console.log('you selected option does not exist ');
            break;

    }

}