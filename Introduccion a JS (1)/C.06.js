function mostrarNombreApellido(nombre,apellido) {
  let nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  let apellidoFormateado = apellido.toUpperCase();
  console.log(`${apellidoFormateado}, ${nombreFormateado}`)
}

mostrarNombreApellido("mateo","pEDUTO")