var tanggal = 10; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var date_true = true;

// Get all number
if (typeof tanggal !== 'number' || typeof bulan !== 'number' || typeof tahun !== 'number') {
    console.log("Please input number in input");
    date_true = false;
}
// Check Month
switch(bulan) {
    case 1: {
        bulan = "Januari";
        break; 
    }
    case 2: {
        bulan = "Februari";
        break;
    }
    case 3: {
        bulan = "Maret";
        break;
    }
    case 4: {
        bulan = "April";
        break;
    }
    case 5: {
        bulan = "Mei";
        break;
    }
    case 6: {
        bulan = "Juni";
        break;
    }
    case 7: {
        bulan = "Juli";
        break;
    }
    case 8: {
        bulan = "Agustus";
        break; 
    }
    case 9: {
        bulan = "September";
        break; 
    }
    case 10: {
        bulan = "Oktober";
        break; 
    }
    case 11: {
        bulan = "November";
        break; 
    }
    case 12: {
        bulan = "Desember";
        break; 
    }
    default: {
        console.log("Invalid Month, please input 1 - 12. Your month :", bulan);
        date_true = false;
    }
}

// check day 
var bulan31 = ["Januari", "Maret", "Mei", "Juli", "Agustus", "Oktober", "Desember"];
var bulan30 = ["April", "Juni", "September", "November"];
var bulan28 = ["Februari"];

if (bulan31.indexOf(bulan) >= 0) {
    if ((tanggal < 1 || tanggal > 31)) {
        console.log("Invalid day in ",bulan,", please input between 1 - 31. Your day : ", tanggal);
        date_true = false;
    }
} else if (bulan30.indexOf(bulan) >= 0) {
    if ((tanggal < 1 || tanggal > 30)) {
        console.log("Invalid day in ",bulan,", please input between 1 - 30. Your day : ", tanggal);
        date_true = false;
    }
} else if (bulan28.indexOf(bulan) >= 0) {
    if ((tanggal < 1 || tanggal > 28)) {
        console.log("Invalid day in ",bulan,", please input between 1 - 28. Your day : ", tanggal);
        date_true = false;
    }
} else if (tanggal > 31 || tanggal < 1) {
    console.log("Invalid day in all month, please input between 1 - 31 depends on the month. Your day :",tanggal);
    date_true = false;
}

// check years
if ((tahun < 1900 || tahun > 2200)) {
    console.log("Invalid years, please input 1900 - 2200, your year :",tahun);
    date_true = false;
}

//
if (date_true == true) {
    console.log(tanggal + " " + bulan + " " + tahun);
}