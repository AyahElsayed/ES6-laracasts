function grtPerson() {

    let name = 'Aya';
    let age = 24;

    return {
        name,
        age,
        greet() {
            return `hello, ${this.name}`;
        }
    };
    // return { 
    // name: name, 
    // age: age ;
    // greet: function(){
    // return 'hello,' + this.name;
    // }
    // };
}
console.log(grtPerson().greet())

// ----------------

// destructuring

let person = {
    name: 'Amr',
    age: 32
};

let { name, age } = person;

alert(age); //32

// ---------

let data = {
    name: 'Aya',
    age: 32,
    results: ['foo', 'bar'],
    count: 50
};

let { results, count } = data;
// let results = data.results;
// let count = data.count;

// console.log(results, count)

// --------

function getData(data2) {
    let results = data2.results;
    let count = data2.count;

    console.log(results, count)

}
getData({
    ame: 'Ayaah',
    age: 24,
    results: ['fooo', 'baar'],
    count: 500
})