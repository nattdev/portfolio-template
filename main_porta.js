/****Typed.js****/

var textChange = {
    stringsElement: ".strings", // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  };
  
  var typed = new Typed('.typed', textChange);

/****Load Bar & Cards****/

 let load = document.getElementById("load");
 let right_card1 = document.querySelector(".right_card");
 let right_card2 = document.querySelector(".right_card.second");
 let left_card1 = document.querySelector(".left_card");
 let left_card2 = document.querySelector(".left_card.second");

 let text_container = document.querySelector(".text_container");
/*
 let loadBar = function(){
	let scrollTop = document.documentElement.scrollTop;
	let scrollHeight = document.documentElement.scrollHeight;
	let clientHeight = document.documentElement.clientHeight;

	let windowHeight = scrollHeight - clientHeight;
	let porcentage = (scrollTop / windowHeight * 100) + 8 ;

	if(porcentage >= 100){
		text_container.classList.add("active_text");
		removeEventListener("scroll", loadBar)
	} else if(porcentage > 80){
		left_card2.classList.add("card_active");
	} else if(porcentage > 58){
		right_card2.classList.add("card_active");
	} else if(porcentage > 38){
		left_card1.classList.add("card_active");
	} else if(porcentage > 19){
		right_card1.classList.add("card_active");
	}
	load.style.height = porcentage + "%";
 }

window.addEventListener("scroll", loadBar);
*/
let loadBar = function(){
	let scrollTop = window.scrollY;
	let scrollHeight = document.documentElement.scrollHeight;
	let clientHeight = document.documentElement.clientHeight;

	let windowHeight = scrollHeight - clientHeight;
	let porcentage = (scrollTop / windowHeight * 100) + 8 ;

	if(porcentage >= 100){
		text_container.classList.add("active_text");
		removeEventListener("scroll", loadBar)
	} else if(porcentage > 80){
		left_card2.classList.add("card_active");
	} else if(porcentage > 58){
		right_card2.classList.add("card_active");
	} else if(porcentage > 38){
		left_card1.classList.add("card_active");
	} else if(porcentage > 19){
		right_card1.classList.add("card_active");
	}
	load.style.height = porcentage + "%";
 }

window.addEventListener("scroll", loadBar);

window.addEventListener("touchstart", loadBar) //Opcional
