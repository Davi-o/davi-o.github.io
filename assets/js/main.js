$(document).ready(function () {
  $('.modal').modal();
  $('.carousel').carousel();
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
});

function smoothScrollBegin() {
  var element = document.getElementById("inicio");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function smoothScrollRegion() {
  var element = document.getElementById("regioes");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function smoothScrollContact() {
  var element = document.getElementById("contato");
  element.scrollIntoView({ behavior: "smooth", block: "end" });
}
function shop1() {
  let shop1 = document.getElementById("shop1");//não será usada nesta função
  let shop2 = document.getElementById("shop2");
  let shop3 = document.getElementById("shop3");
  let btn = document.getElementById("btn-close1");
  let collaps = document.getElementById("ingressos");

  if (btn.classList.contains("hide") && collaps.classList.contains("hide")) {
    btn.classList.remove("hide");
    collaps.classList.remove("hide");
  }

  shop2.classList.add("hide");
  shop3.classList.add("hide");

}
function shop2() {
  let shop1 = document.getElementById("shop1");
  let shop2 = document.getElementById("shop2");//não será usada nesta função
  let shop3 = document.getElementById("shop3");
  let btn = document.getElementById("btn-close2");
  let collaps = document.getElementById("ingressos");

  if (btn.classList.contains("hide") && collaps.classList.contains("hide")) {
    btn.classList.remove("hide");
    collaps.classList.remove("hide");
  }

  shop1.classList.add("hide");
  shop3.classList.add("hide");
}

function shop3() {
  let shop1 = document.getElementById("shop1");
  let shop2 = document.getElementById("shop2");
  let shop3 = document.getElementById("shop3");//não será usada nesta função
  let btn = document.getElementById("btn-close3");
  let collaps = document.getElementById("ingressos");

  if (btn.classList.contains("hide") && collaps.classList.contains("hide")) {
    btn.classList.remove("hide");
    collaps.classList.remove("hide");
  }

  shop1.classList.add("hide");
  shop2.classList.add("hide");
}
function shop1close() {
  let shop1 = document.getElementById("shop1");
  let shop2 = document.getElementById("shop2");
  let shop3 = document.getElementById("shop3");//não será usada nesta função
  let btn = document.getElementById("btn-close1");
  let collaps = document.getElementById("ingressos");

  shop2.classList.remove("hide");
  shop3.classList.remove("hide");
  btn.classList.add("hide");
  collaps.classList.add("hide");
}
function shop2close() {
  let shop1 = document.getElementById("shop1");
  let shop2 = document.getElementById("shop2");
  let shop3 = document.getElementById("shop3");//não será usada nesta função
  let btn = document.getElementById("btn-close2");
  let collaps = document.getElementById("ingressos");

  shop1.classList.remove("hide");
  shop3.classList.remove("hide");
  btn.classList.add("hide");
  collaps.classList.add("hide");
}
function shop3close() {
  let shop1 = document.getElementById("shop1");
  let shop2 = document.getElementById("shop2");
  let shop3 = document.getElementById("shop3");//não será usada nesta função
  let btn = document.getElementById("btn-close3");
  let collaps = document.getElementById("ingressos");

  shop1.classList.remove("hide");
  shop2.classList.remove("hide");
  btn.classList.add("hide");
  collaps.classList.add("hide");
}