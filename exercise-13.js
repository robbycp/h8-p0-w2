function xo(str) {
    // you can only write your code here!
    var total_x = 0;
    var total_o = 0;
    for (var x = 0; x < str.length; x++) {
        if (str[x] == "x") {
            total_x++;
        } else if (str[x] == 'o') {
            total_o++;
        } else {
            return "Invalid input (have other input other than x and o)";
        }
    }
    if (total_x == total_o) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('xoxooxxoapoije'));