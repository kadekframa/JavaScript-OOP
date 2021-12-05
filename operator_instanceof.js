
// Operator Instanceof pada JavaScript.
// Kadang ada kasuss kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan.
// Kita tidak bisa menggunakan operator typeof, karena object dar class, jika kita gunakan operator typeof, hasilnya adalah "object".
// Operator instaceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya dari class tertentu, atau false jika bukan.

// Contoh penggunaan instanceof.
class Employee{

}

class Manager{

}

const budi = new Employee();
const kadek = new Manager();


console.info(typeof budi);
console.info(typeof kadek);


console.info("");
console.info(budi instanceof Employee);         // contoh penerapan instanceof.
console.info(budi instanceof Manager);          // contoh penerapan instanceof.

console.info("");
console.info(kadek instanceof Employee);        // contoh penerapan instanceof.
console.info(kadek instanceof Manager);         // contoh penerapan instanceof.


{
    // Operator instanceof di class inheritance.
    // Operator instaceof mendukung class inheritance, artinya intanceof juga bisa digunakan untuk mengecek, apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu.

    class Employee{

    }

    class Manager extends Employee{

    }

    const budi = new Employee();
    const kadek = new Manager();

    console.info("");
    console.info("");
    console.info(budi instanceof Employee);     // true
    console.info(budi instanceof Manager);      // false
    console.info("");
    console.info(kadek instanceof Employee);    // true
    console.info(kadek instanceof Manager);     // true

}