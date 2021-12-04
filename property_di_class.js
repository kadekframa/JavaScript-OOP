
// Property di class pada JavaScript.
// Sama seperti di constructor function, dalam class pun kita bisa menambahkan property.
// Karena hasil akhirnya adalah sebuah object, jadi menambahkan property di class bisa juga dilakukan di instance object nya, tetapi kalo ingin membuat di dalam constructor nya juga bisa.

// contoh menambahkan property di class.
class Person{
    constructor(name){          // membuat contructor di class.
        this.name = name;       // menambahkan property di class constructor.
    }
}

const kadek = new Person("Kadek");      // membuat object kadek pada class Person yang berisikan parameter constructor.
kadek.name = "Kadek tetap Semangat"     // mengubah atau menambahkan property di class Person melalui object.

console.info(kadek);            // mengakses object kadek di console.
console.info(kadek.name);       // mengakse value dari property name yang ada di class Person.


// TETAP SEMANGAT MERAIH IMPIAN!
// HARUS PANTANG MENYERAH!!!