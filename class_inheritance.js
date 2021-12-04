
// Class Inheritance pada JavaScript.
// Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya.
// Untungnya itu diperbaiki di ES6 dengan fitur class nya.
// Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends.
// Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class.

class Employee{
    sayHello(name){
        console.info(`Hallo ${name}, my name is employee ${this.name}. Saya adalah employee tetap semangat!`);
    }
}

class Manager extends Employee{                         // membuat class inheritance. Dalam hal ini class Manager sebagai class turunan dari class Employee. Class Employee adalah parent class dari Manager, jadi apapun yang dimiliki oleh class Employee akan dapat diakses oleh melalui object yang dibuat dari class Manager juga.
    sayHello(name){
        console.info(`Hallo ${name}, my name is manager ${this.name}. Saya adalah manager tetap semangat!`);
    }
}


const budi = new Employee();        // membuat object budi dari class Employe.
budi.name ="Budi Anduk";
budi.sayHello("Joko Anwar");

const kadek = new Manager();        // membuat object kadek dari class Manager.
kadek.name = "Kadek";
kadek.sayHello("Budi Doremi");


console.info("")
console.info(budi)
console.info(kadek)

// NB: Kata kunci extends digunakan untuk membuat inheritance atau pewarisan untuk class turunan yang akan dibuat.
// TETAP SEMANGAT BERLATIH JAVASCRIPT !