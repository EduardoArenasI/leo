// =========================
// ARCHIVO: script.js
// =========================


// WHATSAPP

function contactPlan(plan){

  const phone = "525514564015";

  const message =
  `Hola Leonides, vi esta información en tu página web y me interesó el plan ${plan}`;

  const url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}


// EFECTO NAVBAR

window.addEventListener("scroll", function(){

  const header =
  document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background =
    "rgba(0,0,0,0.95)";

  }else{

    header.style.background =
    "rgba(0,0,0,0.75)";

  }

});