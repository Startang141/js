let tanya = true;
while(tanya){
// Menangkap Pilihan Player
let p = prompt('Pilih : gajah,orang,semut')

// Menangkap Pilihan Komputer
// Menggunakan Bilangan Random
let comp = Math.random();
if(comp < 0.34){
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

// Menentukan Rules
let hasil = ''
if(p == comp){
    hasil = 'SERI';
} else if(p == 'gajah'){
    hasil = (comp == 'orang')? 'MENANG!':'KALAH!';
} else if(p == 'orang'){
    hasil = (comp == 'gajah')? 'KALAH!':'MENANG!';
} else if(p == 'semut'){
    hasil = (comp == 'gajah')? 'MENANG!':'KALAH!';
} else {
    hasil = 'Memasukkan Pilihan yang salah!';
}

// Tampilkan Hasilnya
alert('Kamu Memilih : '+p+' dan Komputer Memilih : '+comp+ '\nHasilnya Kamu : '+hasil);

tanya = confirm('Maneh?');
}

alert('Terimakasih sudah bermain')