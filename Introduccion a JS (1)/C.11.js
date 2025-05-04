function mayusoMinus(cadena) {
     if (/[A-Z]/.test(cadena) == true && /[a-z]/.test(cadena) == true) {
          console.log(`La cadena "${cadena}" contiene caracteres en Mayuscula y en Minuscula.`)
     }
     else if (/[A-Z]/.test(cadena) == false && /[a-z]/.test(cadena) == true) {
          console.log(`La cadena "${cadena}" contiene caracteres unicamente en Minuscula.`)
     } else {console.log(`La cadena "${cadena}" contiene caracteres unicamente en Mayuscula.`)}
}

mayusoMinus("Hola, ¿Cómo estas?")
