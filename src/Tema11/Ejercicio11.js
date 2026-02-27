// Hacemos un bucle del 1 al 100
for (let i = 1; i <= 100; i++) {

  // Si es divisible por 3 (el resto de dividir entre 3 es 0)
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Si NO fue divisible por 3, pero SÍ es divisible por 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Si no es divisible ni por 3 ni por 5, imprimimos el número normal
  else {
    console.log(i);
  }
}