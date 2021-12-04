
// Constructor di class.
// Karena bentuk constructor function itu mirip dengan function, jadi kita bisa menambah parameter pada constructor function, lantas bagaimana denga clas ?
// Di class juga kita bisa menambah constructor, dimana dengan menggunakan constructor, kita juga bisa menambahkan parameter saat pertama kali membuat object nya.
// Untuk membuat constructor di class, kita bisa menggunakan kata kunci constructor.

class Person{
    constructor(name){                                  // contoh cara membuat constructor di class pada JavaScript.
        console.info(`Membuat class Person ${name}`);
    }
}

const kadek = new Person("Kadek Frama");        // membuat object kadek.
console.info(kadek);                            // mengakses object kadek di console.


const budi = new Person("Budi Doremi");         // membuat object budi berisikan parameter untuk constructor.