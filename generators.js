// generator function let me return more than one thing

function *numbers() {
    console.log('begin');

    yield 1;
    yield 2;
    yield 3;
}

let iterator = numbers();

console.log(iterator.next()) // first yield
console.log(iterator.next()) // second yield
console.log(iterator.next()) // third
console.log(iterator.next()) // done = true


// -------------

function *ranges(start , end){
    while(start <= end){
        yield start;
        start++;
    }
}

let iterator2 = ranges(1,5);

for (let i of iterator2) console.log(i);

// for of understand iterators
// it returns the value, not the object 

console.log(...ranges(1,6)); // [1,2,3,4,5,6]
