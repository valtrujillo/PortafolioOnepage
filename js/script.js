window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

document.querySelector(".bars-menu").addEventListener("click", mostrar);
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var menuresponsive = document.querySelector(".menu-responsive");


// Funcion que junto a ClassList y Toggle añade una clase y la quita
function mostrar(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    menuresponsive.classList.toggle("active");
};