function contarCaracteres(texto, caracterABuscar) {
  let contador = 0;

  // Recorremos el texto letra por letra
  for (let i = 0; i < texto.length; i++) {
    // Si la letra actual coincide con la que buscamos, sumamos 1 al contador
    if (texto[i] === caracterABuscar) {
      contador++;
    }
  }

  // Al final del bucle, devolvemos el resultado total
  return contador;
}

// Ahora reescribimos contarFs para que sea una simple "atajo" a la otra función
function contarFs(texto) {
  return contarCaracteres(texto, "F");
}

console.log("Prueba contarFs ('FaroFalso'):");
console.log(contarFs("FaroFalso")); // Debería mostrar 2

console.log("Prueba contarCaracteres ('supercalifragilistico', 'i'):");
console.log(contarCaracteres("supercalifragilistico", "i")); // Debería mostrar 4