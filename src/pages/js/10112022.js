//абстрактный класс
function Employee(name, surname, job) {
    let hasJob;

    this.name = name;
    this.surname = surname;
    this.job = job;

    hasJob = this.job ? 'has job' : 'is unemployed';

    this.action = function (action) {
        console.log(`${this.name}${this.surname} ${hasJob}`);
    }

    this.description = function () {
        this.action();
        console.log(`The ${this.name}${this.surname} likes his job`);
    }
}

//наследование класса
function Person() {
    Employee.apply(this, arguments);
}


//создание инстанса объекта
let person = new Person('Vasya ', 'Pupkin', true);

// person.description = function () {
//     console.log(`The ${this.name}${this.surname} is a student`);
// }

person.description();

