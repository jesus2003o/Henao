window.onscroll = function(){myFunction()};

var secciones = document.getElementsByTagName("section");
var Fechas = document.getElementByClassName("Fecha");

function myFuction(){
	if(window.pageY0ffset >= secciones[0].offsetTop){

	}

	if(window.pageY0ffset >= secciones[1].offsetTop - 100){
		eliminarClase();
		Fechas[0].classList.add("seleccionado");
	}
	if(window.pageY0ffset >= secciones[2].offsetTop - 100){
		eliminarClase();
		Fechas[1].classList.add("seleccionado");
	}
	if(window.pageY0ffset >= secciones[3].offsetTop - 100){
		eliminarClase();
		Fechas[2].classList.add("seleccionado");
	}
	if(window.pageY0ffset >= secciones[4].offsetTop - 100){
		eliminarClase();
		Fechas[3].classList.add("seleccionado");
	}
	if(window.pageY0ffset >= secciones[5].offsetTop - 100){
		eliminarClase();
		Fechas[4].classList.add("seleccionado");
	}
}

function eliminarClase(){
	for(i=0; i < Fechas.length; i++){
		Fechas[i].classList.remove("seleccionado");
	}
}