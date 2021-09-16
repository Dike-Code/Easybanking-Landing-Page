const menu = document.querySelector("#mobile");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
   menu.classList.toggle("is-active");
   nav.classList.toggle("active");
});
