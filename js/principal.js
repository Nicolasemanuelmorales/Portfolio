function cambiarAOscuro() {
  setCookie("Claro","false");
  setCookie("Oscuro","true");
  $("hr").addClass("hr");
  document.getElementById("body").classList.remove('w3-light-grey');
  document.getElementById("body").classList.add('negro-oscuro');
  document.getElementById("cuadro-izq").classList.remove('w3-white');
  document.getElementById("cuadro-izq").classList.remove('w3-text-grey');
  document.getElementById("cuadro-izq").classList.add('negro-claro');
  document.getElementById("cuadro-izq").classList.add('blanco-falso');
  document.getElementById("cuadro-der-exp-lab").classList.remove('w3-white');
  document.getElementById("cuadro-der-exp-lab").classList.remove('w3-text-grey');
  document.getElementById("cuadro-der-exp-lab").classList.add('negro-claro');
  document.getElementById("cuadro-der-exp-lab").classList.add('blanco-falso');
  document.getElementById("cuadro-der-edu").classList.remove('w3-white');
  document.getElementById("cuadro-der-edu").classList.remove('w3-text-grey');
  document.getElementById("cuadro-der-edu").classList.add('negro-claro');
  document.getElementById("cuadro-der-edu").classList.add('blanco-falso');
  document.getElementById("cuadro-der-exp-pro").classList.remove('w3-white');
  document.getElementById("cuadro-der-exp-pro").classList.remove('w3-text-grey');
  document.getElementById("cuadro-der-exp-pro").classList.add('negro-claro');
  document.getElementById("cuadro-der-exp-pro").classList.add('blanco-falso');
  document.getElementById("footer").classList.remove('w3-teal');
  document.getElementById("footer").classList.add('negro-claro');
  document.getElementById("footer").classList.add('blanco-falso');
}

function cambiarAClaro() {
  setCookie("Oscuro","false");
  setCookie("Claro","true");
  $("hr").removeClass("hr");
  document.getElementById("body").classList.add('w3-light-grey');
  document.getElementById("body").classList.remove('negro-oscuro');
  document.getElementById("cuadro-izq").classList.add('w3-white');
  document.getElementById("cuadro-izq").classList.add('w3-text-grey');
  document.getElementById("cuadro-izq").classList.remove('negro-claro');
  document.getElementById("cuadro-izq").classList.remove('blanco-falso');
  document.getElementById("cuadro-der-exp-lab").classList.add('w3-white');
  document.getElementById("cuadro-der-exp-lab").classList.add('w3-text-grey');
  document.getElementById("cuadro-der-exp-lab").classList.remove('negro-claro');
  document.getElementById("cuadro-der-exp-lab").classList.remove('blanco-falso');
  document.getElementById("cuadro-der-edu").classList.add('w3-white');
  document.getElementById("cuadro-der-edu").classList.add('w3-text-grey');
  document.getElementById("cuadro-der-edu").classList.remove('negro-claro');
  document.getElementById("cuadro-der-edu").classList.remove('blanco-falso');
  document.getElementById("cuadro-der-exp-pro").classList.add('w3-white');
  document.getElementById("cuadro-der-exp-pro").classList.add('w3-text-grey');
  document.getElementById("cuadro-der-exp-pro").classList.remove('negro-claro');
  document.getElementById("cuadro-der-exp-pro").classList.remove('blanco-falso');
  document.getElementById("footer").classList.add('w3-teal');
  document.getElementById("footer").classList.remove('negro-claro');
  document.getElementById("footer").classList.remove('blanco-falso');
}

function CambiarEstado(){
  if(document.getElementById("myonoffswitch").checked === true){
    cambiarAOscuro();
  }else{cambiarAClaro();}
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var localStorage2 = window.localStorage;
function setCookie(cname,cvalue) {
  localStorage2.setItem(cname, cvalue);
}

function cargaDeCookies() {
  var Oscuro;
  var Claro;
  Oscuro= localStorage2.getItem("Oscuro");
  Claro= localStorage2.getItem("Claro");

  if(Oscuro == "true"){
    document.getElementById("myonoffswitch").checked = true;
    cambiarAOscuro();
  }
  if(Claro == "true"){
    document.getElementById("myonoffswitch").checked = false;
    cambiarAClaro();
  }
  if(Oscuro == "" && Claro == ""){
    document.getElementById("myonoffswitch").checked = true;
    cambiarAOscuro();
  }
}
