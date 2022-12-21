//test
function newOperator(Constr, args) {
    var thisValue = Object.create(Constr.prototype);
    var result = Constr.apply(thisValue, args);
    if (typeof result === 'object' && result !== null) {
        return result;
    }
    return thisValue;
}


//2222222
class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} likes walking`)
    }
}

class Rabbit extends Animal {
    walk() {
        super.walk();
        console.log(`and jumping`)
    }
}

let rabbit = new Rabbit('Rimus');
rabbit.walk();

//111111111
function Test(name, surname) {
    this.name = name;
    this.surname = surname;
    this._id = Math.random();

    let _note = `NS is ${this.name} ${this.surname}`;
    _write = function () {
        console.log(_note);
    }
}

class Instance extends Test {

    constructor(name, surname, isDriveLicence) {
        super(name, surname);

        this.driveLicence = isDriveLicence;
    }
}

let person = new Instance('Jack', 'Rass', 'true');

person._write = function () {
    let _note = `${this.name} ${this.surname} has drive licence - ${this.driveLicence}`;
    console.log(_note);
}

person._write();

//Test
class Test {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this._id = Math.random().toFixed('4')*1000;
    }

    _write() {
        console.log(this._id);
    }
}

class Instance extends Test {

    constructor(name, surname, isDriveLicence) {
        super(name, surname);
        this.driveLicence = isDriveLicence;
    }
}

let person = new Instance('Jack', 'Rass', 'true');

person._write = function () {
    let _note = `${this.name} ${this.surname} has drive licence - ${this.driveLicence}`;
    console.log(_note);
}

person._write();
person._id;