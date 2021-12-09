
// Membuat class Error secara Manual pada JavaScript.
// Walaupun JavaScript sudah memiliki standart class Error.
// Namun alangkah baiknya, kita membedakan tiap jenis error.
// Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error.
// Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error.

// Contoh penggunaan Manual class error.

class ValidationError extends Error{                // membuat class ValidationError. Yaitu menjadi class turunan dari class Error.
    constructor(message, field){
        super(message);                             // mengakses property yang ada di constructor pada parent class, yaitu class Error.
        this.field = field;
    }
}


class MathUtil{
    static sum(...numbers){                                                                 // membuat static method sum() pada class MathUtil.
        if(numbers.length === 0){
            throw new ValidationError("Total Parameter harus lebih dari 0 yaa", "numbers");     // Contoh penggunaan throw error untuk mentrigger sebuah error yang terjadi pada class ValidationError.
        }

        let result = 0;
        for(const number of numbers){
            result += number;
        }

        return result;
    }
}

try{
    const sumKan = new MathUtil();
    console.info(sumKan);
    console.info(MathUtil.sum());
}catch(error){
    if(error instanceof ValidationError){
        console.info("");
        console.info(`Terjadi Error di field ${error.field}, dengan pesan: ${error.message}`);      // menyisipan informasi tambahan untuk mengetahui letak error terjadi pada field apa dan dengan pesan apa. Bukan hanya field, tetapi juga dapat diterapkan pada element yang lain.
    }else{
        console.info("");
        console.info(`Terjadi Error : ${error.message}`);
    }
}




// NB: Keuntungan menggunakan manual class error ini, kita dapat menyisipkan informasi tambahan. Sebagai contoh kita bisa menyisipkan error yang terjadi pada field apa dan menampilkan pesan nya juga.
// Sederhananya dengan manual error, kita dapat meng-custom apa yang akan ditampilkan ketika terjadi sebuah error di kode yang dijalankan. Sehingga kebutuhan dapat terpenuhi.
