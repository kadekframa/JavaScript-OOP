
// Cara penggunaan constructor inheritance pada JavaScript.
// Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function.
// Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut.
// Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter).

// Contoh penggunaan.

function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayello = function(name){
        console.info(`Hi ${name}, my name is ${this.firstName}`);
    }
};


function Manager(firstName, lastName){
    Employee.call(this, firstName, lastName);         // contoh cara untuk memanggil constructor lain.
    // this.lastName = lastName;

}

const kadek = new Manager("Kadek", "Tetap Semangat");
console.info(kadek);



// NB: Sederhananya kegunaan dari constructor inheritance ini yaitu adalah untuk mengcopy kode yang ada pada constructor lain ke constructor yang kita mau.