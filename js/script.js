
let burger = document.querySelector(".nav-button");
let burgerLine = document.querySelector(".nav__line");
let burgerOpenMenu = document.querySelector(".navigation__main");
let body = document.querySelector("body");


burger.addEventListener("click", function (evt) {
    evt.preventDefault();
    burgerOpenMenu.classList.toggle("navigation--mobile");
    body.classList.toggle("position");
    burgerLine.classList.toggle("nav__line");
    burgerLine.classList.toggle("nav__line--open");
});


