
// Property di constructor function.
// Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variable nya, diikuti tanda titik dan nama propoerty.
// Namun jika seperti itu, alhasil, constructor function yang sudah kita buat tidak terlalu berguna, karena property nya hanya ada di object yang kita tambahkan property.
// Untuk menambahkan property di dalam semua object yang dibuat dari constructor function, kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya.


function Person(){
    this.firstName = "Kadek"        // membuat property dalam sebuah function constructor.
    this.lastName = "Frama"         // membuat property dalam sebuah function constructor.
}

const kadek = new Person();
kadek.firstName = "Kadek Frama"     // menambahkan atau mengubah property beserta valuenya dalam sebuah object.
kadek.lastName = "Danamastyana"     // menambahkan atau mengubah property beserta valuenya dalam sebuah object.

const budi = new Person();
budi.firstName = "Budi"             // menambahkan atau mengubah property beserta valuenya dalam sebuah object.
budi.lastName = "Doremi"            // menambahkan atau mengubah property beserta valuenya dalam sebuah object.

console.info(kadek);
console.info(budi);