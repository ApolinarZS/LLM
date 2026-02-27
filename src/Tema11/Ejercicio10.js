// Hacemos un bucle del 1 al 7 incluyéndolo (<=)
for (let i = 1; i <= 7; i++) {

  // Comprobamos si la fila actual (i) es par
  if (i % 2 === 0) {
    // Si es par (2, 4, 6), repetimos el símbolo "+"
    console.log("+".repeat(i));
  } else {
    // Si es impar (1, 3, 5, 7), repetimos el símbolo "#"
    console.log("#".repeat(i));
  }
}