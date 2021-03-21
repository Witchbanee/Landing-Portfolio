<<<<<<< HEAD

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


=======
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
>>>>>>> 802ea0a23b8a2e77a3e7a3d425b29bdaa48f41fe
