let burger = document.querySelector(".nav-button");
let burgerLine = document.querySelector(".nav__line");
let burgerOpenMenu = document.querySelector(".navigation__main");
let body = document.querySelector("body");


burger.addEventListener("click", function (evt) {
    evt.preventDefault();
    burgerOpenMenu.classList.add("navigation--mobile");
    body.classList.add("position");
    
    burgerLine.classList.remove("nav__line");
    burgerLine.classList.remove("nav__line");

    burgerLine.classList.add("nav__line--open");
    burgerLine.classList.add("nav__line--open");
    
});



// close.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popup.classList.remove("modal-show");
// });