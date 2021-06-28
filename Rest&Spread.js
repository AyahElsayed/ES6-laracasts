function sum(...numbers){
    // Rest
    // ...numbers => means give me any number of arguments
    // if there is more than one argument Rest operator must be at rhe end
    // sum(foo , ...numbers)
    
    return numbers.reduce(function(prev , current) {
        return prev + current;
    })
}

console.log(sum(1,2,3)); //6

// -------------
// spread operator is the opposite 

function sum2(x,y){
    return x + y;
}

let nums = [1,2];

console.log(sum2(...nums));