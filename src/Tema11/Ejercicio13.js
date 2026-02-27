// Empezamos con un string vacío que irá acumulando
let tablero = "";
// Buena práctica: guardamos el tamaño en una variable por si mañana nos piden un tablero de 100x100
let tamano = 8;

// Bucle externo controla las FILAS
for (let i = 0; i < tamano; i++) {

  // Bucle interno: controla las COLUMNAS (j) dentro de cada fila
  for (let j = 0; j < tamano; j++) {

    // LA MAGIA: Sumamos la posición de la fila y la columna
    if ((i + j) % 2 === 0) {
      tablero += " "; // Si la suma es par, ponemos un espacio
    } else {
      tablero += "#"; // Si la suma es impar, ponemos una almohadilla
    }
  }

  // Cuando terminamos de rellenar una fila entera, metemos un salto de línea
  tablero += "\n";
}

// Imprimimos el resultado final de golpe
console.log(tablero);