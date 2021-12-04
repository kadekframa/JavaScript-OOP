
// Super Constructor pada JavaScript.
// Class inheritance sifatnya seperti Prototype Inheritance.
// Bagaimana dengan Constructor  Inheritance? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini.
// Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor.
// Kata kunci super digunakan untuk memanggil constructor super class.
// Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor.


// Contoh penerapan super constructor.

class Employee{
    constructor(firstName){                     // membuat constructor pada parent class.
        this.firstName = firstName;
    }

    sayHello(name){
        console.info(`Hallo ${name}, my name is employee ${this.firstName}`);
    }
}


class Manager extends Employee{                 // child class Manager.
    constructor(firstName, lastName){
        super(firstName);                       // memanggil constructor yang ada di parent class. Yaitu dengan menggunakan kata kunci super diikut dengan parameternya.
        this.lastName = lastName;
    }
    sayHello(name){
        console.info(`Hello ${name}, saya adalah manager Tetap semangat ${this.firstName} ${this.lastName}`);
    }
}



const budi = new Employee("Budi Doremi");
budi.sayHello("Joko Anwar Sunaryo");

const kadek = new Manager("Kadek Frama", "Danamastyana");
kadek.sayHello("Made Bawa");

console.info("");
console.info(budi);
console.info(kadek);


// NB: Apapun yang ada atau dimiliki di parent class constructor, akan juga dapat diakses oleh semua class turunannya.
// Jadi saat kita bikin constructor di child class nya, kita wajib memanggil constructor yang ada di class parent nya. Yaitu dengan menggunakan kata kunci super.
// Apabila tidak dipanggil, maka akan terjadi error. Tetapi apabila di child class nya tidak ada dibuat constructor maka tidak wajib memanggil constructor yang ada di parent class.
//child class nya dapat mengakses constructor yang ada di class parent saja.