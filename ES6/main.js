// ES5
// String Concatenation
// Ambil Element
const user_place = document.getElementById('user');
//seolah-olah login
const user_logged = "tony";
user_place.innerHTML = "Hi," + user_logged + " asik";

// ES6
// String Concatenation
// Ambil Element
const user_place = document.getElementById('user');
//seolah-olah login
const user_logged = "tony";
user_place.innerHTML = `Hi, ${user_logged} asik`;