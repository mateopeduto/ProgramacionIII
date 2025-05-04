let estilos = ["Jazz", "Blues"];
console.log(estilos);
estilos.push("Rock-n-Roll")
console.log(estilos);
function reemplazarMedio(estilo,estilos) {
     if (estilos.length/2 !== 0) {
     valorMedio = estilos.length/2 - 0.5
     estilos[valorMedio] = estilo
     console.log(estilos);
     }
     else {console.log("El array es PAR. No se puede modificar su valor medio.")}
}
reemplazarMedio("Heavy Metal",estilos);
estilos.shift()
console.log(estilos)
estilos.unshift("Rap","Reggae")
console.log(estilos)

