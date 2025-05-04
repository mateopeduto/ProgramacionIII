function esPalindromo(cadena) {
     const limpia = cadena
     .toLowerCase()
     .normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "")
     .replace(/[^a-z]/g, "");
     const longitud = limpia.length;
     let cadenaAlReves = "";
   
     for (let i = longitud - 1; i >= 0; i--) {
       cadenaAlReves += limpia[i];
     }
   
     if (limpia === cadenaAlReves.toLowerCase()) {
       console.log("La cadena es Palíndromo.");
     } else {
       console.log("La cadena no es Palíndromo.");
     }
   }
   

esPalindromo("La ruta nos aporto otro paso natural")