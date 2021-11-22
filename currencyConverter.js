
// Create a currency converter function from taka to USD, CAD, POUND, EURO etc
let currencyCon = (type, amount) =>{
    if (type == 'USD'){
        return amount * 80;
    }else if (type == 'CAD'){
        return amount * 70;
    }else if (type == 'POUND'){
        return amount * 110;
    }else if (type == 'EURO'){
        return amount * 100;
    }else{
        return 'this is not wanted';
    }
}
console.log(currencyCon('USD', 100));
console.log(currencyCon('EURO', 100));
