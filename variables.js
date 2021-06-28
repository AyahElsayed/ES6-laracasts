// var

function fire(bool){
    // var foo;  hoisting

    if(bool){
        var foo = 'bar';
        console.log(foo); // bar
    }
    else{
        console.log(foo); // undefined
    }
}

fire(false);


// -----------

// const => value cant change 

const names = ['Aya','Amr'];

// names = ['Amr','Aya'];  // error in console

console.log(names); 