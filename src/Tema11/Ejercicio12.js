for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Si falla lo anterior, miramos si es divisible solo por 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Si falla, miramos si es divisible solo por 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Si no es múltiplo de ninguno, imprimimos el número
  else {
    console.log(i);
  }
}