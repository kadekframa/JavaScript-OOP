
// Getter dan Setter pada JavaCript.
// Class juga mendukung peembuatan getter dan setter.
// Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object.

// Contoh penggunaan getter dan setter.

class Person{
    constructor(firtsName, lastName, lastName2){
        this.firstName = firtsName;
        this.lastName = lastName;
        this.lastName2 = lastName2;
    }

    get fullName(){                                                     // membuat getter fullName().
        return `${this.firstName} ${this.lastName} ${this.lastName2}`;
    }

    set fullName(value){                                                // membuat setter fullName(value);
        const result = value.split(" ");    // fungsi split() yang digunakan untuk mengubah string menjadi array substring. Dalam hal ini String yang diinputkan akan dipisahkan dengan spasi (" ") untuk dapat menjadi array substring.
        this.firstName = result[0];
        this.lastName = result[1];
        this.lastName2 = result[2];
    }
}

const nama = new Person("Made", "Docker");

console.info(nama);                                 // memanggil object nama.
console.info(nama.fullName);                        // cara mengakses getter fullname();



nama.fullName = "Kadek Frama Tetap_Semangat"        // cara mengakses setter fullName(value);
console.info("");
console.info(nama.fullName);                            // mengakses getter fullname();


nama.fullName = "Kadek Frama Pantang_Menyerah"          // mengakses setter fullName(value);
console.info("");
console.info(nama.fullName);                            // mengakses getter fullName();