
// Kata kunci class.
// Sejak EcmaScript versi 6, diperkenalkan kata kunci baru, yaitu class, ini merupakan kata kunci yang digunakan untuk membuat class di JavaScript.
// Dengan kata kunci class, kita tidak perlu lagi menggunakan constructor function untuk membuat class.

// Contoh cara penggunaan kata kunci class.
 class Person{      // membuat class Person.

 }

 Person.prototype.sayHello = function(nama){        // memambahkan property pada prototype Person. Jadi Sebenar nya sama saja dengan contructor function, class juga bisa menerapkan prototype. Hanya saja kata kunci nya saja yang baru.
    console.info(`Ini adalah prototype dari class Person ya ${nama}`);
 }

 const kadek = new Person();                    // membuat object kadek.
 console.info(kadek);                           // memanggil atau menampilkan object di console.
 console.info(kadek.sayHello("Kadek Frama"));   // memanggil property method yang ada di prototype class Person di console.


 // NB: Jadi sebenarnya tidak ada bedanya antara constructor function dan class. Hanya kata kunci nya saja yang baru.
 // Tetapi implementasi nya masih tetap berbasis prototype.