function repetimeLaPalabrita(cantidad,cadena) {
  if (cadena !== undefined) {
    for (let i=0;i < cantidad; i++) {
      console.log(cadena);
    }
  }
  else {console.log(1/cantidad)}
}

repetimeLaPalabrita(4,"Messi")