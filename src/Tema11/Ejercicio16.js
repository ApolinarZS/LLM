// Guardamos el array de letras que nos da el enunciado (usamos const porque no va a cambiar)
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Funciones

// Función para pedir y validar el número del DNI
function pedirNumeroDNI() {
  let numero = parseInt(prompt("Introduce tu número de DNI (sin la letra):"));

  // Comprobamos si es inválido. Si lo es, entramos al bucle para volver a pedirlo.
  // Añado isNaN por si el usuario le da a aceptar sin escribir nada
  while (isNaN(numero) || numero < 0 || numero > 99999999) {
    alert("Número inválido. Debe estar entre 0 y 99999999.");
    numero = parseInt(prompt("Vuelve a introducir tu número de DNI:"));
  }

  return numero;
}

// Función para calcular la letra correcta
function calcularLetra(numero) {
  // Calculamos el resto de dividir entre 23
  let resto = numero % 23;
  return letras[resto];
}


//Main

// Almacenamos el número y la letra indicados por el usuario
let numeroUsuario = pedirNumeroDNI();
let letraUsuario = prompt("Introduce la letra de tu DNI:").toUpperCase();

// Calculamos cuál DEBERÍA ser la letra
let letraCorrecta = calcularLetra(numeroUsuario);

// Comparamos y mostramos el resultado
if (letraUsuario === letraCorrecta) {
  console.log("¡El DNI es CORRECTO! La letra coincide perfectamente.");
} else {
  console.log("DNI INCORRECTO. La letra que corresponde a ese número es la " + letraCorrecta + ", pero has puesto la " + letraUsuario + ".");
}