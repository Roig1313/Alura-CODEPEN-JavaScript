//Usar ARRAY para guardar variables
var listaNombre = [];
var listaImagen = [];
var listaLink = [];
function agregarPelicula() {
  var nombrePelicula = document.getElementById("nombre").value;
  var imagenPelicula = document.getElementById("pelicula").value;
  var linkPelicula = document.getElementById("link").value;
  //Condicional para permitir solo imagenes tipo .jpg y .jpeg
  if (imagenPelicula.endsWith("jpg") || imagenPelicula.endsWith("jpeg")) {
    document.getElementById("mensajeError").innerHTML = "";
    listaNombre.push(nombrePelicula);
    listaImagen.push(imagenPelicula);
    listaLink.push(linkPelicula);
    limpiarInputs();
    actualizaPeliculas();
  } else {
    document.getElementById("mensajeError").innerHTML =
      "El enlace no cumple con el formato .jpg o .jpeg, favor revisar el enlace";
    limpiarInputs();
  }
}
function actualizaPeliculas() {
  var elementosPeliculas = document.getElementById("listaPeliculas");
  //Limpia primero donde se va agregar la imaginación de las pelis
  elementosPeliculas.innerHTML = "";
  for (var i = 0; i < listaImagen.length; i++) {
    elementosPeliculas.innerHTML += `
    <div>
      <img src="${listaImagen[i]}">
      <p>${listaNombre[i]}</p>
      <button onclick="eliminarPelicula(${i})">Eliminar</button>
    </div>
      `;
  }
}

function limpiarInputs() {
  document.getElementById("nombre").value = "";
  document.getElementById("pelicula").value = "";
  document.getElementById("link").value = "";
}
function eliminarPelicula(i) {
  listaImagen.splice(i, 1);
  listaNombre.splice(i, 1);
  listaLink.splice(i, 1);
  actualizaPeliculas();
}