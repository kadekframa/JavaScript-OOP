
// Private class field pada JavaScript.
// Secara default, saat kita menambahkan field, maka field tersebut bisa diakses dari manapun.
// Jika kita ingin membuat field  yang bersifat private (hanya bisa diakses di dalam class), kita bisaa menggunakan tanda # sebelum nama field nya.
// Ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja.


// Contoh penggunaan private class field.

class Counter{
    #counter = 0;                   // membuat private field.


    increment(){
        this.#counter++;
    }

    decrement(){
        this.#counter--;
    }

    get(){
        return this.#counter;
    }
}

const count = new Counter();

// count.#counter = 12;             // ERROR. Karena field atau variabel #counter hanya dapat diakses dari class  Counter saja, karena field #counter bersifat private.
console.info(count.get())

count.increment();
console.info(count.get());

count.increment();
console.info(count.get());

count.decrement();
console.info(count.get());

console.info(count);


// NB: field yang bersifar private hanya dapat diakses dari dalam class nya sendiri.