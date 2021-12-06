
// Static Method pada JavaScript.
// Kata kunci static juga tidak hanya bisa ditambahkan di field, tapi juga di method.
// Jika kita tambahkan di method, artinya method tersebut jadi milik class nya, bukan prototype.
// Dan untuk mengakses method tersebut, kita juga bisa lakukan seperti mengakses static class field.

// Contoh penggunaan static method.
class MathUtil{
    static sum(...numbers){                     // membuat static method sum() yang berisikan parameter (rest parameter).
        let total = 0;
        for (const number of numbers){          // perulangan forOf untuk melakukan perulangan pada inputan numbers.
            total +=  number;
        }

        return total;
    }
}


const sum = MathUtil.sum(1,2,3,4,5,6);                      // mengakses static method lalu menyimpannya ke dalam variable atau field sum.
console.info(`Hasil penjumlahan nya adalah: ${sum}`);       // memanggil hasil penjumlahan pada field "sum".        //Hasil = 21.


// TETAP SEMANGAT BERLATIH!!!