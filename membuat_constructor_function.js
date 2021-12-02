// Membuat constructor function.
// Sebenarnya kita sudah belajar tipe data object, dengan cara membuat variable dengan tipe data object seperti yang sebelumnya sudah dipelajara pada javascript dasar.
// Namun pembuatan object menggunakan tipe data object, akan membuat object yang selalu unik, sedangkan dalam OOP, biasanya kita akan membuat class sebagai cetakan, sehingga bisa membuat object dengan karakteristik yang sama berkali-kali tanpa harus mendeklarasikan object berkali-kali seperti menggunakan tipe data object.


// Contoh membuat object dengan object.
const kadek = {
    firstName: "Kadek",
    lastName: "Frama"
};

const praha = {
    namaDepan: "Budi",
    namaBelakang: "Praha Doremi"
};


// Membuat constructor function.
// Sebelum EcmaScript versi 6, pembuatan class, biasanya menggunakan function. Hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa pemrograman yang fokus ke OOP.
// Untuk membuat class di Javascript lama, kita bisa membuat function.
// Function ini kita sebut dengan Constructor Function.


function Person(){              // constructor function. Mirip seperti function di javascript pada umumnya. Namun menggunakan huruf kapital pada setiap awalan kata.

}

// Membuat object dari constructor funcion.
// Setelah kita membuat class, jika kita ingin membuat object dari class tersebut, kita bisa menggunakan kata kunci new, lalu diikuti dengan nama constuctor function nya.


const kadek = new Person()      // contoh cara membuat object dengan class Person (dalam hal ini class nya adalah constructor function Person()).
const praha = new Person()      // contoh cara membuat object dengan class Person (dalam hal ini class nya adalah constructor function Person()).
