const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const angkaBenar = Math.floor(Math.random() * 100) + 1;
console.log("TEBAK ANGKA ANTARA 1-100");

function tanya() {
    rl.question("Masukkan Tebakanmu : ", (jawab) => {
        let tebak = parseInt(jawab);
        if (tebak === angkaBenar) {
            console.log("🎉 Selamat! Angka benar adalah " + angkaBenar);
            rl.close();
        } else if (tebak > angkaBenar) {
            console.log("Angka terlalu besar! Coba lagi.");
            tanya();
        } else if (tebak < angkaBenar) {
            console.log("Angka terlalu kecil! Coba lagi.");
            tanya();
        } else {
            console.log("Masukkan angka yang valid!");
            tanya(); // kalau input bukan angka, ulangi juga
        }
    });
}

tanya();

/*
let angkaBenar = Math.floor(Math.random() * 10) + 1;
function tebakAngka() {
    let Tebak = document.getElementById("Tebak ").value;
    let hasil = document.getElementById("Hasil ");
}

if (tebakan === angkaBenar) {
    console.log("🎉 Selamat! Angka benar adalah " + angkaBenar);
} else if (tebakan > angkaBenar) {
    console.log("❌ Terlalu besar! Coba lagi.");
} else if (tebakan < angkaBenar) {
    console.log("❌ Terlalu kecil! Coba lagi.");
}*/