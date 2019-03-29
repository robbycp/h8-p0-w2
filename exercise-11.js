function balikKata(kata) {
    // you can only write your code here!
    if (typeof kata !== "string") {
        kata = String(kata);
    }
    var rev_kata = kata[kata.length - 1];
    for(var x = kata.length - 2; x >= 0; x--) {
        rev_kata += kata[x];
    }
    return rev_kata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log(balikKata(12388932374));
console.log(balikKata(true));