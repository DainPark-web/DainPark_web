"use strict";

const menu = document.querySelector(".menu");
const headerUl = document.querySelector(".header-ul");

function clicked(){
    headerUl.classList.toggle("active");
}

menu.addEventListener('click', clicked);