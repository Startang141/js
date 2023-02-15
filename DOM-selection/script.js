// DOM SELECTION
// document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'yellow';
// judul.style.backgroundColor = 'green';
// judul.innerHTML = 'Lalapan';

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
//Looping
// for(i=0; i < p.length ;i++){
//     p[i].style.backgroundColor = 'lightBlue';
// }

//If Just want paragraph number 2
// [] -> number of array
// p[1].style.backgroundColor = 'lightYellow';

// document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini Dari Javascript';

//another option
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini Dari Javascript';

// document.querySelector -> element
// const p4 = document.querySelector('#b p');
// p4.innerHTML = "diganti javascript";
// const li2 = document.querySelector('#b ul li:nth-child(2)');
// li2.innerHTML = "diganti javascript";

// document.querySelectorAll -> NodeList
// const p = document.querySelectorAll('p');
// for(let i = 0;i<p.length;i++){
//     p[i].style.backgroundColor = "lightYellow"
// }


//DOM MANIPULATION
//innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<i>Halo</i>';
// const sectionA = document.querySelector('#a');
// sectionA.innerHTML = 'Jadi Kosong Deh';

//.. .style.<propertiesCSS>
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// const p = document.getElementsByTagName('p');
// for(let i=0;i<p.length;i++){
//     p[i].style.backgroundColor = 'blue';
// }

// setAttribute ; getAttribute ; removeAttribute
// const a = document.querySelector('#a a');
// selanjutnya di console
// a.getAttribute('href')
// a.removeAttribute('href')
// bawah tidak di console
// a.setAttribute('href','http://instagram.com/sandhikagalih');

// classList
// const p2 = document.querySelector('.p2');
// selanjutnya diconsole
// p2.classList.add('label') -> membuat class label
// p2.classList.remove
// p2.classList.toggle
// p2.classList.item
// p2.classList.replace

//  document.createElement()
//  document.createTextNode()
// const pBaru = document.createElement('p');
// const teksBaru = document.createTextNode('Paragraf baru');

//  node.appendChild()
// simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksBaru);

// simpan pBaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

//  node.insertBefore()
// const liBaru = document.createElement('li');
// const liTeks = document.createTextNode('item BAru')

//  node.appendChild()
// simpan tulisan ke dalam paragraf
// liBaru.appendChild(liTeks);

// simpan pBaru di akhir section A
// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru,li2);

//  parentNode.removeChild()
// const link = document.getElementsByTagName('a')[0];
// const sectionA = document.getElementById('a');
// sectionA.removeChild(link)

//  parentNode.replaceChild()
//  const sectionB = document.getElementById('b');
//  const p4 = sectionB.querySelector('p');

//  const hBaru = document.createElement('h2');
//  const hTeks = document.createTextNode('Kok jadi judul');

//  hBaru.appendChild(hTeks);

//  sectionB.replaceChild(hBaru,p4)

// DOM EVENT
// (COBA1) click for make background color different using on
// let p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = ubahWarna;

// (COBA1) click for make background color different using on
// const p3 = document.querySelector('.p3');
// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'lightblue';
// })

// (COBA2) ADD LI WITH ON using click p4
// function barisBaru(){
// const ul = document.querySelector('#b ul');

// const liEL = document.createElement('li');
// const liTeks = document.createTextNode('item Baru')

// liEL.appendChild(liTeks);

// ul.appendChild(liEL);
// }

// const p4 = document.querySelector('#b p');
// p4.onclick = barisBaru;

// (COBA2) ADD LI WITH addEventListener using click p4
// const p4 = document.querySelector('#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('ul');
//     const liBaru = document.createElement('li');
//     const liTeks = document.createTextNode('Item Baru');

//     liBaru.appendChild(liTeks);

//     ul.appendChild(liBaru);
// ;})