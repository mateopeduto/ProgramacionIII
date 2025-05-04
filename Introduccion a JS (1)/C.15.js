function sumarDigitos(numero) {
  return numero
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

function factorizarYSumarDigitos(numero) {
  let n = numero;
  let factor = 2;
  let suma = 0;

  while (n > 1) {
    while (n % factor === 0) {
      suma += sumarDigitos(factor);
      n = n / factor;
    }
    factor++;
  }

  return suma;
}

function esNumeroDeSmith(numero) {

  if (esPrimo(numero)) {
    console.log(`${numero} es primo, por lo tanto no es un número de Smith.`);
    return false;
  }

  const sumaOriginal = sumarDigitos(numero);
  const sumaFactores = factorizarYSumarDigitos(numero);

  const resultado = sumaOriginal === sumaFactores;
  console.log(`${numero} ${resultado ? "es" : "no es"} un número de Smith.`);
  return resultado;
}

function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

esNumeroDeSmith(378)