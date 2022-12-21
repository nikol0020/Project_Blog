class Animal {
    #isAnimal = false;

    constructor(name = 'defaultName', type = 'defaultType') {
        this.name = name;
        this.type = type;
        this._secret = 'Very secret information';
    }

    static greeting() {
        console.log('I like animals');
    }

    #isToggleAnimal() {
        this.#isAnimal = (this.name === 'defaultName' || this.name === '' || this.type === 'defaultType')
            ? false
            : true;
        return this.#isAnimal;
    }

    getAnimal() {
        this.#isToggleAnimal();

        if (this.#isAnimal) {
            console.log(`${this.name} is a ${this.type}`);
        } else {
            console.log(`It's not animal`);
        }
    }

    animalAction() {
        console.log(`${this.name} runs`);
    }

    hasLegs() {
        console.log('Has legs');
    }

    set secret(value) {
        this._secret = value;
    }

    get secret() {
        return this._secret;
    }
}


class Cat extends Animal {
    #chipNumber = 999;

    constructor(name, type, sound = 'defaultSound') {
        super(name, type);
        this.sound = sound;
        this._age = 5;
    }

    #writeMyChipNumber() {
        console.log(`${this.name} chip number is ${this.#chipNumber}`);
    }

    runWriteMyChipNumber() {
        this.#writeMyChipNumber();
    }

    getSound() {
        console.log(`${this.type}'s sound is ${this.sound}`);
    }

    animalAction() {
        super.animalAction();
        console.log(`${this.name} sleeps`);
    }

    hasLegs() {
        console.log('Has four legs');
    }

    set age(value) {
        this._age = value;
    }

    get age() {
        return this._age;
    }
}

class Dog extends Animal {
    #chipNumber = 777;
    #setDelayCall = 1000;

    constructor(name, type, sound = 'defaultSound') {
        super(name, type);
        this.sound = sound;
        this._age = 10;
    }

    #delayCall(boundThisArg) {
        let boundThis;
        boundThis = boundThisArg.bind(this);
        setTimeout(boundThis, this.#setDelayCall);
    }

    #writeMyChipNumber() {
        console.log(`${this.name} chip number is ${this.#chipNumber}`);
    }

    runWriteMyChipNumber() {
        this.#delayCall(this.#writeMyChipNumber);
    }

    #getSound() {
        console.log(`${this.type}'s sound is ${this.sound}`);
    }

    getSound() {
        this.#delayCall(this.#getSound);
    }

    #animalAction() {
        super.animalAction();
        console.log(`${this.name} sleeps`);
    }

    animalAction() {
        this.#delayCall(this.#animalAction);
    }

    #hasLegs() {
        console.log('Has four legs');
    }

    hasLegs() {
        this.#delayCall(this.#hasLegs);
    }

    set age(value) {
        this._age = value;
    }

    get age() {
        return this._age;
    }
}

const dog1 = new Dog();
const dog2 = new Dog('testName');
const dog3 = new Dog('','testType');
const cat = new Cat('Mason', 'cat', 'meow');
const dog = new Dog('Rocky', 'dog', 'wow-wow');

Animal.greeting();

cat.runWriteMyChipNumber();
cat.getAnimal();
cat.getSound();
cat.animalAction();
cat.hasLegs();
console.log(cat.age);
cat.age = 12;
console.log(cat.age);

dog1.getAnimal();
console.log(dog1.age);
dog1.age = 3;
console.log(dog1.age);

dog2.getAnimal();
dog3.getAnimal();

dog.runWriteMyChipNumber();
console.log(dog.age);
dog.age = 12;
console.log(dog.age);
dog.getAnimal();
dog.getSound();
dog.animalAction();
dog.hasLegs();
