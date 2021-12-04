
// Prototype Inheritance pada JavaScript.
// Sekarang kita sudah tahu, bahwa prototype selalu memiliki parent, aritnya dia adalah turunan, praten tertinggi adalah object prototype.
// Pertanyaanya bagaimana jika kita ingin melakukan inheritance ke prototype lain ?
// Hal ini juga bisa dilakukan, namun agak tricky, karena hal ini, sebenarnya untuk JavaScript modern, tidak direkomendasikan lagi praktek OOP menggunakan prototype, karena di ES6 sudah dikenalkan kata kunci class yang akan nanti dibahas di chapter tersendiri.

function Employee(name){        // membuat function constructor Employee().
    this.name = name;
}

function Manager(name){         // membuat function constructor Manager().
    this.name = name;
}


// Manager.prototype = Employee.prototype;                              // Contoh cara prototype inheritance yang salah.
Manager.prototype = Object.create(Employee.prototype);                  // Contoh cara prototype inheritance yang benar.

Manager.prototype.sayHello = function(name){
    console.info(`hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function(name){
    console.info(`hello ${name}, my name is Emplooyee ${this.name}`);
}

const employee = new Employee("Putu Pratna");
employee.sayHello("Budi Doremi");

const manager = new Manager("Rita");
manager.sayHello("Made Praha");

console.info(employee);
console.info(manager);