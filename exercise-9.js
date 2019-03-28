// Tugas 1
/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut() {
    return "Halo Function!";
}
console.log("Tugas 1");
console.log(shoutOut()); // Menampilkan "Halo Function!" di console

// Tugas 2
/*
 BUATLAH KODE FUNCTION DISINI
*/
function calculateMultiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);

console.log("Tugas 2");
console.log(hasilPerkalian); // Menampilkan angka 30

// Tugas 3
/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(nama, umur, alamat, hobi) {
    return "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!";
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log("Tugas 3");
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"