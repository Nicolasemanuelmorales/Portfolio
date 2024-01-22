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
	document.getElementById("cuadro-der-exp-lab").classList.remove("w3-text-grey");
	document.getElementById("cuadro-der-exp-lab").classList.add("negro-claro");
	document.getElementById("cuadro-der-exp-lab").classList.add("blanco-falso");
	document.getElementById("cuadro-der-edu").classList.remove("w3-white");
	document.getElementById("cuadro-der-edu").classList.remove("w3-text-grey");
	document.getElementById("cuadro-der-edu").classList.add("negro-claro");
	document.getElementById("cuadro-der-edu").classList.add("blanco-falso");
	document.getElementById("cuadro-der-exp-pro").classList.remove("w3-white");
	document.getElementById("cuadro-der-exp-pro").classList.remove("w3-text-grey");
	document.getElementById("cuadro-der-exp-pro").classList.add("negro-claro");
	document.getElementById("cuadro-der-exp-pro").classList.add("blanco-falso");
	document.getElementById("footer").classList.remove("w3-teal");
	document.getElementById("footer").classList.add("negro-claro");
	document.getElementById("footer").classList.add("blanco-falso");
	if (document.getElementById("epiMasInfo").classList.length === 2) {
		document.getElementById("epiMasInfo").classList.remove("masInfoGradiantLight");
		document.getElementById("epiMasInfo").classList.add("masInfoGradiantDark");
	}
}
function changeMasInfo() {
	if (document.getElementById("epiMasInfo").classList.length === 2) {
		document.getElementById("epiMasInfo").classList.remove("w3-display-topleft");
		document.getElementById("masInf").classList.remove("masInfo");
		document.getElementById("epiMasInfo").classList.add("mt16");
		document.getElementById("iconEpi").classList.remove("fa-chevron-down");
		document.getElementById("iconEpi").classList.add("fa-chevron-up");
		if (localStorage2.getItem("Arg") == "false" || localStorage2.getItem("Arg") == null) {
			document.getElementById("masInfoButton").textContent = "Menos Información";
		} else {
			document.getElementById("masInfoButton").textContent = "Less Information";
		}

		if (localStorage2.getItem("Claro") == "true") {
			document.getElementById("epiMasInfo").classList.remove("masInfoGradiantLight");
		} else {
			document.getElementById("epiMasInfo").classList.remove("masInfoGradiantDark");
		}
	} else {
		document.getElementById("epiMasInfo").classList.add("w3-display-topleft");
		document.getElementById("masInf").classList.add("masInfo");
		document.getElementById("epiMasInfo").classList.remove("mt16");
		document.getElementById("iconEpi").classList.add("fa-chevron-down");
		document.getElementById("iconEpi").classList.remove("fa-chevron-up");

		if (localStorage2.getItem("Arg") == "false" || localStorage2.getItem("Arg") == null) {
			document.getElementById("masInfoButton").textContent = "Mas Información";
		} else {
			document.getElementById("masInfoButton").textContent = "More Information";
		}

		if (localStorage2.getItem("Claro") == "true") {
			document.getElementById("epiMasInfo").classList.add("masInfoGradiantLight");
		} else {
			document.getElementById("epiMasInfo").classList.add("masInfoGradiantDark");
		}
	}
	if ($(window).width() > 583) {
		var h = document.getElementById("der").clientHeight;
		$("#cuadro-izq").css({ minHeight: h + "px" });
	}
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
	document.getElementById("cuadro-der-exp-lab").classList.remove("blanco-falso");
	document.getElementById("cuadro-der-edu").classList.add("w3-white");
	document.getElementById("cuadro-der-edu").classList.add("w3-text-grey");
	document.getElementById("cuadro-der-edu").classList.remove("negro-claro");
	document.getElementById("cuadro-der-edu").classList.remove("blanco-falso");
	document.getElementById("cuadro-der-exp-pro").classList.add("w3-white");
	document.getElementById("cuadro-der-exp-pro").classList.add("w3-text-grey");
	document.getElementById("cuadro-der-exp-pro").classList.remove("negro-claro");
	document.getElementById("cuadro-der-exp-pro").classList.remove("blanco-falso");
	document.getElementById("footer").classList.add("w3-teal");
	document.getElementById("footer").classList.remove("negro-claro");
	document.getElementById("footer").classList.remove("blanco-falso");
	if (document.getElementById("epiMasInfo").classList.length === 2) {
		document.getElementById("epiMasInfo").classList.add("masInfoGradiantLight");
		document.getElementById("epiMasInfo").classList.remove("masInfoGradiantDark");
	}
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
	if (document.getElementById("epiMasInfo").classList.length !== 2) {
		if (localStorage2.getItem("Arg") == "false") {
			document.getElementById("masInfoButton").textContent = "Menos Información";
		} else {
			document.getElementById("masInfoButton").textContent = "Less Information";
		}
	} else {
		if (localStorage2.getItem("Arg") == "false") {
			document.getElementById("masInfoButton").textContent = "Mas Información";
		} else {
			document.getElementById("masInfoButton").textContent = "More Information";
		}
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
		document.getElementById("masInfoButton").textContent = "More Information";
	} else {
		$(".lang").each(function (index, item) {
			$(this).text(arrLang["arg"][$(this).attr("key")]);
		});
		document.getElementById("myonoffswitch2").checked = true;
		var styleElem = document.head.appendChild(document.createElement("style"));
		styleElem.innerHTML = "span.onoffswitch-inner:before {content: 'Oscuro';}";
		var styleElem2 = document.head.appendChild(document.createElement("style"));
		styleElem2.innerHTML = "span.onoffswitch-inner:after {content: 'Claro';}";
		document.getElementById("masInfoButton").textContent = "Mas Información";
	}

	if (Claro == "true") {
		document.getElementById("myonoffswitch").checked = false;
		cambiarAClaro();
		document.getElementById("epiMasInfo").classList.add("masInfoGradiantLight");
	} else {
		cambiarAOscuro();
		document.getElementById("myonoffswitch").checked = true;
		document.getElementById("epiMasInfo").classList.add("masInfoGradiantDark");
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
			"Web project aimed at professionals in the health area, where I carried out maintenance tasks, development of new functionalities and testing in backend and frontend. Angular 4, HTML, CSS, JavaScript, Bootstrap, MySQL, Java, Spring and JUnit were used. Managed in Redmine with Scrum methodology.",
		epi2d:
			"I participated in the frontend development of the migration of “Clinical History” to React, as well as in the maintenance and addition of new functionalities. It was made with React, TypeScript, Material-UI, Axios and Redux. Managed through Jira with Scrum methodology.",
		epi3d:
			"Mobile project aimed at professionals in the health area in which I participated in frontend development from scratch, existing its web version and being able to reuse its backend. Development was done with React Native, TypeScript, Expo, Paper, Axios and Redux. Managed through Jira with Scrum methodology.",
		epi4d:
			"Mobile project intended for clients in which maintenance and development of new functionalities was provided. Used React Native, JavaScript, TypeScript, Expo, Paper, Axios and Redux. Managed through Jira with Scrum methodology.",
		epi5d:
			"Self-managed research project aimed at health professionals in which I participated in frontend and backend development. It was made with Java, Spring, SQL Server, Svelte, HTML and CSS. Managed through Jira with Scrum methodology.",
		epi6d:
			"Project aimed at the administration and management of company information. Development from scratch where I participated in the frontend, in making style decisions in Figma and I was in charge of planning, managing and distributing tasks. It was made with React, TypeScript, Material-UI, Axios and Redux. Managed through Jira with Scrum methodology.",
		gyf1d:
			"Mobile application available on Android and IOS for clients to carry out banking operations. I joined the team in a second phase where I participated in frontend development adding new functionalities and making improvements to the code. I also carried out scratch developments, improvements and standardization of interface styles in Figma. It was made with React Native, Expo, Redux, Axios, TypeScript, Firebase and is available on both Google Play and the App Store. Managed through Jira with Scrum methodology.",
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
		descPuesto2P2: "Approximately 1 year in a shift manager position, in charge of 5 people.",
		descPuesto3: "Technical support in a call center on the 3 services provided by the Telecentro company (Internet, Telephony, TV).",
		Abril: "April",
		Octubre: "October",
		Noviembre: "November ",
		Enero: "January",
		Educacion: "Education",
		EnCurso: "In progress",
		Tec: "University Technician in Web Development",
		Lic: "Bachelor in technology management",
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
		epi6p: "Back Office",
		gyf1p: "Home Banking",

		epi1d:
			"Proyecto web destinado a profesionales del área de salud, en donde realicé tareas de mantenimiento, desarrollo de nuevas funcionalidades y testeo en backend y frontend. Se utilizó Angular 4, HTML, CSS, JavaScript, Bootstrap, MySQL, Java, Spring y JUnit. Gestionado en Redmine con metodología Scrum.",
		epi2d:
			"Participé en el desarrollo frontend de la migración de “Historia clínica” a React, como también en el mantenimiento y el agregado de nuevas funcionalidades. Se realizó con React, TypeScript, Material-UI, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
		epi3d:
			"Proyecto mobile destinado a profesionales del área de salud en el cual participé en el desarrollo frontend desde cero, existiendo su versión web y pudiendo reutilizar su backend. El desarrollo se realizó con React Native, TypeScript, Expo, Paper, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
		epi4d:
			"Proyecto mobile destinado a clientes en el cual se le brindó mantenimiento y desarrollo de nuevas funcionalidades. Se utilizó React Native, JavaScript, TypeScript, Expo, Paper, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
		epi5d:
			"Proyecto de investigación autogestionado destinado a profesionales del área de salud en el cual participé en el desarrollo frontend y backend. Se realizó con Java, Spring, SQL Server, Svelte, HTML y CSS. Gestionado mediante Jira con metodología Scrum.",
		epi6d:
			"Proyecto destinado a la administración y gestión de información de la empresa. Desarrollo de cero en donde participé en el frontend, en la toma de decisiones de estilos en Figma y estuve encargado de planificar, gestionar y distribuir las tareas. Se realizó con React, TypeScript, Material-UI, Axios y Redux. Gestionado mediante Jira con metodología Scrum.",
		gyf1d:
			"Aplicación mobile disponible en Android e IOS destinada a clientes para poder realizar operaciones bancarias. Me incorporé al equipo en una segunda fase en donde participé en el desarrollo frontend agregando funcionalidades nuevas y realizando mejoras en el código. También realicé desarrollos de cero, mejoras y estandarización de estilos de interfaces en Figma. Se realizó con React Native, Expo, Redux, Axios, TypeScript, Firebase y está disponible tanto en Google Play como en App Store. Gestionado mediante Jira con metodología Scrum.",
		mmda: "Proyecto universitario con la finalidad de desarrollar un Ecommerce.",
		ayuda: "Proyecto universitario con la finalidad de desarrollar una red de donaciones.",
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
		descPuesto2P2: "Aproximadamente un 1 año en puesto de encargado de turno, a cargo de 5 personas.",
		descPuesto3: "Soporte técnico en un call center sobre los 3 servicios que brinda la empresa Telecentro (Internet, Telefonía, TV).",
		Abril: "Abril",
		Octubre: "Octubre",
		Noviembre: "Noviembre",
		Enero: "Enero",
		Educacion: "Educación",
		EnCurso: "En Curso",
		Tec: "Técnico Universitario en Desarrollo Web",
		Lic: "Licenciado en gestión de tegnología",
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
