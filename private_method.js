
// Private Method pada JavaScript.
// Sama seperti field, terdapat proposal juga untuk menambah fitur private method di EcmaScript.
// Dengan demikian, access modifier private juga bisa digunakan di method.
// Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private.
// Ingat fitur ini masih dalam tahapan, belum benar-benar menjadi standar EcamScript, jadi mungkin tidak semua browser mendukung fitur ini.
// https://github.com/tc39/proposal-private-methods.


class Person{

    say(name){
        if(name){
            this.#sayWithName(name);
        }else{
            this.#sayWithoutName();
        }
    }

    #sayWithoutName(){
        console.info(`Hallo`);
    }

    #sayWithName(name){
        console.info(`Hallo ${name}`);
    }
}


const kadek = new Person();
kadek.say("Kadek Frama");                      // mengakses method say() yang berisikan parameter. Dimana method say() ini akan mengarahkan untuk dapat mengakses method private class Person.

// kadek.sayWithName("Danamastyana");          // ERROR. Karena method/function sayWithName() itu bersifat private. Jadi tidak bisa diakses dari luar class Person. Untuk dapat mengakses, itu dapat menggunakan method yang bersifat public, lalu diarahkan ke method private tersebut. Dalam hal ini sebagai contohnya yaitu method say().

kadek.say();