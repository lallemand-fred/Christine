//------------------------------Page Parallax---------------------------
let background = document.querySelector(".imageBackground");
let imageFront = document.querySelector(".imageFront");
let oiseauBas = document.querySelector(".imageOiseauBas");
let oiseauHaut = document.querySelector(".imageOiseauHaut");
let oiseauMid = document.querySelector(".imageOiseauMid");
let lastName = document.querySelector(".lastName");
let firstName = document.querySelector(".firstName");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  background.style.top = value * 0.6 + "px";
  imageFront.style.top = value * 0.5 + "px";
  oiseauBas.style.top = value * 0.35 + "px";
  oiseauHaut.style.top = value * 0.4 + "px";
  oiseauMid.style.top = value * 0.25 + "px";
  lastName.style.top = value * -0.1 + "px";
  firstName.style.top = value * -0.1 + "px";
});
