//abstraction class
function Animal(name, surname, tail) {
    let lastChar,
        hasTail;

    this.name = name;
    this.surname = surname;
    this.hasTail = tail;

    hasTail = this.tail ? 'a tail' : 'without tail';
    lastChar = (word) => word.slice(-1);

    this.action = function (action) {
        console.log(`${this.name} is ${action}${lastChar}ing`);
    }

    this.animalDescription = function () {
        console.log(`The ${this.name} has ${this.paws} paws and ${hasTail}`);
    }
}

//inheritance
function Dog() {
    Animal.apply(this, arguments);

}

//create instance
let dog = new Dog('dog', 4, true);

//polymorphism
dog.animalDescription = function () {
    console.log(`The ${this.name} is the best animal of over the world`);
}

console.dir(Animal);
console.dir(Dog);
console.dir(dog);
