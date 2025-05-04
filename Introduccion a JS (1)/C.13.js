function obtenerSumaMaxima(arr) {
  let maxSuma = 0;
  let sumaActual = 0;

  for (let i = 0; i < arr.length; i++) {
    sumaActual += arr[i];
    if (sumaActual > maxSuma) {
      maxSuma = sumaActual;
    }
    if (sumaActual < 0) {
      sumaActual = 0;
    }
  }

  console.log(maxSuma);
}

obtenerSumaMaxima([100, -9, 2, -3, 5])