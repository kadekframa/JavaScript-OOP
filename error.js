
// Error pada JavaScript.
// Saat membuat aplikasi, sudah tentu kita tidak akan terhindar dari yang namanya error.
// Di JavaScript, error merupakan sesuatu yang sudah standar.
// Banyak sekali class error di JavaScript, namun semua class error di JavaScript selalu berujung di class Error, artinya class Error adalah super class untuk semua jenis error di JavaScript.
// Contoh class error yang terdapat di JavaScript contohnya SyntaxError, TypeError, EvalError, dan lain-lain.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types.

// Saat kita membuat instace object dari class Error, tidak lantas otomatis terjadi error.
// Kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error terjadi, atau istilahnya adalah melempar error (throw error).
// Untuk melempar error, kita bisa gunakan kata kunci throw, diikuti dengan instance object error nya.
// Jika terjadi error, maka otomatis kode program kita akan terhenti dan kita bisa melihat detail error nya di console di aplikasi browser kita.



// Contoh cara penggunaan class Error.
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

console.info(MathUtil.sum());                           // ERROR. Penyebab error terjadi, karena parameter length method sum() tidak boleh sama dengan 0.
console.info(MathUtil.sum(3,4,2,5,6,1,7,8,9,10));       // Memanggil static method sum() berisi nilai parameter.


// TETAP SEMANGAT BERLATIH !!!