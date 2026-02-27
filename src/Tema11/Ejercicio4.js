// Usamos parseFloat en lugar de parseInt porque las notas suelen tener decimales (ej. 4.5)
let nota = parseFloat(prompt("Introduce una nota numérica entre 0 y 10:"));

// Comprobamos primero si el usuario ha metido algo que no es válido
if (nota < 0 || nota > 10 || isNaN(nota)) {
  console.log("Error: La nota debe ser un número válido entre 0 y 10.");
}
// Empezamos a evaluar los rangos de abajo hacia arriba
else if (nota < 3) {
  console.log("Insuficiente");
}
else if (nota < 5) {
  console.log("Regular");
}
else if (nota < 6) {
  console.log("Suficiente");
}
else if (nota < 7) {
  console.log("Bien");
}
else if (nota < 9) {
  console.log("Muy bien");
}
else {
  // Si llega aquí, sabemos que es 9 o mayor (y máximo 10, por la primera comprobación)
  console.log("Excelente");
}