$(document).ready(function () {
  setTimeout(function () {
    document.getElementById("preloader").classList.add("dn");
    document.getElementById("izq").classList.remove("dn");
    document.getElementById("der").classList.remove("dn");
    document.getElementById("footer").classList.remove("dn");
  }, 2500);

  setTimeout(function () {
    if ($(window).width() > 583) {
      var h = document.getElementById("der").clientHeight;
      $("#cuadro-izq").css({ minHeight: h + "px" });
    }
  }, 3000);
});

function cambiarAOscuro() {
  setCookie("Claro", "false");
  setCookie("Oscuro", "true");
  $("hr").addClass("hr");

  var berninis = document.querySelectorAll(".buttonCode");
  for (var i = 0; i < berninis.length; i++) {
    berninis[i].style.setProperty("background-color", "#222", "important");
  }

  document.getElementById("body").classList.remove("w3-light-grey");
  document.getElementById("body").classList.add("negro-oscuro");
  document.getElementById("cuadro-izq").classList.remove("w3-white");
  document.getElementById("cuadro-izq").classList.remove("w3-text-grey");
  document.getElementById("cuadro-izq").classList.add("negro-claro");
  document.getElementById("cuadro-izq").classList.add("blanco-falso");
  document.getElementById("cuadro-izq2").classList.remove("w3-white");
  document.getElementById("cuadro-izq2").classList.remove("w3-text-grey");
  document.getElementById("cuadro-izq2").classList.add("negro-claro");
  document.getElementById("cuadro-izq2").classList.add("blanco-falso");
  document.getElementById("cuadro-der-exp-lab").classList.remove("w3-white");
  document
    .getElementById("cuadro-der-exp-lab")
    .classList.remove("w3-text-grey");
  document.getElementById("cuadro-der-exp-lab").classList.add("negro-claro");
  document.getElementById("cuadro-der-exp-lab").classList.add("blanco-falso");
  document.getElementById("cuadro-der-edu").classList.remove("w3-white");
  document.getElementById("cuadro-der-edu").classList.remove("w3-text-grey");
  document.getElementById("cuadro-der-edu").classList.add("negro-claro");
  document.getElementById("cuadro-der-edu").classList.add("blanco-falso");
  document.getElementById("cuadro-der-exp-pro").classList.remove("w3-white");
  document
    .getElementById("cuadro-der-exp-pro")
    .classList.remove("w3-text-grey");
  document.getElementById("cuadro-der-exp-pro").classList.add("negro-claro");
  document.getElementById("cuadro-der-exp-pro").classList.add("blanco-falso");
  document.getElementById("footer").classList.remove("w3-teal");
  document.getElementById("footer").classList.add("negro-claro");
  document.getElementById("footer").classList.add("blanco-falso");
}

function cambiarAClaro() {
  setCookie("Oscuro", "false");
  setCookie("Claro", "true");
  $("hr").removeClass("hr");

  var berninis = document.querySelectorAll(".buttonCode");
  for (var i = 0; i < berninis.length; i++) {
    berninis[i].style.setProperty("background-color", "#e8e8e8", "important");
  }
  document.getElementById("body").classList.add("w3-light-grey");
  document.getElementById("body").classList.remove("negro-oscuro");
  document.getElementById("cuadro-izq").classList.add("w3-white");
  document.getElementById("cuadro-izq").classList.add("w3-text-grey");
  document.getElementById("cuadro-izq").classList.remove("negro-claro");
  document.getElementById("cuadro-izq").classList.remove("blanco-falso");
  document.getElementById("cuadro-izq2").classList.add("w3-white");
  document.getElementById("cuadro-izq2").classList.add("w3-text-grey");
  document.getElementById("cuadro-izq2").classList.remove("negro-claro");
  document.getElementById("cuadro-izq2").classList.remove("blanco-falso");
  document.getElementById("cuadro-der-exp-lab").classList.add("w3-white");
  document.getElementById("cuadro-der-exp-lab").classList.add("w3-text-grey");
  document.getElementById("cuadro-der-exp-lab").classList.remove("negro-claro");
  document
    .getElementById("cuadro-der-exp-lab")
    .classList.remove("blanco-falso");
  document.getElementById("cuadro-der-edu").classList.add("w3-white");
  document.getElementById("cuadro-der-edu").classList.add("w3-text-grey");
  document.getElementById("cuadro-der-edu").classList.remove("negro-claro");
  document.getElementById("cuadro-der-edu").classList.remove("blanco-falso");
  document.getElementById("cuadro-der-exp-pro").classList.add("w3-white");
  document.getElementById("cuadro-der-exp-pro").classList.add("w3-text-grey");
  document.getElementById("cuadro-der-exp-pro").classList.remove("negro-claro");
  document
    .getElementById("cuadro-der-exp-pro")
    .classList.remove("blanco-falso");
  document.getElementById("footer").classList.add("w3-teal");
  document.getElementById("footer").classList.remove("negro-claro");
  document.getElementById("footer").classList.remove("blanco-falso");
}

function CambiarEstado() {
  if (document.getElementById("myonoffswitch").checked === true) {
    cambiarAOscuro();
  } else {
    cambiarAClaro();
  }
}

function CambiarEstadoIdioma() {
  if (document.getElementById("myonoffswitch2").checked === true) {
    setCookie("Arg", "false");
    setCookie("En", "true");

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "span.onoffswitch-inner:before {content: 'Oscuro';}";
    var styleElem2 = document.head.appendChild(document.createElement("style"));
    styleElem2.innerHTML = "span.onoffswitch-inner:after {content: 'Claro';}";
  } else {
    setCookie("En", "false");
    setCookie("Arg", "true");

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "span.onoffswitch-inner:before {content: 'Dark';}";
    var styleElem2 = document.head.appendChild(document.createElement("style"));
    styleElem2.innerHTML = "span.onoffswitch-inner:after {content: 'Light';}";
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var localStorage2 = window.localStorage;
function setCookie(cname, cvalue) {
  localStorage2.setItem(cname, cvalue);
}

function cargaDeCookies() {
  var Oscuro = "";
  var Claro = "";
  var Arg = "";
  var En = "";
  Oscuro = localStorage2.getItem("Oscuro");
  Claro = localStorage2.getItem("Claro");
  Arg = localStorage2.getItem("Arg");
  En = localStorage2.getItem("En");

  if (Arg == "true") {
    $(".lang").each(function (index, item) {
      $(this).text(arrLang["en"][$(this).attr("key")]);
    });
    document.getElementById("myonoffswitch2").checked = false;
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "span.onoffswitch-inner:before {content: 'Dark';}";
    var styleElem2 = document.head.appendChild(document.createElement("style"));
    styleElem2.innerHTML = "span.onoffswitch-inner:after {content: 'Light';}";
  } else {
    $(".lang").each(function (index, item) {
      $(this).text(arrLang["arg"][$(this).attr("key")]);
    });
    document.getElementById("myonoffswitch2").checked = true;
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "span.onoffswitch-inner:before {content: 'Oscuro';}";
    var styleElem2 = document.head.appendChild(document.createElement("style"));
    styleElem2.innerHTML = "span.onoffswitch-inner:after {content: 'Claro';}";
  }

  if (Claro == "true") {
    document.getElementById("myonoffswitch").checked = false;
    cambiarAClaro();
  } else {
    cambiarAOscuro();
    document.getElementById("myonoffswitch").checked = true;
  }
}
$(window).resize(function () {
  if ($(window).width() > 583) {
    var h = document.getElementById("der").clientHeight;
    $("#cuadro-izq").css({ minHeight: h + "px" });
  } else {
    $("#cuadro-izq").css({ minHeight: "" });
  }
});
$("#myonoffswitch2").change(function () {
  if ($(this).is(":checked")) {
    $(".lang").each(function (index, item) {
      $(this).text(arrLang["arg"][$(this).attr("key")]);
    });
  } else {
    $(".lang").each(function (index, item) {
      $(this).text(arrLang["en"][$(this).attr("key")]);
    });
  }
});

var arrLang = {
  en: {
    epi1p: "Historia clínica | Angular 4",
    epi2p: "Historia clínica | Migration to React.JS",
    epi3p: "Mapa de camas",
    epi4p: "Mobile prepaga",
    epi5p: "Histórico TQ",

    epi1d:
      "Web project aimed at professionals in the health area, which we manage the maintenance, development and testing of new functionalities both backend and frontend. Angular 4, HTML, CSS, JavaScript, Bootstrap, MySQL, Java, Spring and JUnit were used. Managed in Redmine with Scrum methodology.",
    epi2d:
      "After research and analysis, it was decided to migrate the project from Angular 4 to React.Js while keeping the backend. It was a development from scratch, developed with React.Js (TypeScript), Material-UI, Axios and Redux. Managed by Jira with Scrum methodology.",
    epi3d:
      "Mobile project aimed at professionals in the health area in which the frontend was developed from the beginning. It is based on another related web project, being able to reuse its backend. Development was with React Native (TypeScript), Expo, Paper, Axios, and Redux. Managed by Jira with Scrum methodology.",
    epi4d:
      "Mobile project for clients in which temporary support was provided, maintaining and developing new functionalities. React Native (JavaScript, TypeScript), Expo, Paper, Axios and Redux were used. Managed by Jira with Scrum methodology.",
    epi5d:
      "Self-managed research project in which both the frontend and the backend were developed from the beginning. Aimed at professionals in the health area, it was carried out with Java, Spring, SQL Server and Svelte.",

    mmda: "University project in order to develop an Ecommerce.",
    ayuda: "University project in order to develop a network of donations.",
    recy: "The main idea of this university project was to raise awareness about recycling. For this we developed a website in which users can scan an object and in this way they would be indicated to what type of recycling it corresponded and to which recycling points they could take them. One of the main slogans was that the project had to be sustainable, so it was decided to develop in parallel an Ecommerce of products made with recyclable materials. Only recycling points could sell and users who recycled there were applied a discount on the final purchase price. To carry out this project, intensive research had to be carried out, both on the subject and having to use new tools for us, such as scanning objects by means of Artificial Intelligence.",
    port: "The development of this responsive website and the technologies used were chosen in order to consolidate and deepen the knowledge it had. Also, while I had never used the W3 CSS framework, it was implemented in order to learn how to use and master it.",
    Dog: "This project was created with the intention of giving a talk at Epidata with a simple example, but with a complete tour accompanied by good practices. The project is documented to be able to build the development environment, create a project from scratch and be able to deploy with GitHub Pages.",
    Cat: "This project was created with the intention of giving a talk at Epidata with a simple example, but with a complete tour accompanied by good practices. The project is documented to be able to build the development environment, create a project from scratch and be able to deploy with Expo Snack.",
    EJS: "Simple example",
    ProyectoDogT: "About 2 Week",
    ExperienciaTitulo: "Work experience",
    Agosto: "August",
    Actualmente: "Nowadays",
    puesto2: "Customer Service",
    descPuesto2P1:
      "Online procedures - Loans - Sale of reloadable debit cards - Money transfers to the interior and exterior of the country - Ticket sales - Upload system - Photocopier management - Cash and stock closing - Cash monitoring and control in Rapipago sector.",
    descPuesto2P2:
      "Approximately 1 year in a shift manager position, in charge of 5 people.",
    descPuesto3:
      "Technical support in a call center on the 3 services provided by the Telecentro company (Internet, Telephony, TV).",
    Abril: "April",
    Octubre: "October",
    Noviembre: "November ",
    Enero: "January",
    Educacion: "Education",
    EnCurso: "In progress",
    Tec: "University Technician in Web Development",
    Redes: "Computer network installer",
    Pc: "PC repair",
    Bachiller: "Bachelor with an orientation in Economics & Administration",
    Proyectos: "Projects",
    Proyecto1T: "About 3 Months",
    Proyecto1Inf: "Ecommerce - Forum with AI - University Project",
    Proyecto1: " Helping others",
    Proyecto2T: "About 2 Months",
    Proyecto2Inf: "Donations Network - University Project",
    Proyecto3T: "About 1 Month",
    Proyecto3Inf: "Ecommerce - University Project",
    Footer: "Find me on my social networks.",
    Idioma: "Language",
    Español: "Spanish",
    Ingles: "English",
    St: "Technical support | Call center",
  },
  arg: {
    epi1p: "Historia clínica | Angular 4",
    epi2p: "Historia clínica | Migración a React.JS",
    epi3p: "Mapa de camas",
    epi4p: "Mobile prepaga",
    epi5p: "Histórico TQ",

    epi1d:
      "Proyecto web destinado a profesionales del área de salud, el cual le gestionamos el mantenimiento, desarrollo y testeo de nuevas funcionalidades tanto backend como frontend. Se utilizó Angular 4, HTML, CSS, JavaScript, Bootstrap, MySQL, Java, Spring y JUnit. Gestionado en Redmine con metodología Scrum.",
    epi2d:
      "Después de una investigación y análisis se decidió migrar dicho proyecto de Angular 4 a React.Js manteniendo el backend. Fue un desarrollo desde cero, desarrollado con React.Js (TypeScript), Material-UI, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
    epi3d:
      "Proyecto mobile destinado a profesionales del área de salud en el cual se desarrolló el frontend desde un inicio. Está basado en otro proyecto web relacionado, pudiendo reutilizar el backend del mismo. El desarrollo fue con React Native (TypeScript), Expo, Paper, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
    epi4d:
      "Proyecto mobile destinado a clientes en el cual se le brindó soporte temporal dando mantenimiento y desarrollando nuevas funcionalidades. Se utilizaron React Native (JavaScript, TypeScript), Expo, Paper, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
    epi5d:
      "Proyecto de investigación autogestionado en el cual se desarrolló tanto el frontend como el backend desde el inicio. Destinado a profesionales del área de salud, se realizó con Java, Spring, SQL Server y Svelte.",

    mmda: "Proyecto universitario con la finalidad de desarrollar un Ecommerce.",
    ayuda:
      "Proyecto universitario con la finalidad de desarrollar una red de donaciones.",
    recy: "La idea principal de este proyecto universitario era concientizar a la población sobre el reciclaje. Para ello desarrollamos una web en la cual los usuarios puedan escanear un objeto y de esta manera se les indicaría a que tipo de reciclaje correspondía y a que puntos de reciclaje podían llevarlos. Una de las consignas principales era que el proyecto debía ser sustentable, por lo que se optó por el desarrollo en paralelo de un Ecommerce de productos fabricados con materiales reciclables. Solo los puntos de reciclaje podían vender y los usuarios que reciclaban allí se les aplicaban un descuento en el precio final de la compra. Para realizar este proyecto, se tuvo que realizar una investigación intensiva, tanto sobre la temática como al tener que utilizar herramientas nuevas para nosotros, como el escaneo de objetos por medio de la Inteligencia Artificial.",
    port: "La elaboración de esta web responsive y las tecnologías utilizadas se escogieron con el fin de afianzar y profundizar los conocimientos que tenía. Además, si bien nunca había utilizado el framework W3 CSS, se implementó con el fin de aprender a usarlo y dominarlo.",
    Dog: "Este proyecto fue creado con la intención de dar una charla en Epidata con un ejemplo sencillo, pero con un recorrido completo acompañado de buenas prácticas. El proyecto esta documentado para poder levantar el entorno de desarrollo, crear un proyecto desde cero y poder hacer un deploy con GitHub Pages.",
    Cat: "Este proyecto fue creado con la intención de dar una charla en Epidata con un ejemplo sencillo, pero con un recorrido completo acompañado de buenas prácticas. El proyecto esta documentado para poder levantar el entorno de desarrollo, crear un proyecto desde cero y poder hacer un deploy con Expo Snack.",
    EJS: "Ejemplo simple",
    ProyectoDogT: " Aproximadamente 2 Semana",
    ExperienciaTitulo: "Experiencia laboral",
    Agosto: "Agosto",
    Actualmente: "Actualmente",
    puesto2: "Servicio de atención al cliente",
    descPuesto2P1:
      "Trámites online - Prestamos - Venta de tarjetas de debito recargables - Giros al interior y exterior del pais - Venta de pasajes - Sistema de sube - Manejo de fotocopiadora - Cierre de caja y stock - Seguimiento y control de caja en sector Rapipago.",
    descPuesto2P2:
      "Aproximadamente un 1 año en puesto de encargado de turno, a cargo de 5 personas.",
    descPuesto3:
      "Soporte técnico en un call center sobre los 3 servicios que brinda la empresa Telecentro (Internet, Telefonía, TV).",
    Abril: "Abril",
    Octubre: "Octubre",
    Noviembre: "Noviembre",
    Enero: "Enero",
    Educacion: "Educación",
    EnCurso: "En Curso",
    Tec: "Técnico Universitario en Desarrollo Web",
    Redes: "Instalador de redes informaticas",
    Pc: "Reparación de PC",
    Bachiller: "Bachiller con orientación en Economía & Administración",
    Proyectos: "Proyectos",
    Proyecto1T: " Aproximadamente 3 Meses",
    Proyecto1Inf: "Ecommerce - Foro con IA",
    Proyecto1: "Ayudando al projimo",
    Proyecto2T: " Aproximadamente 2 Meses",
    Proyecto2Inf: "Red de donaciones",
    Proyecto3T: " Aproximadamente 1 Mes",
    Proyecto3Inf: "Ecommerce",
    Footer: "Buscame en mis redes sociales.",
    Idioma: "Idioma",
    Español: "Español",
    Ingles: "Inglés",
    St: "Soporte técnico | Call center",
  },
};
