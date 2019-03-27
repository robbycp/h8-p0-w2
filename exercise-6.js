//1. Melakukan Looping Menggunakan While

console.log("1. Melakukan Looping Menggunakan While");
console.log("LOOPING PERTAMA");
var x = 0;
while(x < 20) {
    x = x + 2;
    console.log(x + " - I love coding");
}
console.log("LOOPING KEDUA")
while(x >= 2) {
    console.log(x + " - I will become fullstack developer");
    x = x - 2;
}

//2.Melakukan Looping Menggunakan For
console.log("2. Melakukan Looping Menggunakan For");
console.log("LOOPING PERTAMA");
for(var x = 1; x <= 20; x++) {
    console.log(x + " - I love coding");
}
console.log("LOOPING KEDUA")
for(var x = 20; x > 0; x--) {
    console.log(x + " - I will become fullstack developer");
}

//3. Angka Ganjil dan Genap
console.log("3. Angka Ganjil dan Genap");
//a. Ganjil Genap
console.log("a. Ganjil Genap");
for(var x = 1; x <= 100; x++) {
    if (x % 2 == 0) {
        console.log("GENAP");
    }
    else {
        console.log("GANJIL");
    }
}
//b. pertambahan counter 2, kelipatan 3
console.log("b. pertambahan counter 2, kelipatan 3");
for(var x = 1; x <= 100; x = x + 2) {
    if (x % 3 == 0) {
        console.log(x + " KELIPATAN 3");
    }
    else {
        console.log("");
    }
}
//c. pertambahan counter 5, kelipatan 6
console.log("c. pertambahan counter 5, kelipatan 6");
for(var x = 1; x <= 100; x = x + 5) {
    if (x % 6 == 0) {
        console.log(x + " KELIPATAN 6");
    }
    else {
        console.log("");
    }
}
//d. pertambahan counter 9, kelipatan 10
console.log("d. pertambahan counter 9, kelipatan 10");
for(var x = 1; x <= 100; x = x + 9) {
    if (x % 10 == 0) {
        console.log(x + " KELIPATAN 10");
    }
    else {
        console.log("");
    }
}
