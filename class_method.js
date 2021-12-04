
// Method di class pada Javascript.
// Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function.
// Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object.
// Khusus untuk method sebaiknya kita menambahkan ke prototype, buka ke instance object.
// Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype.

// Contoh penerapanyya.

{
    class Person{
        constructor(name){
            this.name = name;
            this.sayHallo = function(name){                 // Contoh cara membuat method di class, yaitu dengan membuat pada constructor class nya. Namun cara ini tidak direkomendasikan, karena dengan cara ini method hanya akan bisa diakses di object instance nya saja. Membuat method di class lebih direkomendasikan untuk dibuat pada prototypenya.
                
                console.info(`Hallo ${name}, Tetap Semangat Berlatih JavaScript!. ${this.name} akan selalu mendukung.`);
            }
        }
    }
    
    const budi = new Person("Programmer Zaman Now");

    budi.sayHallo("budi doremi")
    console.info(budi.name);
    console.info(budi.sayHallo("budi doremi"));
    console.info(budi);
    console.info("");
}




// Contoh cara membuat method pada prototype.
{
class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){                                         // Contoh cara membuat method di class yang benar, yaitu dengan membuat methodnya pada prototype nya. Ini adalah cara untuk membuat method agar method yang tersebut dibuat di prototype nya.

        console.info(`Hallo ${name}, Tetap Semangat Berlatih JavaScript!. ${this.name} akan selalu mendukung.`);
    }
}

const kadek = new Person("Programmer Zaman Now");
kadek.sayHello("Kadek Frama Danamastyana");             // mengakses method yang ada pada prototype class Person.

console.info(kadek);                                    // menampilkan object pada console.

}