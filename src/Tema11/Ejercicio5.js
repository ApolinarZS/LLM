// Pedimos la edad y la convertimos a un número entero
let edad = parseInt(prompt("Introduce tu edad:"));

// Comprobamos si es menor de edad
if (edad < 18) {
  console.log("Eres menor de edad.");
} else if (edad <= 65) { // Comprobamos si es adulto (entre 18 y 65)
  console.log("Eres adult@.");
}else { //  Si no es menor de 18 ni menor o igual a 65, por descarte es mayor de 65
  console.log("Eres jubilad@.");
}
