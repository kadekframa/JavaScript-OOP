function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {       // Method di constructor function.
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const kadek = new Person('Kadek', 'Frama');      // Cara pembuatan object di javascript dari constructor function.
kadek.sayHello("Semangat Berlatih !!!");

const semangat = new Person('Semangat', 'Pantang Menyerah !!!');
semangat.sayHello("Joko");

console.info(kadek);
console.info(semangat);