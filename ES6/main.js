// ES5

// String Concatenation
// // Ambil Element
// const user_place = document.getElementById('user');
// //seolah-olah login
// const user_logged = "tony";
// user_place.innerHTML = "Hi," + user_logged + " asik";

//Object Literals
// //ambil element
// const cart_items = document.getElementById('cart')
// function addCart(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }
// var getProcudt = addCart("iphone 14", "gadget");
// cart_items.innerHTML = "<b>Product : </b> " + getProcudt.name + " <b>Kategori : </b> " + getProcudt.category;

// ES6

// String Concatenation
// // Ambil Element
// const user_place = document.getElementById('user');
// //seolah-olah login
// const user_logged = "tony";
// user_place.innerHTML = `Hi, ${user_logged} asik`;

// //Object Literals
// //ambil element
// const cart_items = document.getElementById('cart')
// function addCart(name, category) {
//     return {
//         name,
//         category
//     }
// }
// var getProcudt = addCart("iphone 14", "gadget");
// cart_items.innerHTML = `<b>Product : </b>  ${getProcudt.name} <b> Kategori: </b>  ${getProcudt.category}`;

// // Array ForEach 
// Get Element 
// const skills_holder = document.getElementById('skills')
// const yourSkills = ['UX Design', 'Web Developer', 'Video Editor'];
// let parent = '<ul>';
// yourSkills.forEach((skill) => {
//     parent += '<li>' + skill + '</li>';
// });

// parent += '</ul>';
// skills_holder.innerHTML = parent;

//map
// const printSkill = yourSkills.map((skill) => {
//     return skill;
// });
// skills_holder.innerHTML = printSkill;

// filter
// const myPrimarySkill = yourSkills.filter((skill) => {
//     return skill === 'UX Design';
// });
// skills_holder.innerHTML = myPrimarySkill;