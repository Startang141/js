function getPilihanComputer(){
    const comp = Math.random();
if(comp < 0.34) return 'gajah';
if(comp >= 0.34 && comp < 0.67) return 'orang';
return 'semut';
}

function getHasil(comp,p){
if(p == comp)
    return 'SERI';
 if(p == 'gajah') return (comp == 'orang')? 'MENANG!':'KALAH!';
 if(p == 'orang') return (comp == 'gajah')? 'KALAH!':'MENANG!';
 if(p == 'semut') return (comp == 'gajah')? 'MENANG!':'KALAH!';
 return 'Memasukkan Pilihan yang salah!';

}

// Cara Pertama
// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+pilihanComputer+'.png');
    
//     const tHasil = document.querySelector('.info')
//     tHasil.innerHTML = hasil;

// })
// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+pilihanComputer+'.png');
    
//     const tHasil = document.querySelector('.info')
//     tHasil.innerHTML = hasil;

// })
// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+pilihanComputer+'.png');
    
//     const tHasil = document.querySelector('.info')
//     tHasil.innerHTML = hasil;

// })

// Cara Kedua
// const pilih = document.querySelectorAll('li img');
// pilih.forEach(function(pil){
//     pil.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pil.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+pilihanComputer+'.png');
    
//     const tHasil = document.querySelector('.info')
//     tHasil.innerHTML = hasil;

//     })
// })

// Menambahkan Putar Gambar Komputer
// Membuat cara berputar
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/'+ gambar[i++] + '.png');
        if(i == gambar.length) i=0;
    },100)
}

const pilih = document.querySelectorAll('li img');
pilih.forEach(function(pil){
    pil.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer,pilihanPlayer);

    putar();
    
    setTimeout(function(){
        const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src','img/'+pilihanComputer+'.png');
    
    const tHasil = document.querySelector('.info')
    tHasil.innerHTML = hasil;

    },1000)
    })
})