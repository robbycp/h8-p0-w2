//1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang");
var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(var x = 1; x <= rows1; x++) {
    console.log("*");
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");
var rows2 = 7; // input the number of rows

// do loops to display asterisks in the console.
for(var x = 1; x <= rows2; x++) {
    var ast = "";
    for(var y = 1; y <= rows2; y++) {
        ast = ast + "*";
    }
    console.log(ast);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");
var rows3 = 9; // input the number of rows

// do loops to display asterisks in the console.
for(var x = 1; x <= rows3; x++) {
    var ast = "";
    for(var y = 1; y <= x; y++) {
        ast = ast + "*";
    }
    console.log(ast);
}
