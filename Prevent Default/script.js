//Cara Menghapus Belum DOM Transversal
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// const container = document.querySelector('.container');

// close.addEventListener('click',function(){
//     // Pilih Salah Satu
//     // Menghapus Child
//     container.removeChild(card);
//     // Membuat tak terlihat
//     card.style.display = 'none';
// });

// Menghapus Dengan Dom Transversal
const close = document.querySelectorAll('.close');

// Menggunakan Perulangan For
// for(let i=0;i<close.length;i++){
//     close[i].addEventListener('click',function(){
//         close[i].parentElement.style.display = 'none';
//     })
// }

// Menggunakan Foreach
close.forEach(function(c){
    c.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        // Agar a tidak load halaman kembali seperti kebiasaanya
        e.preventDefault();
    });
});