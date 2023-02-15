// UBah Warna Background pakek button[
//Cara BTG
// const button = document.querySelector('button');
// const body = document.querySelector('body');

// button.addEventListener('click',function(){
//     body.style.backgroundColor = 'red';
// });

//Cara Yutub
// const button = document.getElementById('tUbahWarna');

// button.onclick = function(){
//     // document.body.style.backgroundColor = 'aqua';
//     // document.body.setAttribute('class', 'biru-muda');
//     document.body.classList.toggle('biru-muda');
// }
// ]

// //button di klik background warna random [
// //buat button dulu
// const button = document.createElement('button');
// const typeButton = document.createTextNode('Warna Random');
// button.setAttribute('type','button');
// button.setAttribute('id','warnaAcak');
// button.appendChild(typeButton);

// document.body.appendChild(button);

// //cara biar random

// button.addEventListener('click',function(){
//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'  
// })
// ]

// // merubah warna menggunakan range [
// // selection 
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');

// // range merah
// sMerah.addEventListener('input', function(){
//     const r = sMerah.value;
//     document.body.style.backgroundColor = 'rgb('+r+',100,100)';
// })

// // range hijau
// sHijau.addEventListener('input', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     document.body.style.backgroundColor = 'rgb('+r+','+ g +',100)';
// })

// //range biru
// sBiru.addEventListener('input', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
// })
// ]

// //Merubah warna jika mouse digerakan [
// document.body.addEventListener('mouseover', function(event){
//     // posisi mouse
//     // clientX
//     // clientY

//     // ukuran browser
//     // innerHeight
//     // innerWidth
//     const r = Math.round((event.clientX / window.innerWidth) * 255);
//     const g = Math.round((event.clientY / window.innerHeight) * 255);
//     document.body.style.backgroundColor = 'rgb('+r+','+g+',100)';
// })
// ]