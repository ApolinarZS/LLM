//Funciones
//saludamos
function saludar(nombre) {
  console.log("Bienvenid@ " + nombre + ".");
}
//confirmamos si es menor de edad, adulto o jubilado
function mayoriaEdad(edad) {
  if (isNaN(edad) || edad < 0) {
    console.log("Error en la edad.");
  } else if (edad < 18) {
    console.log("Tienes " + edad + " años, eres menor de edad.");
  } else if (edad <= 65) {
    console.log("Tienes " + edad + " años, eres adult@.");
  } else {
    console.log("Tienes " + edad + " años, estás jubilad@.");
  }
}
//calificamos la nota
function calificacion(nota) {
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Error en la nota.");
  } else if (nota < 3) {
    console.log("Has sacado un Insuficiente.");
  } else if (nota < 5) {
    console.log("Has sacado un Regular.");
  } else if (nota < 6) {
    console.log("Has sacado un Suficiente.");
  } else if (nota < 7) {
    console.log("Has sacado un Bien.");
  } else if (nota < 9) {
    console.log("Has sacado un Muy bien.");
  } else {
    console.log("Has sacado un Excelente.");
  }
}
// Pedimos todos los datos al usuario usando prompt
let nombreUsuario = prompt("Introduce tu nombre:");
let edadUsuario = parseInt(prompt("Introduce tu edad:"));
let notaUsuario = parseFloat(prompt("Introduce tu nota:"));

// Llamamos a las funciones pasándoles las variables que acabamos de crear
saludar(nombreUsuario);
mayoriaEdad(edadUsuario);
calificacion(notaUsuario);