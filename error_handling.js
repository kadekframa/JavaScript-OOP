
// Error Handling pada JavaScript.
// Saat terjadi eror di kode program JavaScript, kadang kita tidak ingin program kita berhenti.
// Di JavaScript, kita bisa menagkap jika terjadi error.
// Kita bisa menggunakan try catch statement untuk menangkap error.
// Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch.
// Jika tidak terjadi error, block catch tidak akan dieksekusi.


// Contoh penggunaan try cartch.
class MathUtil{
    static sum(...numbers){                                                 // membuat static method sum().
        if(numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0 kawan");    // contoh penggunaan throw Error untuk mentrigger sebuah error yang terjadi.
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }

        return result;
    }
}


try{
    console.info(MathUtil.sum(1,2,3,4,5));
    console.info("Tetap semangat");
}catch(error){
    console.error(`Terjadi error : ${error.message}`);          // error.message digunakan untk mengetahui pesan errornya. message adalah property bawaan dari object yang dibuat dari class error. Class error itu memiliki property yang namanya message.
}


// Kata kunci finally.
// Kadang kita ingin melakukan sesuatu entah itu terjadi error atau tidak.
// Dalam try catch, kita bisa menambahkan block finally.
// Block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error atau tidak, block finally akan selalu dieksekusi.

try{
    console.info("");
    console.info(MathUtil.sum());
    console.info("Tetap semangat");
}catch(error){
    console.error(`Terjadi error : ${error.message}`);
}finally{
    console.info("Ini finally block kode: Kode program selesai. Tetap Semangat!!!");
}





// NB: Block try adalah tempat menaruh kode yang memungkinkan terjadi error. Kode di dalam block catch akan dieksekusi apabila kode pada block try itu terjadi error.
// Apabila kode pada block try terjadi error, maka yang akan dijalankan atau dieksekusi itu adalah kode pada blokc catch dan kode yang berada setelah kode yang terjadi error pada block try tidak akan dieksekusi lagi.
// kode program pada block finally akan selalu dieksekusi, baik terjadi error ataupun tidak. Biasanya finally akan berada pada bagian akhir setelah block try dan catch.



// try finally.
// Kata kunci try finally juga bisa digunakan tanpa perlu menggunakan carch.
// Biasanya ini digunakan dalam kasus tertentu.

// Sebagai contoh pada kasus ingin me-return value sekaligus menambahkan value nya.
class Counter{
    constructor(){
        this.value = 1;
    }

    next(){                                     // contoh penerapan try finallu yang digunakan untuk me-return nilai serta sekaligus memodifikasi atau menambah nilai return nya.
        try{
            return this.value;
        }finally{
            this.value++;
        }
    }
}

const nextnya = new Counter();                  // membuat object nextnya dengan class Counter().

console.info("");
console.info("---Penerapan try finally---");
console.info(nextnya.next());                   // memanggil method next pada object nextnya.
console.info(nextnya.next());
console.info(nextnya.next());
console.info(nextnya.next());
console.info(nextnya.next());