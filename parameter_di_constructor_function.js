
// Cara Penggunaan Parameter di Constructor Funtion.
// Karena dalam Javascript, class adalah berbentuk function, jadi secara default, function tersebut bisa memiliki parameter.
// Constructor function sama seperti function biasanya, bisa memiliki parameter hal ini membuat ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructor function tersebut.

// Contoh cara penerapan parameter di constructor function.

function Person(firstName, lastName){                               // cara penggunaan parameter di constructor function.
    this.firstName = firstName
    this.lastName = lastName
    this.sayHallo = function(nama){
        console.info(`Hallo ${nama}, Tetap Semangat Berlatih!!!`);
    }
};

const frama = new Person("Kadek Frama", "Semangat Berlatih");       // contoh cara menggunakan parameter di cosntructor function.
// frama.firstName = "Kadek Frama"      // cara menambahkan property di object.
// frama.lastName = "Danamastyana"      // cara menambahkan property di object.
frama.sayHallo("Budi Doremi");  // memanggil method sayHallo() di class Person().

console.info(frama);            // memanggil object frama.


// TETAP SEMANGAT BERLATIH !!!