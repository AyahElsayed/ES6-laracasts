// i can also pass a function as default value 

function defaultDiscountRate(){
    return .10;
}

function applyDiscount(cost , discount = .10){ //or discount =  defaultDiscountRate()
    // discount = discount || .10  => old way
    return cost - (cost * discount);
}

alert(applyDiscount(100)) // 90
// alert(applyDiscount(100 , .5)) // 50
