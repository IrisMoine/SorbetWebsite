let arbres = document.getElementById("arbres");
let nana = document.getElementById("nana");
let montagne = document.getElementById("montagne");
let icebal = document.getElementById("icebal");
let sorbetcone = document.getElementById("sorbetcone");
let text = document.getElementById("text");
// let text2 = document.getElementById("text2");
let cerise = document.getElementById("cerise");
let boule1 = document.getElementById("boule1");
let boule2 = document.getElementById("boule2");
let cone = document.getElementById("cone");
let fond = document.getElementById("fond");
let groseilles = document.getElementById("groseilles");

let cassis = document.getElementById("cassis");
let h2 = document.getElementById("h2");
let nauge1 = document.getElementById("nauge1");
let nauge2 = document.getElementById("nauge2");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  arbres.style.top = value * 0.5 + "px";
  nana.style.left = -value * 0.5 + "px";
  montagne.style.top = -value * 0.15 + "px";
  icebal.style.top = value * 0.05 + "px";
  sorbetcone.style.left = value * 0.05 + "px";
  text.style.top = value * 1 + "px";
  // text2.style.left = value * 1 + "px";
  h2.style.top = value * 0.3 + "px";

  boule1.style.top = value * 0.009 + "px";
  boule2.style.top = value * 0.07 + "px";
  cone.style.top = value * 0.1 + "px";

  fond.style.top = -value * 0.05 + "px";
  cerise.style.left = value * 0.01 + "px";

  nauge1.style.top = -value * 0.04 + "px";
  nauge2.style.top = -value * 0.05 + "px";

  groseilles.style.top = -value * 0.1 + "px";

  cassis.style.top = value * 0.01 + "px";
});

document
  .getElementsByClassName("histoire1")[0]
  .addEventListener("click", function () {
    this.classList.remove("unscrollableX");
    this.scrollTo({
      left: window.innerWidth,
      behavior: "smooth",
    });
  });
