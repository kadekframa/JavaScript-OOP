
// Public class field pada Javascript.
// Biasanya, saat kita ingin menambahkan field (property yang berisi value), kita biasanya tambahkan di constructor.
// Namun, ada proposal di EcmaScript yang mengajukan pembuatan public class field ditempatkan diluar constructor, seleve dengan penempatan method.
// Proposal ini masih belum final, namun beberapa browser sudah mendukungnya.
// https://github.com/tc39/proposal-class-fields.

// Dalam proposal tersebut juga disebutkan bahwa EcmaScript akan mendukung access modifier public dan private.
// Public artinya bisa diakses dari luar class, dan private artianya hanya bisa diakses dari dalam class saja.
// Private class field akan kita bahas di chapter selanjutnya.
// Untuk membuat public class field, kita bisa langsung buat nama field dengan value nya selevel dengan method.
// Jikka kita tidak memasukkan value ke dalam field tersebut, artinya field tersebut memiliki value undefined.

// Contoh penggunaan public class field.
class Customer{
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        console.info(`Tetap Semangat ${this.firstName, this.lastName}`);
    }
}

const kadek = new Customer("Kadek", "Frama");

console.info(kadek.firstName, kadek.lastName);
console.info(kadek.sayHello());
console.info(kadek);






// NB: Semua field yang dibuat pada class JavaScript itu umumnya bersifat public.