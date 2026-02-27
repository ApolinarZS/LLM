// Función para pedir números (Nos ahorra escribir parseInt y prompt mil veces)
function dameUnNumero() {
  return parseInt(prompt("Dame un número: "));
  // (Podrías hacerlo en una sola línea: return parseInt(prompt("...")); )
}

// Función que evalúa la condición y devuelve un Booleano (true o false)
function esMayor(numero_1, numero_2) {
  return numero_1 > numero_2;
}


// Pedimos los dos primeros números antes de entrar al bucle
let num1 = dameUnNumero();
let num2 = dameUnNumero();

// Mientras num1 sea mayor que num2, entramos en el bucle
while (esMayor(num1, num2)) {
  console.log("El primero es mayor");

  // Volvemos a pedir los números para que el bucle no sea infinito
  num1 = dameUnNumero();
  num2 = dameUnNumero();
}

// Si salimos del bucle, significa que la condición esMayor dio 'false'
console.log("El segundo es mayor. FIN de la ejecución");