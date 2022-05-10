/*
a - ai
e - enter
i - imes
o - ober
u - ufat
 */


// funcion para boton encriptar
function encriptar(){
	var texto = document.getElementById("inputText").value.toLowerCase(); // toLowerCase() - transforma valores a min
	var txtCifrado = texto.replace(/e/igm,"enter");
	var txtCifrado = txtCifrado.replace(/o/igm,"ober");
	var txtCifrado = txtCifrado.replace(/i/igm,"imes");
	var txtCifrado = txtCifrado.replace(/a/igm,"ai");
	var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

	// habilitar o desabilitar en la pagina derecha
	document.getElementById("imgDer").style.display = "none";
	document.getElementById("texto1").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("btn-copiar").style.display = "show";
	document.getElementById("btn-copiar").style.display = "inherit";

}


// funcion para boton desencriptar
function desencriptar(){
	var texto = document.getElementById("inputText").value.toLowerCase();
	var txtCifrado = texto.replace(/enter/igm,"e");
	var txtCifrado = txtCifrado.replace(/ober/igm,"o");
	var txtCifrado = txtCifrado.replace(/imes/igm,"i");
	var txtCifrado = txtCifrado.replace(/ai/igm,"a");
	var txtCifrado = txtCifrado.replace(/ufat/igm,"u");


	document.getElementById("imgDer").style.display = "none";
	document.getElementById("texto1").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("btn-copiar").style.display = "show";
	document.getElementById("btn-copiar").style.display = "inherit"; 

}

// funcion para boton copiar
function copiar(){
	var contenido = document.querySelector("#texto2");
	contenido.select();
	document.execCommand("copy");
	
}