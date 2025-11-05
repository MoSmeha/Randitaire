const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const logo = document.querySelector(".logo");
const icon = document.querySelector(".fa-bars");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
  this.scrollY > 20
    ? logo.classList.add("sticky-black")
    : logo.classList.remove("sticky-black");
  this.scrollY > 20
    ? icon.classList.add("sticky-black")
    : icon.classList.remove("sticky-black");
};

document.addEventListener("DOMContentLoaded", function () {
  var app = document.getElementById("typewriter");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });

  typewriter
    .pauseFor(750)
    .typeString("Every")
    .pauseFor(750)
    .deleteChars(5)
    .typeString("Thing")
    .pauseFor(750)
    .deleteChars(5)
    .typeString("You")
    .pauseFor(750)
    .deleteChars(3)
    .typeString("Desire")
    .pauseFor(750)
    .deleteChars(6)
    .typeString("& More")
    .pauseFor(750)
    .start();
});
