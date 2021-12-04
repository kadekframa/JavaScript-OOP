
// Prototype di JavaScript.
// Javascript sebelumnya dikenal dengan pemrograman berbasis proptotype.
// Memang agak sedikit membingungkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di Javascript.
// Pada chapter ini, kita akan bahas tentang konsep prototype.

// Prototype Inheritance.
// Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property(baik itu value atau method), akan berada di dalam instance object nya.
// Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor  function Person, maka akan ada Person.prototype.
// Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya.
// Untuk mengakses prototype milik sebuah instance, kita menggunakan _proto_.


function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayTetapSemangat = function(nama){
        console.info(`Hallo ${nama}, my name is ${firstName} ${lastName}. Tetap Semangat!`);
    }
}

const kadek = new Person("Kadek", "Frama");     // membuat instance object kadek.
kadek.saybye = function(){
    console.info("Tetap Semangat!")
}

const budi = new Person("Budi", "Doremi");      // membuat instance object budi.

console.info(kadek);
console.info(budi);


// Menambah property ke Prototype.
// Prototype mirip dengan object, dimana kita bisa menambah property baik itu value ataupun method.
// Saat kita menambah sebuah property ke prototype, secara otomatis, semua object instance yang turunan dari prototype tersebut akan memiliki property tersebut.

Person.prototype.sayBye = function(){                   // Contoh cara menambahkan property ke Prototype.
    console.info("Tetap Semangat, Pantang Menyerah!");
}

Person.prototype.run = function(){                      // Contoh cara menambahkan property ke Prototype.
    console.info(`${this.firstName}, is running!`);
}


// Cara Kerja Prototype Inheritance.
// Bagaimana bisa property di prototype diakses dari object instance?
// Ketika kita mengakses property di object instance, pertama akan di cek apakah di object tersebut terdapat property tersebut atau tidak, jika tidak, maka akan
//di cek di _proto_(prototype) nya, jika masih tidak ada, akan di cek lagi di _proto_(prototype) yang lebih tinggi, begitu seterusnya, sampai berkahir di object prototype.

kadek.sayBye();     // mengakses property sayBye() yang ada di prototype.
kadek.run();        // mengakses property run() yang ada di prototype.