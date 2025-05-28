var formulario = document.querySelector("#form") 

formulario.onsubmit = function(e) {
  e.preventDefault();//.prevente no estaba bien escrito
  
  var n = formulario.elements[0];//Agregue ;
  var edadInput = formulario.elements[1]; //Modifique el nombre de e por edadInput y agregue ;
  var na = formulario.elements[2]; //Agregue ;

  var nombre = n.value; //Tambien agregue ;
  var edad = edadInput.value; //Modifique e por edadInput y agregue;

  var i = na.selectedIndex; //Agregue ;
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error"); //Agregue ;
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error")//Corregui "e" por "edadInput"
  }

if (nombre.length > 0 && (edad >= 18 && edad <= 120) ) { //Modifique los operadores logicos en lugar de ">18" ahora es ">=18" y los mismo con "< 120" por "<=120"
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; //Agregue ";"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"; //Agregue ";"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"; //Agregue ";"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"; //Agregue ";"
  }

var lista = document.getElementById("lista-de-invitados");//Agregue ";"

var elementoLista = document.createElement("div");//Agregue ";"
elementoLista.classList.add("elemento-lista"); //Agregue ";" //Modifique ".adde" por ".add"
lista.appendChild(elementoLista);//Agregue ";"

/* var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio); *//* Todo esto se puede eliminar porque abajo se repite lo mismo */

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");//Agregue ";"
var inputNombre = document.createElement("input");//Agregue ";"
var espacio = document.createElement("br");//Agregue ";"
spanNombre.textContent = descripcion + ": ";//Agregue ";"
inputNombre.value = valor;//Agregue ";"
elementoLista.appendChild(spanNombre);//Agregue ";"
elementoLista.appendChild(inputNombre);//Agregue ";"
elementoLista.appendChild(espacio);//Agregue ";"
}

crearElemento("Nombre", nombre);//Agregue ";"
crearElemento("Edad", edad);//Agregue ";"
crearElemento("Nacionalidad", nacionalidad);//Agregue ";"


var botonBorrar = document.createElement("button");//Agregue ";"
botonBorrar.textContent = "Eliminar invitado";//Agregue ";"
botonBorrar.id = "boton-borrar";//Agregue ";"
var corteLinea = document.createElement("br");//Agregue ";"
elementoLista.appendChild(corteLinea);//Agregue ";"
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}