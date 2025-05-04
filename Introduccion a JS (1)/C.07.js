function truncate(cadena,longitud) {
  if (cadena.length >longitud) {
    cadenaTruncada = cadena.slice(0, longitud - 3) + "...";
    console.log(cadenaTruncada);
  }
  else {
    console.log(cadena);
  }
}

truncate("Hola, esto es una prueba", 10)