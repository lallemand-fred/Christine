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
// ----------------------BTN CARTE----------------------

const card = document.querySelectorAll(".card");
card.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let elRect = el.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardHeight = elRect.height / 2;

    let angleY = -(x - midCardWidth) / 12;
    let angleX = (y - midCardHeight) / 12;

    el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  });
  el.addEventListener("mouseleave", () => {
    el.children[0].style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    el.children[1].style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});
