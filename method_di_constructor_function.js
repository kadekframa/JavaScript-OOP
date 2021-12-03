
// Method di constructor function.
// Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam constructor function.
// Jika kita tambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut.

function Person(){
    this.firstName = ""
    this.lastName = ""
    this.sayHello = function (name){                                                // membuat method di constructor function (class).
        console.info(`Hello ${name}, my name is ${this.firstName}. Keep spirit!`);
    }
};

const kadek = new Person();
kadek.firstName = "Kadek Frama"
kadek.lastName = "Danamastyana"
kadek.sayHello("Budi Semangat");                // mengakses atau memanggil method sayHello() yang berisikan parameter.

const budi = new Person();
budi.firstName = "Budi Doremi"
budi.lastName = "Praha"
budi.sayHello("Kadek Frama Tetap Semangat!");   // mengakses atau memanggil method sayHello() yang berisikan parameter juga.







// TETAP SEMANGAT BERLATIH JAVASCRIPT !!!