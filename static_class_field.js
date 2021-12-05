
// Static class field pada JavaScript.
// Static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasanya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instace object, dan method akan menjadi function di prototype.
// Jika kita tambahkan static, maka hal itu tidak terjadi.

// Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class itu sendiri.
// Biasanya static digunakan jika kita ingin membuat utility field atau function.
// Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya.
// Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama.

// Contoh penggunaan static field.
class Configuration{
    static name = "Belajar JavaScript OOP";
    static version = 1.0;
    static author = "Kadek Frama";
}

const config = new Configuration();
console.info(config);
console.info("");

console.info(Configuration.name);       // cara mengakses static field. Yaitu namaClass.namaField (Configuration.name, Configuration.version, Configuration.author).
console.info(Configuration.version);        
console.info(Configuration.author);

Configuration.version = 2.4;            // cara mengubah value pada static field.
console.info("")
console.info(Configuration.version)     // mengakses static field nya.





// TETAP SEMANGAT BERLATIH JAVASCRIPT!!!
// SEMANGAT MERAIH IMPIAN, PANTANG MENYERAH !!!