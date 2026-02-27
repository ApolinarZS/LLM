// Definimos la función que evalúa y devuelve el texto
function comprobarParOImpar(numero) {
  // Sacamos el resto del número
  if (numero % 2 === 0) {
    return "El número " + numero + " es par.";
  } else {
    return "El número " + numero + " es impar.";
  }
}

// Pedimos el dato al usuario
let numeroUsuario = parseInt(prompt("Introduce un número entero:"));

// Llamamos a la función y GUARDAMOS lo que nos devuelve en una variable
let textoResultado = comprobarParOImpar(numeroUsuario);

// Mostramos por pantalla el resultado devuelto
alert(textoResultado);
