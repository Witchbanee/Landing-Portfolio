let burger = document.querySelector(".nav-button");
let burgerLine = document.querySelector(".nav__line");
let burgerOpenMenu = document.querySelector(".navigation__main");
let body = document.querySelector("body");


burger.addEventListener("click", function (evt) {
    evt.preventDefault();
    body.classList.toggle("position");
    burgerOpenMenu.classList.toggle("navigation--mobile");
    burger.classList.toggle("nav-close");
    burgerLine.classList.toggle("nav__line");
});
