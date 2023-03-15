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

//Object Literals
//ambil element
const cart_items = document.getElementById('cart')

function addCart(name, category) {
    return {
        name,
        category
    }
}

var getProcudt = addCart("iphone 14", "gadget");
cart_items.innerHTML = `<b>Product : </b>  ${getProcudt.name} <b> Kategori: </b>  ${getProcudt.category}`;