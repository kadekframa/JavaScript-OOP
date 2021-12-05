
// Super Method pada JavaScript.
// Selain digunakan untuk memanggil constructor milik parent class, kata kunci super juga bisa digunakan untuk mengakses parent class.
// Caranya bisa menggunakan super titik nama function nya.
// Dengan kata lain, super sebenarnya adalah reference ke parent prototype, mirip seperti _proto_.


class Shape{                            // membuat class parent Shape.
    paint(){                            // membuat method paint().
        console.info("Paing Shape");
    }
}

class Circle extends Shape{             // membuat class Cricle, sebagai child class dari class Shape.
    paint(){                            // membuat method paint();
        super.paint();                  // contoh panerepan katak kunci super untuk mengakses method paint() yang ada di class parent yaitu class Shape.
        console.info("Paint Circle");
    }
}


const circle = new Circle();            // membuat object circle.
circle.paint();                         // mengakses method paint() yang ada di object circle.

console.info(circle);


// NB: dengan menggunakan kata kunci super, kita dapat mengakses method yang ada di parent class.
// Kata kunci super ini tidak wajib digunakan apabila kita memiliki method di child class, namun kita perlu gunakan kata kunci super apabila ingin mengakses apa yang dimiliki oleh parent class.
